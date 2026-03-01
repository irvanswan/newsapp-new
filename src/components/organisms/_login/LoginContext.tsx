'use client'
import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext, useContext, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';

const schema = yup.object({
  email: yup.string().email().required().nonNullable().default(''),
  password: yup.string().required().nonNullable().default(''),
})

export type LoginFormValues = yup.InferType<typeof schema>;

interface LoginContextI {
  handlerSubmit: (e: yup.InferType<typeof schema>) => void;
  schema: yup.AnyObjectSchema;
  methods: UseFormReturn<LoginFormValues>;
  isLoading: boolean;
  error: string | null;
}

const LoginContext = createContext<LoginContextI | undefined>(undefined);

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (values: yup.InferType<typeof schema>) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (!response.ok || !data?.success) {
        throw new Error(data?.message || 'Login failed');
      }

      router.push('/');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unexpected error';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const methods = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });

  const context: LoginContextI = {
    schema,
    handlerSubmit: handleLogin,
    methods,
    isLoading,
    error,
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
