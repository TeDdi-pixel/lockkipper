import CustomTypography from "../../../../../shared/ui/CustomTypography";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../../../../../store/asyncThunks/signInWithGoogle";
import { AppDispatch } from "../../../../../store/types/types";

const GoogleEntrance = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <CustomTypography text="or" textAlign="center" />
      <Button
        variant="outlined"
        endIcon={<GoogleIcon />}
        onClick={() => dispatch(signInWithGoogle())}
      >
        <CustomTypography text="Login with" />
      </Button>
    </>
  );
};

export default GoogleEntrance;
