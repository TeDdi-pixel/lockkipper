import { toast } from "react-toastify";
import { toastConfig } from "./config/config";

export const notify = (message: string) => {
    toast.success(message, toastConfig);
  };