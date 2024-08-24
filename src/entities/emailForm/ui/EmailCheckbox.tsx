import { Checkbox, FormControlLabel } from "@mui/material";
import CustomTypography from "../../../shared/ui/CustomTypography";
import useEmailField from "../../../hooks/useEmailField";
import { TypeProps } from "../types/types";

const EmailCheckbox = ({ setValue, register }: TypeProps) => {
  const { handleCheckBox, isChecked } = useEmailField(setValue);
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...register("emailIsRemembered")}
          checked={isChecked}
          onClick={handleCheckBox}
        />
      }
      label={<CustomTypography text="Remember email" fontWeight="500" />}
    />
  );
};

export default EmailCheckbox;
