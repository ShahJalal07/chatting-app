import { BsThreeDotsVertical } from "react-icons/bs";
import "./Mygroups.css";
const Mygroups = () => {
  return (
    <div>
      <div className="containerTitle">
        <h2>My Groups</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="mygroup_box">
        <div className="mygroup_list">
          <div className="mygroup">
            <div className="mygroup_img"></div>
            <div className="mygroup_name">
              <h4>Shah Jalal</h4>
              <h5>Hello Everyone</h5>
            </div>
          </div>

          <div className="mygroupDateTime">
            <p className="mygroupday">Saterday,</p>
            <p className="mygrouptime">10:40pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mygroups;
