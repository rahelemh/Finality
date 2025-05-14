import './Collection.css';
import { Button } from '@mui/material';
export function Collection(){
    return(
        <>
        <div className="pope">
        <div className="pop flex-wrap flex  justify-center w-full">
<div className="jack w-[25%] h-[350px] bg-amber-50"></div>
<div className="primer w-[40%] h-[350px] ">
<div className="mmd w-full h-full flex flex-col justify-center items-center ">
    <h2 className='bolder'>Collection Spring</h2>
<p className=' ki w-[230px] text-center  '>Embrace the season with fresh florals, soft pastels, and effortless layers. Light, airy, and full of life just like spring.</p>
<div className='ff'>
<Button variant="contained" color='error'  className='w-[120px]'>Primary</Button>
</div>
</div></div>
<div className="mat w-[25%] h-[350px] bg-amber-50"></div>
        </div></div>
        </>
    )
}   