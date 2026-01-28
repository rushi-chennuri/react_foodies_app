import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListItems from './ListItems';
import { clearCart } from '../util/cartSlice';

export const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items);

    console.log("cart Items list", cartItems);

    const handleClearCart =()=>{
        dispatch(clearCart());
    }

  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-center m-4 p-4 font-bold text-lg'>Cart</h1>
         <button 
         className='px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700'
         onClick={handleClearCart}
         >Clear Cart</button>

         {
            cartItems.length ===0 &&(
                <h1 className='font-bold p-5'>Cart is empty, Add Item to the cart</h1>
            )
         }
        <div className='flex justify-center p-4'>
            <ListItems items={cartItems}/>
        </div>

    </div>
  )
}

export default Cart;
