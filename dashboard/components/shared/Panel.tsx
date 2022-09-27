import { FC, PropsWithChildren } from "react";

interface PanelProps extends PropsWithChildren {
  compact?: boolean;
  light?: boolean;
}

const Panel: FC<PanelProps> = ({ children, compact = false, light = true }) => {
  return (
    <div
      className={`${
        compact ? "w-1/4" : "w-2/3"
      } h-1/2 rounded-md shadow-md p-4 ${
        light ? "bg-white" : "bg-slate-800"
      } overflow-hidden`}
    >
      {/* <img src="/img/information.svg" className="absolute" /> */}
      {children}
    </div>
  );
};

export default Panel;
