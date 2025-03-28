import "./topBox.scss"
import { topDealUsers } from "../../data.ts"
const TopBox = ()=>{

    return(
     
        <div className="topbox">
            <h1>Top Deals</h1>
            <div className="list">
                {topDealUsers.map(user=>(
                    <div className="listItem" key={user.id}>
                        <div className="user">
                            <img src={user.img} alt="" />
                            <span className="userText">
                                <span className="username">{user.username}</span>
                                <span className="useremail">{user.email}</span>
                            </span>
                        </div>
                        <span className="amount">${user.amount}</span>
                    </div>
                ))}
            </div>
        </div>
 
    )
}
export default TopBox