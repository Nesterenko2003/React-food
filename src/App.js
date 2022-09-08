import './App.css'
import MainPart from './Components/MainPart';
import SideBar from './Components/SideBar';
import {useEffect, useState} from 'react'
import { ItemContext } from './Context/ItemContext';
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
      <ItemContext.Provider value={items}>
      <MainPart/>
      </ItemContext.Provider>
    </div>
  )
   
}

export default App;
