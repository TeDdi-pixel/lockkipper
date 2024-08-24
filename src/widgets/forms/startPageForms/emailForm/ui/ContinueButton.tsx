import { Button } from "@mui/material";
import CustomTypography from "../../../../../shared/ui/CustomTypography";

const ContinueButton = () => {
  return (
    <Button type="submit" variant="contained">
      <CustomTypography text="Continue" />
    </Button>
  );
};

export default ContinueButton;
