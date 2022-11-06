import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoreCart } from '../utilities/fakedb';
import Product from '../Product/Product';
import Result from '../Result/Result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './Shops.css'
import { Link } from 'react-router-dom';

const Shops = () => {

    const [products, setProduct] = useState([])
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([])
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(9)

    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setProduct(data.products)
            })
    }, [page, size])

    const pages = Math.ceil(count / size)

    useEffect(() => {
        const storeCart = getStoreCart()
        const saveCart = []
        const idof = Object.keys(storeCart)
        fetch('http://localhost:5000/productOfId', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(idof)
        })
            .then(res => res.json())
            .then(data => {
                for (const id in storeCart) {
                    const addedProduct = data.find(product => product._id === id)
                    if (addedProduct) {
                        const quantity = storeCart[id]
                        addedProduct.quantity = quantity
                        saveCart.push(addedProduct)
                    }
                }
                setCart(saveCart)

            })

    }, [products])

    const crearCard = () => {
        setCart([])
        deleteShoppingCart()
    }

    const addToCard = (setProduct) => {

        let newCart = []
        const exists = cart.find(product => product._id === setProduct._id)
        if (!exists) {
            setProduct.quantity = 1;
            newCart = [...cart, setProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== setProduct._id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(setProduct._id)
    }



    return (
        <div className='py-10'>
            <div className='body'>
                <div className='product'>
                    {
                        products.map(product => <Product key={product._id} product={product} addToCard={addToCard}></Product>)
                    }

                </div>
                <div className='product-result'>

                    <Result cart={cart} crearCard={crearCard} >
                        <Link to={'/order'}> <button id='review'>Review Order <FontAwesomeIcon icon={faArrowRight} /> </button></Link>

                    </Result>
                </div>
            </div>

            <div className='pb-28 text-center'>
                <h1>
                    Curent Page : {page + 1} & size {size}
                </h1>

                {
                    [...Array(pages).keys()].map(number => <button
                        onClick={() => setPage(number)}
                        className={page === number ? "inline-flex items-center text-white justify-center w-8 h-8 text-sm border-2 rounded shadow-md m-1 dark:bg-gray-800 dark:border-yellow-500" : "inline-flex items-center text-white justify-center w-8 h-8 text-sm border rounded shadow-md m-1 dark:bg-gray-500 dark:border-gray-100"} key={number}>{number + 1}</button>)
                }

                <select className='inline-flex items-center text-white border-2 justify-center w-20 h-8 text-sm border-yellow-400 text-center rounded shadow-md m-1 dark:bg-gray-800 ' onChange={event => setSize(event.target.value)}>
                    <option className='w-20 ' value="5">5</option>
                    <option value="10" selected >10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>

            </div>

        </div>
    );
};




export default Shops;