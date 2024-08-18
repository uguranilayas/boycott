import { colors } from "@/styles";
import styled from "styled-components";

export const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  h2 {
    text-align: left;
    padding: 16px 8px;
    background-color: ${colors.primary};
    margin-bottom: 16px;
  }

  p {
    font-weight: 500;
  }
`;
