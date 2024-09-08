import { useDispatch } from "react-redux";
import FormWrapper from "../../../../shared/ui/MainFormWrapper";
import { closeForm } from "../../../../store/features/vault/vaultSlice";
import { createFolder } from "../../../../store/asyncThunks/createFolder";
import { AppDispatch } from "../../../../store/types/types";
import FormHeader from "../../../../shared/ui/MainFormHeader";
import FormFooter from "../../../../shared/ui/MainFormFooter";
import { useForm } from "react-hook-form";
import { CustomTextField } from "../../../../shared/ui/CustomTextField";
import LineTrough from "../../../../shared/ui/LineTrough";

export const NewFolderForm = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: any) => {
    const { folder } = data;

    dispatch(closeForm());
    dispatch(createFolder(folder));
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormHeader title="New folder" />
      <LineTrough mt="mt-3" mb="mb-[30px]" />
      <div className="px-5 pb-8">
        <CustomTextField
          register={register}
          name="folder"
          label="Folder"
          required
        />
      </div>
      <LineTrough mt="mt-5" mb="mb-[35px]" />
      <FormFooter />
    </FormWrapper>
  );
};
