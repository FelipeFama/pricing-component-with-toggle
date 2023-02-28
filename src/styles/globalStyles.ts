import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
   --gradient: hsl(236, 72%, 79%), hsl(237, 63%, 64%);
   --very-light-grayish-blue: hsl(240, 78%, 98%);
   --light-grayish-blue: hsl(234, 14%, 74%);
   --grayish-blue: hsl(233, 13%, 49%);
   --dark-grayish-blue: hsl(232, 13%, 33%);
   --font-family:'Montserrat', sans-serif;
 }

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html {
   font-size: 15px;
 }

 body {
   background-color: var(--very-light-grayish-blue);
   font-family: var(--font-family);
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
 }
`;
