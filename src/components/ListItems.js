import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../util/cartSlice';

export const ListItems = ({items}) => {


    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        console.log("Item Added");

        dispatch(addItem(item));
    }


  return (
    <div>
        {items.map((item, index)=> (

            <div 
                key={`${item.id}-${index}`} 
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">

            <div className='w-9/12'>
                <div className='py-2'>
                    <span>{item.name}</span>
                    <span> &#8377; {item.price/100}</span>
                    <div>
                        <span> &#9733; {item.rating}</span> 
                    </div>
                </div>
                <p className='text-xs'>{item.description}</p>
            </div>
            <div className='w-3/12 p-4'>

            <div className='absolute'>
                <button className= 'rounded-lg p-2 mx-16 bg-black text-white  text-sm shadow-lg' 
                onClick={()=>handleAddItem(item)}
                >
                    Add +
                </button>
            </div>
                <img className='w-full rounded-sm' src={item.image} alt={item.name} />    
            </div>                       
            </div>
        ))}








    </div>
  )
}

export default ListItems;
