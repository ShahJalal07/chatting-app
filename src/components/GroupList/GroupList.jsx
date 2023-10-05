import "./GroupList.css";
import { BsThreeDotsVertical } from "react-icons/bs";


const GroupList = () => {
  return (
    <div>
      <div className="containerTitle">
        <h2>Group List</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="group_box">
        <div className="group_list">
          <div className="group_img"></div>
          <div>
            <h4>Friend Group</h4>
            <h5>Hello Everyone</h5>
          </div>
          <div>
            <button className="button_v_1">Join</button>
          </div>
        </div>
      </div>
      <div className="group_box">
        <div className="group_list">
          <div className="group_img"></div>
          <div>
            <h4>Friend Group</h4>
            <h5>Hello Everyone</h5>
          </div>
          <div>
            <button className="button_v_1">Join</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default GroupList;
