'use client'

import Styles from './FieldDefault.module.scss';
import { FieldsI } from "../Fields.interface";
import { useMemo, useState } from "react";
import Text from "@/components/atoms/Text/Text";
import Input from "@/components/atoms/Input/Input";
import { Controller, FieldValues } from 'react-hook-form';

const FieldDefault = <T extends FieldValues>({
  label,
  id,
  name,
  control,
  isRequired,
  variant = 'Primary',
  section,
  placeholder,
  formatted = false,
  type
}: FieldsI<T>) => {
  const [focused, setFocused] = useState(false);

  const ringVariantClass = useMemo(() => {
    switch (variant) {
      case 'Primary': return 'ring ring-Blue ring-opacity-30 shadow-md transition duration-300';
      case 'Error': return 'ring ring-red-300';
      case 'Success': return 'ring ring-green-300';
      case 'Warning': return 'ring ring-yellow-300';
      default: return 'ring ring-neutral-300';
    }
  }, [variant]);

  const borderClass = `py-6 px-7 rounded-2xl border Borders ${variant} ${
    focused ? ringVariantClass : ``
  }`;

  return (
    <div className={`${Styles.FieldDefault} gap-3`}>
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
                  onBlur={() => setFocused(false)}
                  onFocus={() => setFocused(true)}
                  placeholder={placeholder}
                  formatted={formatted}
                  id={id}
                  type={type}
                />
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
            name={name}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            placeholder={placeholder}
            formatted={formatted}
            id={id}
            type={type}
          />
        </div>
      )}
    </div>
  );
};

export default FieldDefault;
