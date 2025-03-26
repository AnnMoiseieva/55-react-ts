
export interface ButtonProps {
  name: string;
  // void - if the function returns nothing
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}


