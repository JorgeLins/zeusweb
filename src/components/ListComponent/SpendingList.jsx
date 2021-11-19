import React, { useState, useEffect } from "react";
import api from "../../api";
import { Box, H2} from "../../assets/Styles"

function SpendingList(){



    const [price, setPrice] = useState([]);

    useEffect(() => {
        api.get("/spending")
        .then((response) => {
            setPrice(response.data.spendings)
        })
        .catch((err) =>{
            console.error("erro" + err);
        });
    }, []);


    return(
        <div>
            <Box >
                <H2>Ração</H2>
                 <H2>Preço(R$)</H2>
                <H2>Quantidade(KG)</H2>
            </Box>  
            {price.map((price, key) => {
                return(
                    <Box key={key}>
                        <H2>{price.name}</H2>
                         <H2>{price.price}</H2>
                        <H2>{price.quantity}</H2>
                    </Box>  
                )
            })}
        </div>
    )
        

}

export default SpendingList;