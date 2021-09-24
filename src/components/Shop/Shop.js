import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storeCart = []
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity
                    storeCart.push(addedProduct)
                }
               
            }
            setCart(storeCart)
        }
        
    }, [products])
    

    // Product Cart System Handle
    const HandleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        // save to local storage for now
        addToDb(product.key)
    }


    // Searching Result Handle
    const handleSearch = event => {
        const searchText = event.target.value
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchProducts)
    }
    return (
        <>
            <div className="search-container">
                <input type="text" placeholder="Search Product" onChange={handleSearch} />
            </div>
        <div className="shop-container" >
            <div className="product-container" > {
                displayProducts.map(product => < Product
                    key={product.key}
                    product={product}
                    HandleAddToCart={HandleAddToCart}
                />)}
            </div>
            <div className="cart-container" >
                <Cart cart={cart}></Cart>
            </div>
            </div>
            </>
            );
};
export default Shop;