import { useEffect, useState } from "react"
import api from "../components/seccompo/Api";
import ProductCard from "./Singlepro";
import './Singlepro.css'
import HeaderSite from "./Adver";
import { Button } from '@mui/material';
import BackgroundSlider from './Goslide'
export default function Allpro(){

 function InputSec(){
    return(
        <div className="flex items-center flex-col mar yummy"> 
        <h1>Search the product </h1>
        <div className="flex">
        <input type="text" className="w-[100px] h-[50px] bg-amber-50" />
        <Button  color="error">go</Button>
        </div></div>
    )
}

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
        <>
        <BackgroundSlider/>
        <HeaderSite/>
        <InputSec/>

        {Isloading?(<h1>loading</h1>):( <div className="kazem  flex justify-center gap-5 flex-wrap">
        {products.map((item)=><ProductCard key={item.id} id={item.id}  image={item.image} price={item.price} title={item.title}/>)}
       </div>)}
      
        </>
    )
}