type Props = { title: string; className?: string };

const MainTitle = ({ title, className }: Props) => {
  return (
    <h1 className={`text-[26px] font-medium text-text ${className}`}>
      {title}
    </h1>
  );
};

export default MainTitle;
