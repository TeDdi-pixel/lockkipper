import { ReactNode } from "react";
import { IoCardOutline } from "react-icons/io5";

export type TypeCellsData = {
  id: number;
  icon: ReactNode;
  name: string;
  description: string;
  owner: string;
  folder: string;
};

export const cellsData = [
  {
    id: 0,
    icon: <IoCardOutline />,
    name: "Some name",
    description: "asdasdas",
    owner: "Me",
  },
  {
    id: 1,
    icon: <IoCardOutline />,
    name: "Some name",
    description: "asdasdas",
    owner: "Me",
  },
  {
    id: 2,
    icon: <IoCardOutline />,
    name: "Some name",
    description: "asdasdas",
    owner: "Me",
  },
];
