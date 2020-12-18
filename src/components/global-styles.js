import { css } from '@emotion/react'

const GlobalStyles = css`
  :root {
    --primaryColor: rgb(27, 36, 47);
    --lightColor: #ffffff;
    --darkTextColor: #001a33;
    --mobileHeaderHeight: 45px;
    --tabletHeaderHeight: 60px;
  }
  body {
    color: var(--darkTextColor);
    margin-top: var(--mobileHeaderHeight);
    ${'' /* font-family: 'Lato', sans-serif; */}
    @media (min-width: 768px) {
      margin-top: var(--tabletHeaderHeight);
    }
  }
  #gatsby-focus-wrapper {
    min-height: calc(100vh - var(--mobileHeaderHeight));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 768px) {
      min-height: calc(100vh - var(--tabletHeaderHeight));
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
    padding-top: 60px;
    padding-bottom: 60px;
    @media (min-width: 768px) {
      padding-top: 80px;
      padding-bottom: 80px;
    }
  }

  .h1 {
    text-align: center;
  }

  .wp-block-gallery,
  .blocks-gallery-grid {
    max-width: 100%;
  }
`

export default GlobalStyles
