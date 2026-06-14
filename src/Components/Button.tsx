import React from "react";
import type { ButtonProps } from "../types";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  // Base styling for Tailwind v4
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all active:scale-[0.98] cursor-pointer text-[15px]";

  // Variants setup
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    outline:
      "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50",
  };

  // Sizes setup
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
