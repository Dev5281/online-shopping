import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { ProductContext } from '../context/ProductContext'
import { IoMdRemoveCircleOutline } from 'react-icons/io'


export default function Cart() {
  const {cart,invoice,removeToCart} = useContext(ProductContext)

  return (
    <div className=''>
        {
            cart.length > 0?
           <div>
             {
                cart.map(product =>{
                   return(
                    <div key={product.id} className='shadow-md flex items-center gap-4'>
                        <img src={product.image} alt={product.name} className='w-[120px] h-[80px] object-contain'/>
                        <div className='flex flex-col gap-2 w-[450px]'>
                            <p className='font-bold'>{product.name}</p>
                            <p className='text-xs text-gray-500'>{product.smallDescription}</p>
                            <p className='text-xs text-gray-500'>Q:{product.quantity}</p>
                            
                        </div> 
                            <p className=''>{product.price}</p>
                            <IoMdRemoveCircleOutline className='text-red-600 text-2xl curser-pointer' onClick={()=>removeToCart(product)} />
                    </div>
                   ) 
                })
              } 
              <div className='flex flex-col items-end gap-4 '>
                <p>subtotal({invoice.count}):${invoice.subTotal}</p>
                <button className='bg-blue-600 text-xs rounded-md'>Place Order</button>
              </div>

           </div>
            :
           <div className='flex items-center text-2xl justify-center p-4 gag-2'>
            <span>Empty</span>
            <FaShoppingCart className='text-2xl' />
            <Link className='text-blue-400' to={'/'}>Add Products</Link>
           </div> 
        }
    </div>
  )
}
