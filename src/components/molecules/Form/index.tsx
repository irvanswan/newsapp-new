import React from "react";
import { FormI } from "./Form.interface";
import { FormProvider } from "react-hook-form";

const Form = <T extends Record<string, unknown>>({
  methods,
  onSubmit,
  children,
  className,
}: FormI<T>) => {
  return (
    <FormProvider
      {
        ...methods
      }
    >
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className} noValidate>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form;