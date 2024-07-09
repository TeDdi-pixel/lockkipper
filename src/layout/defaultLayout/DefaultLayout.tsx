import { ReactNode, useEffect } from "react";
import Header from "../../widgets/header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import Menu from "../../widgets/menu/Menu";
import { ToastContainer } from "react-toastify";
type TypeProps = {
  children: ReactNode;
  title: string;
};

const DefaultLayout = ({ children, title }: TypeProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userLoggedIn } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userLoggedIn && location.pathname === "/") {
      navigate("/vault");
    } else if (!userLoggedIn && location.pathname !== "/") {
      navigate("/");
    }
  }, [userLoggedIn]);

  return (
    <div className="flex h-[100%]">
      <ToastContainer style={{ zIndex: "2000" }} />
      
      <Menu />

      <div className="content__wrapper">
        <Header title={title} />

        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
