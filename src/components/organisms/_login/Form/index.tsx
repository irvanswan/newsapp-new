'use client'
import dynamic from 'next/dynamic';
import Styles from '@/components/organisms/_login/login.module.scss';
import Link from 'next/link';
import { useLogin } from '@/components/organisms/_login/LoginContext';
import Form from '@/components/molecules/Form';
import Fields from '@/components/molecules/Fields';

const Button = dynamic(() => import('@/components/molecules/Button/Button'));
const Text = dynamic(() => import('@/components/atoms/Text/Text'), {
  ssr: true,
});

const LoginForm = () => {
  const { handlerSubmit, methods } = useLogin();
  return (
    <section className={`${Styles.Form_Container} w-full md:w-1/2 md:px-28 p-12`}>
      <Form onSubmit={handlerSubmit} methods={methods} className={`${Styles.Form_Section} gap-4`}>
        <Text
          type='h1'
          value='title'
          section='login'
          formatted
          className='capitalize text-5xl font-bold text-Dark pb-3.5'
        />
        <Fields
          methods={methods}
          name="email"
          isRequired
          variant="Primary"
          label="email_address"
          placeholder="email_address"
          type="email"
          id="email"
          formatted
          section="general"
        />
        <Fields
          name='password'
          methods={methods}
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
            section='general'
            variant='Primary'
            type='submit'
            formatted
            className='!py-6 !text-white !capitalize !font-bold !mt-3.5'
          />
          <div className='flex w-full items-center gap-3'>
            <div className='border-b !border-Blue w-full' />
            <Text
              value='dont_have_account'
              section='general'
              formatted
              className='uppercase text-Blue whitespace-nowrap text-small-1-bold'
            />
            <div className='border-b !border-Blue w-full' />
          </div>
          <Link
            href="/sign-up"
            className='bg-Dark w-full capitalize text-white text-small-1-bold text-center py-6 rounded-2xl'
          >
            <Text
              value='sign_up'
              formatted
            />
          </Link>
        </div>
      </Form>
    </section>
  )
}

export default LoginForm;