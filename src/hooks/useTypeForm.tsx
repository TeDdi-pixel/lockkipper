import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/types/types";
import { useForm, UseFormReturn } from "react-hook-form";
import { LoginForm } from "../features/forms/newItemForm/ui/composedFields/loginForm/LoginForm";
import { CardForm } from "../features/forms/newItemForm/ui/composedFields/CardForm";
import { SecureNoteForm } from "../features/forms/newItemForm/ui/composedFields/SecureNoteForm";

function useTypeForm() {
  const { formType, vaultItem } = useSelector(
    (state: RootState) => state.vault
  );
  const vaultItemType = vaultItem?.formType;
  const resolvedFormType = vaultItemType ?? formType;

  const formMethods = new Map<string, UseFormReturn<any>>([
    ["Login", useForm()],
    ["Card", useForm()],
    ["Secure note", useForm()],
  ]);

  const formMap = new Map([
    ["Login", (form: UseFormReturn<any>) => <LoginForm {...form} />],
    ["Card", (form: UseFormReturn<any>) => <CardForm {...form} />],
    ["Secure note", (form: UseFormReturn<any>) => <SecureNoteForm {...form} />],
  ]);

  const currentForm = useMemo(() => {
    const formMethod = formMethods.get(resolvedFormType);
    const form = formMap.get(resolvedFormType);
    if (formMethod && form) return form(formMethod);
  }, [formType, formMethods.get(resolvedFormType)]);

  return {
    currentForm,
    ...formMethods.get(resolvedFormType),
  };
}

export default useTypeForm;
