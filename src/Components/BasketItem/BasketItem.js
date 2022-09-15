import {useState} from 'react'
function BasketItem({price, title, image, sumOrder, setSumOrder}) {
    const [count, setCount] = useState(0)
    const increaseCount = ()=> {
        setCount(count+1)
        setSumOrder(sumOrder+price)
    }
    const decreaseCount = ()=> {
        setCount(count-1)
        count<=0?setCount(0):setSumOrder(sumOrder-price)
    }
    return(
        <div className="basket_item">
                    <img height="70" id="itemImage" src={image} alt="" />
                    <span>{title}</span>
                    <span>{price}$</span>
                    <div id="countZone">
                    <img onClick={decreaseCount} src="./img/item_icons/minus_icon.png" alt=" " />
                    <h3>{count}</h3>
                    {<img onClick={increaseCount} src="./img/item_icons/plus_icon.png" alt=" " />}
                    </div>
                    </div>
    )
}
export default BasketItem;