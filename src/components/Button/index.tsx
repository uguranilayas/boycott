import React from "react";

import * as S from "./styled";

export type ButtonVariantType = "blue";

type ButtonBaseProps = {
  variant?: ButtonVariantType;
  fullWidth?: boolean;
  loading?: boolean;
};

type Props = ButtonBaseProps & React.HTMLProps<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  loading,
  ...props
}) => {
  return (
    <S.Button variant={variant} {...(props as any)}>
      <>{children}</>
    </S.Button>
  );
};

type ButtonLinkProps = ButtonBaseProps &
  React.ComponentProps<typeof S.ButtonLink>;

const ButtonLink: React.FC<ButtonLinkProps> = ({ ...props }) => {
  return <S.ButtonLink {...props} />;
};

export { ButtonLink };
export default Button;
