import styled from "styled-components";

import Delete from "./images/delete.png"


export const Box = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #FFF;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
text-align: center;
border-radius: 20px;
padding: 5px 44px;
margin: 10px
`

export const H2 = styled.h2`
    display: inline-flex;
    align-items: start;
    width: 145px;
    color: #000;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
`

export const Buttons = styled.button`
color: black;
font-size: 16px;
margin: 16px;
padding: 4px 16px;
border: 2px solid grey;
border-radius: 3px;
font-weight: bold
`

export const DeleteButtons = styled.button`
background-color: #e33e32;
font-size: 16px;
font-type: bold;
margin: 16px;
width: 139px;
padding: 4px 16px;
border: 2px solid grey;
border-radius: 3px;
font-weight: bold
`

export const Input = styled.input`
padding: 8px;
margin: 8px;
color: #000;
background: white;
border: none;
border-radius: 3px;
`;

export const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 64px;
background: #FFEFD5;
border-bottom: 10px solid #FFF;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`