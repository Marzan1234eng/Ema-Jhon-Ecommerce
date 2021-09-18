import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shippingCost = 0;

    if(total > 35){
        shippingCost = 0;
    }else if(total > 15){
        shippingCost = 4.99
    }else if(total > 0){
        shippingCost = 12.99;
    }

    const tax = Math.round(total / 10);
    const grandTotal = total + shippingCost + tax;

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Orders: {cart.length}</p>
            <p><small>Shipping Cost: {shippingCost}</small></p>
            <p><small>Tax {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;