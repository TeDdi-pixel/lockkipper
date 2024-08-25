import { InputLabel } from "@mui/material";
import { styles } from "../config/sharedStyles";

const PasswordLabel = ({ label }: { label: string }) => {
  return (
    <InputLabel required sx={styles}>
      {label}
    </InputLabel>
  );
};

export default PasswordLabel;
