import type { FC, MouseEventHandler } from "react";
import "./Button.css";

type variant = "primary" | "secondary";

interface Props {
  label?: string;
  variant? : variant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ label = "Click me Button Now", variant = "primary", onClick }) => {
  const style = "button_" + variant;

  return (
    <button className={style} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button;
