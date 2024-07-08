import { ReactNode, useEffect } from "react";
import Header from "../../widgets/header/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";
import Menu from "../../widgets/menu/Menu";
import { Checkbox } from "@mui/material";
import { IoCardOutline } from "react-icons/io5";
type TypeProps = {
  children: ReactNode;
  title: string;
};

const DefaultLayout = ({ children, title }: TypeProps) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useSelector((state: RootState) => state.user);

  //redirection depending on user login
  useEffect(() => {
    userLoggedIn ? navigate("/vault") : navigate("/");
  }, [userLoggedIn]);

  
  return (
    <div className="container">
      <Menu />

      <div className="content__wrapper">
        <Header title={title} />

        <main className="main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
