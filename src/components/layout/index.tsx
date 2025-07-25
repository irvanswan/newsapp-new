'use client'

import dynamic from "next/dynamic";
import { configLayout, configLayoutI } from "@/utils/layout.utils";
import { usePathname } from "next/navigation";

const Footer = dynamic(() => import('@/components/organisms/Footer/Footer'));

interface LayoutI {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutI> = ({ children }) => {
	const pathname = usePathname().split('/')[2];
	const config: configLayoutI = configLayout[pathname] || {withFooter: true, withNav: true}
	return (
		<main className='flex flex-col h-auto overflow-y-auto'>
			{children}
			{config.withFooter && <Footer />} 
		</main>
	)
}

export default Layout;