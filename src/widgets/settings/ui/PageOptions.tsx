import { Link } from "react-router-dom";
import { pageOptions } from "../config/pageOptions";

const PageOptions = () => {
  return (
    <div className="py-3 px-0 flex flex-col gap-2 border border-b-border">
      {pageOptions.map((option) => (
        <div
          className="py-1.5 px-3.5 flex gap-[5px] cursor-pointer bg-transparent transition-colors items-center hover:bg-foreground"
          key={option.id}
        >
          {option.icon}
          <Link to={option.direction}>{option.text}</Link>
        </div>
      ))}
    </div>
  );
};

export default PageOptions;
