import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import CustomTypography from "../../../shared/ui/CustomTypography";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../../store/slices/loginFormSlice";
import { signInWithPassword } from "../../../store/asyncThunks/signInWithPassword";
import { ThunkDispatch } from "redux-thunk";
import AlternativeEntryLine from "../../../entities/forms/getEmailForm/AlternativeEntryLine";
import { RootState } from "../../../store/types/types";

const styles = {
  fontFamily: "Montserrat",
  fontWeight: "500",
  textTransform: "initial",
  fontSize: "14px",
};

const GetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const handleShowPassword = () => setShowPassword((show) => !show);
  const { email } = useSelector((state: RootState) => state.loginForm);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const { handleSubmit, register } = useForm<{ password: string }>();
  const onSubmit: SubmitHandler<{ password: string }> = async (data) => {
    if (data.password) dispatch(setPassword(data.password));
    if (email)
      dispatch(signInWithPassword({ email: email, password: data.password }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormControl variant="outlined" size="small">
        <InputLabel required htmlFor="outlined-adornment-password" sx={styles}>
          Master-password
        </InputLabel>
        <OutlinedInput
          required
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Master-password"
        />
      </FormControl>

      <Button type="submit" variant="contained">
        <CustomTypography text="Log in with master password" />
      </Button>

      <AlternativeEntryLine
        labelText="Your first time here?"
        buttonText="Create an account"
        direction="/create_account_form"
      />
    </form>
  );
};

export default GetPasswordForm;
