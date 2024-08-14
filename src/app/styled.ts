import { colors } from "@/styles";
import styled from "styled-components";

export const InteractionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 45px;
`;

export const UsageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UsageCircles = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 8px;

    &:first-child {
      path {
        fill: ${colors.green};
      }
    }

    &:nth-child(2) {
      path {
        fill: ${colors.yellow};
      }
    }

    &:nth-child(3) {
      path {
        fill: ${colors.red};
      }
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
