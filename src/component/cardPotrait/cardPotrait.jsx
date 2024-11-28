import React from "react";
import CardProduct from "../cardProduct/cardProduct";
import './cardPotrait.css'

function CardPotrait({ product }) {
    return (
        <div className="cardPotrait-container">
            <div className="label">
                <h2>Bayar di Tempat &lt; 49 Ribu</h2>
            </div>
            <div style={{ height: '343px', width: '1208px', overflow: 'hidden', position: 'relative', display: 'block'}}>
                <div className="card-list">
                    {product.map((item, index) => <CardProduct key={index} data={item} />)}
                </div>
                <div className="carousel-nav" style={{ position: 'absolute', top: '50%', left: 0}}>
                    <button >Prev</button>
                </div>
                <div className="carousel-nav" style={{position: 'absolute', top: '50%', right: 7}}>
                    <button style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', outline: 'none'}}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default CardPotrait;