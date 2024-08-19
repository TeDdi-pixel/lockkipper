import MainTitle from "../../../shared/ui/MainTitle";
import { useState } from "react";
import { Settings } from "../../settings";
import PhotoBlock from "./PhotoBlock";

export const Header = ({ title }: { title: string }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleSettings = () => {
    setActive(!active);
  };
  
  return (
    <header className="flex justify-between mb-[30.5px] items-center relative ml-[230px]">
      <MainTitle title={title} />
      <PhotoBlock handleSettings={handleSettings} />
      <Settings active={active} />
    </header>
  );
};
