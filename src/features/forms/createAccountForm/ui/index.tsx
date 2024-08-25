import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/types/types";
import { TypeRegistration } from "../../types/types";
import { createAccount } from "../../../../store/asyncThunks/createAccount";
import EntryFormLayout from "../../../../layout/entryFormLayout/EntryFormLayout";
import { AlternativeEntrance } from "../../../../entities/alternativeEntrance";
import { PasswordField } from "./PasswordField";
import { PasswordSafeness } from "./PasswordSafeness";
import { RePasswordField } from "./RePasswordField";
import PasswordHint from "./PasswordHint";
import SubmitButton from "./SubmitButton";
import AccountNameField from "./AccountNameField";
import EmailField from "./EmailField";
import Title from "./Title";
import usePassword from "../../../../hooks/usePassword";

export const CreateAccountForm = () => {
  const { register, handleSubmit } = useForm<TypeRegistration>();
  const dispatch = useDispatch<AppDispatch>();
  const {
    progressColor,
    password,
    checkPasswordMatch,
    handlePasswordChange,
    handleReEnteredPasswordChange,
  } = usePassword();

  const onSubmit: SubmitHandler<TypeRegistration> = async (
    data: TypeRegistration
  ) => {
    checkPasswordMatch();
    dispatch(createAccount(data));
  };

  return (
    <EntryFormLayout styles={{ paddingTop: "40px" }}>
      <Title />
      <form
        className="mt-[40px] flex flex-col gap-4 border-border border rounded pt-[30px] px-6 pb-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailField register={register} />
        <AccountNameField register={register} />
        <PasswordField register={register} onChange={handlePasswordChange} />
        <PasswordSafeness progressColor={progressColor} password={password} />
        <RePasswordField
          register={register}
          onChange={handleReEnteredPasswordChange}
        />
        <PasswordHint register={register} />
        <SubmitButton />
        <AlternativeEntrance
          labelText="Already registered?"
          buttonText="Sign in"
          direction={"/"}
          currentForm="emailForm"
        />
      </form>
    </EntryFormLayout>
  );
};
