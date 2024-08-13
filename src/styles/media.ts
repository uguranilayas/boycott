import styled, { css } from 'styled-components'
import { breakpoints } from './breakpoints'

type CSSObject = Parameters<typeof css>[0]
const mediaQuery =
  (
    first: TemplateStringsArray | CSSObject,
    ...query: Array<TemplateStringsArray | CSSObject | number>
  ) =>
  (...rules: Parameters<typeof css>) => css`
    @media ${css(first, ...query)} {
      ${css(...rules)}
    }
  `

// helper functions to generate media queries for any size bigger than:
const media = {
  xl: mediaQuery`(min-width: ${breakpoints.xl}px)`,
  lg: mediaQuery`(min-width: ${breakpoints.lg}px)`,
  md: mediaQuery`(min-width: ${breakpoints.md}px)`,
  sm: mediaQuery`(min-width: ${breakpoints.sm}px)`,
  xs: mediaQuery`(min-width: ${breakpoints.xs}px)`,
  maxSm: mediaQuery`(max-width: ${breakpoints.sm - 1}px)`,
  maxMd: mediaQuery`(max-width: ${breakpoints.md - 1}px)`,
  maxLg: mediaQuery`(max-width: ${breakpoints.lg - 1}px)`,
  maxMdLandscape: mediaQuery`screen and (orientation:landscape) and (max-width: ${
    breakpoints.sm - 1
  }px)`,
}

export { media }

// some extra components
// only xs
export const MobileOnly = styled.div`
  ${media.sm`
    display: none !important;
  `}
`

// only sm, md, lg, xl
export const DesktopOnly = styled.div`
  ${media.maxSm`
    display: none;
  `}
`

export const TabletOnlyDown = styled.div`
  ${media.md`
    display: none;
  `}
`

export const TabletOnlyUp = styled.div`
  ${media.maxMd`
    display: none;
  `}
`

export const TabletLargeOnlyDown = styled.div`
  ${media.lg`
    display: none;
  `}
`

export const TabletLargeOnlyUp = styled.div`
  ${media.maxLg`
    display: none;
  `}
`

export const PhoneOnlyUp = styled.div`
  ${media.maxSm`
    display: none;
  `}
`
