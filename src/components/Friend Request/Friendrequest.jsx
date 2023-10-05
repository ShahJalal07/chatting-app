import { BsThreeDotsVertical } from "react-icons/bs";

import "./Friendrequest.css";

const Friendrequest = () => {
  return (
    <div>
      <div className="containerTitle">
        <h2>Friend Request</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="friendreq_box">
        <div className="friendreq_list">
          <div className="friendreq">
            <div className="friendreq_img"></div>
            <div className="friendreq_name">
              <h4>Shah Jalal</h4>
              <h5>Hello Everyone</h5>
            </div>
          </div>

          <div className="">
            <button className="button_v_2">Delete</button>
            <button className="button_v_1">Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friendrequest;
