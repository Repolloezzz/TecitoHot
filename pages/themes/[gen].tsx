// Página para cada materia
import { allMatters, getMatter } from "../../lib/genDataContent";
import Head from "next/head";
import type { generator, Theme } from "../../data/Types";
import HeadNav from "../../components/layout/HeadNav";
import Present from "../../components/home/PresentSection";
import { ThemeCard } from "../../components/home/Card";
import Ventage from "../../components/layout/AbsolutVentage";
import ImgAbs from "../../components/themes/Image";
import { search } from "../../lib/getDataWiki";

export default function Matter({ data, dataNav, chInf }: any) {
  return (
    <>
      <Head>
        <title>
          TeCitoHot - Esto es {data.name ? data.name.toString() : "Matter"}
        </title>
      </Head>
      <HeadNav defaultData={dataNav} />
      <Ventage />
      <Present title={data.name} className={`${data.color ? data.color : ""}`}>
        <div className="bg-back flex flex-col p-2 items-center md:p-3 gap-5 md:gap-3 lg:gap-0 lg:p-5 lg:flex-row">
          <ImgAbs
            src={data.imgUrl}
            alt={`${data.name}-image`}
            title={`${chInf.title}`}
            containStyle="max-w-[90%] sm:max-w-[50%] md:max-w-[35%] lg:min-w-[40%] lg:max-w-none"
            className="lg:object-contain"
            content={<>{chInf.extract}</>}
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
        className="w-full bg-neutral p-5 flex flex-col md:p-7 lg:p-10"
      >
        <h1 className="text-5xl text-primary hover:text-primary-focus hover:underline transition-all sm:text-6xl md:text-7xl lg:text-8xl">
          #Temas
        </h1>
        <div className="bg-slate-100/20 grid grid-cols-2 lg:grid-cols-5 gap-2 p-2 md:p-4 lg:p-5 md:gap-4 lg:gap-5">
          {data.themes?.map((theme: Theme, index: number) => {
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
  // Para obtener datos de los temas y materia en si
  const dataNav = allMatters();
  const data = getMatter(params.gen);
  // Para obtener los datos de los personajes caracteristicos de la materia
  const chInf = await search(data.character ? data.character : 'hola');
  return {
    props: {
      data,
      dataNav,
      chInf,
    },
  };
}

export async function getStaticPaths() {
  const data = allMatters();
  const paths = data.map((matter: generator) => ({
    params: {
      gen: matter.gen,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
