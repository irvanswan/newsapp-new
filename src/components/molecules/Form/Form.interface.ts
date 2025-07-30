import React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export interface FormI<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  className?: string;
}

