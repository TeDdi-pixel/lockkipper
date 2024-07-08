import { FaShieldAlt } from "react-icons/fa";
import { BsCollection } from "react-icons/bs";
import { PiTelegramLogo } from "react-icons/pi";
import { FiTool } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
const Menu = () => {
  const menuItems = [
    {
      id: 0,
      icon: <BsCollection />,
      text: "Vaults",
    },
    {
      id: 1,
      icon: <PiTelegramLogo />,
      text: "Send",
    },
    {
      id: 2,
      icon: <FiTool />,
      text: "Tools",
      options: [
        { id: 0, text: "Generator" },
        { id: 1, text: "Import data" },
        { id: 2, text: "Export vault" },
      ],
    },
    {
      id: 3,
      icon: <VscSettings />,
      text: "Reports",
    },
    { id: 4, icon: <IoSettingsOutline />, text: "Settings" },
  ];
  return (
    <div className="menu">
      <div className="menu__logo">
        <div className="menu__logo-icon">
          <FaShieldAlt />
        </div>
        <span className="menu__logo-text">Password Manager</span>
      </div>
      <ul className="menu__item-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu__item">
            <div className="menu__item-main">
              <span className="menu__item-icon">{item.icon}</span>
              <span className="menu__item-text">{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
