import React from "react";
import './cardProduct.css';
import iconStar from '../../assets/star.png'
import officialAccount from '../../assets/react.svg'

const CardProduct = ({data}) => {
    return (
        <>
            <div className="cardProduct-container">
                <div className="card">
                    <div className="img">
                        <img src={data && data.image} alt="" />
                    </div>
                    <div className="desc">
                        <p className="name">{data && data.title}</p>
                        <div className="price">
                            <h4>Rp{data && data.price}</h4>
                            <div className="discont">
                                <p className="realPrice">Rp13.000</p>
                                <p className="percentage">27%</p>
                            </div>
                        </div>
                        <div className="location">
                            <img src={officialAccount} alt="" />
                            <p>{data && data.location}</p>
                        </div>
                        <div className="point">
                            <div className="rating">
                                <img src={iconStar} alt="" />
                                <p>4.8</p>
                            </div>
                            |
                            <p>500+ terjual</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProduct;