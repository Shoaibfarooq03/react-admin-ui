import { Link } from "react-router-dom"
import "./menu.scss"
import { menu } from "../../data"
const Menu = ()=>{

    return(
     
        <div className="menu">
           {menu.map((item)=>(
           <div className="item" key={item.id}>
                <span className="title"> {item.title}</span>
                {item.listItems.map((links)=>(
                <Link to={links.url} className="links" key={links.id}>
                    <img src={links.icon} alt="" />
                    <span className="ListItemTitle">{links.title}</span>
                </Link>
                ))}
            </div>
            ))}
           
        </div>
 
    )
}
export default Menu