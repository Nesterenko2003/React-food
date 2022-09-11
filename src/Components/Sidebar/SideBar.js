import './SideBar.css'
import SideBarList from '../SideBarList/SideBarList';
function SideBar(){
    return(
        <div class="sideBar">
        <img height="50" width="50" className="sideBar_logo" src="./img/navBar_icons/cafe_logo.png" alt=" "/>
        <h1 className="sideBar_title">Explore</h1>
        <SideBarList/>
    </div>
    )
}
export default SideBar;