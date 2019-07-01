import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* Styles */
    :root {
        @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap&subset=latin-ext');

        --black: #000000;
    }
    /* Styles end */

    * {
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }

    html, body {
        margin: 0;
        padding: 0;
    }
`;
