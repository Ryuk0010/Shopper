import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader= async ()=>{
 const loadedProducts = await fetch('products.json');
 const products = await loadedProducts.json();

 const storedCart = getShoppingCart();
 const savedCart =[];
 // step-1: get id.
 for(const id in storedCart){
     // step-2: get the product by using id.
   const addedProduct = products.find(pd =>pd.id === id)
 
 if(addedProduct){
     // step-3: get quantity of the product
     const quantity = storedCart[id];
     addedProduct.quantity = quantity;
     savedCart.push(addedProduct);
 }
 }
 return savedCart;
}

export default cartProductsLoader;