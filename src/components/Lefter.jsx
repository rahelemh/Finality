import './Lefter.css';
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Search';

export function Lefter(){
    return(
        <>
        <div className="container !flex-wrap  h-[500px] w-[1000px]  flex justify-center ">
<div className="left w-[45%]">

</div>
<div className="right flex flex-col justify-center items-center">
    <h1>Upto 50% Discount </h1>
    <p>
        This how we rise up heavy as a hurricane.
    </p>
    <div className="buter w-full flex justify-center gap-2">
    <Button className='bg-rose-600' color='error' variant="contained">Contained</Button>
    <Button className='bg-rose-600' color='error' variant="contained" endIcon={<SendIcon />}>
  sendfreinds
</Button>

    </div>
</div>
        </div>
        </>
    )
}