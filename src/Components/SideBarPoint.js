import './SideBarPoint.scss'
function SideBarPoint({img, title}){
    return (
    <div class="sideBar_point">
    <img src={img} alt=""/>{title}
    </div>
    )
}
export default SideBarPoint;