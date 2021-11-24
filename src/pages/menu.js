import React from "react";
import SpendingList from "../components/ListComponent/SpendingList";
import SpendingForm from "../components/FormsComponent/index.jsx";

import '../assets/App.css'

function Menu() {
  
  return(
    <section>

      <section>
        <SpendingForm/>
      </section>

      <SpendingList/>
    </section>
    )
}

export default Menu;
