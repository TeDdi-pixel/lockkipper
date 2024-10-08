import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/types/types";
import { signInWithGoogle } from "../../../../store/asyncThunks/signInWithGoogle";
import CustomTypography from "../../../../shared/ui/CustomTypography";

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
