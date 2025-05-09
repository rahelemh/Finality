import { Button } from '@mui/material';
import './Sis.css';
export function SimpleCard({image,price,title,des,cat}){
    
    return(
        <>
        <div className="part1 flex justify-between w-full h-[500px]">
            
          
            <div className="rightios w-[50%]">
            <img src={image} className=" picer w-full h-full" alt="" />

            </div>   
            <div className="leftious">
            <p className='m3 font-bold'>{title} </p>
    
            <p className='m3'>{cat}</p>
            <p className='m6 text-gray-400'>{des}</p>
            <p className='m6 text-gray-500'>{price} $</p>
<Button variant='contained' color='error' className='m4'>buy now</Button>
            </div> 
        </div>
        </>
    )
}