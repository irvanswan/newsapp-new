import Styles from '../signup.module.css';

const SignupBanner = () => {
	return (
		<section
			className={`${Styles.Banner} sm:hidden`}
			style={{ backgroundImage: `url('/assets/images/banner_signup.png')` }}
		/>
	)
}

export default SignupBanner;