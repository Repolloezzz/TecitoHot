import type { base } from "../../data/Types";
import Image from "next/image";
import Link from "next/link";

interface context {
  className?: string;
  base: base;
}
const BaseCard = ({ className, base }: context) => {
  return (
    <div
      className={`${className ? className : ""} flex flex-col items-center bg-base-100`}
    >
      <h1 className="text-2xl bg-base-300 w-full text-center text-base-content">
        {base.name}
      </h1>
      <Image
        src={base.imgUrl}
        alt={`${base.name}-image`}
        width={500}
        height={500}
      />
      <div className="bg-base-300 w-full flex justify-around p-2 overflow-hidden my-auto">
        <Link
          className="btn btn-primary px-3 py-0 btn-sm flex md:btn-md"
          href={base.pageUrl}
        >
          Explorar
        </Link>
        <Link
          className="btn btn-secondary px-3 py-0 btn-outline btn-sm md:btn-md"
          href={"#"}
        >
          Ver lista
        </Link>
      </div>
    </div>
  );
};
export { BaseCard };
