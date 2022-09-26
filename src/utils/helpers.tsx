import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const _errorHandler = (err: unknown) => {
  let error: any = err as AxiosError;
  let message = !navigator.onLine
    ? "Please check your internet connection"
    : error?.response.status == 400
    ? "Something went wrond"
    : "";
  return toast.error(message);
};
