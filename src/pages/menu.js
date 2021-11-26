import React from "react";
import SpendingList from "../components/ListComponent/SpendingList";
import SpendingForm from "../components/FormsComponent/index.jsx";
import { Header, Wh2, Section, Bg, Text } from "../assets/Styles"
import { FaBolt } from "react-icons/fa";

import '../assets/App.css'

function Menu() {
  
  return(
    <Bg>
    <Header>
      <Wh2><FaBolt/>Desafio Zeus</Wh2>
    </Header>
      <Text>Sempre que for comprar ração você pode abrir o aplicativo e simplesmente adicionar o gasto daquela ração. Use o seu computador para visualizar os dados, pois nele você tera acesso a mais informações.</Text>


      <Section>
        <SpendingForm/>
        <SpendingList/>
      </Section>

    </Bg>
    )
}

export default Menu;
