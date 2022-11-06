import React from 'react';
import "./Result.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';




const Result = (props) => {
    const { cart, crearCard, children } = props
    let total = 0;
    let shipping = 0;
    let quantity = 0

    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping * product.quantity
    }
    let tax = total * 0.1;
    let all = tax + total + shipping;

    return (
        <div className='all-data bg-orange-200 pt-20 text-center md:text-start'>
            <h2 className='text-2xl font-bold text-center'>
                Order Summary
            </h2>
            <div className='result '>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${all.toFixed(2)}</h4>
            </div>
            <button onClick={crearCard} id='clear'>Clear Card <FontAwesomeIcon icon={faTrash} /></button>

            {
                children
            }

        </div>

    );

};

export default Result;