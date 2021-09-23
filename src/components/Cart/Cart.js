import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    /* let total = 0
    cart.forEach(product => {
        total=product.price+total
    }); */
    const total = cart.reduce((total, product) => total + product.price, 0)
    const shipping = 15
    const tax = (total + shipping) * 0.10
    const grandTotal = total+tax+shipping
    return (
        <div>
            <h3> Order Summary </h3>
            <h5 > Items Ordered: {cart.length} </h5>
            <br />
            <p>total price:{total.toFixed(2)} </p>
            <p>Shipping:{ shipping.toFixed(2) }</p>
            <p>Tax:{ tax.toFixed(2) }</p>
            <p>Grand Total:{grandTotal.toFixed(2) }</p>
        </div>
    );
};
export default Cart;