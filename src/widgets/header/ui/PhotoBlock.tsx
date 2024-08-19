import ProfileImage from "../../../shared/ui/ProfileImage";

const PhotoBlock = ({ handleSettings }: { handleSettings: () => void }) => {
  return (
    <div className="header__wrapper-right flex items-center gap-[5px] justify-between">
      <button onClick={handleSettings}>
        <ProfileImage width="45px" />
      </button>
    </div>
  );
};

export default PhotoBlock;
