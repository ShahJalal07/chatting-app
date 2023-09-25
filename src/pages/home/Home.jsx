import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import GroupList from "../../components/GroupList/GroupList";
import Friends from "../../components/Friends/Friends";
import User from "../../components/User/User";
import Friendrequest from "../../components/Friend Request/Friendrequest";
import Mygroups from "../../components/Mygroups/Mygroups";
import Blocklist from "../../components/Blocklist/Blocklist";
const home = () => {
  const data = useSelector((state) => state.userLogingInfo.userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />

      <div className="main_content">
        <div className="item_box">
          {/* search bar start */}
          <div className="searchbar">
            <BiSearch className="search_icon" />
            <input type="text" placeholder="Search" />
            <BsThreeDotsVertical className="three_dot" />
          </div>
          {/* search bar end */}

          {/* group start */}
          <div className="group_item">
            <div className="title">
              <h2>Group List</h2>
              <BsThreeDotsVertical />
            </div>
            <GroupList />
            <GroupList />
            <GroupList />
          </div>
          {/* group end */}
        </div>

        {/* friend list start*/}
        <div className="item_box">
          <div className="item">
            <div className="title">
              <h2>Friends</h2>
              <BsThreeDotsVertical />
            </div>
            <Friends />
            <Friends />
            <Friends />
            <Friends />
            <Friends />
            <Friends />
          </div>
        </div>
        {/* friend list end */}

        {/* user start */}
        <div className="item_box">
          <div className="item">
            <div className="title">
              <h2>user list</h2>
              <BsThreeDotsVertical />
            </div>
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
          </div>
        </div>
        {/* user end */}

        {/* friend request start */}
        <div className="item_box">
          <div className="item">
            <div className="title">
              <h2>Friend Request</h2>
              <BsThreeDotsVertical />
            </div>
            <Friendrequest />
            <Friendrequest />
            <Friendrequest />
            <Friendrequest />
            <Friendrequest />
          </div>
        </div>
        {/* friend request end */}

        {/* My Group start */}
        <div className="item_box">
          <div className="item">
            <div className="title">
              <h2>My Groups</h2>
              <BsThreeDotsVertical />
            </div>
            <Mygroups/>
            <Mygroups/>
            <Mygroups/>
            <Mygroups/>
            <Mygroups/>
            <Mygroups/>
          </div>
        </div>
        {/* My Group end */}

        {/* Block list start */}
        <div className="item_box">
          <div className="item">
            <div className="title">
              <h2>Blocked Users</h2>
              <BsThreeDotsVertical />
            </div>
            <Blocklist/>
            <Blocklist/>
            <Blocklist/>
            <Blocklist/>
            <Blocklist/>
            <Blocklist/>
          </div>
        </div>
        {/* Block list end */}
      </div>
    </div>
  );
};

export default home;
