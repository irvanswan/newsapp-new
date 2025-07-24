import React from 'react';
import Styles from './Input.module.scss';
import { InputI } from './Input.interface';
import { useTranslations } from 'next-intl';

const Input: React.FC<InputI> = ({ placeholder, className, formatted, section, ...props }) => {
  const t = useTranslations(section || 'general');
    const formattedPlaceHolder: string = formatted
    ? t(placeholder || 'default')
    : '';

  return (
    <input
      placeholder={formattedPlaceHolder}
      className={`${Styles.Input} ${className ? className : ''} outline-0`}
      {...props}
    />
  );
};

export default Input;
