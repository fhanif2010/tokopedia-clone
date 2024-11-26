import React from "react";
import './home.css'
import smartphone from '../../assets/smartphone.svg'
import { IoIosSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import Banner from "../../component/banner/banner.jsx";
import QuickTransaction from "../../component/quickTransaction/quickTransaction.jsx";
import CardLandscape from "../../component/cardLandscape/cardLandscape.jsx";
import CardPotrait from "../../component/cardPotrait/cardPotrait.jsx";

function Home() {
    return (
        <>
            <div className="home-container">
                <div>
                    <div className="home-header">
                        <div className="downloadApp">
                            <img src={smartphone} alt="" />
                            <span>Download Tokopedia App</span>
                        </div>
                        <div className="action">
                            <span>Tentang Kami</span>
                            <span>Mitra Tokopedia</span>
                            <span>Mulai Berjualan</span>
                            <span>Promo</span>
                            <span>Tokopedia Care</span>
                        </div>
                    </div>
                    <div className="home-header-action">
                        <div className="logo">
                            <img src="https://images.tokopedia.net/img/oauth/background/tkp-logo.png" alt="" />
                        </div>
                        <div className="kategori">
                            <span>Kategori</span>
                        </div>
                        <div className="search-bar">
                            <span>
                                <IoIosSearch />
                            </span>
                            <input type="text" name="" id="" placeholder="Cari di Tokopedia" />
                        </div>
                        <div className="shopping-cart">
                            <LuShoppingCart />
                        </div>
                        <div className="--"></div>
                        <div className="btn-sign">
                            <button className="login">Masuk</button>
                            <button className="regist">Daftar</button>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="trend-list">
                            <a href="">Samsung Note 10</a>
                            <a href="">Charger Mobil</a>
                            <a href="">Samsung A73</a>
                            <a href="">Pull Up Bar</a>
                            <a href="">Hdd 1tb</a>
                            <a href="">Xbox Seris X</a>
                            <a href="">Samsung A73</a>
                            <a href="">Pull Up Bar</a>
                            <a href="">Hdd 1tb</a>
                            <a href="">Xbox Seris X</a>
                        </div>
                        <div className="location">
                            <MdOutlineLocationOn />
                            <p> Dikirim Ke </p>
                            <p><b>Kota Tangerang Selatan</b></p>
                            <RiArrowDropDownLine />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-content">
                <div className="landing-page">
                    <Banner />
                </div>
            </div>
            <div className="home-content">
                <div className="landing-page">
                    <QuickTransaction />
                </div>
            </div>
            <div className="home-content">
                <div className="colom-product">
                    <CardLandscape />
                </div>
            </div>
            <div className="home-content">
                <div className="colom-product">
                    <CardPotrait />
                </div>
            </div>
            <hr style={{ height: '8px', backgroundColor: '#F0F3F7', border: 'none'}}/>
            <div className="home-content">
                <div className="colom-product">
                    <CardPotrait />
                </div>
            </div>
        </>
    )
}

export default Home;