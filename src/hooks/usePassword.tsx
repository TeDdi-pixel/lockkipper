import React, { ChangeEvent, useEffect, useState } from "react";
import zxcvbn from "zxcvbn";
import { showError } from "../helpers/toastify/error";
import { getPasswordStrength } from "../helpers/getPasswordStrangth";
import { useDispatch } from "react-redux";
import { TypeProgressColor } from "../features/forms/createAccountForm/types/types";

const usePassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string | null>(null);
  const [reEnteredPassword, setReEnteredPassword] = useState<string | null>(
    null
  );
  const [score, setScore] = useState<number>(0);
  const [progressColor, setProgressColor] =
  useState<TypeProgressColor>("primary");
  const dispatch = useDispatch()
  
  const handleShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    const result = zxcvbn(value);
    setScore(result.score);
  };
  const handleReEnteredPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setReEnteredPassword(value);
  };

  const checkPasswordMatch = () => {
    if (password && reEnteredPassword) {
      if (password != reEnteredPassword) {
        showError("Passwords do not match");
        return false;
      }
    }
  };

  useEffect(() => {
    getPasswordStrength(score, dispatch, setProgressColor);
  }, [score, dispatch]);
  return {
    showPassword,
    handleShowPassword,
    handleMouseDownPassword,
    password,
    handlePasswordChange,
    handleReEnteredPasswordChange,
    checkPasswordMatch,
    progressColor
  };
};

export default usePassword;
