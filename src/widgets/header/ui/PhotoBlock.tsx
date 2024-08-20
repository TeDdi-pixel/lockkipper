import ProfileImage from "../../../shared/ui/ProfileImage";

const PhotoBlock = ({ handleSettings }: { handleSettings: () => void }) => {
  return (
    <div className="flex items-center gap-[5px] justify-between">
      <button onClick={handleSettings}>
        <ProfileImage width="w-[45px]" height="h-[45px]" />
      </button>
    </div>
  );
};

export default PhotoBlock;
