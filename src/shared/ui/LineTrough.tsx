const LineTrough = ({ mt, mb }: { mt?: string; mb?: string }) => {
  return (
    <span
      className={`relative block ${mt} ${mb} before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-[#C4C4C4]`}
      style={{ content: "''" }}
    ></span>
  );
};

export default LineTrough;
