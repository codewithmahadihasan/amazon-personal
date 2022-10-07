import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoreCart, removeFromDb } from '../utilities/fakedb';
import Product from '../Product/Product';
import Result from '../Result/Result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './Shops.css'
import { Link, useLoaderData } from 'react-router-dom';

const Shops = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([])

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

    const crearCard = () => {
        setCart([])
        deleteShoppingCart()
    }

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

                <Result cart={cart} crearCard={crearCard} >
                    <Link to={'/order'}> <button id='review'>Review Order <FontAwesomeIcon icon={faArrowRight} /> </button></Link>
                </Result>
            </div>
        </div>
    );
};




export default Shops;