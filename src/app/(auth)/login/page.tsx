import dynamic from 'next/dynamic';
import Styles from '@/components/organisms/_login/login.module.css';
import { LoginProvider } from '@/components/organisms/_login/LoginContext';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';

const Banner = dynamic(() => import('@/components/organisms/_login/Banner'));
const Form = dynamic(() => import('@/components/organisms/_login/Form'));

export const metadata = {
	title: 'Login',
	description: 'This Page Login'
}

export default async function Login() {
	const session = await getSession();

	if (session?.isLoggedIn) {
		redirect('/');
	}

	return (
		<LoginProvider>
			<div className={`${Styles.Login} flex-col md:flex-row`}>
				<Banner />
				<Form />
			</div>
		</LoginProvider>
	)
}