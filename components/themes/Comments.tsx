import { Icons } from "../global/Icons";
export function LComment({
  txt,
  className,
}: {
  txt: string;
  className?: string;
}) {
  return (
    <span className={`${className ? className : ""} text-slate-600`}>
      #{txt}
    </span>
  );
}

export function BComment({ type, children }: { type: string; children: any }) {
  let cube: string;
  let bg: string;
  let border: string;
  let icon: string;
  let typeMSG: string;
  switch (type) {
    case "note":
      cube = "bg-green-500";
      bg = "bg-green-700/30";
      border = "border-green-800";
      icon = "invert";
      typeMSG = "Osea sería esto...";
      break;
    case "warn":
      cube = "bg-yellow-400";
      bg = "bg-yello-700/30";
      border = "border-yellow-800";
      icon = "bullseye-arrow";
      typeMSG = "No está de más saberlo";
      break;
    case "alert":
      cube = "bg-red-500";
      bg = "bg-red-700/30";
      border = "border-red-800";
      icon = "alert";
      typeMSG = "Puede confundirse ?";
      break;
    default:
      cube = "bg-slate-700";
      bg = "bg-slate-700/30";
      border = "border-slate-800";
      icon = "article";
      typeMSG = "Algo extraño";
      break;
  }

  return (
    <span
      className={`flex p-1 pr-3 w-full gap-1 lg:gap-5 lg:p-5 py-2 my-2 lg:pr-10 border-l-4 bg-slate-200/60 text-slate-600 ${border}`}
    >
      <div
        about={typeMSG}
        className={`w-5 h-full lg:w-8 before:absolute hover:before:w-max hover:before:content-[attr(about)] hover:before:h-8 hover:before:text-base hover:before:-translate-y-6 hover:before:bg-slate-700/50 hover:before:p-1 before:text-slate-200 hover:before:block hover:before:transition-all`}
      >
        <Icons
          name={icon}
          className={`${cube} lg:w-8 h-5 w-5 lg:h-8 text-slate-700`}
        />
      </div>
      <span className="w-full text-base leading-5 text-justify lg:text-lg">
        {children}
      </span>
    </span>
  );
}
