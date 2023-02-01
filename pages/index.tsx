import { VerticalNav } from "../components/global/Navigator";
import { HeroSection } from "../components/global/HeroSection";
import { PresentSection } from "../components/global/Present";
import Head from "next/head";

import type { generator, Matter } from "../data/Types";
import { allData as defaultData } from "../data/main";

import { CloudBack } from "../components/global/Backgrounds";
import { PFooter } from "./../components/global/Footer";
const Home = () => {
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
          <section
            id="home"
            className="flex bg-clouds flex-col items-start justify-start w-full h-screen snap-center box-content md:border-b-0 border-b-[5rem] border-base-200"
          >
            <HeroSection className="absolute w-full h-full z-10 overflow-hidden" />
            <CloudBack className="w-full h-full" />
          </section>
          {/* Other */}
          {defaultData.map((matter: Matter, index: number) => {
            return (
              <PresentSection
                id={matter.name}
                className={`snap-start`}
                main={matter}
                seconds={matter.themes}
                key={index}
                color={backgrounds[index]}
              />
            );
          })}
          <div className="w-full h-screen">Hola</div>
          <PFooter />
        </section>
      </section>
    </>
  );
};

export default Home;
