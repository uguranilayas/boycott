import styled, { css } from "styled-components";
import Link from "next/link";
import { colors, fontFamily, media } from "@/styles";
import { ButtonVariantType } from ".";
import { P2Styles } from "../Typography";

export const BaseButtonStyles = css`
  display: flex;
  flex-direction: row;
  padding: 24px 0px;

  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 71.429% */
  letter-spacing: -0.23px;
  border-radius: 10px;

  transition: all 200ms linear;
  transition-property: color, background;

  cursor: pointer;

  svg {
    height: 24px;
    width: 24px;

    path {
      height: 24px;
      width: 24px;
    }
  }
`;

export const GradientButtonStyles = css`
  &:hover {
  }

  &:disabled {
  }
`;

export const BlueButtonStyles = css`
  background-color: ${colors.primary};

  &:hover {
    background-color: #003cff;
  }

  &:disabled {
  }
`;

export const OutlinedButtonStyles = css`
  &:hover {
  }

  &:disabled {
  }
`;

export type ButtonProps = {
  variant?: ButtonVariantType;
  fullWidth?: boolean;
  disabled?: boolean;
};

export const ButtonStyles = css<ButtonProps>`
  ${BaseButtonStyles}

  ${({ variant }) => {
    switch (variant) {
      case "gradient":
        return GradientButtonStyles;

      case "blue":
        return BlueButtonStyles;

      case "outlined":
        return OutlinedButtonStyles;

      default:
        return GradientButtonStyles;
    }
  }}

  ${({ fullWidth }) => (fullWidth ? "flex: 1;" : null)};
  ${({ fullWidth }) => (fullWidth ? "width: 100%;" : null)};

  justify-content: center;
  align-items: center;
  gap: 8px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `};
`;

// export as button element
export const Button = styled.button<ButtonProps>`
  ${ButtonStyles};
`;

// export as link element
export const ButtonLink = styled(Link)<ButtonProps>`
  ${ButtonStyles};
  text-decoration: none;
`;
