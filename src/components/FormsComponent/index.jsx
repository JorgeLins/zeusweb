import React, { useState } from "react";
import api from "../../api";
import Button from "../ButtonComponent";
import { Wrapper, Input } from "../../assets/Styles"

function SpendingForm() {


   function newData() {
      return{
         name:'',
         price: 0,
         quantity:0

      }
   }

   const [data, setData] = useState(newData())

   function post() {
      api.post("/spending/", newData())
      .then(response => {
         setData(response.data)
         console.log(response.data)
      })
      .catch(error => console.log("Erro"))
   }

   return (
      <Wrapper>
            <div>
               <Input placeholder='Digite o nome da ração' onClick= {(event)=>{
                  setData({...data, name: event.target.value})
               }}></Input>
               <div>
                  <Input placeholder='Digite o preço em reais' onClick= {(event)=>{
                  setData({...data, price: event.target.value})
               }}></Input>
                  <div>
                     <Input placeholder='Digite a quantidade em kilos' onClick= {(event)=>{
                  setData({...data, quantity: event.target.value})
               }}></Input>
                  </div>
               </div>
            </div>
            <Button onClick={post}></Button>

      </Wrapper>
   )

}

export default SpendingForm;

