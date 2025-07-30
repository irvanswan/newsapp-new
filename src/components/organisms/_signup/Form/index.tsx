'use client';
import dynamic from 'next/dynamic';
import Styles from '../signup.module.scss';
import Link from 'next/link';
import Fields from '@/components/molecules/Fields';
import { useSignup } from '../SignupContex';
import Form from '@/components/molecules/Form';
const Button = dynamic(() => import('@/components/molecules/Button/Button'));
const Text = dynamic(() => import('@/components/atoms/Text/Text'), {
	ssr: true,
});
const Icon = dynamic(() => import('@/components/atoms/Icon'), {
	ssr: true,
})

const SigninForm = () => {
	const { handlerSubmit, methods } = useSignup();
	return (
		<section className={`${Styles.Form_Container} w-full md:w-1/2 md:px-28 p-12`}>
			<Form onSubmit={handlerSubmit} methods={methods} className={`${Styles.Form_Section} gap-4`}>
				<div className='flex items-center gap-4'>
					<Link
						href="/login"
					>
						<Icon
							color='#0D253C'
							path='/assets/icons/chevron.svg'
						/>
					</Link>
					<Text
						value='back_to_login'
						className='text-Dark text-h4 capitalize'
						formatted
					/>
				</div>
				<Text
					type='h1'
					value='title'
					section='sign-up'
					formatted
					className='capitalize text-5xl font-bold text-Dark pb-3.5'
				/>
				<Fields
				  methods={methods}
					isRequired
					variant='Primary'
					label='email_address'
					placeholder='email_address'
					type='email'
					id='email'
					name='email'
					formatted
					section='general'
				/>
				<Fields
				  methods={methods}
					isRequired
					variant='Primary'
					label='password'
					type='password'
					placeholder='password'
					id='password'
					name='password'
					formatted
					section='general'
				/>
				<Fields
				  methods={methods}
					isRequired
					name='confirm_password'
					variant='Primary'
					label='confirm_password'
					type='password'
					placeholder='confirm_password'
					id='confirm-password'
					formatted
					section='general'
				/>
				<div className='w-full flex flex-col gap-6'>
					<Button
						text='submit'
						section='general'
						variant='Primary'
						type='submit'
						formatted
						className='!py-6 !text-white !capitalize !font-bold !mt-3.5'
					/>
				</div>
			</Form>
		</section>
	)
}

export default SigninForm;