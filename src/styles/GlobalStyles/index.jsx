import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * { 
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }

    body {
        height: 100vh;
        display: flex;
        justify-content: center;
        padding-top: 5rem;
        background-color: #fffff468;
        color: #333;
    }
`

export default GlobalStyles