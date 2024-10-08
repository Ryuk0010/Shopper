import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import Orders from '../Orders/Orders';
const Shop = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
const [cart, setCart]=useState([])
    const handleAddToCart=(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
       }
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart =[];
        // step-1: get id.
        for(const id in storedCart){
            // step-2: get the product by using id.
          const addedProduct = products.find(product =>product.id === id)
        
        // ai if ta use korsi coz prothom bar data fetch howar karone product ashar agei ai useeffect ta run hoi tokhon shob kisu empty thake but porer bar product change hoile jate abr run hoi tar jonno dependency te [product] disi
        if(addedProduct){
            // step-3: get quantity of the product
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
        } // uporer useState theke products er data nia ansi jate localhost a save thaka id er sathe product match kore exact product tar sob info show kora jai
        setCart(savedCart);
    },[products])
// handle clear cart button er funciton:
const handleClearCart =()=>{
    setCart([]);
    deleteShoppingCart();
}

    return (
        
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product => <Product
                key={product.id}
                product = {product}
                handleAddToCart= {handleAddToCart}
                ></Product>)
            }
            </div>
            <div className="cart-container">
             <Cart cart ={cart}
             handleClearCart={handleClearCart}
             ></Cart>
             
            </div>
        </div>
    );
};

export default Shop;