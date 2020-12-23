import { css } from '@emotion/react'

const GlobalStyles = css`
  :root {
    --primaryColor: rgb(27, 36, 47);
    --lightColor: #ffffff;
    --darkTextColor: #001a33;
    --mobileHeaderHeight: 45px;
    --tabletHeaderHeight: 60px;
  }
  ::selection {
    background: dodgerblue;
    color: var(--lightColor);
  }
  body {
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

  main {
    ${
      '' /* color: var(--lightColor);
    background-color: var(--darkTextColor); */
    }
    color: var(--darkTextColor);
    background-color: var(--lightColor);
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

    ${
      '' /* &.resume-page {
      padding-left: 20px;
      padding-right: 20px;
      @media (min-width: 768px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-right: calc(40px + (50vw - (700px / 2)));
        padding-left: calc(40px + (50vw - (700px / 2)));
      }
      @media (min-width: 1100px) {
        padding-right: calc(40px + (50vw - (1100px / 2)));
        padding-left: calc(40px + (50vw - (1100px / 2)));
      }
    } */
    }
  }

  .site-title {
    text-transform: lowercase;
  }

  h1 {
    text-transform: uppercase;
  }

  .h1 {
    text-align: center;
    text-transform: uppercase;
  }

  .wp-block-gallery,
  .blocks-gallery-grid {
    max-width: 100%;
  }

  .wp-two-columns-only {
    flex-wrap: nowrap;
  }

  .center-columns {
    .wp-block-column {
      flex-basis: auto;
      flex-grow: unset;
      margin: auto;
    }
  }

  .wp-block-button {
    a {
      &:hover {
        background-color: dodgerblue;
      }
      :active {
        position: relative;
        top: 1px;
      }
    }
  }
`

export default GlobalStyles
