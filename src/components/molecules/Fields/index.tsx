// Fields.tsx
import React from "react";
import { FieldsContainerI } from "./Fields.interface";
import { FieldValues } from "react-hook-form";
import FieldDefault from "./FieldDefault/FieldDefault";
import FieldPassword from "./Password";

const Fields = <T extends FieldValues>(props: FieldsContainerI<T>) => {
  const { type, section, formatted = false, methods, ...rest } = props;

  switch (type) {
    case 'phone':
      return <div />;
    case 'password':
      return (
        <FieldPassword
            {...methods && {control: methods.control}}
            type={type}
            formatted={formatted}
            section={formatted ? section : undefined}
            {...rest}
        />
      )
    default:
      return (
        <FieldDefault
          type={type}
          {...(methods && {control: methods.control})}
          formatted={formatted}
          section={formatted ? section : undefined}
          {...rest}
        />
      );
  }
};

export default Fields;
