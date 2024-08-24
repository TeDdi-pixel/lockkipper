import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/types/types";
import Cookies from "js-cookie";
import { rememberEmail } from "../store/features/authorization/authSlice";

const useEmailField = (setValue: (key: string, value: string) => void) => {
  const dispatch = useDispatch();
  const { email, emailIsRemembered } = useSelector(
    (state: RootState) => state.auth
  );
  const [isChecked, setIsChecked] = useState<boolean>(!!emailIsRemembered);
  const [emailLabel, setEmailLabel] = useState<string | null>(email);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailLabel(e.target.value);
  };
  const handleCheckBox = () => {
    setIsChecked((prev) => !prev);
    dispatch(rememberEmail(isChecked));
  };
  //Getting email from cookies to field
  useEffect(() => {
    const savedEmail = Cookies.get("email");
    if (savedEmail) {
      setEmailLabel(savedEmail);
      setValue("email", savedEmail);
    }
  }, [setValue]);
  //Removing email from cookies and state if email checkbox is not set while re-entering
  useEffect(() => {
    if (!isChecked) {
      Cookies.remove("email");
      dispatch(rememberEmail(false));
    }
  }, [isChecked]);

  return { handleEmailChange, handleCheckBox, emailLabel, isChecked };
};

export default useEmailField;
