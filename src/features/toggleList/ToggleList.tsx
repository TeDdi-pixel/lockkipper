import { MouseEvent, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { TypeFolder } from "../../hooks/useFolders";
import { LuRefreshCcw } from "react-icons/lu";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types";

export type ToggleListProps = {
  listItems: TypeFolder[];
  title: string;
  handleClick?: (e: MouseEvent<HTMLElement>) => Promise<void>;
  refreshItem?: boolean;
};

const ToggleList = ({
  listItems,
  title,
  handleClick,
  refreshItem = false,
}: ToggleListProps) => {
  const { filter } = useSelector((state: RootState) => state.vault);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(true);
  const handleList = () => {
    setActive(!active);
  };

  const className = `text-primary-foreground relative flex items-center gap-[10px] cursor-pointer select-none ${
    active
      ? "z-20 opacity-100 h-[25px] max-h-[25px] translate-y-1.5 hover:text-primary scale-100 hover:pl-[5px]"
      : "h-0 max-h-0 translate-y-0 -z-[100] opacity-0 scale-0"
  }`;

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
      {refreshItem && filter !== "All folders" ? (
        <div
          style={{
            transition:
              "color 0.1s ease, opacity 0.1s ease, height 0.2s ease, max-height 0.2s ease, transform 0.2s ease, scale ease 0.2s, padding ease 0.2s",
          }}
          className={className}
          key={"Refresh item"}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span
            className="text-[18px] transform transition-transform duration-200 ease-in-out"
            style={{
              transform: isHovered ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <LuRefreshCcw />
          </span>
          <span className="cursor-pointer">All folders</span>
        </div>
      ) : null}

      {listItems?.map((item, index) => (
        <div
          style={{
            transition:
              "color 0.1s ease, opacity 0.1s ease, height 0.2s ease, max-height 0.2s ease, transform 0.2s ease, scale 0.2s ease, padding ease 0.2s",
            transitionDelay: `${index * 10}ms`,
          }}
          className={className}
          key={item.id}
          onClick={handleClick}
        >
          <span className="text-[18px]">{item.icon}</span>
          <span className="cursor-pointer">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ToggleList;
