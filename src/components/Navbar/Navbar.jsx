import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userLogingInfo } from "../../slices/userSlice";
const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sucssful logout");
        navigate("/")
        dispatch(userLogingInfo(null))
        localStorage.removeItem("user")
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="profileName">
        <img  src="" alt="profile" />

          <h1>Md Shah Jalal</h1>
        </div>

        <div className="manu_items">
          <Link to="/">
            {" "}
            <AiFillHome />{" "}
          </Link>
          <Link to="/chat">
            <BsFillChatDotsFill />
          </Link>
          <Link to="/notification">
            <IoMdNotifications />
          </Link>
          <Link to="/setting">
            <AiFillSetting />
          </Link>
          <div className="logout">
            <Link to="">
              <IoLogOut onClick={handelSignOut} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
