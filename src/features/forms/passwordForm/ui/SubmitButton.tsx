import { Button } from "@mui/material";
import CustomTypography from "../../../../shared/ui/CustomTypography";

const SubmitButton = () => {
  return (
    <Button type="submit" variant="contained">
      <CustomTypography text="Log in with master password" />
    </Button>
  );
};

export default SubmitButton;
