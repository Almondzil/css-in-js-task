import React from "react";
import { ButtonProps } from ".";
import { StyledButton } from "./button.styles";

export const Button: React.FC<ButtonProps> = ({
  size = "default",
  typ = "primary",
  outline = false,
  icon = null,
}) => {
  if (!icon) return <StyledButton />;
  return <StyledButton>B</StyledButton>;
};
