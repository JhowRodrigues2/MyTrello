import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{margin:0;
padding:0;
outline:0;
box-sizing:border-box;
}

html, body, #root{
height: 100%;
}

body{
    font:14px, 'Roboto',sans-serif;
    background: #ecf1f8;
    color:#333;
    -webkit-font-smoothig: antialiased !important
}

ul{
    list-style: none;
}
`;
