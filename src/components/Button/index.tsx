import React, { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button: React.FC<IButton> = ({ isOutlined = false, ...rest }) => {
  return <ButtonContainer isOutlined={isOutlined} {...rest}></ButtonContainer>;
};

export { Button };
