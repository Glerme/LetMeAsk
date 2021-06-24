import React, { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButton> = ({ ...rest }) => {
  return <ButtonContainer {...rest}></ButtonContainer>;
};

export { Button };
