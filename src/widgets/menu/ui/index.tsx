import { useState } from "react";
import { menuList } from "../config/menu-list";
import { LogoItem } from "./LogoItem";
import { OptionList } from "./OptionList";
import { ListItem } from "./ListItem";

export const Menu = () => {
  const [activeOptions, setActiveOptions] = useState<number[]>([]);

  const handleItemClick = (id: number) => {
    setActiveOptions((prevActiveOptions) =>
      prevActiveOptions.includes(id)
        ? prevActiveOptions.filter((optionId) => optionId !== id)
        : [...prevActiveOptions, id]
    );
  };

  return (
    <div className="max-w-[230px] w-full bg-primary h-[100vh] top-0 left-0 fixed">
      <ul>
        <LogoItem />
        {menuList.map((item) => {
          const isActive = activeOptions.includes(item.id);
          return (
            <div key={item.id}>
              <ListItem
                item={item}
                isActive={isActive}
                handleItemClick={handleItemClick}
              />
              {item.options && <OptionList item={item} isActive={isActive} />}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
