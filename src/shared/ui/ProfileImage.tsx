import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import { PiUserCircleDuotone } from "react-icons/pi";

const ProfileImage = ({ width, height }: { width: string; height: string }) => {
  const { profilePhoto } = useSelector((state: RootState) => state.user);

  return (
    <div
      className={`rounded-full overflow-hidden ${width} ${height} flex-shrink-0 aspect-square`}
    >
      {profilePhoto && profilePhoto !== "Anonymous" ? (
        <img
          className="object-cover w-full h-full"
          src={profilePhoto}
          alt="profile_photo"
        />
      ) : (
        <PiUserCircleDuotone className="object-cover w-full h-full" />
      )}
    </div>
  );
};

export default ProfileImage;
