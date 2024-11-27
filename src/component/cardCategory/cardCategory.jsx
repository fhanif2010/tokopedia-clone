import React, { useState } from 'react'
import './cardCategory.css'
import CardProduct from '../cardProduct/cardProduct'

function CardCategory() {
    const [headCategory, setHeadCategory] = useState([true, false, false, false])

    const handleHead = (index) => {
        setHeadCategory(headCategory.map((_,idx) => idx === index))
    }
    const catgory = [
        {
            nama: 'Peralatan Masak',
            id: 'one',
        },
        {
            nama: 'Minuman',
            id: 'two',
        },
        {
            nama: 'Baju Tidur',
            id: 'tree',
        },
    ]
    return (
        <>
            <div className='cardCategory-container'>
                <div className='head'>
                    {catgory.map((catgory, index) => (
                        <button key={index} className='one' id={catgory.id} onClick={() => handleHead(index)}>
                            <div className={`detail ${headCategory[index] ? 'active' : ''}`}>{catgory.nama}</div>
                        </button>
                    ))}
                    
                    <button className='four'>
                        <div className='detail'>Mirip yang kamu cek</div>
                    </button>
                </div>
                <div className='card-list'>
                    <CardProduct />
                </div>
            </div>
        </>
    )
}

export default CardCategory