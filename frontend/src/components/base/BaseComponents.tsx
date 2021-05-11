import styled from 'styled-components'
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from 'styled-system'

interface BoxProps extends LayoutProps, ColorProps, SpaceProps {}

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
`

interface FlexProps extends FlexboxProps {}

export const Flex = styled.div<FlexProps>`
  ${flexbox}
`

export const Grid = styled.div<GridProps>`
  ${grid}
`