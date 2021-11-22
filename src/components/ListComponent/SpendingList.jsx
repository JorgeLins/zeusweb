import React, { useState, useEffect } from "react";
import api from "../../api";
import { Box, H2, DeleteButtons} from "../../assets/Styles"

function SpendingList(){

    function refreshPage() {
        window.location.reload(false);
      }



    const [price, setPrice] = useState([]);

    useEffect(() => {
        get()
    }, []);

    const get = () =>  {
        api.get("/spending")
        .then((response) => {
            setPrice(response.data.spendings)
        })
        .catch((err) =>{
            console.error("erro" + err);
        });
    } 

    function deleteSpending(id){
        api.delete(`/spending/${id}`)
        refreshPage()
    }       

    function deleteAllSpending(){
        api.delete("/spending",)
        refreshPage()
    }  


    return(
        <div>
            <Box >
                <H2>Ração</H2>
                 <H2>Preço(R$)</H2>
                <H2>Quantidade(KG)</H2>
                <DeleteButtons onClick={deleteAllSpending}>Deletar todos</DeleteButtons>
            </Box>  
            {price.map((price, key) => {
                return(
                    <Box key={key}>
                        <H2>{price.name}</H2>
                         <H2>{price.price}</H2>
                        <H2>{price.quantity}</H2>
                        {/* <H2>{price.createdAt}</H2> */}
                        <DeleteButtons onClick={() => deleteSpending(price._id)} >Deletar</DeleteButtons>
                    </Box>  
                )
            })}
        </div>
    )
        

}

export default SpendingList;