import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Cart = () => {
  const {cartItems , food_list , removeFromCart , addToCart,getTotalCartAmount} = useContext(StoreContext)
  
const navigate = useNavigate();

  
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          <p>Add</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
           
            return (
              <div key = {index}>
                
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                  <p onClick={()=>addToCart(item._id)} className='addd'>+</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0 ?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0 : getTotalCartAmount()+2}</b>
            </div>

            <button onClick={()=>navigate('/order')}>Proceed To Ckeck Out</button>
           {/* <Link to='/order'> <button>Proceed To Ckeck Out</button></Link> */}
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promocode please enter it here </p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
