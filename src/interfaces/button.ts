interface ButtonProps {
  content: string;
  onClick: () => void;
  type: "button" | "submit" | "reset";
}
export type { ButtonProps };
