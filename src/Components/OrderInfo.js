import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const OrderInfo = ({ product, handelToClickDelete }) => {

    const { id, price, name, img, shipping, quantity } = product;

    return (
        <div className='flex w-[576px]   items-center justify-between border-2 rounded-xl pr-6'>
            <div className='flex gap-10 items-center'>
                <div>
                    <img className='w-36 rounded-xl p-2' src={img} alt="" />
                </div>
                <div className='text-start '>
                    <h1 className='font-bold'>{name}</h1>
                    <h1>Price : <span className='text-yellow-500 font-bold'>${price}</span> </h1>
                    <h3>Shipping Charge : <span className='text-yellow-500'>${shipping}</span></h3>
                    <h3>Quantity : <span className='text-yellow-500'>{quantity}</span></h3>
                </div>
            </div>
            <div>
                <button onClick={() => handelToClickDelete(id)} className=' px-4 py-3 hover:bg-red-800 bg-red-500 rounded-full'><FontAwesomeIcon className='text-3xl text-red-300' icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default OrderInfo;