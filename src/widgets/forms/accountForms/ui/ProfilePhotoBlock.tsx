import { ChangeEvent } from "react";
import ButtonTypeFile from "../../../../shared/ui/ButtonTypeFile";
import ProfileImage from "../../../../shared/ui/ProfileImage";
import SaveAsSharpIcon from "@mui/icons-material/SaveAsSharp";

const ProfilePhotoBlock = ({
  handleImage,
}: {
  handleImage: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex items-center gap-[12.5px] max-w-[400px]">
      <ProfileImage width="w-[136px]" height="h-[136px]" />
      <ButtonTypeFile
        text={"Customize"}
        icon={<SaveAsSharpIcon />}
        func={handleImage}
      />
    </div>
  );
};

export default ProfilePhotoBlock;
