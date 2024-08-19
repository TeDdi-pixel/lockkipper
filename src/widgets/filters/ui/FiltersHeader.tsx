import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

const FiltersHeader = () => {
  return (
    <div className="flex justify-between items-center py-2.5 px-5">
      <div className="font-medium">Filters</div>
      <div className="cursor-pointer text-lg">
        <HiOutlineQuestionMarkCircle />
      </div>
    </div>
  );
};

export default FiltersHeader;
