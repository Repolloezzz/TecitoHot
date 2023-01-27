import { VerticalNav } from "../components/global/Navigator";
import Image from "next/image";
import { HeroSection } from "../components/global/HeroSection";
import { PresentSection } from "../components/global/Present";
import Head from "next/head";

import type { generator, MatterTheme } from "../data/Types";
import { allData as defaultData } from "../data/main";

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
      <section className="flex w-full h-screen bg-stone-800">
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
            className="flex flex-col items-start justify-start w-full h-screen snap-center"
          >
            <HeroSection className="absolute w-full h-full" />
            <Image
              className="block object-fill w-full h-full"
              src={"/backgrounds/City.jpg"}
              width={1000}
              height={824}
              alt="Back-city"
              priority
            />
          </section>
          {/* Other */}
          {defaultData.map((matter: MatterTheme, index: number) => {
            return (
              <PresentSection
                id={matter.name}
                className={`snap-center my-20 md:my-0`}
                main={matter}
                seconds={matter.themes}
                key={index}
                color={backgrounds[index]}
              />
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Home;
