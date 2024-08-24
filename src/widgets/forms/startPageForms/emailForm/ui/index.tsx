import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  rememberEmail,
  setEmail,
} from "../../../../../store/features/authorization/loginFormSlice";
import { EmailFormField } from "../../../../../features/emailForm";
import ContinueButton from "./ContinueButton";
import GoogleEntrance from "./GoogleEntrance";
import { AppDispatch } from "../../../../../store/types/types";
import { AlternativeEntrance } from "../../../../../entities/alternativeEntrance";

export const StartPageForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, setValue } = useForm<FieldValues>({
    defaultValues: { emailIsRemembered: false },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(setEmail(data.email));
    if (data.emailIsRemembered) dispatch(rememberEmail(data.emailIsRemembered));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <EmailFormField register={register} setValue={setValue} />
      <ContinueButton />
      <GoogleEntrance />
      <AlternativeEntrance
        labelText="Your first time here?"
        buttonText="Create an account"
        direction="/create_account_form"
      />
    </form>
  );
};
