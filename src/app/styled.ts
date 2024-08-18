import { colors } from "@/styles";
import styled from "styled-components";

export const InteractionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 45px;
`;

export const TextfieldWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  min-height: 100px;

  .MuiInputBase-root {
    height: 100%;
    background-color: ${colors.white};
    border-radius: 10px;
    padding-left: 16px;

    input {
      font-family: "__Poppins_01daed";
      font-weight: 600;
      font-size: 16px;
      background-color: #d9d9d9;
      padding: 0px;
      padding: 5px 0px;
      padding-left: 12px;
      margin-right: 16px;
      border-radius: 3px;

      &::placeholder {
        color: #a6a6a6;
        opacity: 1;
      }
    }
  }

  .MuiInputAdornment-root {
    width: 40px;

    span {
      width: 40px;
    }
  }
`;

export const SubmitButton = styled.button`
  padding: 0px 24px;
  background-color: ${colors.white};
  border-radius: 10px;

  &:active {
    background-color: ${colors.lightGrey};
  }
`;

export const UsageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
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
