import './Title.css'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


export function Title(){
    function Navigator(){
        const Navigate=useNavigate();
        return(
<Button variant="contained" className='m2' onClick={()=> Navigate('./all')}>Shop</Button>

        )
    }
    return(
        <>
        <div className="titler">
<div className="topper">
<h1>Timless <span className='witer'> Elegance</span></h1>

</div>
<div className="middler">
<div className="io">
<h2>100 Unique Items</h2>
<div className="twoi">
<Navigator/>
    <p>This webpage is meant for excercising Api</p>
</div>

</div>
<div className="io m5">
<p>Search for products</p>
<SearchIcon/>
</div>
</div>
<div className="butter">
<h1 className='witer'> Effortless C<span className='k2' >onfidence</span> </h1>
</div>

        </div>
        </>
    )
}