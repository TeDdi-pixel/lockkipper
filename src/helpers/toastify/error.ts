import { toast } from "react-toastify";
import { toastConfig } from "./config/config";

export const showError = (message: string) => {
  toast.error(message, toastConfig);
};
