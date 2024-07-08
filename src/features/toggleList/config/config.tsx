import { GoPlus } from "react-icons/go";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineStar } from "react-icons/hi2";
import { IoEarthOutline, IoCardOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { MdFolderOpen } from "react-icons/md";

export const existingVaults = [
  { id: 0, icon: <RiUser3Line />, name: "My vault" },
  {
    id: 1,
    icon: <GoPlus />,
    name: "New organization",
  },
];

export const allItems = [
  { id: 0, icon: <HiOutlineStar />, name: "Favorites" },
  { id: 1, icon: <IoEarthOutline />, name: "Login" },
  { id: 2, icon: <IoCardOutline />, name: "Card" },
  { id: 3, icon: <BsPersonVcard />, name: "Identity" },
  { id: 4, icon: <MdOutlineStickyNote2 />, name: "Secure note" },
];

export const folders = [{ id: 0, icon: <MdFolderOpen />, name: "Test" }];
