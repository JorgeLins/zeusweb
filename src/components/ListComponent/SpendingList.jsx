import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Box, H2, DeleteButtons, Description, Label, Div, DivLabel, Container, Wrapper} from "../../assets/Styles"
import { FaRegTrashAlt, FaAngleRight } from "react-icons/fa";

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
            <DivLabel>
                <Label>Histórico de rações</Label>
            </DivLabel>
            <Container>
            <Box>
                <Div> 
                    <div> 
                        <H2>Ração</H2>  
                        <H2>Data</H2>
                    </div>
                    <div> 
                    <Description>Preço(R$)</Description>
                    <Description>Quantidade(KG)</Description>
                    </div>
                </Div>
                <div>
                    <DeleteButtons onClick={deleteAllSpending}><FaRegTrashAlt/></DeleteButtons>
                </div>
            </Box>  
            {price.map((price, key) => {
                return(
                    <Box key={key}>
                    <Div> 
                    <div> 
                        <H2>{price.name}</H2>  
                        <H2>{price.createdAt}</H2>
                    </div>
                    <div> 
                    <Description>R$ {price.price}</Description>
                    <Description>{price.quantity}KG</Description>
                    </div>
                </Div>
                        <div>
                            <DeleteButtons onClick={() => deleteSpending(price._id)} ><FaRegTrashAlt/></DeleteButtons>
                        </div>
                            
                    </Box>  
                )
            })}
            </Container>
        </div>
    )
        

}

export default SpendingList;