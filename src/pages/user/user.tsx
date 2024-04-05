
import Single from "../../components/single/single";
import { singleUser } from "../../data";
import "./user.scss";
const User = () => {

  return (
    <div className="user">
    <Single  {...singleUser}/>
    </div>
  );
};

export default User;
