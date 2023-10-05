import { BsThreeDotsVertical } from "react-icons/bs";

import "./Friends.css";

const Friends = () => {
  return (
    <div>
      <div className="containerTitle">
        <h2>Friends</h2>
        <BsThreeDotsVertical />
      </div>
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
            <button className="button_v_3">Unfriend</button>
            <button className="button_v_2">Block</button>
          </div>
        </div>
      </div>
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
            <button className="button_v_3">Unfriend</button>
            <button className="button_v_2">Block</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
