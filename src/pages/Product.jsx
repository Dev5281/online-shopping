import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'

export default function Product() {
    const {products,addToCart} = useContext(ProductContext)
    const [showDetails, setShowDetails] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className='max-w-screen-lg mx-auto grid grid-cols-2  gap-6 p-4'>
        {
        products.map(product =>{
            return(
                <div key={product.id} className='w-full bg-white p-6 hover:shadow-lg border rounded-lg flex flex-col justify-between'>
                    
                    <img src={product.image} alt={product.name} className='w--full h-[150px] object-contain block m-auto '/>
                    {/* product info */}
                    <div className='flex flex-col gap-2 my-4 '>
                        <p className='text-center font-bold'>{product.name}</p>
                        <p className='text-center'>${product.price}</p>
                        <p className='text-sm text-gray-500 mb-4 transition-colors duration-200 active:text-blue-600 hover:text-gray-700' onClick={()=>{
                    setShowDetails(true)
                    setSelectedProduct(product)}}>Description</p>
                    </div>
                    <button className='w-full bg-blue-600 text-white text-xs p-2 mt-auto' onClick={()=>addToCart(product)}>+ Add To Cart</button>
                </div>
                
            )
         }) 

        } 
         { showDetails && 
            <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50'>
                <div className='bg-white p-6 rounded-md shadow-md relative w-[300px] h-[300px] flex flex-col justify-center items-center'>
                    <button onClick={() => setShowDetails(false)} className='absolute top-2 right-2 text-red-500 hover:text-red-700'>Close</button>
                    <h2 className='text-xl font-bold mb-4'>{products.name}</h2>
                    <p className='text-gray-700 overflow-auto'>{selectedProduct.smallDescription}</p>
                </div>
            </div>
         }

    </div>
  )
}
