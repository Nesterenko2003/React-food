import './Item.css'
function Item({price, title,image}) {
    return(
        <div class="mainPart_item">
        <img height="180" width="180" src={image} alt="" class="mainPart_itemImage"/>
        <h2 class="mainPart_itemTitle">
            {title}
        </h2>
        <div class="mainPart_itemInfo">
            <div class="mainPart_itemPrice">
                <span>Price:</span>
                <span><b>{price}$</b></span>
            </div>
            <div class="mainPart_itemButtons">
               <img height="30" width="30" src="./img/item_icons/like_icon.png" alt=""/>
               <img height="30" width="30" src="./img/item_icons/plus_icon.png" alt=""/>
            </div>
        </div>
    </div>
    )
}
export default Item;