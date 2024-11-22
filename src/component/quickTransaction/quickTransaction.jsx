import React from "react";
import './quickTransaction.css'

function QuickTransaction() {
    return (
        <div className="quickTransaction-container">
            <div className="content">
                <div className="card-content-left">
                    <div className="label">
                        <h2>Kategory Pilihan</h2>
                    </div>
                    <div className="list-item">
                        <div className="cover"><img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt="" /></div>
                        <div className="cover"><img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt="" /></div>
                        <div className="cover"><img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt="" /></div>
                        <div className="cover"><img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt="" /></div>
                        <div className="cover"><img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt="" /></div>
                    </div>
                </div>
                <div className="card-content-right">
                    <div className="label">
                        <h2>Top Up & Tagihan</h2>
                        <a href="">Lihat Semua</a>
                    </div>
                    <div className="table-transaction">
                        <div className="category">
                            <button><p>Pulsa</p></button>
                            <button><p>Paket Data</p></button>
                            <button><p>Flight</p></button>
                            <button><p>Listrik PLN</p></button>
                            <button><p>:</p></button>
                        </div>
                        <div className="action">
                            <div className="action2">
                                <div className="colom">
                                    <span>Nomor Telepon</span>
                                    <div className="input">
                                        <input type="text" name="" id="" placeholder="Masukan Nomor" />
                                    </div>
                                </div>
                                <div className="colom">
                                    <span>Nominal</span>
                                    <div className="input">
                                        <input type="text" name="" id="" placeholder="Pilih Nominal" />
                                    </div>
                                </div>
                                <div className="btn">
                                    <div >
                                        <button>Beli</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="btn-category">
                    <div className="btn-list">
                        <a>
                            <img src="https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png" alt="" />
                            <p>Kategory</p>
                        </a>
                        <a>
                            <img src="https://images.tokopedia.net/img/cache/160-square/iEWsxH/2023/4/27/4b81a081-0f97-4b9d-9ee1-8be5c938b14d.png" alt="" />
                            <p>Handphone & Tablet</p>
                        </a>
                        <a>
                            <img src="https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/75f2fb8a-a4ca-4cd6-a166-7279daef1d5b.png" alt="" />
                            <p>Top-Up & Tagihan</p>
                        </a>
                        <a>
                            <img src="https://images.tokopedia.net/img/cache/160-square/iEWsxH/2023/4/27/ad58b90c-d307-40b8-9f39-0146c67b4cdc.png" alt="" />
                            <p>Elektronik</p>
                        </a>
                        <a>
                            <img src="https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/6/65d13c55-c5c6-4ece-b957-99912c3f8f3c.png" alt="" />
                            <p>Perawatan Hewan</p>
                        </a>
                        <a>
                            <img src="https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/6/b5af3e8e-bc2e-48b4-8d00-6d49ec8f4d50.png" alt="" />
                            <p>Travel & Entertainment</p>
                        </a>
                        <a>
                            <img src="https://images.tokopedia.net/img/cache/160-square/iEWsxH/2023/4/27/8b1b8635-8822-4007-90c3-403aa53cd207.png" alt="" />
                            <p>Keuangan</p>
                        </a>
                        <a>
                            <img src="https://images.tokopedia.net/img/cache/160-square/iEWsxH/2023/4/27/8b1b8635-8822-4007-90c3-403aa53cd207.png" alt="" />
                            <p>Keuangan</p>
                        </a>
                    </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default QuickTransaction;