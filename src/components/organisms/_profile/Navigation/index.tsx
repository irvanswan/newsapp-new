"use client"

import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Text = dynamic(() => import('@/components/atoms/Text/Text'));

interface ProfileNavigationProps {
  email: string;
  fullname: string;
  aboutMe?: string;
  avatar?: string;
  isVerified?: boolean;
}

const ProfileNavigation = ({
  email,
  fullname,
  aboutMe,
  avatar,
  isVerified,
}: ProfileNavigationProps) => {

  const pathname = usePathname();
  const slug = pathname?.split('/').pop();

  return (
    <div className="w-full flex flex-col gap-4 text-slate-700 dark:text-white">
      <div className="w-full flex flex-col gap-6 p-8">
        <Text
          value="profile"
          className=" capitalize font-bold text-xl"
          formatted
        />

        <div className="rounded-2xl flex flex-col shadow-md gap-4 pt-4 pb-12 relative">
          <div className="flex items-center gap-2 px-4">
            <div className="w-24 aspect-square rounded-xl border border-Blue p-2">
              <Image
                src={avatar || '/vercel.svg'}
                alt="Avatar"
                width={96}
                height={96}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Text
                value={email}
                className="text-slate-700 dark:text-white font-thin"
              />
              <Text
                value={fullname || '-'}
                className="text-slate-700 dark:text-white font-bold"
              />
              <Text
                value={isVerified ? "Verified" : "Not Verified"}
                className="text-slate-700 dark:text-white font-base text-Blue"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 px-4">
            <Text
              value="About me"
              className="font-bold"
            />
            <Text
              value={aboutMe || "Madison Blackstone is a director of publisher, with experience managing global teams."}
              className="text-justify"
            />
          </div>
          <div className="flex bg-Blue text-white items-stretch absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3/4 z-20 rounded-xl overflow-hidden">
            <div className="flex flex-1 hover:bg-blue-500 transition-all delay-500 cursor-pointer flex-col items-center justify-center text-center py-3">
              <Text
                value="52"
                className="font-bold"
              />
              <Text
                value="post"
                className="text-sm opacity-80"
              />
            </div>
            <div className="flex flex-1 hover:bg-blue-500 transition-all delay-500 cursor-pointer flex-col items-center justify-center text-center py-3 border-x border-white/20">
              <Text
                value="52"
                className="font-bold"
              />
              <Text
                value="followers"
                className="text-sm opacity-80"
              />
            </div>
            <div className="flex flex-1 hover:bg-blue-500 transition-all delay-500 cursor-pointer flex-col items-center justify-center text-center py-3">
              <Text
                value="52"
                className="font-bold"
              />
              <Text
                value="following"
                className="text-sm opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <Link href="/profile/edit" className={`w-full ${slug === 'edit' ? 'bg-blue-100 text-blue-500' : ''} hover:bg-blue-100 transition-all delay-500 ease-in-out flex items-center justify-between px-8 py-6`}>
          <Text
            value="Edit Profile"
            className="font-bold dark:text-white"
          />
          <ChevronRight />
        </Link>
        <Link href="/profile/saved" className={`w-full ${slug === 'saved' ? 'bg-blue-100 text-blue-500' : ''} hover:bg-blue-100 transition-all delay-500 ease-in-out flex items-center justify-between px-8 py-6`}>
          <Text
            value="Saved Post"
            className="font-bold dark:text-white"
          />
          <ChevronRight />
        </Link>
        <Link href="/profile/faq" className={`w-full ${slug === 'faq' ? 'bg-blue-100 text-blue-500' : ''} hover:bg-blue-100 transition-all delay-500 ease-in-out flex items-center justify-between px-8 py-6`}>
          <Text
            value="FAQ"
            className="font-bold dark:text-white"
          />
          <ChevronRight />
        </Link>
        <Link href="/profile/help" className={`w-full ${slug === 'help' ? 'bg-blue-100 text-blue-500' : ''} hover:bg-blue-100 transition-all delay-500 ease-in-out flex items-center justify-between px-8 py-6`}>
          <Text
            value="Help"
            className="font-bold dark:text-white"
          />
          <ChevronRight />
        </Link>
      </div>
    </div>
  )
}

export default ProfileNavigation;