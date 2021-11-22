import React, { useState } from "react";
import api from "../../api";
import { Wrapper, Input } from "../../assets/Styles"
import { Buttons } from "../../assets/Styles"

function SpendingForm() {

   function refreshPage() {
      window.location.reload(false);
    }


   function newData() {
      return{
         name:'',
         price: 0,
         quantity:0

      }
   }

   const [data, setData] = useState(newData)

   function post() {
      api.post("/spending", data)
      .then((response) => {
         setData(response.data.spendings)
         console.log(response.data)
      })
      .catch(error => {console.log(error)})

      refreshPage()
   }

   
   


   return (
      <Wrapper>
            <div>
               <Input placeholder='Digite o nome da ração' onChange= {(event)=>{
                  setData({...data, name: event.target.value})
               }}></Input>
               <div>
                  <Input placeholder='Digite o preço em reais' onChange= {(event)=>{
                  setData({...data, price: event.target.value})
               }}></Input>
                  <div>
                     <Input placeholder='Digite a quantidade em kilos' onChange= {(event)=>{
                  setData({...data, quantity: event.target.value})
               }}></Input>
                  </div>
               </div>
            </div>
            <Buttons onClick={post}>Enviar</Buttons>
            {/* <Buttons onClick={deleteSpending}>Deletar todos</Buttons> */}
      </Wrapper>
   )

}

export default SpendingForm;

