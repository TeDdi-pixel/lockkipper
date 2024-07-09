import { Bounce, ToastOptions, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastConfig: ToastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  transition: Bounce,
  theme: "dark",
};

export const notify = (message: string) => {
  toast.success(message, toastConfig);
};

export const showError = (message: string) => {
  toast.error(message, toastConfig);
};

export const warn = (message: string) => {
  toast.warn(message, toastConfig);
};
