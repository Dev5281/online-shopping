
import { FaShoppingCart } from 'react-icons/fa';
import { SiFlipkart } from "react-icons/si";
import { Link, NavLink } from 'react-router-dom';
import { products_categories } from '../data/products';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';


export default function Navbar() {
    const {invoice} = useContext(ProductContext);
    const isActive = (element)=>{
        return element?.isActive ?'text-blue-600' : ''
    }
    return (
        <div className='w-full h-20 shadow-lg flex items-center justify-between px-8'>
            <NavLink className='flex flex-col items-center ' to={'/'}>
                <SiFlipkart className='text-yellow-400 text-4xl ' />
                <span>Phonekart</span>
            </NavLink>
            <ul className='flex items-center gap-10'>
            <li> <Link className='text-black' to={'/'}>Home</Link></li>
                {
                    products_categories.map(category => {
                        return (
                            <li key={category.value}><NavLink className={isActive} to={`/${category.value}`}>{category.value}</NavLink></li>
                        )
                    })

                }
               

            </ul>


            <Link className='relative' to={'/Cart'}>
                <FaShoppingCart className='text-2xl' />
                
               {
                invoice?.count > 0 &&
                <div className='absolute -top-2 -right-2 w-4 h-4 text-xs bg-blue-600 text-white flex items-center justify-center rounded-full'>
                {invoice?.count}
                </div>
               }
            </Link>
        </div>

    )
}
