import './ItemList.css'
import Item from '../Item/Item';
function ItemList({items, basketItems, setBasketItems}) {
    return (
        <ul class="mainPart_itemsList">
        {items.map((item)=><li>
            <Item price={item.price} 
            title={item.title} 
            image={item.img} 
            basketItems={basketItems}
            setBasketItems={setBasketItems}/></li>
            )}
        </ul>
        
    )
}
export default ItemList;