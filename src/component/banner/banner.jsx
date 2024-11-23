import React, { useState } from "react";
import './banner.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Banner = () => {

    const [buttonActive ,setButtonActive] = useState (false);
    const labelActive = (e) => {
        setButtonActive(true)
        console.log('active')
    }
    const labelDisable = (e) => {
        setButtonActive(false)
        console.log('disable')
    }

    return (
        <div className="banner-promo">
            <div className="image" onMouseOver={labelActive} onMouseOut={labelDisable}>
                <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/22/6d79d227-67fe-497a-a904-af990882e2ee.jpg.webp?ect=4g" alt="" />
            </div>
            <div className={`next-page ${buttonActive} ? "true" : "false"`}>
                <div className="button-right">
                    <button><IoIosArrowForward /></button>
                </div>
                <div className="button-left">
                    <button><IoIosArrowBack /></button>
                </div>
            </div>

            <div className="footer">
                <div className="page-control">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className="all-promo">
                    <a href="">Lihat Promo Lainnya</a>
                </div>
            </div>
        </div>
    )
}

export default Banner;