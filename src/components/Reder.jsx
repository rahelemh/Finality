import './Reder.css'
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import { Button } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import ColorLensIcon from '@mui/icons-material/ColorLens';
export function Reder(){
    return(
        <>
        <div className="cont w-full flex justify-center p-8 gap-5 h-[400px] bg-red-800 ">
<div className="pat1 w-[35%]">
<div className="phot w1 w-[200px] h-[250px]">
    <div className="redfilter w-full h-full bg-red-600"></div>
</div>
</div>
<div className="pat2 w-[30%]">
    <h1>Get The App</h1>
    <p>Hit me with a text in the middle if the night</p>
<div className="iconerr">
<AppleIcon/>
<ColorLensIcon/>
<AppShortcutIcon/>
</div>
<div className='susu'>
<Button color='error' variant="contained">Contained</Button>
</div>
</div>
<div className="pat3 w-[35%]">
<div className="phot w2 w-[200px] h-[260px]">
<div className="redfilter w-full h-full bg-red-600"></div>

</div>

</div>
        </div>
        </>
    )
}