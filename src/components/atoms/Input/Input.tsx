import React from 'react';
import Styles from './Input.module.scss';
import { InputI } from './Input.interface';
import { useTranslations } from 'next-intl';

const Input: React.FC<InputI> = ({
  placeholder,
  className,
  formatted,
  section,
  value,
  onChange,
  ...props
}) => {
  const t = useTranslations(section || 'general');

  const formattedPlaceHolder = formatted ? t(placeholder || 'default') : '';

  return (
    <input
      placeholder={formattedPlaceHolder}
      className={`${Styles.Input} ${className ?? ''} outline-0`}
      value={value ?? ''} 
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
