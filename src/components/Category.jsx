import { Button } from '@mui/material';
import './Catergory.css';
export default function Category(){
    return(
   <div className="Shop h-[550px]">
    <h1 className="text-center">Shop By Category</h1>
   <div className="catpart h-[400px] flex flex-row justify-center w-full">
        <div className="it1 w-[35%]">
            <h3>Woman Fasshion</h3>
        </div>
        <div className="it2 w-[35%]">
            <h3>Exclosive sneakers</h3>
        </div>
        <div className="it3 w-[35%]">
            <h3>Men's Collection</h3>
        </div>
        


    </div>
    <div className='ffo flex justify-center'>
<Button variant="contained" color='error' className='w-[120px]'>Shop Now</Button>
</div></div>
)}