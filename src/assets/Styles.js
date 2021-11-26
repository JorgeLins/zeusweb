import styled from "styled-components";
import 'typeface-roboto'



export const Box = styled.div`
display: flex;
justify-content: space-around;
background-color: #FFC107;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
text-align: center;
width:700px;
border-radius: 5px;
padding: 5px 44px;
margin: 10px 32px;
`


export const H2 = styled.h2`
    display: inline-flex;
    align-items: start;
    width: 145px;
    color: #004242;
    font-size: 12px;
    font-family:  Roboto;
    font-weight: medium;
    text-decoration: none;
`

export const Description = styled.h2`
    display: inline-flex;
    align-items: start;
    width: 145px;
    color: #004242;
    font-family:  Roboto;
    font-size: 12px;
    font-weight: lighter;
    text-decoration: none;
`

export const Tittle = styled.h2`
    display: inline-flex;
    align-items: start;
    width: 145px;
    color: #004242;
    margin-left:8px;
    font-size: 12px;
    font-family:  Roboto;
    font-weight: medium;
    text-decoration: none;
    font-weight: bold;
`

export const Wh2 = styled.h2`
    display: inline-flex;
    align-items: center;
    color: #004242;
    font-size: 20px;
    font-family:  Roboto;
    font-weight: medium;
    text-decoration: none;
    margin-left: 60px;
`

export const Text = styled.h4`
    color: #004242;
    text-align: center;
    font: normal normal medium 24px/32px Roboto;
    /* font-family:  Roboto;
    font-weight: medium; */
    width: 800px;
    margin-left: 300px;
    margin-right: 300px;
`


export const Buttons = styled.button`
display: flex;
color: white;
background-color:#707070;
align-items: center;
font-size: 16px;
margin: 16px;
margin-left: 218px;
width: 100px;
padding: 4px 16px;
border: 2px solid grey;
border-radius: 3px;
font-weight: bold
`

export const Header = styled.header`
display: flex;
flex-direction: column;
grid-area: header;
background-color: #FFC107;
width: 100%;
height: 60px;
box-shadow: 0px 6px 12px #00000029;
opacity: 1;
`

export const EditButton = styled.button`
color: black;
font-size: 16px;
margin: 16px;
width: 60px;
padding: 4px 16px;
border: 2px solid grey;
border-radius: 3px;
font-weight: bold
`

export const InvButton = styled.button`
background-color: #FFC107;
font-size: 16px;
margin: 16px;
width: 60px;
padding: 4px 16px;
border: 2px solid #FFC107;

font-weight: bold
`

export const DeleteButtons = styled.button`
background-color: #FFC107;
font-size: 16px;
margin: 24px;
margin-left: 350px;
border: 2px solid #FFC107;
border-radius: 3px;
font-weight: bold;
text-align: center;
cursor: pointer;
`

export const Input = styled.input`
padding: 8px;
margin: 8px;
margin-top:0px;
width:290px;
color: #000;
background: white;
border: none;
border-radius: 3px;
`;

export const Wrapper = styled.section`
display: flex;
flex-direction: column;
height: 310px;
background: #9CCC65 0% 0% no-repeat padding-box;
box-shadow: 0px 6px 12px #00000029;
border-radius: 10px;
opacity: 1;
`;

export const Bg = styled.section`
align-items: center;
`;

export const Section = styled.section`
    display: flex;
    gap: 20px;
    margin-top: 84px;
    margin-left: 60px;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;


export const DivLabel = styled.div`
    margin-left:24px
`;

export const Container = styled.div`
    height: 380px;
    overflow-y: auto;
    overflow-x: hidden;

`;

export const Label = styled.label`
display: inline-flex;
align-items: start;
margin-bottom: 4px;
margin-left:8px;
color: #004242;
font-size: 20px;
font-weight: 500;
text-decoration: none;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`