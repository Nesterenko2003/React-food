import './Basket.scss'
import {useState} from 'react'
import BasketItem from '../../Components/BasketItem/BasketItem'
function Basket({basketItems}) {
    const [sumOrder, setSumOrder] = useState(0)
    return (
        <div className="basket">
            <h1>Basket</h1>
           <div className="basket_contentPart">
            <ul className="basket_itemTitle">
                <li>Photo</li>
                <li>Title</li>
                <li>Price</li>
                <li>Count</li>
            </ul>
                {
                    Object.values(basketItems).map((item)=><BasketItem
                    title = {item.title}
                    price = {item.price}
                    image = {item.image}
                    sumOrder = {sumOrder}
                    setSumOrder = {setSumOrder}
                    />)
                    
                }
            </div>
            <div className="basket_sumOrder">
                    <h1>{sumOrder}$</h1>
                    <button>Push</button>
                </div>
           </div>
    )
}
export default Basket;