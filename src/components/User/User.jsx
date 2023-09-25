import { Button_v_1 } from "../Buttons/Buttons";
import "./User.css";
const User = () => {
  return (
    <div className="user_box">
      <div className="user_list">
        <div className="user">
          <div className="user_img"></div>
          <div className="user_name">
            <h4>Shah Jalal</h4>
            <h5>Hello Everyone</h5>
          </div>
        </div>

        <div className="">
          <Button_v_1>+</Button_v_1>
        </div>
      </div>
    </div>
  );
};

export default User;
