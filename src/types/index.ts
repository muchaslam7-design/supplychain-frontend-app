// Navigation links ke liye type structure
export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

// Custom Dynamic Button ke props ki type
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

// Future scale ke liye: Product/Service Card data type
export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
