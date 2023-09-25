import { Button_v_1, Button_v_2 } from "../Buttons/Buttons";
import './Friendrequest.css'

const Friendrequest = () => {
  return (
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
          <Button_v_2>Delete</Button_v_2>
          <Button_v_1>Accept</Button_v_1>
        </div>
      </div>
    </div>
  );
};

export default Friendrequest;
