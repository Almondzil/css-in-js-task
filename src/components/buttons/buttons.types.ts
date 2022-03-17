export type SizeProps = "xSmall" | "small" | "medium" | "large" | 'xLarge'

export type TypeProps = "primary" | "secondary";

export interface ButtonProps {
  size?: SizeProps;
  typ?: TypeProps;
  icon?: React.ReactNode;
  outline?: boolean;
}