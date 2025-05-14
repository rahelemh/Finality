import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Header.css'
export function Header(){

function IconUser(){
    return(<AccountCircleIcon/>)
}


    return(
        <>
        <div className='menu'>

<div className="itemer">

<span className='cursor-pointer'>Home</span>
   
    <span className='cursor-pointer'>Collection</span>
    <span className='cursor-pointer' >All product</span>
    <span className='cursor-pointer'>About US</span>
  
</div>
<div className="logo">
    logo
</div>

<div className="iconer">
<IconUser/>
<FavoriteIcon/>
<ConnectWithoutContactIcon/>
</div>

        </div>
        </>
    )
}