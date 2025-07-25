import Styles from '../login.module.scss';

const LoginBanner = () => {
	return (
		<section
			className={`${Styles.Banner} sm:hidden`}
			style={{ backgroundImage: `url('/assets/images/banner_login.png')` }}
		/>
	)
}

export default LoginBanner;