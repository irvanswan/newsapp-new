'use client'

import Styles from './FieldPassword.module.scss';
import { FieldsI } from "../Fields.interface";
import { useMemo, useState } from "react";
import Text from "@/components/atoms/Text/Text";
import Input from "@/components/atoms/Input/Input";
import { Controller, FieldValues } from 'react-hook-form';

const FieldPassword = <T extends FieldValues>({
  label,
  id,
  name,
  control,
  isRequired,
  variant = 'Primary',
  section,
  placeholder,
  formatted = false,
  ...props
}: FieldsI<T>) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const ringVariantClass = useMemo(() => {
    switch (variant) {
      case 'Primary': return 'ring ring-Blue ring-opacity-30 shadow-md transition duration-300';
      case 'Error': return 'ring ring-red-300';
      case 'Success': return 'ring ring-green-300';
      case 'Warning': return 'ring ring-yellow-300';
      default: return 'ring ring-neutral-300';
    }
  }, [variant]);

  const borderClass = `py-6 px-7 rounded-2xl border Borders ${variant} ${focused ? ringVariantClass : ``
    }`;

  return (
    <div className={`${Styles.FieldPassword} gap-3`}>
      {label && (
        <label htmlFor={id} className={`${Styles.Label} gap-1.5`}>
          <Text
            value={label}
            {...(section && { section })}
            type="label"
            htmlFor={id}
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

      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <div className={`${Styles.Input} ${borderClass} ${error ? '!border-red-500' : ''}`}>
                <Input
                  {...field}
                  name={name}
                  onBlur={() => setFocused(false)}
                  onFocus={() => setFocused(true)}
                  placeholder={placeholder}
                  formatted={formatted}
                  id={id}
                  type={visible ? 'text' : 'password'}
                />
                <div className={`w-fit pl-4 flex items-center border-l border-Blue`}>
                  <Text
                    onClick={() => setVisible((prevState) => !prevState)}
                    value={visible ? 'hide' : 'show'}
                    className='capitalize cursor-pointer hover:text-Blue font-bold'
                    formatted
                    type='small'
                  />
                </div>
              </div>
              {error && (
                <small className="text-red-500 text-small-1">
                  {error.message}
                </small>
              )}
            </>
          )}
        />
      ) : (
        <div className={`${Styles.Input} ${borderClass}`}>
          <Input
            {...props}
            name={name}
            onChange={(e) => (e.target.value)}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            placeholder={placeholder}
            formatted={formatted}
            id={id}
            type={visible ? 'text' : 'password'}
          />
          <div className={`w-fit pl-4 flex items-center border-l border-Blue`}>
            <Text
              onClick={() => setVisible((prevState) => !prevState)}
              value={visible ? 'hide' : 'show'}
              className='capitalize cursor-pointer hover:text-Blue font-bold'
              formatted
              type='small'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FieldPassword;
