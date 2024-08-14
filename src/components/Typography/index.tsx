import { colors, media } from "@/styles";
import styled, { css } from "styled-components";

// Heading 1

export const H1Styles = css`
  font-size: 48px;
  font-weight: 700;
`;

export const H1 = styled.h1`
  ${H1Styles};
`;

// Heading 2

export const H2Styles = css`
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 41.667% */
  letter-spacing: -0.23px;
`;

export const H2 = styled.h2`
  ${H2Styles};
`;

// Heading 3

export const H3Styles = css`
  font-size: 32px;
  font-weight: 600;
  line-height: 20px; /* 62.5% */
  letter-spacing: -0.23px;
`;

export const H3 = styled.h3`
  ${H3Styles};
`;

// Heading 4

export const H4Styles = css`
  font-size: 24px;
  font-weight: 500;
  line-height: 20px; /* 83.333% */
  letter-spacing: -0.23px;
`;

export const H4 = styled.h4`
  ${H4Styles};
`;

export const H4Bold = styled.h4`
  ${H4Styles};
  font-weight: 700;
`;

// Heading 5

export const H5Styles = css`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const H5 = styled.h5`
  ${H5Styles};
`;

// Paragraph

export const P1Styles = css`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const P = styled.p`
  ${P1Styles};
`;

export const P1Bold = styled.p`
  ${P1Styles};
  font-weight: 700;
`;

export const P2Styles = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 125%;
`;

export const P2 = styled.p`
  ${P2Styles};
`;

export const P2Strong = styled.p`
  ${P2Styles};
  font-weight: 500;
`;

export const P2Bold = styled.p`
  ${P2Styles};
  font-weight: 700;
`;

export const P3Styles = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const P3 = styled.p`
  ${P3Styles};
`;

export const P3Bold = styled.p`
  ${P3Styles};
  font-weight: 500;
`;

// NavLink

export const NavLink = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px; /* 150% */

  ${media.maxMd`
      font-size: 14px;
  `}
`;
