import React from 'react';
import './Books.css'

const Books = (props) => {
    return (
        <div>

            <img src={props.book.img} alt="" />
            <h3>{props.book.name}</h3>
            <p className='price'>price {props.book.price}</p>
            <button onClick={() => { props.addtocart(props.book) }} className='button-book'>Add to cart</button>
        </div>
    );
};


export default Books;