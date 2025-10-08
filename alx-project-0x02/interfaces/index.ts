export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

// interfaces/index.ts
export interface UserProps {
  id: number
  name: string
  email: string
  address: {
    street: string
    city: string
  }
}

