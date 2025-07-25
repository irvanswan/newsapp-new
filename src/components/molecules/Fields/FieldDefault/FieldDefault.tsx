'use client'

import Styles from './FieldDefault.module.scss';
import { FieldsI } from "../Fields.interface";
import { useMemo, useState } from "react";
import Text from "@/components/atoms/Text/Text";
import Input from "@/components/atoms/Input/Input";

const FieldDefault: React.FC<FieldsI> = ({
	label,
	id,
	isRequired,
	variant,
	section,
	placeholder,
	formatted = false,
	type
}) => {
	const [focused, setFocused] = useState<boolean>(false);

	const renderColorFocues: string = useMemo(() => {
		switch(variant){
			case 'Primary':
				return 'focus:outline-none ring-primary-500 ring-opacity-30 shadow-md transition duration-300"';
			case 'Error':
				return 'ring-red-300';
			case 'Success':
				return 'ring-green-300';
			case 'Warning':
				return 'ring-yellow-300';
			default:
				return 'ring-netral-300';
		}
	}, [variant])

	return (
		<div className={`${Styles.FieldDefault} gap-3`}>
			{label && (
				<label htmlFor={id} className={`${Styles.Label} gap-1.5`}>
					<Text
						value={label}
						{...(section && { section })}
						type="p"
						className="font-bold capitalize text-Dark"
						formatted={formatted}
					/>
					{isRequired && (
						<Text
							type="small"
							value="*"
							className="text-red-500"
						/>
					)}
				</label>
			)}
			<div className={`${Styles.Input} py-6 px-7 rounded-2xl border ${focused ? renderColorFocues : ''} border-${variant.toLowerCase()}-300 Borders ${variant}`}>
				<Input
					onBlur={() => setFocused(false)}
					onFocus={() => setFocused(true)}
					placeholder={placeholder}
					formatted={formatted}
					id={id}
					type={type}
				/>
			</div>
		</div>
	)
}

export default FieldDefault;