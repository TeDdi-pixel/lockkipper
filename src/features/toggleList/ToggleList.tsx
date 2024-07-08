import { ReactNode, useState } from "react";
import { SlArrowRight } from "react-icons/sl";

export type ToggleListProps = {
  listItems: { id: number; icon: ReactNode; name: string }[];
  title: string;
};

const ToggleList = ({ listItems, title }: ToggleListProps) => {
  const [active, setActive] = useState<boolean>(true);
  const handleList = () => {
    setActive(!active);
  };

  return (
    <div className="toggle-list">
      <div className="toggle-list__main">
        <SlArrowRight
          onClick={handleList}
          className={`toggle-list__arrow ${
            active ? "toggle-list__arrow_active" : ""
          }`}
        />
        <span className="toggle-list__title" onClick={handleList}>
          {title}
        </span>
      </div>

      {listItems.map((item) => (
        <div
          className={`toggle-list__item ${
            active ? "toggle-list__item_active" : ""
          }`}
          key={item.id}
        >
          <span className="toggle-list__item-icon">{item.icon}</span>
          <span className="toggle-list__item-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ToggleList;
