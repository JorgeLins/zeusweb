import styled from "styled-components";



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
font-type: bold;
margin: 16px;
width: 139px;
padding: 4px 16px;
border: 2px solid grey;
border-radius: 3px;
font-weight: bold
`

export const EditButton = styled.button`
color: black;
font-size: 16px;
font-type: bold;
margin: 16px;
width: 60px;
padding: 4px 16px;
border: 2px solid grey;
border-radius: 3px;
font-weight: bold
`

export const InvButton = styled.button`
background-color: #FFFF;
font-size: 16px;
font-type: bold;
margin: 16px;
width: 60px;
padding: 4px 16px;
border: 2px solid white;

font-weight: bold
`

export const DeleteButtons = styled.button`
background-color: #e33e32;
font-size: 16px;
font-type: bold;
margin: 16px;
width: 60px;
padding: 4px 16px;
border: 2px solid grey;
border-radius: 3px;
font-weight: bold
text-align: center;
`

export const Input = styled.input`
padding: 8px;
margin: 8px;
margin-top:2px;
color: #000;
background: white;
border: none;
border-radius: 3px;
`;

export const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
background: #FFEFD5;
border-bottom: 10px solid #FFF;
`;

export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: start;

`;

export const Label = styled.label`
font-weight: bold;
margin-left:8px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`