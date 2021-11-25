import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Box, H2, DeleteButtons, InvButton, Label, Divs, Container} from "../../assets/Styles"
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
        <Container>
            <Divs>
            <Label>Histórico de rações</Label>

            </Divs>
            <Box >
                <H2>Ração</H2>
                 <H2>Preço(R$)</H2>
                <H2>Quantidade(KG)</H2>
                <H2>Data</H2>
                <div>
                    <DeleteButtons onClick={deleteAllSpending}><FaRegTrashAlt/></DeleteButtons>
                    <InvButton > </InvButton>
                </div>
            </Box>  
            {price.map((price, key) => {
                return(
                    <Box key={key}>
                        <H2>{price.name}</H2>
                        <div>
                         <H2>{price.price}</H2>
                        <H2>{price.quantity}</H2>
                        </div>
                        <H2>{price.createdAt}</H2>
                        <div>
                            <DeleteButtons onClick={() => deleteSpending(price._id)} ><FaRegTrashAlt/></DeleteButtons>
                            <InvButton > </InvButton>
                            {/* <EditButton onClick= {() => window.location.href = `/update/${price._id}`}><FaEdit/></EditButton> */}
                        </div>
                            
                    </Box>  
                )
            })}
        </Container>
    )
        

}

export default SpendingList;