import { FaRegTrashCan } from "react-icons/fa6";

const TrashItem = () => {
  return (
    <div className="text-primary-foreground flex items-center w-full gap-2.5 pt-7 pb-2.5 cursor-pointer transition-colors hover:text-primary">
      <FaRegTrashCan style={{ fontSize: "16px" }} />
      <span>Trash</span>
    </div>
  );
};

export default TrashItem;
