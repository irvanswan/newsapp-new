import dynamic from "next/dynamic";
import { ButtonI } from "./Button.interface";
import Styles from './Button.module.scss';

const Text = dynamic(() => import('@/components/atoms/Text/Text'));

const Button: React.FC<ButtonI> = ({ className, section, formatted, icon, text, variant, ...props }) => {
	return (
		<button
			className={`${Styles.Button} outline-0 ${className ? className : '!py-6'} rounded-2xl Buttons ${variant}`}
			{...props}
		>
			{icon && (
				<div/>
			)}
			<Text 
				value={text}
				formatted={formatted}
				section={section}
			/>
		</button>
	)
}

export default Button;