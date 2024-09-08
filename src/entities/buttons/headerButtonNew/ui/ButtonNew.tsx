import { Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import { useLocation } from "react-router-dom";
import { MouseEvent } from "react";

type Props = {
  open: boolean;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  anchorEl: null | HTMLElement;
  handleClose: (event: MouseEvent<HTMLButtonElement>) => void;
  handleMenuItem: (event: MouseEvent<HTMLLIElement>) => void;
};

export const ButtonNew = ({
  open,
  handleClick,
  anchorEl,
  handleClose,
  handleMenuItem,
}: Props) => {
  const { pathname } = useLocation();
  return pathname === "/vaults/my_vault" ? (
    <>
      <Button
        endIcon={
          open ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />
        }
        variant="contained"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        New
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleMenuItem}>Item</MenuItem>
        <MenuItem onClick={handleMenuItem}>Folder</MenuItem>
      </Menu>
    </>
  ) : null;
};
