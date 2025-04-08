import { ChangeEvent } from "react";

export interface CheckboxProps {
  name: string,
  checked: boolean,
  type?: 'text' | 'email' | 'number' | 'tel' | 'password'
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  label?: string,
  id?: string,
  error?: string,
}
