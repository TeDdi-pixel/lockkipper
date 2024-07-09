import { Button } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

type TypeProps = {
  text: string;
  icon: ReactNode;
  func: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ButtonTypeFile = ({ text, icon, func }: TypeProps) => {
  return (
    <>
      <input
        accept="image/*"
        className="hidden"
        id="image-button-file"
        type="file"
        onChange={func}
      />
      <label htmlFor="image-button-file">
        <Button
          startIcon={icon}
          variant="outlined"
          component="span"
          sx={{
            borderColor: "#666666",
            color: "#666666",
            height: "33.5px",
            "&:hover": {
              borderColor: "#666666",
            },
            "&:active": {
              borderColor: "#666666",
            },
          }}
        >
          {text}
        </Button>
      </label>
    </>
  );
};

export default ButtonTypeFile;
