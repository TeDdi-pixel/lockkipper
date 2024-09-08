import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { TypeFolder } from "../../hooks/useFolders";

export type ToggleListProps = {
  listItems: TypeFolder[];
  title: string;
};

const ToggleList = ({ listItems, title }: ToggleListProps) => {
  const [active, setActive] = useState<boolean>(true);
  const handleList = () => {
    setActive(!active);
  };

  return (
    <div className="w-full pt-[17.5px]">
      <div className="flex items-center gap-2.5">
        <SlArrowRight
          onClick={handleList}
          className={`text-primary-foreground text-[13px] cursor-pointer select-none transition-transform ${
            active ? "rotate-90" : "rotate-0"
          }`}
        />
        <span
          className="text-secondary font-bold cursor-pointer select-none"
          onClick={handleList}
        >
          {title}
        </span>
      </div>

      {listItems?.map((item) => (
        <div
          style={{
            transition:
              "color 0.1s ease, opacity 0.1s ease, height 0.2s ease, max-height 0.2s ease, transform 0.2s ease",
          }}
          className={`text-primary-foreground relative flex items-center gap-[10px] cursor-pointer select-none ${
            active
              ? "z-20 opacity-100 h-[25px] max-h-[25px] translate-y-1.5 hover:text-primary"
              : "h-0 max-h-0 translate-y-0 -z-[100] opacity-0"
          }`}
          key={item.id}
        >
          <span className="text-[18px]">{item.icon}</span>
          <span className="cursor-pointer">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ToggleList;
