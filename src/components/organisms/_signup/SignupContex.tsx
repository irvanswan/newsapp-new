'use client'
import * as yup from 'yup';
import { createContext, useContext } from "react"
import { useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    email: yup.string().email().required().nonNullable().default(null),
    password: yup.string().required().nonNullable().default(null),
    confirm_password: yup.string().required().nonNullable().default(null),
})

export type SignupFormValues = yup.InferType<typeof schema>;

interface SignupContextI {
  handlerSubmit: (e: yup.InferType<typeof schema>) => void;
    schema: yup.AnyObjectSchema;
    methods: UseFormReturn<SignupFormValues>; 
}

const SignupContext = createContext<SignupContextI | undefined>(undefined);

export const SignupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handleLogin = (e: yup.InferType<typeof schema>) => {
    console.log('e', e);
  }

  const methods = useForm<SignupFormValues>({
    resolver: yupResolver(schema),
  });

  const context: SignupContextI = {
    schema,
    handlerSubmit: handleLogin,
    methods,
  }

  return (
    <SignupContext.Provider value={context}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = (): SignupContextI => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error('useSignUp must be used within AuthProvider');
  }
  return context;
};