import { BsThreeDotsVertical } from "react-icons/bs";
import "./Friends.css";
import { useSelector } from "react-redux";
import {
  DataSnapshot,
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useEffect, useState } from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const Friends = () => {
  const data = useSelector((state) => state.userInfo.userInfo);
  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);
  console.log(friendList);
  // get firends list from database friend collection starts
  useEffect(() => {
    const friendRef = ref(db, "friends");
    onValue(friendRef, (snapshort) => {
      let list = [];
      snapshort.forEach((item) => {
        if (
          data.uid == item.val().receverId ||
          data.uid == item.val().senderId
        ) {
          list.push({ ...item.val(), id: item.key });
        }
      });
      setFriendList(list);
    });
  }, []);
  // get firends list from database friend collection end

  // block friend start
  const handelBlock = (item) => {
    if (data.uid == item.senderId) {
      set(push(ref(db, "block")), {
        block: item.receverName,
        blockId: item.receverId,
        blockBy: item.senderName,
        blockById: item.senderId,
      })
        .then(() => {
          remove(ref(db, "friends/", item.key));
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (data.uid == item.receverId) {
      set(push(ref(db, "block")), {
        block: item.senderName,
        blockId: item.senderId,
        blockBy: item.receverName,
        blockById: item.receverId,
      })
        .then(() => {
          remove(ref(db, "friends/"+ item.id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // block friend end
  return (
    <div>
      <div className="containerTitle">
        <h2>Friends</h2>
        <BsThreeDotsVertical />
      </div>
      {friendList.map((item) => {
        return (
          <div key={item.id} className="friends_box">
            <div className="friends_list">
              <div className="friends">
                <div className="friends_img">
                  <ProfilePicture
                    imgID={
                      data.uid == item.senderId ? item.receverId : item.senderId
                    }
                  />
                </div>
                <div className="friends_name">
                  {data.uid == item.senderId ? (
                    <h4>{item.receverName}</h4>
                  ) : (
                    <h4>{item.senderName}</h4>
                  )}
                </div>
              </div>

              <div className="">
                <button className="button_v_3">Unfriend</button>
                <button
                  onClick={() => handelBlock(item)}
                  className="button_v_2"
                >
                  Block
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
