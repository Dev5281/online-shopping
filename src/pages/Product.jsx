import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'

export default function Product() {
    const {products,addToCart} = useContext(ProductContext)
    const [showDetails, setShowDetails] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className='grid grid-cols-2 sm:grid-cols-1 gap-6'>
        {
        products.map(product =>{
            return(
                <div key={product.id} className='w-[200px]  p-6 hover:shadow-lg'>
                    
                    <img src={product.image} alt={product.name} className='w-[200px] h-[150px] object-contain block m-auto '/>
                    {/* product info */}
                    <div className='flex flex-col gap-2 my-4  h-[120px] p-4'>
                        <p className='text-center font-bold'>{product.name}</p>
                        <p className='text-center'>${product.price}</p>
                        <p className='text-xs text-gray-500' onClick={()=>{
                    setShowDetails(true)
                    setSelectedProduct(product)}}>{product.smallDescription}</p>
                    </div>
                    <button className='w-full bg-blue-600 text-white text-xs p-1' onClick={()=>addToCart(product)}>+ Add To Cart</button>
                </div>
                
            )
         }) 

        } 
         { showDetails && 
            <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
                <div className='bg-white p-4 rounded-md shadow-md'>
                    <button onClick={() => setShowDetails(false)} className='absolute top-2 right-2 text-red-500 hover:text-red-700'>Close</button>
                    <h2 className='text-xl font-bold mb-2'>{products.name}</h2>
                    <p className='text-gray-700'>{selectedProduct.smallDescription}</p>
                </div>
            </div>
         }

    </div>
  )
}
