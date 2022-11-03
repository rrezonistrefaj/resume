import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap)
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        background: #585c68;
        font-size: 14px;
        line-height: 22px;
        color: #555555;
    }
    body{
        background: #fff;
        color: hsl(192, 100%, 9 %)
        font-family: 'Quicksand', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }
    p{
        opacity: 0.6;
        line-height: 1,5;
    }
    img{
        max-width: 100%;
        position:relative;
        align-items: right;
    }
`
export default GlobalStyles