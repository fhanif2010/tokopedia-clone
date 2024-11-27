import React from "react";
import CardProduct from "../cardProduct/cardProduct";
import './cardPotrait.css'

function CardPotrait( {product}) {
    return (
        <div className="cardPotrait-container">
            <div className="label">
                <h2>Bayar di Tempat &lt; 49 Ribu</h2>
            </div>
            <div className="card-list">
                {product.map((item, index)=> <CardProduct key={index} data={item}/>)}
            </div>
        </div>
    )
}

export default CardPotrait;