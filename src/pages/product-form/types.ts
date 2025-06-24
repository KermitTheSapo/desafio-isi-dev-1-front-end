import type { FormEvent } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

export interface ProductFormMode {
  isEditMode: boolean;
  isAddMode: boolean;
}

export interface ProductFormProps {
  isEditMode: boolean;
  titleIcon: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
}

export type FormProps = {
  isEditMode: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
};

export type FormData = {
  name: string;
  category: string;
  description: string;
  price: string;
  stock: string;
};
