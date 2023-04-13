import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Price from '../Price/Price';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb'


const Shop = () => {
    const [books, setBooks] = useState([])
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('books.json').then(res => res.json()).then(data => setBooks(data))
    }, [])

    useEffect(() => {
        console.log('called useEffect2')
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for (const id in storedCart) {
            const addedProduct = books.find(product => product.id == id)
            if (addedProduct) {
                const newQuantity = storedCart[id]
                addedProduct.quantity = newQuantity
                console.log(addedProduct)
                savedCart.push(addedProduct)
            }
            // step 2: get product from products state by using id
        }
        setCarts(savedCart)

    }, [books])


    const addtocart = (coming_product) => {
        let new_cart = []
        const exist = carts.find(prd => prd.id == coming_product.id)

        if (!exist) {

            coming_product.quantity = 1;
            new_cart = [...carts, coming_product]
        }
        else {
            const restProduct = carts.filter(pd => pd.id != coming_product.id)
            exist.quantity = exist.quantity + 1
            new_cart = [...restProduct, exist]

        }
        console.log(new_cart)
        setCarts(new_cart)
        addToDb(coming_product.id)

    }
    return (
        <div className='shop-component' >

            <div className='book-component'>
                <h1>Hello from Book Store</h1>
                <div className='book-show'>
                    {
                        books.map(book => <Books key={book.id} book={book} addtocart={addtocart}></Books>)
                    }
                </div>

            </div>

            <div className='price-component'>
                <Price carts={carts}></Price>
            </div>

        </div >
    );
};

export default Shop;