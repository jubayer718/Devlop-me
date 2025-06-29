
import { IconType } from "react-icons";


interface ButtonProps {
  label: string;
  disabled?: boolean;
  outlined?: boolean;
  small?: boolean;
  icon?: IconType;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ( {
  label, type, disabled, outlined, small, className, onclick, icon: Icon
}: ButtonProps) => {
  return (
  <button
    className={`btn${outlined ? "border border-2 rounded-full p-2" : ""}${small ? " btn--small" : ""}${className ? ` ${className}` : ""}`}
    type={type}
    onClick={onclick}
    disabled={disabled}
  >
     <span className="p-1 rounded-full border-1 -ml-2"> {Icon && <Icon  size={24} />}</span>
    {label}
  </button>
  );
};

export default Button;