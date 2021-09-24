import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storeCart = []
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                storeCart.push(addedProduct)
            }
            console.log(storeCart);
            setCart(storeCart)
        }
        
    },[products])
    const HandleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        // save to local storage for now
        addToDb(product.key)
    }
    return (
        <div className="shop-container" >
            <div className="product-container" > {
                products.map(product => < Product
                    key={product.key}
                    product={product}
                    HandleAddToCart={HandleAddToCart}
                />)}
            </div>
            <div className="cart-container" >
                <Cart cart={cart}></Cart>
            </div>
        </div>);
};
export default Shop;