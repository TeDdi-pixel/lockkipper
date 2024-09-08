import { useDispatch, useSelector } from "react-redux";
import LineTrough from "../../../../shared/ui/LineTrough";
import { closeForm } from "../../../../store/features/vault/vaultSlice";
import useTypeForm from "../../../../hooks/useTypeForm";
import { ItemType } from "./fields/ItemType";
import { TypeInnerFormData } from "../types/types";
import { createItem } from "../../../../store/asyncThunks/createItem";
import { AppDispatch, RootState } from "../../../../store/types/types";
import { NotesField } from "./fields/NotesField";
import FormFooter from "../../../../shared/ui/MainFormFooter";
import FormWrapper from "../../../../shared/ui/MainFormWrapper";
import FormHeader from "../../../../shared/ui/MainFormHeader";
import { updateItem } from "../../../../shared/api/firebase/vault/updateItem";
import { isEmptyObj } from "../../../../helpers/isEmptyObj";

export const NewItemForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { vaultItem, vaultItemId, itemLoading } = useSelector(
    (state: RootState) => state.vault
  );
  const { user } = useSelector((state: RootState) => state.user);

  if (!user?.uid) throw new Error("No user found");

  const { currentForm, handleSubmit, control, register } = useTypeForm();

  if (!handleSubmit || !control || !register) return null;

  const onSubmit = async (data: TypeInnerFormData) => {
    if (!itemLoading && !isEmptyObj(vaultItem) && vaultItemId) {
      await updateItem(user.uid, data?.folder, data, vaultItemId);
    } else dispatch(createItem(data));

    dispatch(closeForm());
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormHeader title="New item" />
      <LineTrough mt="mt-3" mb="mb-[30px]" />
      <ItemType control={control} />
      {currentForm}
      <div className="px-4 mt-5">
        <NotesField register={register} />
      </div>
      <LineTrough mt="mt-5" mb="mb-[35px]" />
      <FormFooter />
    </FormWrapper>
  );
};
