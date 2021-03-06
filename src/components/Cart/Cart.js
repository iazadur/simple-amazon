import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let totalQuantity = 0
    let total = 0
    for (const product of cart) {

        if (!product.quantity) {
            product.quantity = 1
        }
        console.log(product);
        total = total + product.price * product.quantity
        console.log(product.quantity);
        totalQuantity = totalQuantity + product.quantity
        console.log(totalQuantity);
    };

    // const totalQuantity = cart.reduce((total, product) => total + !product.quantity ? 1 : product.quantity, 0)
    // const total = cart.reduce((total, product) => total + (product.price * !product.quantity ? 1 : product.quantity), 0)
    const shipping = total > 0 ? 15 : 0
    const tax = total + shipping * 0.10
    const grandTotal = total + tax + shipping
    return (
        <div>
            <h3> Order Summary </h3>
            <h5 > Items Ordered: {totalQuantity} </h5>
            <br />
            <p>total price:{total.toFixed(2)} </p>
            <p>Shipping:{shipping.toFixed(2)}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grand Total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};
export default Cart;