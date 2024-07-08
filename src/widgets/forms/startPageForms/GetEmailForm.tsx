import { Button } from "@mui/material";
import CustomTypography from "../../../shared/ui/CustomTypography";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  setEmail,
  rememberEmail,
} from "../../../store/slices/loginFormSlice";
import AlternativeEntryLine from "../../../entities/forms/getEmailForm/AlternativeEntryLine";
import EmailFormFields from "../../../features/getEmailFormFields/EmailFormFields";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithGoogle } from "../../../store/asyncThunks/signInWithGoogle";
import { ThunkDispatch } from "redux-thunk";

const StartPageForm = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { register, handleSubmit, setValue } = useForm<FieldValues>({
    defaultValues: { emailIsRemembered: true },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(setEmail(data.email));
    if (data.emailIsRemembered) dispatch(rememberEmail(data.emailIsRemembered));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <EmailFormFields register={register} setValue={setValue} />

      <Button type="submit" variant="contained">
        <CustomTypography text="Continue" />
      </Button>

      <CustomTypography text="or" textAlign="center" />

      <Button
        variant="outlined"
        endIcon={<GoogleIcon />}
        onClick={() => dispatch(signInWithGoogle())}
      >
        <CustomTypography text="Login with" />
      </Button>

      <AlternativeEntryLine
        labelText="Your first time here?"
        buttonText="Create an account"
        direction="/create_account_form"
      />
    </form>
  );
};

export default StartPageForm;
