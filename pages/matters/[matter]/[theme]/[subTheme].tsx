// Modulos
import type { GetStaticPaths, GetStaticProps } from 'next/types';
import type { SubTheme, Theme, Base } from '@/data/DataTypes';
import {
  genAllThemes,
  genAllMatters,
  genAllSubThemes,
} from '@/lib/getGenerators';
import { getSubTheme, getTheme } from '@/lib/getParsedObjects';
import { getAllMatterObject } from '@/lib/getObjects';
import {
  useThemeContext,
  DarkOptions,
  LightOptions,
} from '@/context/ThemeContent';
// Componentes
import Layout from '@/components/layout/Layout';
import ModuleMenu from '@/components/themes/ModuleMenu';
import PaginationSub from '@/components/themes/PaginationSub';
import { allSubThemes } from '@/lib/getParsedObjects';
import { ID_txt } from '@/components/global/Text';

interface SubThemeParams {
  data: { current: SubTheme; layout: Base[] };
  pagination: { current: Theme; next_prev: SubTheme[] };
  route: string;
}

/**
 * Crear las rutas de las páginas de cada subtema
 * @prop { data } : Datos del subtema y layout
 * @prop { pagination } : Datos para la paginación y navegación
 * @returns Página del subtema
 */
function SubThemeHome({ data, pagination, route }: SubThemeParams) {
  const { current, layout } = data;
  const { themeContent } = useThemeContext();
  return (
    <>
      <Layout listData={layout}>
        <section
          data-theme="halloween"
          className="flex flex-col h-max w-full pattern-dots pattern-slate-600 pattern-bg-transparent pattern-opacity-100 pattern-size-4 lg:gap-0 xl:gap-5 lg:flex-row"
        >
          <ModuleMenu
            className="xl:min-w-[25%]"
            theme={pagination.current}
            actually={route}
          />
          <section
            data-theme={themeContent.is ? LightOptions[0] : DarkOptions[0]}
            className="lg:min-w-[60%] xl:min-w-[75%] p-2 lg:p-5 lg:pr-7 xl:p-10 xl:pr-12 text-justify font-patrick bg-base-200 min-h-screen break-words lg:text-xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-vt323 text-center underline">
              {current.name}
            </h1>
            <p className="text-lg lg:text-2xl p-2">{current.description}</p>
            <ID_txt id="videos-relacionados">Videos Relacionados</ID_txt>
            <section
              className={`w-full h-[50vh] ${
                themeContent.is ? 'bg-neutral/10' : 'bg-neutral-content/10'
              }`}
            ></section>
            <PaginationSub
              genSubTheme={route}
              subthemes={pagination.next_prev}
              content={current.contents}
            />
          </section>
        </section>
      </Layout>
    </>
  );
}

export default SubThemeHome;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = getSubTheme(params.matter, params.theme, params.subTheme);
  const dataTheme = getTheme(params.matter, params.theme);
  // Datos para el layout de las páginas
  const dataLayout = getAllMatterObject();
  // Datos para el componente Next Page
  const dataNext = allSubThemes(params.matter, params.theme);
  return {
    props: {
      data: { current: data, layout: dataLayout },
      pagination: { current: dataTheme, next_prev: dataNext },
      route: params.subTheme,
    },
  };
};

// Obtener las rutas de las páginas de cada subtema
export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths: any = [];
  const matters = genAllMatters();
  matters.forEach((matter) => {
    const themes = genAllThemes(matter);
    themes.forEach((theme) => {
      const subThemes = genAllSubThemes(matter, theme);
      subThemes.forEach((subTheme) => {
        paths.push({
          params: {
            matter,
            theme,
            subTheme,
          },
        });
      });
    });
  });
  return {
    paths,
    fallback: false,
  };
};
