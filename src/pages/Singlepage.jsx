import { useParams } from "react-router-dom"
import { SimpleCard } from "./SimpleCard";
import api from "../components/seccompo/Api";
import { useState } from "react";
import { useEffect } from "react";
import './Sis.css'

export function Singlepage(){
    const {id}=useParams()
    {console.log(id)}

    const [products,setProducts] = useState([]);
    const [Isloading, setLoading]=useState(true);
    
    useEffect(()=>{
     async function fetcher(){
         const result =api
         .get("products")
         .then((res) => {setProducts(res);
         setLoading(false); } )
        .catch((error)=>console.log("error",error));
       
    } 
    fetcher(); 
    
    },[]);
    
    console.log(products);
    return(
        <>        {Isloading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="kazem  flex justify-center gap-5 flex-wrap">

              {products
                .filter(item => item.id == id)  // Corrected filter syntax
                .map(item => (                   // Use map to render the filtered items
                  <SimpleCard 
                    key={item.id} 
                    image={item.image} 
                    price={item.price} 
                    title={item.title}
                    des={item.description}
                    cat={item.category}
                  />
                ))}
            </div>
          )}
          
       </>
)
}