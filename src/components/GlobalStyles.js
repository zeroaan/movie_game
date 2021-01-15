import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const globalStyles = createGlobalStyle`
  ${reset}
  
  body {
    font-family: "Jua", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default globalStyles
