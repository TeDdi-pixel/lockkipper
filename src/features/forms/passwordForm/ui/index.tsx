import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/types/types";
import { signInWithPassword } from "../../../../store/asyncThunks/signInWithPassword";
import { PasswordField } from "../../../../entities/forms/passwordField";
import { AlternativeEntrance } from "../../../../entities/alternativeEntrance";
import SubmitButton from "./SubmitButton";
import { TypeRegistration } from "../../types/types";

export const PasswordForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { email } = useSelector((state: RootState) => state.auth);
  const { handleSubmit, register } = useForm<TypeRegistration>();

  const onSubmit: SubmitHandler<{ password: string }> = async (data) => {
    if (email)
      dispatch(signInWithPassword({ email: email, password: data.password }));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[40px] flex flex-col gap-4 border-border border rounded pt-[30px] px-6 pb-6"
    >
      <PasswordField register={register} />
      <SubmitButton />
      <AlternativeEntrance
        labelText="Your first time here?"
        buttonText="Create an account"
        direction="/create_account_form"
        currentForm="createAccountForm"
      />
    </form>
  );
};
