import type { FC, MouseEventHandler } from "react";
import "./Button.css";

type variant = "primary" | "secondary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant? : variant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ label = "Click me Button Now", variant = "primary", onClick, ...props }) => {
  const style = "button_" + variant;

  return (
    <button className={style} onClick={onClick} {...props}>
      {label}
    </button>
  )
}

export default Button;
