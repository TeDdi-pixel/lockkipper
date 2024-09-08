import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { Menu } from "../../widgets/menu";
import { Header } from "../../widgets/header";
import { useRedirect } from "../../hooks/useRedirect";
import useWindow from "../../hooks/useWindow";

type Props = {
  children: ReactNode;
  title: string;
};

const DefaultLayout = ({ children, title }: Props) => {
  useRedirect(); //Redirects user to of from '/' path depends on userLoggedIn variable status
  useWindow();

  return (
    <div className="flex">
      <ToastContainer className="z-[2000]" />
      <div className="w-full p-[21px] relative">
        <Header title={title} />
        <Menu />
        <main className="flex flex-col ml-[230px]">{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
