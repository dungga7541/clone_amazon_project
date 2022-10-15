import React from 'react';
import './Products.css';

function Products({id, title, price, rating, img}) {
    return (
        <div className='product'>
            <div className='product_info'>
                <p className='product_title'>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    }
                </div>
            </div>
            <img src={img}></img>
            <button className='add_product'>Add to basket</button>
        </div>
    );
}

export default Products;
