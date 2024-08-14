import { colors } from "@/styles";
import styled from "styled-components";
export const HeaderWrap = styled.div<{ isHome?: boolean }>`
  background-color: ${colors.grey};
  padding: 32px 30px;
  display: ${({ isHome }) => (isHome ? "none;" : "block")};
`;

export const HeaderItemsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    width: 32px;
  }

  h4 {
    color: ${colors.white};
  }

  svg {
    width: 32px;
    height: 32px;

    color: ${colors.white};
  }
`;
