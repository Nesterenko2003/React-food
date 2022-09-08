import './Header.css'
function Header() {
    return(
        <header className="mainPart_header">
                <div class="mainPart_headerLeft">
                    <img height="30" width="30" src="./img/header_icons/search_icon.png" alt=" "/>
                    <input type="text"/>
                </div>
                <div class="mainPart_headerRight">
                    <img src="./img/header_icons/shopping-bag_icon.png" alt=" "/>
                    <span>150$</span>
                    <img src="./img/header_icons/like.icon.png" alt=" "/>
                    <img src="./img/header_icons/user_icon.png" alt=" "/>
                </div>
            </header>
    )
}
export default Header;