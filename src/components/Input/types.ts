export interface InputProps {
  placeholder?: string,
  name: string,
  value?: string,
  type?: 'text' | 'email' | 'number' | 'tel' | 'password'
  onChange?: () => void,
  label?: string,
  id?: string,
}