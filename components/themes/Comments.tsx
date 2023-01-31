import { Icons } from "../global/Icons";
export function LComment({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={`${className ? className : ""} text-slate-600`}>
      {children ? children : null}
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
      cube = "bg-success";
      bg = "bg-success/5";
      border = "border-success";
      icon = "invert";
      typeMSG = "Osea sería esto...";
      break;
    case "warn":
      cube = "bg-warning";
      bg = "bg-warning/5";
      border = "border-warning";
      icon = "bullseye-arrow";
      typeMSG = "No está de más saberlo";
      break;
    case "alert":
      cube = "bg-error";
      bg = "bg-error/5";
      border = "border-error";
      icon = "alert";
      typeMSG = "Puede confundirse ?";
      break;
    default:
      cube = "bg-base-300";
      bg = "bg-base-300/10";
      border = "border-base-300";
      icon = "article";
      typeMSG = "Algo extraño";
      break;
  }

  return (
    <span
      className={`flex overflow-hidden p-1 pr-3 group transition-all w-full gap-1 lg:gap-5 lg:p-5 py-2 my-2 lg:pr-10 border-l-4 bg-slate-200/60 text-slate-600 ${border} ${bg}`}
    >
      <div about={typeMSG} className={`w-5 h-full`}>
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
