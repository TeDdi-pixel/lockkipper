import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { openForm } from "../../store/features/vault/vaultSlice";

const NewItemButton = ({ text }: { text: string }) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(openForm("newItemForm"));

  return (
    <Button
      startIcon={<AddIcon />}
      variant="contained"
      component="span"
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default NewItemButton;
