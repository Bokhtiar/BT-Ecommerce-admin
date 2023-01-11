import { arrayFromNumber } from "../../utils/helpers";


export const TablePreloader: React.FC = (): JSX.Element => {
  return (
    <div className="p-4 lg:p-5 w-full mx-auto rounded-lg bg-white">
      <div className="animate-pulse">
        <div className="grid grid-cols-3 gap-4">
          {arrayFromNumber(27).map((i) => (
            <div key={i} className="h-2 bg-slate-200 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};
