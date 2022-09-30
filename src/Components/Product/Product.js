import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {

    const { name, img, seller, price, ratings } = props.product
    return (
        <div className='product'>
            <div className='card'>
                <div className='info'>
                    <div className='image'><img src={img} alt="" /></div>
                    <h3>{name.slice(0, 20)}. </h3>
                    <h4>Price : ${price} </h4>
                    <h4>Raitting {ratings} Star </h4>
                    <p>Manufacturer : {seller} </p>
                </div>
                <button onClick={() => { props.addToCard(props.product) }}><p>Add to Card  <FontAwesomeIcon icon={faShoppingCart} /></p>
                </button>
            </div>
        </div>
    );
};

export default Product;