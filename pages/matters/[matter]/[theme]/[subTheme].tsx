import { GetStaticPaths, GetStaticProps } from 'next/types';
import {
  genAllThemes,
  genAllMatters,
  genAllSubThemes,
} from '@/lib/getGenerators';
import { getSubTheme, getTheme } from '@/lib/getParsedObjects';
import { getAllMatterObject } from '@/lib/getObjects';
import Layout from '@/components/layout/Layout';
import type { SubTheme, Theme, Base } from '@/data/DataTypes';
import ModuleMenu from '@/components/themes/ModuleMenu';
import PaginationSub from '@/components/themes/PaginationSub';
import {
  useThemeContext,
  DarkOptions,
  LightOptions,
} from '@/context/ThemeContent';
import { allSubThemes } from '@/lib/getParsedObjects';
import { ID_txt } from '@/components/global/Text';

export default function SubThemeHome({
  data,
  dataLayout,
  dataTheme,
  dataNext,
  slugSub,
}: {
  data: SubTheme;
  dataLayout: Base[];
  dataTheme: Theme;
  dataNext: SubTheme[];
  slugSub: string;
}) {
  const { themeContent } = useThemeContext();
  return (
    <>
      <Layout listData={dataLayout}>
        <section
          data-theme="halloween"
          className="flex flex-col h-max w-full pattern-dots pattern-slate-600 pattern-bg-transparent pattern-opacity-100 pattern-size-4 lg:gap-0 xl:gap-5 lg:flex-row"
        >
          <ModuleMenu
            className="xl:min-w-[25%]"
            theme={dataTheme}
            actually={slugSub}
          />
          <section
            data-theme={themeContent.is ? LightOptions[0] : DarkOptions[0]}
            className="lg:min-w-[60%] xl:min-w-[75%] p-2 lg:p-5 lg:pr-7 xl:p-10 xl:pr-12 text-justify font-patrick bg-base-200 min-h-screen break-words lg:text-xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-vt323 text-center underline">
              {data.name}
            </h1>
            <p className="text-lg lg:text-2xl p-2">{data.description}</p>
            <ID_txt id="videos-relacionados">Videos Relacionados</ID_txt>
            <section
              className={`w-full h-[50vh] ${
                themeContent.is ? 'bg-neutral/10' : 'bg-neutral-content/10'
              }`}
            ></section>
            <PaginationSub
              genSubTheme={slugSub}
              subthemes={dataNext}
              content={data.contents}
            />
          </section>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = getSubTheme(params.matter, params.theme, params.subTheme);
  const dataTheme = getTheme(params.matter, params.theme);
  // Datos para el layout de las páginas
  const dataLayout = getAllMatterObject();
  // Datos para el componente Next Page
  const dataNext = allSubThemes(params.matter, params.theme);
  return {
    props: {
      data,
      dataLayout,
      dataTheme,
      dataNext,
      slugSub: params.subTheme,
    },
  };
};

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
