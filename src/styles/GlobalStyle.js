import { createGlobalStyle  } from "styled-components";

    const GlobalStyle = createGlobalStyle`

   *{
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
    body{
        background-color: #E4EBF1;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      
    }
    `;
export default GlobalStyle;