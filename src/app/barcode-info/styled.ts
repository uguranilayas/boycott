import { colors } from "@/styles";
import styled, { css } from "styled-components";

export const InfosTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid #353942;
    padding-bottom: 15px;
    p {
      text-align: right;
    }

    span {
      p {
        color: ${colors.lightGrey};
        text-align: left;
      }
    }

    &:last-child {
      border: none;
      padding-bottom: 0px;
    }
  }
`;

export const MainInfoLabel = styled.div<{
  isBoycott?: boolean;
  isForeign?: boolean;
}>`
  margin-top: 20px;
  padding: 24px 0px;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  background-color: ${colors.green};

  ${({ isForeign }) => isForeign && `background-color: ${colors.yellow};`};
  ${({ isBoycott }) => isBoycott && `background-color: ${colors.red};`};

  h1 {
    text-transform: uppercase;
  }
`;

export const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${colors.darkGrey};
  border-radius: 5px;

  p {
    padding: 0px 5px;
  }
`;

export const DescTabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DescTabItemStyles = css`
  border-radius: 5px;
  width: 49%;
  text-align: center;
  padding: 6px 0px;
  margin: 4px 4px;
  margin-bottom: 8px;

  p {
    font-weight: 500;
  }
`;

export const DescTabItemBlue = styled.div<{ isBoycott?: boolean }>`
  ${DescTabItemStyles}
  background: #0500ff;

  ${({ isBoycott }) => !isBoycott && `display: none;`};
`;

export const DescTabItemYellow = styled.div<{ isForeign?: boolean }>`
  ${DescTabItemStyles}
  background: #ffc701;

  p {
    color: #2b2b2b;
  }

  ${({ isForeign }) => !isForeign && `display: none;`};
`;
