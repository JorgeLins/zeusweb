import React from "react";
import SpendingList from "./components/ListComponent/SpendingList";
import SpendingForm from "./components/FormsComponent/index.jsx";

import './assets/App.css'

function Update() {
  
  return(
    <section>

      <section>
        <SpendingForm/>
      </section>

      <SpendingList/>
    </section>
    )
}
