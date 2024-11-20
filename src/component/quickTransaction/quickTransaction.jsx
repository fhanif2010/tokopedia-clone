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
                        <div className="cover"><img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt=""/></div>
                        <div className="cover"><img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt=""/></div>
                        <div className="cover"><img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt=""/></div>
                        <div className="cover"><img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt=""/></div>
                        <div className="cover"><img src="https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp" alt=""/></div>
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
                            <button></button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default QuickTransaction;