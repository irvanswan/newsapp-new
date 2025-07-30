import dynamic from 'next/dynamic';
import Styles from '@/components/organisms/_login/login.module.scss';
import { LoginProvider } from '@/components/organisms/_login/LoginContext';

const Banner = dynamic(() => import('@/components/organisms/_login/Banner'));
const Form = dynamic(() => import('@/components/organisms/_login/Form'));

export const metadata = {
	title: 'Login',
	description: 'This Page Login'
}

export default function Login() {
	return (
		<LoginProvider>
			<div className={`${Styles.Login} flex-col md:flex-row`}>
				<Banner />
				<Form />
			</div>
		</LoginProvider>
	)
}