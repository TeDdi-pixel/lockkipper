import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";

export const pageOptions = [
    {
      id: 0,
      icon: <RiUser3Line />,
      text: "Account settings",
      direction: "/settings/account",
    },
    {
      id: 1,
      icon: <HiOutlineQuestionMarkCircle />,
      text: "Get help",
      direction: "/settings",
    },
    {
      id: 2,
      icon: <MdOutlineFileDownload />,
      text: "Get the app",
      direction: "/settings",
    },
  ];