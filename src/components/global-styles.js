import { css } from '@emotion/react'

const GlobalStyles = css`
  :root {
    --primaryColor: #1e90ff;
    --white: #ffffff;
    --mobileHeaderHeight: 45px;
    --tabletHeaderHeight: 60px;
  }
  body {
    margin-top: calc(var(--mobileHeaderHeight) + 40px);
    @media (min-width: 768px) {
      margin-top: calc(var(--tabletHeaderHeight) + 60px);
    }
  }
`

export default GlobalStyles
