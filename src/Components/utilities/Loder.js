import { getStoreCart } from "./fakedb";

export const productAndCard = async () => {
    const productData = await fetch('http://localhost:5000/products')
    const { products } = await productData.json();
    const saveCart = getStoreCart();
    ;
    const oldValue = []
    for (const id in saveCart) {
        const addProduct = products.find(product => product._id === id);
        if (addProduct) {
            const quantity = saveCart[id];
            addProduct.quantity = quantity;
            oldValue.push(addProduct)
        }
    }
    return { products, oldValue }
}