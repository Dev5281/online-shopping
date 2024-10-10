
import { Outlet, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ProductContext } from './context/ProductContext';
import { useContext, useEffect } from 'react';

function App() {
  const {filterProducts} = useContext(ProductContext);
  const {category} = useParams();
  useEffect(()=>{filterProducts(category)},[filterProducts,category])
  return (
   
    <div className='min-h-screen h-auto bg-slate-200'>
      <Navbar />
      <div className='w-[80%] m-auto my-4 bg-white p-4'>
        <Outlet />
      </div>

    </div>
  );
}

export default App;
