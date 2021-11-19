import styled from "styled-components";

export const Box = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-around;
background-color: #FFF;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
text-align: center;
border-radius: 20px;
padding: 5px 44px;
margin: 10px
`

export const H2 = styled.h2`
    display: inline-flex;
    align-items: flex-start;
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
padding: 64px;
background: #FFEFD5;
border-bottom: 10px solid #FFF;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`