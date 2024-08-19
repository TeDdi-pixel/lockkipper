import { Checkbox, FormControlLabel } from "@mui/material";
import CustomTextField from "../../shared/ui/CustomTextField";
import CustomTypography from "../../shared/ui/CustomTypography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import Cookies from "js-cookie";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { rememberEmail, setEmailEntered } from "../../store/features/authorization/loginFormSlice";

const EmailFormFields = ({
  register,
  setValue,
}: {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}) => {
  const dispatch = useDispatch();
  const { email, emailIsRemembered } = useSelector(
    (state: RootState) => state.loginForm
  );
  const [isChecked, setIsChecked] = useState<boolean>(!!Cookies.get("email"));

  const [emailLabel, setEmailLabel] = useState<string | null>(email);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailLabel(e.target.value);
  };
  const handleCheckBox = () => {
    setIsChecked((prev) => !prev);
    dispatch(rememberEmail(isChecked));
  };

  useEffect(() => {
    if (emailIsRemembered && email) {
      Cookies.set("email", `${email}`);
    }
  }, [email, emailIsRemembered]);

  useEffect(() => {
    const savedEmail = Cookies.get("email");
    if (savedEmail) {
      setEmailLabel(savedEmail);
      setValue("email", savedEmail);
    }
  }, []);

  useEffect(() => {
    if (!isChecked) {
      Cookies.remove("email");
      dispatch(rememberEmail(false));
    }
  }, [isChecked]);

  useEffect(() => {
    if (email) dispatch(setEmailEntered(true));
  }, [email]);
  return (
    <>
      <CustomTextField
        type="email"
        label="Email"
        value={emailLabel}
        registerKey={"email"}
        register={register}
        onChange={handleEmailChange}
        required
      />

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
    </>
  );
};

export default EmailFormFields;
