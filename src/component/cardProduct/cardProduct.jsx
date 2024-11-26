import React from "react";
import './cardProduct.css';
import iconStar from '../../assets/star.png'
import officialAccount from '../../assets/react.svg'

function CardProduct() {
    return (
        <>
            <div className="cardProduct-container">
                <div className="card">
                    <div className="img">
                        <img src="https://images.tokopedia.net/img/cache/300-square/product-1/2020/1/6/48690432/48690432_97a29ae2-7ec9-4c9e-bffc-b3d6d876f027_1296_1296" alt="" />
                    </div>
                    <div className="desc">
                        <p className="name">Music Sterei Earphone PINZY D7 Series doasdasdaasdsadsa dsaasdsads</p>
                        <div className="price">
                            <h4>Rp9.500</h4>
                            <div className="discont">
                                <p className="realPrice">Rp13.000</p>
                                <p className="percentage">27%</p>
                            </div>
                        </div>
                        <div className="location">
                            <img src={officialAccount} alt="" />
                            <p>Jakarta Barat</p>
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