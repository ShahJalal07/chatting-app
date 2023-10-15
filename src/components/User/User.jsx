import { BsThreeDotsVertical } from "react-icons/bs";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";

import "./User.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
const User = () => {
  const data = useSelector((state) => state.userInfo.userInfo);
  const db = getDatabase();
  let [userList, setUserList] = useState([]);

  // get user data from users collection in firebase start
  useEffect(() => {
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      let list = [];
      snapshot.forEach((item) => {
        console.log(item);
        if (data.uid !== item.key) {
          list.push({ ...item.val(), id: item.key });
        }
      });
      setUserList(list);
    });
  }, []);
  // get user data from users collection in firebase end

  const [friendRequestList, setFriendRequestList] = useState([]);
  // friend request start
  const handelFriendRequest = (item) => {
    console.log(item);
    set(push(ref(db, "friendrequest/")), {
      senderId: data.uid,
      senderName: data.displayName,
      receverId: item.id,
      receverName: item.username,
    });
  };

  // friend request end

  // friend request value get start
  useEffect(() => {
    const friendRequestRef = ref(db, "friendrequest");
    onValue(friendRequestRef, (snapshot) => {
      let request = [];
      snapshot.forEach((item) => {
        request.push(item.val().receverId + item.val().senderId);
      });
      setFriendRequestList(request);
    });
  }, []);
  console.log(friendRequestList);
  // friend request value get end

  // cancle request start
  const handelCancleRequest = (item) => {
    remove(ref(db, "friendrequest/"+ item.id));
  };
  // cancle request end

  // friend list data from data collection start
  const [friendList, setFriendList] = useState([]);
  useEffect(() => {
    const friendLisRef = ref(db, "friends");
    onValue(friendLisRef, (snapshort) => {
      let list = [];
      snapshort.forEach((item) => {
        list.push(item.val().receverId + item.val().senderId);
      });
      setFriendList(list);
    });
  }, []);
  // friend list data from data collection end

  return (
    <div>
      <div className="containerTitle">
        <h2>user list</h2>
        <BsThreeDotsVertical />
      </div>
      {userList.map((item, i) => {
        return (
          <div key={i} className="user_box">
            <div className="user_list">
              <div className="user">
                <div className="user_img">
                  <ProfilePicture imgID={item.id} />
                </div>
                <div className="user_name">
                  <h4>{item?.username}</h4>
                  <h5>{item?.email}</h5>
                </div>
              </div>

              <div className="">
                {friendList.includes(item.id + data.uid) ||
                friendList.includes(data.uid + item.id) ? (
                  <button className="button_v_3">Friend</button>
                ) : friendRequestList.includes(item.id + data.uid) ||
                  friendRequestList.includes(item.uid + data.id) ? (
                  <button
                    onClick={() => handelCancleRequest(item)}
                    className="button_v_1"
                  >
                    Cancle Request
                  </button>
                ) : (
                  <button
                    onClick={() => handelFriendRequest(item)}
                    className="button_v_1"
                  >
                    Add Friend
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
