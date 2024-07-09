import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import { PiUserCircleDuotone } from "react-icons/pi";

const ProfileImage = ({ width }: { width: string }) => {
  const { profilePhoto } = useSelector((state: RootState) => state.user);

  return profilePhoto ? (
    <img
      style={{ width: width, height: width }}
      className="object-cover rounded-full"
      src={profilePhoto}
      alt="profile_photo"
    />
  ) : (
    <PiUserCircleDuotone
      style={{ width: width, height: width }}
      className="object-cover rounded-full"
    />
  );
};

export default ProfileImage;
