import './App.css'
import MainPart from './Components/MainPart/MainPart';
import SideBar from './Components/Sidebar/SideBar';
import {useEffect, useState} from 'react'
import { ItemContext } from './Components/ItemList/ItemContext';
import {Routes, Route} from "react-router-dom";
import Basket from './Pages/Basket';
import Header from './Components/Header/Header'
function App() {
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch(`https://6319828c6b4c78d91b3d024a.mockapi.io/burgers`)
    .then ((res)=>res.json())
    .then((data)=>setItems(data))
  }, [])
  return (
    <div className='wrapper'>
          <SideBar/>
      <div className="contentPart">
      <Header/>
      <Routes>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/' element={
          <ItemContext.Provider value={items}>
          <MainPart/>
          </ItemContext.Provider>
        }/>
      </Routes>
      </div>
      
      
    </div>
  )
   
}

export default App;
