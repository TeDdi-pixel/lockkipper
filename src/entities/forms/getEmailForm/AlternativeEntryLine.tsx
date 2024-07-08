import { Box, Button } from "@mui/material";
import CustomTypography from "../../../shared/ui/CustomTypography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setEmailEntered,
} from "../../../store/slices/loginFormSlice";

type AlternativeEntryLine = {
  buttonText: string;
  labelText: string;
  direction: string;
};

const AlternativeEntryLine = ({
  buttonText,
  labelText,
  direction,
}: AlternativeEntryLine) => {
  const dispatch = useDispatch();

  const refreshEmailFormStates = () => {
    dispatch(setEmailEntered(false));
    dispatch(setEmail(null));
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CustomTypography text={labelText} fontSize={"12px"} />
      <Button variant="text" onClick={refreshEmailFormStates}>
        <Link to={direction} style={{ color: "#198BDF" }}>
          <CustomTypography
            text={buttonText}
            fontWeight={500}
            fontSize={"12px"}
          />
        </Link>
      </Button>
    </Box>
  );
};

export default AlternativeEntryLine;
