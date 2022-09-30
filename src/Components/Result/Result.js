import React from 'react';
import "./Result.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const Result = (props) => {
    const { cart } = props
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
        <div className='all-data'>
            <h2>
                Order Summary
            </h2>
            <div className='result'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${all.toFixed(2)}</h4>
            </div>
            <button id='clear'>Clear Card </button>
            <button id='review'>Review Order</button>
        </div>

    );

};

export default Result;