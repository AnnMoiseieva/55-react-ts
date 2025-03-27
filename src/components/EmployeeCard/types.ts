import { ReactNode } from "react";

export interface EmployeeCardProps {
  name: string;
  image?: string;
  position: string;
  department: string;
  children: ReactNode
}
