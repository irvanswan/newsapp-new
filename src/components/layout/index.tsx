'use client'

import Styles from './layout.module.css';
import { useTheme } from '../providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';
interface LayoutI {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutI> = ({ children }) => {
	const { toggleTheme, isDark } = useTheme();
	return (
		<main className={Styles.Layout}>
			{children}
			 <div
          onClick={toggleTheme}
          className='fixed bottom-8 right-8 flex items-center cursor-pointer w-fit aspect-square gap-2 rounded-full border p-2 text-sm border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors'
        >
          {isDark ? <Sun className="w-8 aspect-square text-yellow-500" /> : <Moon className="w-8 aspect-square text-slate-700" />}
        </div>
		</main>
	)
}

export default Layout;