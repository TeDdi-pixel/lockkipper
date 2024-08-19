import { BsCollection } from "react-icons/bs";
import { PiTelegramLogo } from "react-icons/pi";
import { FiTool } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";

export const menuList = [
  {
    id: 0,
    icon: <BsCollection />,
    name: "Vaults",
    pathname: "/vaults/my_vault",
  },
  {
    id: 1,
    icon: <PiTelegramLogo />,
    name: "Send",
    pathname: "/sends",
  },
  {
    id: 2,
    icon: <FiTool />,
    name: "Tools",
    options: [
      { id: 0, name: "Generator", pathname: "/tools/generator" },
      { id: 1, name: "Import data", pathname: "/tools/import" },
      { id: 2, name: "Export vault", pathname: "/tools/export" },
    ],
  },
  {
    id: 3,
    icon: <VscSettings />,
    name: "Reports",
    pathname: "/reports",
  },
  {
    id: 4,
    icon: <IoSettingsOutline />,
    name: "Settings",
    options: [
      { id: 0, name: "My account", pathname: "/settings/account" },
      {
        id: 1,
        name: "Security",
        pathname: "/settings/security/change-password",
      },
      { id: 2, name: "Preferences", pathname: "/settings/preferences" },
      {
        id: 4,
        name: "Subscription",
        pathname: "/settings/subscription/premium",
      },
      { id: 5, name: "Domain rules", pathname: "/settings/domain_rules" },
      {
        id: 6,
        name: "Emergency access",
        pathname: "/settings/emergency_access",
      },
    ],
  },
];
