import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

const FiltersHeader = () => {
  return (
    <div className="flex justify-between items-center py-2.5 px-5 border-b border-border uppercase text-text">
      <div className="font-bold">Filters</div>
      <div className="cursor-pointer text-lg">
        <HiOutlineQuestionMarkCircle />
      </div>
    </div>
  );
};

export default FiltersHeader;
