const addToDb = id =>{
    const shoppingCart = getShoppingCart();
    const quantity = shoppingCart[id];
    if(!quantity){
        shoppingCart[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}
const removeFromDb = id =>{
    const shoppingCart = getShoppingCart();
    if(id in shoppingCart){
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}
const getShoppingCart = () =>{
    let shoppingCart = {}
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}
export{deleteShoppingCart,addToDb,removeFromDb,getShoppingCart};