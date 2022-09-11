import './SideBarList.css'
import SideBarPoint from '../SideBarPoint/SideBarPoint';
function SideBarList(){
    let listOfPoints = [
        {img: "./img/navBar_icons/drinks_icon.png", title: "Drinks"},
        {img: "./img/navBar_icons/dishes_icon.png", title: "Burgers"},
        {img: "./img/navBar_icons/desert_icon.png", title: "Deserts"},
    ] 
    return (
        <ul className="sideBar_list">
            {listOfPoints.map((point)=><li><SideBarPoint img={point.img} title={point.title}/></li>)}
        </ul>
    )
}
export default SideBarList;