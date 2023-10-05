import { BsThreeDotsVertical } from "react-icons/bs";

import "./User.css";
const User = () => {
  return (
    <div>
      <div className="containerTitle">
        <h2>user list</h2>
        <BsThreeDotsVertical />
      </div>
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
            <button className="button_v_1">+</button>
          </div>
        </div>
      </div>
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
            <button className="button_v_1">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
