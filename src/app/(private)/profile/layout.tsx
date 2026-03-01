import { getSession } from '@/lib/session';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';

const SectionNav = dynamic(() => import('@/components/organisms/_profile/Navigation'));

export const metadata = {
  title: 'Profile',
  description: 'User profile information',
};

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session?.isLoggedIn || !session?.user) {
    redirect('/login');
  }
  
  return (
    <div className='w-full flex items-stretch pt-24'>
      <div className='w-[30%] h-full pb-24 border-r border-slate-200 dark:border-white'>
        <SectionNav 
          email={session.user.email}
          fullname={session.user.fullname}
          aboutMe={session.user.aboutMe}
          avatar={session.user.avatar}
          isVerified={session.user.isVerified}
        />
      </div>
      <div className='w-[70%] h-full'>
        {children}
      </div>
    </div>
  );
}
