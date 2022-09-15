import './App.scss'
import SideBar from './Components/Sidebar/SideBar';
import {useEffect, useState} from 'react'
import {Routes, Route} from "react-router-dom";
import Basket from './Pages/Basket/Basket';
import Header from './Components/Header/Header'
import ItemList from './Components/ItemList/ItemList';
function App() {
  const [items, setItems] = useState([])
  const [basketItems, setBasketItems] = useState([])
  const [apiValue, setApiValue] = useState('burgers')
  useEffect(()=>{
    fetch(`https://6319828c6b4c78d91b3d024a.mockapi.io/${apiValue}`)
    .then ((res)=>res.json())
    .then((data)=>setItems(data))
  }, [apiValue])
  return (
    <div className='wrapper'>
      {console.log(apiValue)}
          <SideBar api={apiValue} setApi={setApiValue}/>
      <div className="contentPart">
      <Header/>
      <div className="mainPart">
        <Routes>
          <Route path="/" element={<ItemList items={items} basketItems={basketItems} setBasketItems={setBasketItems}/>}/>
          <Route path='/basket' element={<Basket basketItems={basketItems}/>}/>
        </Routes>
      </div>
      </div>
      
      
    </div>
  )
   
}

export default App;
