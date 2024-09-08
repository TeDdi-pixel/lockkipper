import { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { openForm } from "../../../../store/features/vault/vaultSlice";
import { ButtonNew } from "./ButtonNew";

export const HeaderButtonNew = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItem = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLButtonElement;
    const formType = target.innerText;
    dispatch(openForm("new" + formType + "Form"));
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ButtonNew
      open={open}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleMenuItem={handleMenuItem}
      handleClose={handleClose}
    />
  );
};
