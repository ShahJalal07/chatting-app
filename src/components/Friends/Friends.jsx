import { Button_v_2, Button_v_3 } from "../Buttons/Buttons";
import "./Friends.css";

const Friends = () => {
  return (
    <div className="friends_box">
      <div className="friends_list">
        <div className="friends">
          <div className="friends_img"></div>
          <div className="friends_name">
            <h4>Shah Jalal</h4>
            <h5>Hello Everyone</h5>
          </div>
        </div>

        <div className="">
          <Button_v_3>Unfriend</Button_v_3>
          <Button_v_2>Block</Button_v_2>
        </div>
      </div>
    </div>
  );
};

export default Friends;
