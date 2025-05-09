import { SimpleCard } from "./SimpleCard"
import { Button, listItemSecondaryActionClasses } from "@mui/material"
import './Sim.css'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


export function Trending(){
    const [products,setproducts]=useState();

    function RenderFour(){
        useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=4')
   .then(response => response.json())
   .then(data => setproducts(data));
    },[])
    }
    
    function Naviator(){
    const Navigate =useNavigate()
    return(
        
        <Button className="h-[40px]" variant="contained" color="error" onClick={()=> Navigate('./all')}>See All products</Button>

    )
}
{RenderFour()}

    return(

        <>
        <div className="h-[600px] w-full bg-white  ju ">
            <h1>TRending Now</h1>
            <div className="carter flex flex-row justify-center gap-[5px] w-full h-[400px] m-4 ">
            {products?.map((item) =>{ return(<SimpleCard key={item.id} cat={item.category} title={item.title} price={item.price} image={item.image}/>
                      
                    )  })}
            </div>
            <div className="butler  text-center jjj block">
                <Naviator/>
            </div>

        </div>
        </>
    )
}