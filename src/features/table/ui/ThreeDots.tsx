import { Button, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/types";
import { deleteFolderItem } from "../../../shared/api/firebase/vault/deleteFolderItem/deleteFolderItem";

const ThreeDots = ({ itemId, folder }: { itemId: number; folder: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user } = useSelector((state: RootState) => state.user);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = async (itemId: number, folder: string) => {
    if (!user) {
      throw new Error("User is not found");
    }

    return await deleteFolderItem(user.uid, itemId, folder);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex justify-end">
      <Button
        sx={{
          padding: "10.5px",
          borderRadius: "0.25rem",
          height: "34px",
          "&:active": {
            color: "hsl(210, 79%, 46%)",
          },
        }}
        variant="text"
        id="basic-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="p-[10.5px] text-primary-foreground">
          <BsThreeDotsVertical />
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleDelete(itemId, folder)}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default ThreeDots;
