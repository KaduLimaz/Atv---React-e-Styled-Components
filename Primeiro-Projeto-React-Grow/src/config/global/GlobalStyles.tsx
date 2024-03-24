import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    body {
        background-color: aliceblue;
        color: rgb(222, 226, 230);
    }
`;
