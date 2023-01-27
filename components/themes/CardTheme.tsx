import type { Theme } from "../../data/Types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Card({ theme, gen }: { theme: Theme; gen: string }) {
  const [imgSrc, setImg] = useState(theme.imgUrl);

  return (
    <div className="w-full min-h-[10rem] flex flex-col items-center bg-slate-800 shadow-lg hover:scale-105 transition-all">
      <h2 className="flex items-center justify-center w-full p-2 text-lg leading-3 lg:text-2xl bg-slate-800 text-slate-100">
        {theme.name}
      </h2>
      <Image
        className="object-cover w-full"
        src={imgSrc}
        width={500}
        height={500}
        alt={`${theme.name}-icon`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          setImg("/imgNotFound.webp");
        }}
      />
      <span className="w-full">
      </span>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-center w-full p-2 text-lg transition-all bg-slate-800 text-slate-200 hover:bg-slate-600"
          href={
            theme.subThemes.length > 0
              ? theme.subThemes[0].pageUrl
              : `/themes/${gen}`
          }
        >
          Visitar
        </Link>
        <button className="flex items-center justify-center w-full p-2 text-lg transition-all bg-slate-800 text-slate-200 hover:bg-slate-600">
          Detalles
        </button>
      </div>
    </div>
  );
}
