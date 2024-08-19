import ActionOptions from "./ActionOptions";
import PageOptions from "./PageOptions";
import PhotoBlock from "./PhotoBlock";

export const Settings = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`absolute right-0 top-[50px] border border-border max-w-[210px] w-full rounded-[4px] transition-[transform,opacity] duration-200 ${
        active
          ? "bg-background z-[100] opacity-100 translate-y-0"
          : "opacity-0 translate-y-[-10px] z-[-100]"
      }`}
    >
      <PhotoBlock />
      <PageOptions />
      <ActionOptions />
    </div>
  );
};
