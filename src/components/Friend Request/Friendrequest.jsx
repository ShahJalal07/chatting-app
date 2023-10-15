import { BsThreeDotsVertical } from "react-icons/bs";
import "./Friendrequest.css";
import { useEffect, useState } from "react";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useSelector } from "react-redux";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const Friendrequest = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.userInfo.userInfo);
  console.log(data);
  const [friendrequestList, setFriendrequestList] = useState([]);

  // get friendrequest list from friendrequest collection start
  useEffect(() => {
    const friendRequestRef = ref(db, "friendrequest");
    onValue(friendRequestRef, (snapshort) => {
      let list = [];
      snapshort.forEach((item) => {
        // console.log(item.val());
        if (item.val().receverId === data.uid) {
          list.push({ ...item.val(), id: item.key });
        }
      });
      setFriendrequestList(list);
    });
  }, []);
  // get friendrequest list from friendrequest collection end

  // friend request accept start
  const handelFriendRequestAccept = (item) => {
    console.log(item);
    set(push(ref(db, "friends")), {
      ...item,
    })
      .then(() => {
        remove(ref(db, "friendrequest/"+item.id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // friend request accept end

  // friend request delete start
  const handelRequestDelete = (item) => {
    console.log(item);

    remove(ref(db, "friendrequest/", item.id));
  };
  // friend request delete end

  return (
    <div>
      <div className="containerTitle">
        <h2>Friend Request</h2>
        <BsThreeDotsVertical />
      </div>
      {friendrequestList.map((item, i) => {
        return (
          <div key={i} className="friendreq_box">
            <div className="friendreq_list">
              <div className="friendreq">
                <div className="friendreq_img">
                  <ProfilePicture imgID={item.senderId} />
                </div>
                <div className="friendreq_name">
                  <h4>{item?.senderName}</h4>
                </div>
              </div>

              <div className="">
                <button
                  onClick={() => handelRequestDelete(item)}
                  className="button_v_2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handelFriendRequestAccept(item)}
                  className="button_v_1"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Friendrequest;
