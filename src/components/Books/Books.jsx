import React from 'react';
import './Books.css'
import { Link, useNavigate } from 'react-router-dom';


const Books = (props) => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/details/${props.book.id}`)

    }
    return (
        <div className='book'>

            <img src={props.book.img} alt="" />
            <h3>{props.book.name}</h3>
            <p className='price'>price {props.book.price}</p>

            <div className='two-buttons'>
                <button onClick={() => { props.addtocart(props.book) }} className='button-book'>Add to cart</button>

                <button onClick={handleNavigate} className='button-book'>See Details</button>
            </div>

        </div>
    );
};


export default Books;