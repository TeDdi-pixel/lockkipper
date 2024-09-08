import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { closeForm } from "../store/features/vault/vaultSlice";

const useClose = () => {
  const dispatch = useDispatch();
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement && e.target.id === "background")
      dispatch(closeForm());
  };

  return { handleClose };
};

export default useClose;
