// Modulos
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { Base, Matter, Theme } from '@/data/DataTypes';
import { genAllMatters } from '@/lib/getGenerators';
import { getMatter } from '@/lib/getParsedObjects';
import { getAllMatterObject } from '@/lib/getObjects';
import { search } from '@/lib/getDataWiki';
// Componentes
import Layout from '@/components/layout/Layout';
import Present from '@/components/home/PresentSection';
import ImgAbs from '@/components/global/Image';
import { PresentCard } from '@/components/home/Card';

interface MatterParams {
  data: {current: Matter; layout: Base[]};
  characterInfo: any;
}
/**
 * Representación dinámica de las páginas de cada máteria, la misma
 * cuenta con un layout y un contenido dinámico, al igual que
 * peticiones a la API de Wikipedia para obtener información
 * sobre los personajes de cada materia.
 * @prop { data } : Datos de la materia y layout
 * @prop { characterInfo } : Datos de la wiki de la materia
 * @returns Página de la materia
 */
function MatterHome({ data, characterInfo }: MatterParams) {
  const {layout, current} = data;
  return (
    <>
      <Layout listData={layout}>
        <Present
          title={current.name}
          className={`${current.color ? current.color : ''} min-h-[80dvh]`}
        >
          <div className="bg-back flex flex-col p-2 items-center md:p-3 gap-5 md:gap-3 lg:gap-0 lg:p-5 lg:flex-row">
            <ImgAbs
              src={current.img}
              alt={`${current.name}-image`}
              title={`${characterInfo.title}`}
              containStyle="max-w-[90%] sm:max-w-[50%] md:max-w-[35%] lg:min-w-[40%] lg:max-w-none"
              className="lg:object-contain"
              content={<>{characterInfo.extract}</>} />
            <div className="bg-slate-200/10 p-2 max-h-[25rem] overflow-y-auto scrollbar-thin scrollbar-w-0.5 scrollbar-thumb-primary-focus scrollbar-track-secondary md:scrollbar-w-2 md:p-4 lg:p-6">
              <p className="text-lg text-justify text-base-content md:text-xl lg:text-3xl">
                {current.description}
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
            {current.themes?.map((theme: Theme, index: number) => {
              return <PresentCard key={index} base={theme} className="bg-back" theme />;
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}

export default MatterHome;

// Para obtener los datos de la materia (props)
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = getMatter(params.matter);
  // Datos para el layout de las páginas
  const dataLayout = getAllMatterObject();
  // Para obtener los datos de los personajes caracteristicos de la materia de API de Wikipedia
  const characterInfo = await search(data ? data.character : 'hola');
  return {
    props: {
      data: {current: data, layout: dataLayout},
      characterInfo,
    },
  };
};

// Para obtener todos los Paths de las materias (generadores)
export const getStaticPaths: GetStaticPaths = async () => {
  const gens = genAllMatters();
  const paths = gens.map((gen: string) => ({
    params: {
      matter: gen,
    },
  }));
  return { paths, fallback: false };
};
