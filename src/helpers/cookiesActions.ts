import { TypeUser } from "../store/types/types";
import Cookies from "js-cookie";

export const setUserCookies = (user: TypeUser) => {
  Cookies.set("user", JSON.stringify(user), {
    expires: 3,
    secure: true,
    sameSite: "strict",
  });
};

export const setEmailCookies = (email: string) => {
  Cookies.set("email", email, {
    expires: 3,
    secure: true,
    sameSite: "strict",
  });
};
