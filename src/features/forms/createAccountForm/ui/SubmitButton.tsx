import { Button } from "@mui/material";
import { styles } from "../../../../entities/forms/passwordField/config/sharedStyles";

const SubmitButton = () => {
  return (
    <Button type="submit" variant="contained" sx={styles}>
      Create account
    </Button>
  );
};

export default SubmitButton;
