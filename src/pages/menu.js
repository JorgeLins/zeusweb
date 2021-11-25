import React from "react";
import SpendingList from "../components/ListComponent/SpendingList";
import SpendingForm from "../components/FormsComponent/index.jsx";
import { Header, Wh2, Section, Bg, P } from "../assets/Styles"
import { FaBolt } from "react-icons/fa";

import '../assets/App.css'

function Menu() {
  
  return(
    <Bg>
    <Header>
      <Wh2><FaBolt/>Desafio Zeus</Wh2>
    </Header>

      <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
         sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam
           et justo duo dolores et ea rebum.</P>

      <Section>
        <SpendingForm/>
        <SpendingList/>
      </Section>

    </Bg>
    )
}

export default Menu;
