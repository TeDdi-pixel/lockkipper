import { useSelector } from "react-redux";
import ProfileImage from "../../../shared/ui/ProfileImage";
import { RootState } from "../../../store/types/types";

const PhotoBlock = () => {
  const { user } = useSelector((state: RootState) => state.user);
  
  return (
    <div className="px-3.5 py-3 flex items-center border-b border-b-border justify-between">
      {user && (
        <div className="flex gap-[5px] items-center overflow-hidden">
          <ProfileImage width="45px" />
          <span>Logged in as {user.displayName}</span>
        </div>
      )}
    </div>
  );
};

export default PhotoBlock;
