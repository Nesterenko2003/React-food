import './ItemList.css'
import Item from './Item';
import { useContext } from 'react';
import { ItemContext } from '../Context/ItemContext';
function ItemList() {
    const apiData = useContext(ItemContext)
    return (
        <ul class="mainPart_itemsList">
        {apiData.map((item)=><li><Item price={item.price} title={item.title} image={item.img}/></li>)}
        </ul>
        
    )
}
export default ItemList;