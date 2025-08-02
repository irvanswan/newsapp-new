'use client'

import dynamic from "next/dynamic";
import { configLayout, configLayoutI } from "@/utils/layout.utils";
import { usePathname } from "next/navigation";
import Navbar from "../organisms/Navbar";

const Footer = dynamic(() => import('@/components/organisms/Footer/Footer'));

interface LayoutI {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutI> = ({ children }) => {
	const pathname = usePathname().split('/')[1];
	const config: configLayoutI = configLayout[pathname] || {withFooter: true, withNav: true}
	return (
		<main className='flex flex-col h-auto w-screen !p-0 !m-0'>
			{config.withNav && <Navbar />}
			{children}
			{config.withFooter && <Footer />} 
		</main>
	)
}

export default Layout;