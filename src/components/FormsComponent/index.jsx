import React, { useState } from "react";
import api from "../../services/api";
import { Wrapper, Input } from "../../assets/Styles"
import { Buttons, Div, Label, Tittle } from "../../assets/Styles"
import { FaAngleRight } from "react-icons/fa";

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
            <Label>Adicione aqui a ração do seu pet</Label>
            <Div>
               <Tittle>Nome da ração</Tittle>
               <Input placeholder='Digite o nome da ração' onChange= {(event)=>{
                  setData({...data, name: event.target.value})
               }}></Input>
               <Div>
               <Tittle>Preço(R$)</Tittle>
                  <Input placeholder='Digite o preço em reais' onChange= {(event)=>{
                  setData({...data, price: event.target.value})
               }}></Input>
                  <Div>
                  <Tittle>Quantidade(KG)</Tittle>
                     <Input placeholder='Digite a quantidade em kilos' onChange= {(event)=>{
                  setData({...data, quantity: event.target.value})
               }}></Input>
                  </Div>
               </Div>
            </Div>
            <Buttons onClick={post}>Enviar   <FaAngleRight/></Buttons>
            {/* <Buttons onClick={deleteSpending}>Deletar todos</Buttons> */}
      </Wrapper>
   )

}

export default SpendingForm;

