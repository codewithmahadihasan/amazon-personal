import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Home from './Home/Home';
import OrderInfo from './OrderInfo';
import Result from './Result/Result';
import { deleteShoppingCart, removeFromDb } from './utilities/fakedb';

const Orders = () => {
    const { oldValue } = useLoaderData()
    const [cart, setCart] = useState(oldValue)

    const handelToClickDelete = (id) => {
        const result = cart.filter(product => product.id !== id)
        setCart(result);
        removeFromDb(id)
    }
    const crearCard = () => {
        setCart([])
        deleteShoppingCart()
    }


    return (
        <div className='flex'>
            <div className='mx-auto flex flex-col gap-8 mt-10'>
                {
                    cart.map(product => <OrderInfo key={product.id} handelToClickDelete={handelToClickDelete} product={product}></OrderInfo>)
                }
                {
                    cart.length === 0 && <Home></Home>
                }
            </div>
            <div className='bg-orange-200 pt-20'> <Result crearCard={crearCard} cart={cart}></Result></div>
        </div>
    );
};

export default Orders;