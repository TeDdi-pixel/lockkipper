import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import { PiUserCircleDuotone } from "react-icons/pi";

const ProfileImage = () => {
  const { profilePhoto } = useSelector((state: RootState) => state.user);
  return (
    <>
      {profilePhoto ? (
        <img
          src={profilePhoto}
          width="35px"
          height="35px"
          alt="profile_photo"
        />
      ) : (
        <PiUserCircleDuotone style={{ fontSize: "45px" }} />
      )}
    </>
  );
};

export default ProfileImage;
