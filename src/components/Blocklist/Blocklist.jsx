import { BsThreeDotsVertical } from "react-icons/bs";
import "./Blocklist.css";
const Blocklist = () => {
  return (
    <div>
      <div className="containerTitle">
        <h2>Blocked Users</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="blocklist_box">
        <div className="blocklist_list">
          <div className="blocklist">
            <div className="blocklist_img"></div>
            <div className="blocklist_name">
              <h4>Shah Jalal</h4>
              <h5>Hello Everyone</h5>
            </div>
          </div>

          <div className="">
            <button className="button_v_3">Unblock</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocklist;
