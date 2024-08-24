import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setEmailEntered,
} from "../../../store/features/authorization/loginFormSlice";
import CustomTypography from "../../../shared/ui/CustomTypography";

type AlternativeEntrance = {
  buttonText: string;
  labelText: string;
  direction: string;
};

export const AlternativeEntrance = ({
  buttonText,
  labelText,
  direction,
}: AlternativeEntrance) => {
  const dispatch = useDispatch();

  const resetEmailFormStates = () => {
    dispatch(setEmailEntered(false));
    dispatch(setEmail(null));
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CustomTypography text={labelText} fontSize={"12px"} />
      <Button variant="text" onClick={resetEmailFormStates}>
        <Link to={direction} className="text-red">
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
