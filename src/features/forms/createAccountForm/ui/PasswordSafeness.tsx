import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/types/types";
import { TypeProgressColor } from "../types/types";

type Props = {
  progressColor: TypeProgressColor;
  password: string | null;
};

export const PasswordSafeness = ({ progressColor, password }: Props) => {
  const { passwordSafeness } = useSelector((state: RootState) => state.auth);

  return password && password.length > 0 ? (
    <LinearProgress
      variant="determinate"
      value={passwordSafeness}
      color={progressColor}
      sx={{
        "--LinearProgress-progressThickness": "5px",
        transition: "all 0.5s ease",
      }}
    />
  ) : null;
};
