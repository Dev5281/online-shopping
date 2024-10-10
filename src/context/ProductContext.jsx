
import { products_data } from "../data/products";



const {createContext, useState, useEffect} = require("react");

export const ProductContext = createContext([]);

export const ProductContextProvider = ({children})=>{
    
    const [products, setProducts] = useState(products_data)
    const [cart,setCart] = useState([]);
    const [invoice,setInvoice] = useState({count:0,subTotal:0});

    const addToCart = (product)=>{
        setCart(oldCart=>{
            let previous = [...oldCart];
            if(previous.length<1){
                previous.push({...product,quantity:1});
            }
            else{
                const isProduct = previous.find(prod=>prod.id===product.id)
                if(!isProduct){
                    previous.push({...product,quantity:1});
                }
                else{
                    previous = previous.map(prod=>{
                       return  prod.id === isProduct.id ? {...isProduct,quantity:isProduct.quantity+1}:prod;
                    })
                }
            }
            return previous;
        })
    }
    const removeToCart = (product)=>{
        setCart(oldCart=>{
            let previous = [...oldCart];
            const isProduct = previous.find(prod=>prod.id ===product.id) 
            if(isProduct){
                const index = previous.indexOf(isProduct);
                previous.splice(index,1)
            }
            
            return previous;
        })
    }

    const filterProducts = (category)=>{
        if(category){
          const filteredProducts = products_data.filter(product => {
            if(product.category === category){
                return product;
            }
        })
        setProducts(filteredProducts)
      }
      else {
        setProducts(products_data)
      }
   }
   const setInvoiceData = () =>{
    setInvoice(previous=>{
        let newInvoice = {...previous,count:0,subTotal:0};
        cart.forEach(product=>{
            newInvoice.count += product.quantity;
            newInvoice.subTotal += product.quantity * product.price;
        })
        return newInvoice;
    })
   }
   useEffect(()=>{
      setInvoiceData()
   },[cart])

    return (
        <ProductContext.Provider value={{products, filterProducts,addToCart,invoice,cart,removeToCart}}>
            {children}
           
            
            
        </ProductContext.Provider>
    )
}
