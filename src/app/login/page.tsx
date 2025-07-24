import Styles from './login.module.scss';
import dynamic from 'next/dynamic';
import loginUtils from './login.utils';

const Text = dynamic(() => import('@/components/atoms/Text/Text'), {
	ssr: true,
});

const Fields = dynamic(() => import('@/components/molecules/Fields'), {
	ssr: true
})

const Button = dynamic(() => import('@/components/molecules/Button/Button'));

const Footer = dynamic(() => import('@/components/organisms/Footer/Footer'));

export const metadata = {
	title: 'Login',
	description: 'This Page Login'
}

export default function Login() {
	return (
		<main className='flex flex-col h-auto overflow-y-auto'>
			<div className={Styles.Login}>
				<section
					className={`${Styles.Banner}`}
					style={{ backgroundImage: `url('/assets/images/banner_login.png')` }}
				/>
				<section className={`${Styles.Form_Container} px-28`}>
					<form className={`${Styles.Form_Section} gap-2`}>
						<Text
							type='h1'
							value='login'
							section='login'
							formatted
							className='capitalize text-5xl font-bold text-primary-400 pb-3.5'
						/>
						<Fields
							isRequired
							variant='Primary'
							label='email_address'
							placeholder='email_address'
							type='email'
							id='email'
							formatted
							section='general'
						/>
						<Fields
							isRequired
							variant='Primary'
							label='password'
							type='password'
							placeholder='password'
							id='email'
							formatted
							section='general'
						/>
						<Button
							text='login'
							section='login'
							variant='Primary'
							type='submit'
							formatted
							className='!py-6 !text-white !capitalize !font-bold !mt-3.5'
						/>
						<div className='flex flex-col w-full items-center'>
							<Text
								value='or_login_with'
								section='login'
								formatted
								className='uppercase'
							/>
						</div>
						<Button
							text='sign_up'
							section='login'
							variant='Secondary'
							type='button'
							formatted
							className='!py-6 !text-white !capitalize !font-bold !mt-3.5'
						/>
					</form>
				</section>
			</div>
			<Footer />
		</main>
	)
}