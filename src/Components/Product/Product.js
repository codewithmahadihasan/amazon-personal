import React from 'react';
import './Product.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {

    const { name, img, seller, price, ratings } = props.product
    return (
        <div className='product'>
            <div className='border-2 border-gray-200 rounded-lg'>
                <div className=' mx-auto p-2.5'>
                    <div className='w-64 rounded h-64'><img className='rounded-lg border-2 border-gray-100' src={img} alt="" /></div>

                    <h3 className='text-lg font-bold mt-3'>{name.slice(0, 20)}. </h3>
                    <h4 className='text-md font-semibold '>Price : ${price} </h4>
                    <div className='my-2'>

                        <h4 className='text-md font-semibold ' >Raitting {ratings} Star </h4>
                        <p className='text-md  mt-0'>Manufacturer : {seller} </p>
                    </div>


                </div>
                <button className='bg-orange-400 hover:bg-orange-700 w-full h-10 rounded-b-lg' onClick={() => { props.addToCard(props.product) }}><p>Add to Card  <FontAwesomeIcon icon={faShoppingCart} /></p>
                </button>
            </div>
        </div>
    );
};

export default Product;