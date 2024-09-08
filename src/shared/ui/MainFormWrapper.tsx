import { FormEventHandler, ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
};

const FormWrapper = ({ children, onSubmit }: Props) => {
  const { formIsOpen } = useSelector((state: RootState) => state.vault);

  return (
    <form
      onSubmit={onSubmit}
      className={`w-[800px] bg-white relative top-7 left-1/2 mb-7 -translate-x-1/2 py-7 shadow-custom rounded transition-transform  duration-300 ease-in-out ${
        formIsOpen ? "z-50" : "-z-50"
      }`}
    >
      {children}
    </form>
  );
};

export default FormWrapper;
