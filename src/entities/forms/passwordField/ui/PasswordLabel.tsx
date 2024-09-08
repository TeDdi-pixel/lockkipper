import { InputLabel } from "@mui/material";

const PasswordLabel = ({ label }: { label: string }) => {
  return <InputLabel required>{label}</InputLabel>;
};

export default PasswordLabel;
