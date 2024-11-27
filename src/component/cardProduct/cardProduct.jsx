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
                        <img src="https://images.tokopedia.net/img/cache/300-square/product-1/2019/2/11/37162619/37162619_7a06940f-8a3b-4fcc-8ba8-6f8982ebf9b8_700_383.jpg" alt="" />
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