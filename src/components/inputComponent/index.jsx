import React from "react";
import { Input } from "../../assets/Styles"


function InputComponent() {



    return (
        <div>
            <Input placeholder='Digite o nome da ração'></Input>
            <div>
                <Input placeholder='Digite o preço em reais'></Input>
                <div>
                    <Input placeholder='Digite a quantidade em kilos'></Input>
                </div>
            </div>
        </div>
    )
}

export default InputComponent;