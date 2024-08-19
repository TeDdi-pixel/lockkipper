import MainTitle from "../../shared/ui/MainTitle";
import ProfileImage from "../../shared/ui/ProfileImage";
import Settings from "../../entities/header/Settings";
import { useState } from "react";

const Header = ({ title }: { title: string }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleSettings = () => {
    setActive(!active);
  };
  return (
    <header className="flex justify-between mb-[30.5px] items-center relative ml-[230px]">
      <MainTitle title={title} />
      <div className="header__wrapper-right">

        <button onClick={handleSettings}>
          <ProfileImage width="45px"/>
        </button>
      </div>
      <Settings status={active} />
    </header>
  );
};

export default Header;
