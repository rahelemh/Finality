import goose from '../components/galery/r8.jpg';
import { Button } from '@mui/material';
import './Singlepro.css'
import { useNavigate } from 'react-router-dom';


export default function ProductCard({image ,title,price,id}) {
const Navigator = useNavigate();
  


  return (
    <div  className="asl max-w-sm bg-white rounded-2xl 
    shadow-md p-6 hover:shadow-2xl hover:-translate-y-1
     transition-transform duration-300">
      <div onClick={()=> Navigator(`/all/${id}`)} className="relative ki">
        <img
          src={image}
          alt="Running Shoes"
          className="w-full h-[300px] object-cover rounded-xl"
        />
        <span className="sale absolute top-1 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow">
          Sale
        </span>
        <button className="absolute hearter top-3 right-3  hover:text-red-500 text-xl">
          ♥
        </button>
      </div>

      <div className="mar space-y-4">
        <div>
          <h2 className="fifi text-lg font-semibold leading-snug">
          {title}
          </h2>
        </div>

        <div className="flex items-center gap-1 text-yellow-400 text-sm">
          {'★'.repeat(4)}☆<span className="ml-2 text-gray-500">(142 reviews)</span>
        </div>

        <div className="flex gap-3 go">
          <span className="w-6 h-6 rounded-full bg-gray-800 border-2 border-white shadow-sm"></span>
          <span className="w-6 h-6 rounded-full bg-blue-900 border-2 border-white shadow-sm"></span>
          <span className="w-6 h-6 rounded-full bg-red-600 border-2 border-white shadow-sm"></span>
        </div>

        <div className="flex gap-3 go">
          {["7", "8", "9", "10"].map((size) => (
            <button
              key={size}
              className={`px-3 py-1.5 rounded-md border text-sm font-medium transition ${
                size === "8"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              US {size}
            </button>
          ))}
        </div>

        <div className="text-lg font-bold text-gray-800">
        {price}
          <span className="line-through text-sm text-gray-400 ml-2">$129.99</span>
          <span className="text-green-600 text-sm font-medium ml-2">30% OFF</span>
        </div>

        <div className="flex justify-center gap-2.5 items-center pp ">
        <Button variant="contained">  <span className="font-medium">Add to Cart</span></Button>
           
          
         
        </div>
      </div>
    </div>
  );
}
