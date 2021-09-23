import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
    const { name, img, price, stock, seller } = props.product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.HandleAddToCart(props.product)} className='btn-regular'><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;