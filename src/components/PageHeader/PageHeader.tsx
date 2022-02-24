import React from 'react'
import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'
import Container from '../Layout/Container'

const Outer = styled(Box)<{ background?: string }>`
  // background: linear-gradient(180deg, #ff5d5f 0%, #5e2829 100%);
`

const Inner = styled(Container)`
  padding-top: 35px;
  padding-bottom: 15px;
`

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader