import Link from 'next/link';
import Styles from './Navbar.module.css';
import Text from '@/components/atoms/Text/Text';

const Navbar = () => {
  return (
    <nav className={`${Styles.Navbar} p-8 bg-white border-b !border-neutral-100`}>
      <div className='flex items-center gap-10 w-full justify-between'>
        <Text
          type='h3'
          value='News Today'
          className='text-Dark capitalize text-h3-bold'
        />
        <div className="flex md:hidden flex-col border-2 !border-neutral-50 rounded-2xl w-16 items-center justify-center aspect-square shadow-2xl gap-2 p-4">
          <div className='border-b-2 !border-Dark w-full'/>
          <div className='border-b-2 !border-Dark w-full'/>
          <div className='border-b-2 !border-Dark w-full'/>
        </div>
      </div>
      <div className='hidden md:flex gap-10 items-center text-xl'>
        <Link
          href="/sign-up"
          className='w-fit hover:text-Blue whitespace-nowrap transition-all ease-in-out delay-300'
        >
          <Text
            type='span'
            value='sign_up'
            formatted
          />
        </Link>
        <Link
          href="/login"
          className='w-fit px-12 bg-Blue text-white py-3'
        >
          <Text
            type='span'
            value='login'
            formatted
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;