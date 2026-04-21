import type { FC  } from "react";
import "./Button.css";

type variant = "primary" | "secondary";

interface Props {
  label?: string;
  variant? : variant;
}

const Button: FC<Props> = ({ label = "Click me Button Now", variant = "primary" }) => {
  const style = "button_" + variant;

  return (
    <button className={style}>
      {label}
    </button>
  )
}

export default Button;
