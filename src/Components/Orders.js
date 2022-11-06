import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Home from './Home/Home';
import OrderInfo from './OrderInfo';
import Result from './Result/Result';
import { deleteShoppingCart, removeFromDb } from './utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const { oldValue } = useLoaderData()
    const [cart, setCart] = useState(oldValue)

    const handelToClickDelete = (id) => {
        const result = cart.filter(product => product._id !== id)
        setCart(result);
        removeFromDb(id)
    }
    const crearCard = () => {
        setCart([])
        deleteShoppingCart()
    }


    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className='mx-auto flex flex-col gap-8 mt-10'>
                {
                    cart.map(product => <OrderInfo key={product._id} handelToClickDelete={handelToClickDelete} product={product}></OrderInfo>)
                }
                {
                    cart.length === 0 && <div>
                        <h1 className='max-w-lg text-center mx-auto mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>Buy Something</h1>
                        <Home></Home>
                    </div>
                }
            </div>
            <div className='text-center bg-orange-200'>
                <Result crearCard={crearCard} cart={cart}>
                    <Link to='/shiping'><button className='bg-orange-400 hover:bg-orange-600' onClick={crearCard} >Shiping Now <FontAwesomeIcon icon={faArrowRight} /></button></Link>

                </Result></div>
        </div >
    );
};

export default Orders;