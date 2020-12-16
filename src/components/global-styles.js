import { css } from '@emotion/react'

const GlobalStyles = css`
  :root {
    --primaryColor: dodgerBlue;
    --lightColor: #ffffff;
    --darkTextColor: #001a33;
    --mobileHeaderHeight: 45px;
    --tabletHeaderHeight: 60px;
  }
  body {
    color: var(--darkTextColor);
    margin-top: var(--mobileHeaderHeight);
    @media (min-width: 768px) {
      margin-top: var(--tabletHeaderHeight);
    }
  }

  main,
  footer,
  section {
    margin: 0;
    padding: 20px;
    @media (min-width: 768px) {
      padding: 20px 40px;
    }
    @media (min-width: 700px) {
      padding-right: calc(40px + (50vw - (700px / 2)));
      padding-left: calc(40px + (50vw - (700px / 2)));
    }
  }

  main {
    padding-top: 40px;
  }

  .home-page {
    .h1 {
      text-align: center;
    }
  }

  .wp-block-gallery,
  .blocks-gallery-grid {
    max-width: 100%;
  }
`

export default GlobalStyles
