import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/types/types";

const useWindow = () => {
  const { formIsOpen } = useSelector((state: RootState) => state.vault);

  useEffect(() => {
    document.body.style.overflow = `${formIsOpen ? "hidden" : ""}`;
  }, [formIsOpen]);
};

export default useWindow;
