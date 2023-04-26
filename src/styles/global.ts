import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: ${({ theme }) => theme.screens.xs}){
      font-size: 93.75%; /** 15px */
    }

    @media (max-width: ${({ theme }) => theme.screens.xs}){
      font-size: 87.5%; /** 14px */
    }
  }

  body, button, input, select, textarea { 
    font: 400 1rem/1.5  'Open Sans', sans-serif;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }
`
