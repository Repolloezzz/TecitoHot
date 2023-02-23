// Página para cada materia
import { MatterThemes as AllThemes } from "../../data/main";
import { getMatter } from "../../data/mathods";
import Head from "next/head";
import Image from "next/image";
import type { generator, Theme } from "../../data/Types";
import HeadNav from "../../components/layout/HeadNav";
import Present from "../../components/home/PresentSection";
import { ThemeCard } from "../../components/home/Card";
import Ventage from "../../components/layout/AbsolutVentage";

export default function Matter({ gen }: any) {
  const data = getMatter(gen);
  return (
    <>
      <Head>
        <title>
          TeCitoHot - Esto es {data.name ? data.name.toString() : "Matter"}
        </title>
      </Head>
      <HeadNav/>
      <Ventage />
      <Present title={data.name} className={`${data.color ? data.color : ""}`}>
        <div className="bg-back flex flex-col p-2 items-center md:p-3 gap-5 md:gap-3 lg:gap-0 lg:p-5 lg:flex-row">
          <Image
            src={data.imgUrl}
            alt={`${data.name}-image`}
            width={500}
            height={500}
            priority
          />
          <div className="bg-slate-200/10 p-2 max-h-[25rem] overflow-y-auto scrollbar-thin scrollbar-w-0.5 scrollbar-thumb-primary-focus scrollbar-track-secondary md:scrollbar-w-2 md:p-4 lg:p-6">
            <p className="text-lg text-justify text-base-content md:text-xl lg:text-3xl">
              {data.description}
            </p>
          </div>
        </div>
      </Present>
      <section
        id="themes"
        data-theme="synthwave"
        className='w-full bg-neutral p-5 flex flex-col md:p-7 lg:p-10'
      >
        <h1 className="text-5xl text-primary hover:text-primary-focus hover:underline transition-all sm:text-6xl md:text-7xl lg:text-8xl">
          #Temas
        </h1>
        <div className="bg-slate-100/20 grid grid-cols-2 lg:grid-cols-5 gap-2 p-2 md:p-4 lg:p-5 md:gap-4 lg:gap-5">
          {data.themes.map((theme: Theme, index: number) => {
            return (
              <ThemeCard
                key={index}
                base={{
                  ...theme,
                  pageUrl:
                    theme.subThemes != undefined &&
                    theme.subThemes[0] != undefined
                      ? theme.subThemes[0].pageUrl
                      : "#",
                }}
                className="bg-back"
              />
            );
          })}
        </div>
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

import { getPathsFiles } from "../../lib/getFiles";

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
