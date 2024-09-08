import { IconButton } from "@mui/material";
import MainTitle from "./MainTitle";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { closeForm } from "../../store/features/vault/vaultSlice";

const FormHeader = ({ title }: { title: string }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between px-4">
      <MainTitle className="text-[16px] uppercase" title={title} />
      <IconButton onClick={() => dispatch(closeForm())}>
        <RxCross2 />
      </IconButton>
    </div>
  );
};

export default FormHeader;
