import { Button_v_3 } from "../Buttons/Buttons";
import './Blocklist.css'
const Blocklist = () => {
    return (
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
          <Button_v_3>Unlock</Button_v_3>
        </div>
      </div>
    </div>
    );
};

export default Blocklist;