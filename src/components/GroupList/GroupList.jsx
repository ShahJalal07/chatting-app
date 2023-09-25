
import "./GroupList.css";

import { Button_v_1 } from "../Buttons/Buttons";

const GroupList = () => {
  return (
    <div className="group_box">
      <div className="group_list">
        <div className="group_img"></div>
        <div>
          <h4>Friend Group</h4>
          <h5>Hello Everyone</h5>
        </div>
        <div>
          <Button_v_1>Join</Button_v_1>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
