import FiltersBody from "./FiltersBody";
import FiltersHeader from "./FiltersHeader";

export const Filters = () => {
  return (
    <div className="max-w-[400px] w-full border border-border rounded-[4px]">
      <FiltersHeader />
      <FiltersBody />
    </div>
  );
};
