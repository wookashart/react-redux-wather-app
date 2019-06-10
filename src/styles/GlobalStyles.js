import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* Styles */
    :root {
        --black: #000000;
    }
    /* Styles end */

    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }
`;
