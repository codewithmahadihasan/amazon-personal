import React from 'react';

const Cards = ({ product }) => {

    const { img, stock, shipping, seller, ratings, price, name } = product
    return (
        <div>
            <div className="overflow-hidden transition-shadow duration-300 border-2 bg-white rounded">
                <a href="/" aria-label="Article">
                    <img
                        src={img}
                        className="object-cover mx-auto m-6  h-64 rounded"
                        alt=""
                    />
                </a>
                <div className="py-5 mx-4 text-center">
                    <p className="mb-4 text-xs font-semibold text-gray-600 uppercase">
                        Seller : {seller}
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        <p className="text-2xl font-bold leading-5">
                            {name.slice(0, 20)}
                        </p>
                    </a>
                    <div className='flex justify-around px-10'>
                        <h1 className=' font-semibold text-xl text-red-400'>Price : {price}</h1>
                        <h1 className=' font-semibold text-lg text-yellow-600'>Shipping Chage : {shipping}</h1>
                    </div>
                    <div className='flex justify-around'>
                        <p className=" text-gray-700">
                            Stock : {stock}
                        </p>

                        <p>Ratting : ⭐{ratings}</p>
                    </div>

                    <button className='w-full py-2 text-white text-xl bg-orange-500 hover:bg-orange-700'>About This Product</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;