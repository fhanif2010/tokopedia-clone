import React, { useEffect, useState } from "react";
import CardProduct from "../cardProduct/cardProduct";
import './cardPotrait.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CardPotrait({ product }) {

    return (
        <div className="cardPotrait-container">
            <div className="label">
                <h2>Bayar di Tempat &lt; 49 Ribu</h2>
            </div>
            <div className="carosel-product">
                <div className="card-list">
                    {product.map((item, index) => <CardProduct key={index} data={item} />)}
                </div>
                <div className="carousel-btn" style={{ left: 0 }}>
                    <button><IoIosArrowBack /></button>
                </div>
                <div className="carousel-btn" style={{right: 7}}>
                    <button><IoIosArrowForward /></button>
                </div>
            </div>
        </div>
    )
}

export default CardPotrait;