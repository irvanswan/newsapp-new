import dynamic from 'next/dynamic';
import Styles from '@/components/organisms/_signup/signup.module.scss';
import { SignupProvider } from '@/components/organisms/_signup/SignupContex';

const Banner = dynamic(() => import('@/components/organisms/_signup/Banner'));
const Form = dynamic(() => import('@/components/organisms/_signup/Form'));

export const metadata = {
	title: 'Login',
	description: 'This Page Login'
}

export default function Signup() {
	return (
		<SignupProvider>
			<div className={`${Styles.Signup} flex-col md:flex-row`}>
				<Banner />
				<Form />
			</div>
		</SignupProvider>
	)
}