import MainTitle from "../../shared/ui/MainTitle";
import ProfileImage from "../../shared/ui/ProfileImage";
import Settings from "../../entities/header/Settings";
// import { CiLock } from "react-icons/ci";
import { useState } from "react";

const Header = ({ title }: { title: string }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleSettings = () => {
    setActive(!active);
  };
  return (
    <header className="header">
      <MainTitle title={title} />
      <div className="header__wrapper-right">
        {/* <button className="header__lock">
          <CiLock />
        </button> */}
        <button onClick={handleSettings}>
          <ProfileImage width="45px"/>
        </button>
      </div>
      <Settings status={active} />
    </header>
  );
};

export default Header;
