import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";

const SaveButton = () => {
  return (
    <Button
      sx={{ maxWidth: "80px" }}
      variant="contained"
      endIcon={<Save />}
      type="submit"
    >
      Save
    </Button>
  );
};

export default SaveButton;
