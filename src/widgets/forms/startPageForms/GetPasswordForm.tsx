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
import { RootState, TypeUser } from "../../../store/types/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../services/firebase-config";
import AlternativeEntryLine from "../../../entities/forms/getEmailForm/AlternativeEntryLine";
import { showError } from "../../../helpers/notify";
import { setPassword } from "../../../store/slices/loginFormSlice";
import { setUser, setUserLoggedIn } from "../../../store/slices/userSlice";
import { doc, getDoc } from "firebase/firestore";
import Cookies from "js-cookie";

const styles = {
  fontFamily: "Montserrat",
  fontWeight: "500",
  textTransform: "initial",
  fontSize: "14px",
};

const GetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleShowPassword = () => setShowPassword((show) => !show);
  const { email } = useSelector((state: RootState) => state.loginForm);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const { handleSubmit, register } = useForm<{ password: string }>();
  const onSubmit: SubmitHandler<{ password: string }> = async (data) => {
    if (data) dispatch(setPassword(data.password));

    if (!email) return;
    const cookiesUser = Cookies.get("user");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        data.password
      );
      const user = userCredential.user;

      if (cookiesUser && JSON.parse(cookiesUser).uid === user.uid) {
        dispatch(setUser(JSON.parse(cookiesUser)));
        dispatch(setUserLoggedIn(true))
      } else {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data() as TypeUser;
          dispatch(setUser(userData));
          Cookies.set("user", JSON.stringify(userData), { expires: 7 });
          dispatch(setUserLoggedIn(true))
        } else {
          console.log("No such document!");
        }
      }
    } catch (error) {
      console.log(error);
      showError(`${error}`);
    }
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
