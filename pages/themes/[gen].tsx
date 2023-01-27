// Página para cada materia
import { MatterThemes as AllThemes } from "../../data/main";
import { getMatter } from "../../data/mathods";
import Image from "next/image";
import Head from "next/head";

import type { generator, Theme } from "../../data/Types";
import { allData as defaultData } from "../../data/main";
import { VerticalNav } from "../../components/global/Navigator";
import { Card } from "../../components/themes/CardTheme";

export default function Matter({ gen }: any) {
  const data = getMatter(gen);
  const navFormatData = defaultData?.map((matter: any) => {
    return {
      to: `/#${matter.name}`,
      content: matter.name,
    };
  });
  return (
    <>
      <Head>
        <title>TeCitoHot - {data.name ? data.name : "Matter"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex w-full h-screen">
        <VerticalNav
          options={[
            {
              to: "/#home",
              content: "Inicio",
              iconName: "home",
            },
            {
              to: "#",
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
        <section className="w-full min-h-[30rem] relative flex flex-col justify-start items-center overflow-y-auto pattern-boxes pattern-slate-100 pattern-bg-transparent pattern-opacity-100 pattern-size-8">
          <div
            className={`flex justify-start w-full h-32 lg:h-96 border-slate-600 border-b-8 border-dashed`}
          >
            <Image
              className="object-cover h-full w-min"
              src={data.imgUrl}
              width={500}
              height={500}
              alt={`${data.name}-icon`}
            />
            <div
              className={`${
                data.color ? `bg-${data.color}-500` : "bg-stone-600"
              } w-full h-full flex flex-col`}
            >
              <h1 className="p-5 mt-auto text-4xl border-t-4 border-r-4 w-max lg:text-8xl bg-slate-200/50 border-slate-600">
                {data.name}
              </h1>
            </div>
          </div>
          <section className="w-full lg:w-[88%] shadow-lg bg-slate-50 relative">
            <div className="p-5 lg:p-10 bg-slate-100 min-h-[23rem] flex flex-col gap-1 lg:gap-5">
              <h2 className="text-4xl underline lg:text-5xl">Descripción.</h2>
              <p className="text-xl text-justify lg:text-3xl">
                {data.description}
              </p>
            </div>

            <div className={`w-full min-h-[30rem]`}>
              <h2 className="p-5 text-4xl underline lg:text-5xl lg:p-10">
                Temas de la materia.
              </h2>
              <div className="grid content-center w-full grid-cols-2 gap-2 p-5 pt-0 md:grid-cols-4 lg:gap-10 lg:p-10 justify-items-center">
                {data.themes.map((theme: Theme, index: number) => {
                  return <Card key={index} theme={theme} gen={gen} />;
                })}
              </div>
            </div>
            <div className="w-full h-screen bg-red-300">
              <h2 className="p-10 text-5xl underline">Videos Relacionados.</h2>
            </div>
            <div className="w-full h-screen bg-red-300">
              <h2 className="p-10 text-5xl underline">
                Recursos Relacionados.
              </h2>
            </div>
            <div className="w-full h-screen bg-red-300">
              <h2 className="p-10 text-5xl underline">
                Aplicaciones Relacionadas.
              </h2>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  try {
    return {
      props: {
        gen: params.gen,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  try {
    const paths = AllThemes.map((matter: generator) => ({
      params: {
        gen: `${matter.gen}`,
        name: `${matter.name}`,
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}
