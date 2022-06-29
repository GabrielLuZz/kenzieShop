import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
        color: #8c8e8d;
    }

    h1, h2 , h3 , h4,  h5 , h6 {
        font-family: 700;
    }

    body {
        background-color: #f5f5f2;
    }

    button {
        cursor: pointer;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;
