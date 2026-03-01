'use client';

import Link from 'next/link';
import Text from '@/components/atoms/Text/Text';
import useSWR from 'swr';
import { useEffect, useState, useRef } from 'react';
import { BellIcon, CircleUser, LogOutIcon, Search } from 'lucide-react'
import Input from '@/components/atoms/Input/Input';

type SessionResponse = {
  isLoggedIn?: boolean;
  user?: { name?: string; email?: string };
};
const fetcher = (url: string) => fetch(url, { credentials: 'include' }).then(res => res.json());

const Navbar = () => {
  const { data, error, isLoading } = useSWR<SessionResponse>('/api/auth/session', fetcher, {
    revalidateOnFocus: false,
  });
  const [isShowingProfile, setIsShowingProfile] = useState<boolean>(false);
  const [isShowNotification, setIsShowNotification] = useState<boolean>(false);
  const [isShowNav, setIsShowNav] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');

  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsShowingProfile(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsShowNotification(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when screen reaches md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsShowNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loading = isLoading || (!data && !error);
  const isLoggedIn = !!data?.isLoggedIn;

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        window.location.href = '/';
      }
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <nav className={`w-full flex flex-col md:flex-row justify-between fixed top-0 z-50 transition-all duration-500 ease-in-out ${(isScrolled || isShowNav) ? 'bg-white dark:bg-slate-900 dark:border-slate-600 backdrop-blur-lg shadow-lg' : 'bg-transparent border-transparent shadow-none'}`}>
      <div className='flex items-center p-4  gap-10 w-full justify-between'>
        <Text
          type='h5'
          value='News Today'
          className={`capitalize text-h4-bold transition-colors duration-500 ${(isScrolled || isShowNav) ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}
        />
        <div onClick={() => setIsShowNav(!isShowNav)} className={`flex md:hidden flex-col rounded-2xl w-12 items-center justify-center aspect-square shadow-2xl gap-1 p-4`}>
          <div className='border-b-2 border-slate-800 dark:border-slate-200 w-full' />
          <div className='border-b-2 border-slate-800 dark:border-slate-200 w-full' />
          <div className='border-b-2 border-slate-800 dark:border-slate-200 w-full' />
        </div>
      </div>
      {/* Desktop */}
      <div className='hidden md:flex gap-8 px-4 whitespace-nowrap items-center text-xl text-slate-900 dark:text-slate-100'>
        <div className='flex items-stretch justify-stretch gap-4'>
          <Link href="/" className='w-fit capitalize text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors'>
            <Text type='span' value='home' formatted />
          </Link>
          <Link href="/" className='w-fit capitalize text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors'>
            <Text type='span' value='articles' formatted />
          </Link>
          <Link href="/" className='w-fit capitalize text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors'>
            <Text type='span' value='category' formatted />
          </Link>
          <Link href="/" className='w-fit capitalize text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors'>
            <Text type='span' value='about' formatted />
          </Link>
        </div>
        {loading ? (
          <div className='flex items-center gap-4 animate-pulse'>
            <div className='h-4 w-24 rounded bg-slate-200 dark:bg-slate-700' />
            <div className='h-10 w-24 rounded bg-slate-200 dark:bg-slate-700' />
          </div>
        ) : isLoggedIn ? (
          <div className='relative'>
            <div className='flex items-center gap-4 transition-colors'
            >
              <div className='flex w-56 gap-2 items-center px-2 py-1 rounded-xl border border-slate-300 dark:border-slate-600'>
                <Search className='w-4 h-4 text-slate-500 dark:text-slate-400' />
                <Input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className='placeholder:capitalize'
                  placeholder={'search'}
                  formatted
                />
              </div>
              <div ref={notificationRef} className='relative'>
                <BellIcon onClick={() => setIsShowNotification(!isShowNotification)} className="w-8 rounded-full aspect-square cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700  text-slate-700 dark:text-slate-300" />
                <div className='absolute top-0 right-2 rounded-full w-2 aspect-square bg-red-500' />
                <div className={`absolute top-10 right-0 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xl rounded-xl p-5 border border-slate-200 dark:border-slate-700 min-w-72 transition-all duration-300 ease-in-out ${isShowNotification ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <p className='text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 pb-3 border-b border-slate-200 dark:border-slate-600'>
                    Notifications
                  </p>
                  <div className='space-y-3 text-sm text-slate-600 dark:text-slate-400 max-h-64 overflow-y-auto'>
                    <div className='flex items-start gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg cursor-pointer'>
                      <div className='w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0' />
                      <div>
                        <p className='font-medium text-slate-700 dark:text-slate-300'>New article published</p>
                        <p className='text-xs text-slate-500 dark:text-slate-400'>2 hours ago</p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg cursor-pointer'>
                      <div className='w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0' />
                      <div>
                        <p className='font-medium text-slate-700 dark:text-slate-300'>Your post was liked</p>
                        <p className='text-xs text-slate-500 dark:text-slate-400'>5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div ref={profileRef} className='relative'>
                <CircleUser onClick={() => setIsShowingProfile(!isShowingProfile)} className="w-8 rounded-full cursor-pointer aspect-square hover:bg-slate-100 dark:hover:bg-slate-700  text-slate-700 dark:text-slate-300" />
                <div className={`absolute top-10 right-0 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-xl rounded-xl p-5 border border-slate-200 dark:border-slate-700 min-w-max transition-all duration-300 ease-in-out ${isShowingProfile ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <p className='text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 pb-3 border-b border-slate-200 dark:border-slate-600'>
                    Profile Information
                  </p>
                  <div className='space-y-2 text-sm border-b text-slate-600 dark:text-slate-400 pb-3'>
                    <p>Email: {data?.user?.email || '-'}</p>
                    <p>Name: {data?.user?.name || '-'}</p>
                  </div>
                  <div className='flex items-center gap-2 pt-3 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>
                    <LogOutIcon className='w-4 h-4' />
                    <div onClick={handleLogout} className='w-full text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors'>
                      <Text type='span' value='logout' formatted />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link href="/sign-up" className='w-fit text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors'>
              <Text type='span' value='sign_up' formatted />
            </Link>
            <Link href="/login" className='w-fit px-12 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 rounded-lg transition-colors'>
              <Text type='span' value='login' formatted />
            </Link>
          </>
        )}
      </div>
      {/* Mobile */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out w-full flex flex-col ${isShowNav ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} ${isScrolled ? 'bg-white dark:bg-slate-900' : 'bg-white/95 dark:bg-slate-900/95'}`}>
        <Link href="/" className='w-full py-4 px-6 capitalize text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors'>
          <Text type='span' value='home' formatted />
        </Link>
        <Link href="/" className='w-full py-4 px-6 capitalize text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors'>
          <Text type='span' value='articles' formatted />
        </Link>
        <Link href="/" className='w-full py-4 px-6 capitalize text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors'>
          <Text type='span' value='category' formatted />
        </Link>
        <Link href="/" className='w-full py-4 px-6 capitalize text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors'>
          <Text type='span' value='about' formatted />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;