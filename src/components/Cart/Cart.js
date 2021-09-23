import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0
    cart.forEach(product => {
        total=product.price+total
    });
    return (
        <div>
            <h3> Order Summary </h3>
            <h5 > Items Ordered: {cart.length} </h5>
            <p>total price:{total} </p>
        </div>
    );
};
export default Cart;