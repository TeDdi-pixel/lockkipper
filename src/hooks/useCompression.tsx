import { useDispatch } from "react-redux";
import { setProfilePhoto } from "../store/features/user/userSlice";
import imageCompression from "browser-image-compression";

const useCompression = () => {
  const dispatch = useDispatch();

  const convertToWebP = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");

          if (ctx) {
            ctx.drawImage(img, 0, 0);
            const webpBase64 = canvas.toDataURL("image/webp");
            resolve(webpBase64);
          } else {
            reject(new Error("Could not get canvas context"));
          }
        };

        img.onerror = (error) => reject(error);
      };

      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(file);
    });
  };

  const compressAndConvertToWebp = async (file: File): Promise<string | undefined> => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const base64String = await convertToWebP(compressedFile);
      dispatch(setProfilePhoto(base64String));
      return base64String;
    } catch (error) {
      console.error("Error compressing or converting image:", error);
      return undefined;
    }
  };

  return { compressAndConvertToWebp };
};

export default useCompression;
