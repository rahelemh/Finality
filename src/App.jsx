
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Allpro from './pages/Allpro'
import { Maincontent } from './pages/Maincontent'
import ProductCard from './pages/Singlepro'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Singlepage } from './pages/Singlepage'



function App() {


  return (
    <> 
    <div className="apper">
      <Header />
 
<BrowserRouter>
<Routes>
  <Route path="/" element={<Maincontent/>}/>
  <Route path="all" element={<Allpro/>}/>
  <Route path="all/:id" element={<Singlepage/>}/>
</Routes>
</BrowserRouter>

<Footer/>
</div>
    </>
  )
}

export default App
