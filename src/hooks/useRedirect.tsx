import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../store/types/types";

export const useRedirect = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userLoggedIn } = useSelector((state: RootState) => state.user);
  
  useEffect(() => {
    const redirects: { condition: boolean; path: string }[] = [
      { condition: userLoggedIn && pathname === "/", path: "/vaults/my_vault" },
      { condition: !userLoggedIn, path: "/" },
    ];

    const redirect = redirects.find((rule) => rule.condition);

    if (redirect) navigate(redirect.path);
  }, [userLoggedIn, pathname, navigate]);
};
