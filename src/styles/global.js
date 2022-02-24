import { createGlobalStyle } from "styled-components";
import fontInter from "../assets/fonts/Inter-VariableFont_slnt,wght.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url(${fontInter});
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --success: #3FE864;
        --negative: #E83F5B;

        --title-1: bold 1rem 'Inter';
        --headline: normal 0.75rem 'Inter';
        --headline-bold: bold 0.75rem 'Inter';
        --headline-italic: italic normal 0.75rem 'Inter';
    }
`;
