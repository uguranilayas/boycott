import { colors } from "@/styles";
import styled from "styled-components";

export const TextBoxWrap = styled.div<{ mt?: boolean }>`
  border-radius: 10px;
  padding: 24px;
  background: ${colors.grey};

  ${({ mt }) => (mt ? "margin-top: 16px;" : null)};
`;
