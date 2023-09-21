import { useEffect } from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
const home = () => {
  const data = useSelector((state) => state.userLogingInfo.userInfo);
  const navigate = useNavigate();
  useEffect(() => {
  if(!data){
    navigate("/")
  }
  }, [])
  return (
    <div>
        <Navbar/>
      <h1>Home Page</h1>
    </div>
  );
};

export default home;
