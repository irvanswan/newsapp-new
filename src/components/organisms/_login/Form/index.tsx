import dynamic from 'next/dynamic';
import Styles from '../login.module.scss';

const Button = dynamic(() => import('@/components/molecules/Button/Button'));
const Text = dynamic(() => import('@/components/atoms/Text/Text'), {
	ssr: true,
});

const Fields = dynamic(() => import('@/components/molecules/Fields'), {
	ssr: true
})

const LoginForm = () => {
	return (
		<section className={`${Styles.Form_Container} w-full md:w-1/2 md:px-28 p-12`}>
			<form className={`${Styles.Form_Section} gap-4`}>
				<Text
					type='h1'
					value='login'
					section='login'
					formatted
					className='capitalize text-5xl font-bold text-Dark pb-3.5'
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
				<div className='w-full flex flex-col gap-6'>
					<Button
						text='login'
						section='login'
						variant='Primary'
						type='submit'
						formatted
						className='!py-6 !text-white !capitalize !font-bold !mt-3.5'
					/>
					<div className='flex w-full items-center gap-3'>
						<div className='border-b !border-Blue w-full' />
						<Text
							value='dont_have_account'
							section='login'
							formatted
							className='uppercase text-Blue whitespace-nowrap text-small-1-bold'
						/>
						<div className='border-b !border-Blue w-full' />
					</div>
					<Button
						text='sign_up'
						section='login'
						variant='Dark'
						type='button'
						formatted
						className='!py-6 !text-white !capitalize !font-bold'
					/>
				</div>
			</form>
		</section>
	)
}

export default LoginForm;