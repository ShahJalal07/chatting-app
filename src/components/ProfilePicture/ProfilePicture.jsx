import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

const ProfilePicture = ({ imgID }) => {
  let [ProfilePicture, setProfilePIcture] = useState("");
  console.log(ProfilePicture)
  const storage = getStorage();
  const pictureRef = ref(storage, imgID);
  useEffect(() => {
    getDownloadURL(pictureRef)
      .then((url) => {
        setProfilePIcture(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <img src={ProfilePicture} alt="" />
    </div>
  );
};

export default ProfilePicture;
