import React, { useState } from 'react'
import './cardCategory.css'
import CardProduct from '../cardProduct/cardProduct'

function CardCategory() {
    const background = ['https://images.tokopedia.net/img/cache/250/attachment/2019/11/7/75545163/75545163_f6ac6050-3872-48e8-b445-02a33e346061.jpg', 
        'https://images.tokopedia.net/img/cache/250/attachment/2019/10/23/40768394/40768394_7c9ad641-8a48-4b63-a4cc-cae37bbcaae1.jpg',
        'https://images.tokopedia.net/img/cache/250/attachment/2019/10/23/40768394/40768394_6a24460c-fbc2-40ab-bea6-3e557474f1d7.jpg',
        'https://images.tokopedia.net/img/cache/250/ndZFpx/2023/10/6/b224bcca-2338-49cc-b565-2e96f084e8f4.jpg',
        'https://images.tokopedia.net/img/cache/250/ndZFpx/2023/10/6/b224bcca-2338-49cc-b565-2e96f084e8f4.jpg',
    ]

    const [headCategory, setHeadCategory] = useState([true, false, false, false])

    const handleHead = (index) => {
        setHeadCategory(headCategory.map((_,idx) => idx === index))
    }
    const catgory = [
        {
            nama: 'Peralatan Masak',
        },
        {
            nama: 'Minuman',
        },
        {
            nama: 'Baju Tidur',
        },
        {
            nama: 'Mirip yang kamu cek'
        }
    ]
    return (
        <>
            <div className='cardCategory-container'>
                <div className='head'>
                    {catgory.map((catgory, index) => (
                        <button key={index} className='one' style={{backgroundImage: `url(${background[index]})`}} id={catgory.id} onClick={() => handleHead(index)}>
                            <div className={`detail ${headCategory[index] ? 'active' : ''}`}>{catgory.nama}</div>
                        </button>
                    ))}
                </div>
                <div className='card-list'>
                    <CardProduct />
                </div>
            </div>
        </>
    )
}

export default CardCategory