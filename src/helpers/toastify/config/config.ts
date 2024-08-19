import { Bounce, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastConfig: ToastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    transition: Bounce,
    theme: "dark",
  };