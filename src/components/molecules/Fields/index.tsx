import React from "react";
import dynamic from "next/dynamic";
import { FieldsI } from "./Fields.interface";

const DefaultField = dynamic(() => import('@/components/molecules/Fields/FieldDefault/FieldDefault'), {
  ssr: true
})

const Fields: React.FC<FieldsI> = ({ type, section, formatted, ...props }) => {
  switch (type) {
    case 'phone':
      return <div />;
    default:
      return (
        <DefaultField
          type={type}
          {...((formatted && section) && { section })}
          formatted={formatted}
          {...props}
        />
      )
  }
};

export default Fields;