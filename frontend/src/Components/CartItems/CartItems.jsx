import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const{ getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext)

    return (
        <div className='cart-items'>
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cart-items-format cart-items-format-main">
                            <img src={e.image} alt="" className='cart-icon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} className='cart-items-remove-icon' onClick={() => {
                                removeFromCart(e.id)
                            }} alt="" />
                        </div>
                        <hr />

                    </div>
                }
                return null;
            })}
            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cart-items-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-items-shipping-fee">
                            <p>Shipping Fee</p><p>Free</p>

                        </div>
                        
                        <hr />
                        <div className="cart-items-total-item">
                            <div className="cart-items-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>Proceed To Checkout</button>
                    </div>
                    
                </div>
                <div className="cart-items-promocode">
                        <p>If you have a promote code enter it here</p>
                        <div className="cart-items-promobox">
                            <input type="text" placeholder='promocode' />
                            <button>Submit</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CartItems