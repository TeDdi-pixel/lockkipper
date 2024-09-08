import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeForm } from "../../store/features/vault/vaultSlice";

const FormFooter = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 px-4">
      <Button variant="contained" type="submit">
        Save
      </Button>
      <Button variant="outlined" onClick={() => dispatch(closeForm())}>
        Cancel
      </Button>
    </div>
  );
};

export default FormFooter;
