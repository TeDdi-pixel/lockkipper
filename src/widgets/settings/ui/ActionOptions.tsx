import { useDispatch } from "react-redux";
import { actionOptions } from "../config/actionOptions";

const ActionOptions = () => {
  const dispatch = useDispatch();
  return (
    <div className="py-3 px-0 flex flex-col gap-2 border-b-[1] border-border">
      {actionOptions.map((option) => (
        <button
          className="py-1.5 px-3.5 flex gap-[5px] cursor-pointer bg-transparent transition-colors items-center hover:bg-foreground"
          key={option.id}
          onClick={() => option.func?.(dispatch)}
        >
          {option.icon}
          <div>{option.text}</div>
        </button>
      ))}
    </div>
  );
};

export default ActionOptions;
