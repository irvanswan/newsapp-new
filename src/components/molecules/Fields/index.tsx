// Fields.tsx
import React from "react";
import { FieldsContainerI } from "./Fields.interface";
import { FieldValues } from "react-hook-form";
import FieldDefault from "./FieldDefault/FieldDefault";

const Fields = <T extends FieldValues>(props: FieldsContainerI<T>) => {
  const { type, section, formatted = false, methods, ...rest } = props;

  switch (type) {
    case 'phone':
      return <div />;

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
