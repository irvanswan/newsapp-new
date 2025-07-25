import dynamic from 'next/dynamic';
import Styles from './Footer.module.scss';

const Text = dynamic(() => import('@/components/atoms/Text/Text'));
const Footer = () => {
	return (
		<footer className={`${Styles.Footer} bg-Blue text-white md:p-28 p-12 justify-between flex-col md:flex-row`}>
			<div className='w-full md:w-1/2 flex flex-col gap-3'>
				<Text
					type='h5'
					value='contact_us'
					className='text-h4-bold'
					formatted
				/>
				<div className='flex flex-col gap-4 p-2'>
					<Text
						value='6287762638070'
						className='text-small-1-medium'
					/>
					<Text
						value='@irvan_junjun'
						className='text-small-1-medium'
					/>
					<Text
						value='@irvanswan'
						className='text-small-1-medium'
					/>
				</div>
			</div>
			<div className='w-full md:w-1/2 flex flex-col items-start md:items-end gap-3'>
				<Text
					type='h5'
					value='News Today'
					className='text-h4-bold'
				/>
			</div>
		</footer>
	)
}

export default Footer;