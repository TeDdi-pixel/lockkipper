import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { RootState } from "../../store/types/types";
import { useNavigate } from "react-router-dom";

const EntryFormLayout = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: Record<string, string | number>;
}) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userLoggedIn) navigate("/vaults/my_vault");
  }, [userLoggedIn]);

  return (
    <div className="entry-container">
      <ToastContainer style={{ zIndex: "2000" }} />
      <div className="start-page__wrapper" style={styles}>
        {children}
      </div>
    </div>
  );
};

export default EntryFormLayout;
