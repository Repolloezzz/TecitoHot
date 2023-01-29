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
  let shadown: string
  switch (type) {
    case "note":
      cube = "bg-green-500";
      bg = "bg-green-700/5";
      shadown ='hover:shadow'
      border = "border-green-600";
      icon = "invert";
      typeMSG = "Osea sería esto...";
      break;
    case "warn":
      cube = "bg-yellow-400";
      bg = "bg-yellow-500/5";
      border = "border-yellow-600";
      icon = "bullseye-arrow";
      typeMSG = "No está de más saberlo";
      break;
    case "alert":
      cube = "bg-red-400";
      bg = "bg-red-600/5";
      border = "border-red-600";
      icon = "alert";
      typeMSG = "Puede confundirse ?";
      break;
    default:
      cube = "bg-slate-700";
      bg = "bg-slate-700/10";
      border = "border-slate-800";
      icon = "article";
      typeMSG = "Algo extraño";
      break;
  }

  return (
    <span
      className={`flex overflow-hidden p-1 pr-3 group transition-all w-full gap-1 lg:gap-5 lg:p-5 py-2 my-2 lg:pr-10 border-l-4 bg-slate-200/60 text-slate-600 ${border} ${bg}`}
    >
      <div
        about={typeMSG}
        className={`w-5 h-full`}
      >
        <Icons
          name={icon}
          className={`${cube} group-hover:rotate-6 group-hover:scale-125 lg:w-8 h-5 w-5 lg:h-8 text-slate-700 transition-all`}
        />
      </div>
      <span className="w-full text-base leading-5 text-justify lg:text-lg">
        {children}
      </span>
    </span>
  );
}
