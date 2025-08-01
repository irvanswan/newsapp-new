'use client'
import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext, useContext } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required().nonNullable().default(''),
  password: yup.string().required().nonNullable().default(''),
})

export type LoginFormValues = yup.InferType<typeof schema>;

interface LoginContextI {
  handlerSubmit: (e: yup.InferType<typeof schema>) => void;
  schema: yup.AnyObjectSchema;
  methods: UseFormReturn<LoginFormValues>;
}

const LoginContext = createContext<LoginContextI | undefined>(undefined);

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handleLogin = (e: yup.InferType<typeof schema>) => {
    console.log('e', e);
  }

  const methods = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const context: LoginContextI = {
    schema,
    handlerSubmit: handleLogin,
    methods,
  }

  return (
    <LoginContext.Provider value={context}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = (): LoginContextI => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
