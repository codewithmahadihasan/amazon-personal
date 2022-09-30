import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../utilities/fakedb';
import Product from '../Product/Product';
import Result from '../Result/Result';

import './Shops.css'

const Shops = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        const storeCart = getStoreCart()
        const saveCart = []
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storeCart[id]
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])

    const addToCard = (setProduct) => {
        console.log(setProduct)
        let newCart = []
        const exists = cart.find(product => product.id === setProduct.id)
        if (!exists) {
            setProduct.quantity = 1;
            newCart = [...cart, setProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== setProduct.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(setProduct.id)
    }



    return (
        <div className='body'>
            <div className='product'>
                {
                    products.map(product => <Product key={product.id} product={product} addToCard={addToCard}></Product>)
                }

            </div>
            <div className='product-result'>

                <Result cart={cart} ></Result>
            </div>
        </div>
    );
};




export default Shops;