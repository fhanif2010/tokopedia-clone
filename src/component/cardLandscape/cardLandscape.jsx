import React from "react";
import { IoMdRefresh } from "react-icons/io";
import './cardLandscape.css'

function CardLandscape() {
    return (
        <div className="container">
            <div className="label">
                <h2>Banyak orang mencari ini</h2>
                <div>setelah cari bangku</div>
                <button>
                    <IoMdRefresh className="icon" />
                    <span>Muat Lainnya</span>
                </button>
            </div>
            <div className="card-list">
                <div className="card">
                    <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/4/18/209df73b-f553-454d-aedf-9155afedc8d4.jpg.webp?ect=4g" alt="" />
                    <div className="desc">
                        <h4>Kursi</h4>
                        <p>27 Product</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/9/27/ea0605de-26d0-4793-9722-8d3239467f2d.jpg.webp?ect=4g" alt="" />
                    <div className="desc">
                        <h4>Meja</h4>
                        <p>17 Product</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/2/7/09850edf-d2ca-4aca-b9bb-f0745e703032.jpg.webp?ect=4g" alt="" />
                    <div className="desc">
                        <h4>Rak</h4>
                        <p>13 Product</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/5/22/0a0af7ca-6c17-49ba-a8ed-e377c70517da.jpg.webp?ect=4g" alt="" />
                    <div className="desc">
                        <h4>Bangku Kayu</h4>
                        <p>31 Product</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.tokopedia.net/img/cache/100-square/hDjmkQ/2022/12/27/81fd7d83-cf81-4b7b-9eae-b59931b6ba7c.jpg.webp?ect=4g" alt="" />
                    <div className="desc">
                        <h4>Bangku Panjang</h4>
                        <p>27 Product</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2023/1/25/04f18d6a-511b-47d3-b7b4-d0ee642ed3b5.jpg.webp?ect=4g" alt="" />
                    <div className="desc">
                        <h4>Bangku Outdor</h4>
                        <p>27 Product</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/4/18/209df73b-f553-454d-aedf-9155afedc8d4.jpg.webp?ect=4g" alt="" />
                    <div className="desc">
                        <h4>Kursi</h4>
                        <p>27 Product</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/4/18/209df73b-f553-454d-aedf-9155afedc8d4.jpg.webp?ect=4g" alt="" />
                    <div className="desc">
                        <h4>Kursi</h4>
                        <p>27 Product</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLandscape;