import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  text: string;
  icon?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  onClick: () => void;
}
