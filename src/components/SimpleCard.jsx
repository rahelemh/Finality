



import './Sim.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export function SimpleCard({image,title,price,cat}){
    return(
    <div className="simpCard w-[23%] border-box h-[390px] ">
<img src={image} alt="" className='w-full  h-[250px]' />
<div className='flex justify-between titt'>
<h2 className='tittt '>{title}</h2> <h2 className='font-bold'>{price}</h2></div>
<hr className='w-[90%] jj' />
<div className='h33'>
    <AddShoppingCartIcon  fontSize='small'/>
    <h3 className='inline'>{cat}</h3>
    </div>


    </div>
    )
}