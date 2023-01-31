import { VerticalNav } from "../components/global/Navigator";
import Head from "next/head";

import type { generator, MatterTheme } from "../data/Types";
import { allData as defaultData } from "../data/main";

const Test = () => {
  const navFormatData = defaultData?.map((matter: generator) => {
    return {
      to: `/#${matter.name}`,
      content: matter.name,
    };
  });

  const backgrounds = [
    "bg-red-500",
    "bg-blue-500",
    "bg-slate-600",
    "bg-indigo-500",
  ];

  return (
    <>
      <Head>
        <title>TeCitoHot - Repositorio Puro</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <section className="flex w-full h-full bg-stone-800">
        <VerticalNav
          options={[
            {
              to: "#home",
              content: "Inicio",
              iconName: "home",
            },
            {
              to: "#Materias",
              content: "Materias",
              iconName: "archive",
              suboptions: navFormatData,
            },
            {
              to: "/Resource",
              content: "Recursos",
              iconName: "folder-plus",
            },
            {
              to: "/Apps",
              content: "Aplicaciones",
              iconName: "calculator",
            },
          ]}
        />
        <section className="relative w-full h-screen min-h-[30rem] overflow-x-hidden overflow-y-scroll bg-stone-800  scroll-smooth snap-y scrollbar-thin scrollbar-w-0 md:scrollbar-w-2 lg:scrollbar-w-3 scrollbar-thumb-stone-800 scrollbar-track-amber-100 pattern-dots pattern-stone-600 pattern-bg-transparent pattern-opacity-100 pattern-size-8">
          {/* Background y HeroSection */}
        </section>
      </section>
    </>
  );
};

export default Test;
