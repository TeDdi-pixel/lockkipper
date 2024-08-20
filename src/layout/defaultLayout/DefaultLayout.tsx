import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import { ToastContainer } from "react-toastify";
import { Menu } from "../../widgets/menu";
import { Header } from "../../widgets/header";
type TypeProps = {
  children: ReactNode;
  title: string;
};

const DefaultLayout = ({ children, title }: TypeProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userLoggedIn } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userLoggedIn && pathname === "/") {
      navigate("/vaults/my_vault");
    } else if (!userLoggedIn && pathname !== "/") {
      navigate("/");
    }
  }, [userLoggedIn]);

  return (
    <div className="flex h-[100%]">
      <ToastContainer style={{ zIndex: "2000" }} />
      <Menu />
      <div className="content__wrapper">
        <Header title={title} />
        <main className="flex ml-[230px]">{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
