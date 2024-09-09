import { useSelector } from "react-redux";
import { RootState } from "../../../../store/types/types";
import { NewItemForm } from "../../../../features/forms/newItemForm";
import { NewFolderForm } from "../../../../features/forms/newFolderForm";
import useClose from "../../../../hooks/useClose";

export const VaultForm = () => {
  const { handleClose } = useClose();
  const { currentForm, formIsOpen } = useSelector(
    (state: RootState) => state.vault
  );

  const formMap = new Map([
    ["newItemForm", <NewItemForm key={currentForm} />],
    ["newFolderForm", <NewFolderForm key={currentForm} />],
  ]);

  const form = formMap.get(currentForm) || null;

  return (
    <div
      id="background"
      onClick={handleClose}
      className={`absolute transition-all duration-300 ease-in-out left-1/2 -translate-x-1/2 w-full h-[100vh] top-0 inset-0 bg-black bg-opacity-10 backdrop-blur-sm origin-center ${
        formIsOpen
          ? "opacity-100 scale-100 z-50"
          : "opacity-0  scale-0 -z-50"
      }`}
    >
      {form}
    </div>
  );
};
