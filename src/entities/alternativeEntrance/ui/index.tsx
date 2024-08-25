import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CustomTypography from "../../../shared/ui/CustomTypography";
import { TypeCurrentForm } from "../../../store/types/types";
import {
  setCurrentForm,
  setEmail,
} from "../../../store/features/authorization/authSlice";

type Props = {
  buttonText: string;
  labelText: string;
  direction: string;
  currentForm: TypeCurrentForm;
};

export const AlternativeEntrance = ({
  buttonText,
  labelText,
  direction,
  currentForm,
}: Props) => {
  const dispatch = useDispatch();

  const switchCurrentForm = () => {
    dispatch(setEmail(null));
    dispatch(setCurrentForm(currentForm));
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CustomTypography text={labelText} fontSize={"12px"} />
      <Button variant="text" onClick={switchCurrentForm}>
        <Link to={direction} className="text-primary">
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
