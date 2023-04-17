import React from 'react';
import './Price.css'
import { useNavigate } from 'react-router-dom';

const Price = (props) => {
    console.log(props)
    let totalprice = 0
    for (const book of props.carts) {
        totalprice = totalprice + book.price * book.quantity;
    }


    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/review')
    }

    return (
        <div className='price-show'>


            <button onClick={handleNavigate} className='button-price'>{totalprice} tk</button>
        </div>
    );
};

export default Price;