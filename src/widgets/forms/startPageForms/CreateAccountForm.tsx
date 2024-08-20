import { SubmitHandler, useForm } from "react-hook-form";
import { TypeRegistration } from "./types/types";
import EntryFormLayout from "../../../layout/entryFormLayout/EntryFormLayout";
import CustomTypography from "../../../shared/ui/CustomTypography";
import LinearProgress from "@mui/joy/LinearProgress";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/types/types";
import { ChangeEvent, useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  LinearProgressPropsColorOverrides,
  OutlinedInput,
  TextField,
} from "@mui/material";
import AlternativeEntryLine from "../../../entities/forms/getEmailForm/AlternativeEntryLine";
import zxcvbn from "zxcvbn";
import { createAccount } from "../../../store/asyncThunks/createAccount";
import { getPasswordStrength } from "../../../helpers/getPasswordStrangth";
import { showError } from "../../../helpers/toastify/error";
import { OverridableStringUnion } from "@mui/types";
import { ColorPaletteProp } from "@mui/joy/styles/types";

const styles = {
  fontFamily: "Montserrat",
  fontWeight: "500",
  textTransform: "initial",
  fontSize: "14px",
};

const CreateAccountForm = () => {
  const [password, setPassword] = useState<string | null>(null);
  const [reEnteredPassword, setReEnteredPassword] = useState<string | null>(
    null
  );
  const [progressColor, setProgressColor] = useState<OverridableStringUnion<ColorPaletteProp, LinearProgressPropsColorOverrides> | undefined>("danger");

  const [score, setScore] = useState<number>(0);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);
  const { passwordSafeness } = useSelector(
    (state: RootState) => state.registerForm
  );
  const dispatch = useDispatch<AppDispatch>();
  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleShowRePassword = () => setShowRePassword((show) => !show);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    const result = zxcvbn(value);
    setScore(result.score);
  };
  const handleReEnteredPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setReEnteredPassword(value);
  };

  const { register, handleSubmit } = useForm<TypeRegistration>();

  const checkPasswordMatch = () => {
    if (password && reEnteredPassword) {
      if (password != reEnteredPassword) {
        showError("Passwords do not match");
        return false;
      }
    }
  };
  useEffect(() => {
    getPasswordStrength(score, dispatch, setProgressColor);
  }, [score, dispatch]);

  const onSubmit: SubmitHandler<TypeRegistration> = async (
    data: TypeRegistration
  ) => {
    checkPasswordMatch();
    dispatch(createAccount(data));
  };

  return (
    <EntryFormLayout styles={{ paddingTop: "40px" }}>
      <CustomTypography
        text="Create an account"
        textAlign="center"
        fontSize="23px"
      />

      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginTop: "7px" }}
      >
        <TextField
          label="Email"
          type="email"
          size="small"
          {...register('email')}
          required={true}
        />
        <TextField
          label="Account name"
          type="Text"
          size="small"
          {...register('displayName')}
          required={true}
        />
        <FormControl
          variant="outlined"
          size="small"
          onChange={handlePasswordChange}
        >
          <InputLabel
            required
            htmlFor="outlined-adornment-password"
            sx={styles}
          >
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
        {password && password.length > 0 ? (
          <LinearProgress
            determinate
            value={passwordSafeness}
            color={progressColor}
            sx={{
              "--LinearProgress-progressThickness": "5px",
              transition: "all 0.5s ease",
            }}
          />
        ) : null}
        <FormControl
          variant="outlined"
          size="small"
          onChange={handleReEnteredPasswordChange}
        >
          <InputLabel
            required
            htmlFor="outlined-adornment-re-password"
            sx={styles}
          >
            Re-enter the master password
          </InputLabel>

          <OutlinedInput
            id="outlined-adornment-re-password"
            type={showRePassword ? "text" : "password"}
            {...register("reEnteredPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowRePassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showRePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Re-enter the master password"
          />
        </FormControl>

        <TextField
          label="Master password hint"
          type="text"
          size="small"
          {...register('hint')}
        />
        <Button type="submit" variant="contained" sx={styles}>
          Create account
        </Button>
        <AlternativeEntryLine
          labelText="Already registered?"
          buttonText="Sign in"
          direction={"/"}
        />
      </form>
    </EntryFormLayout>
  );
};

export default CreateAccountForm;
