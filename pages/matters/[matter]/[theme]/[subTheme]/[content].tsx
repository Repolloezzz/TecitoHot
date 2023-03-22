import { GetStaticPaths, GetStaticProps } from 'next/types';
import {
  genAllThemes,
  genAllMatters,
  genAllSubThemes,
  genAllContents,
} from '@/lib/getGenerators';
import { getContentSource } from '@/lib/getObjects';
import {
  getTheme,
  getContent,
  allSubThemes,
  allContents,
} from '@/lib/getParsedObjects';
import { getAllMatterObject } from '@/lib/getObjects';
import Layout from '@/components/layout/Layout';
import type { Theme, Base, Content, SubTheme } from '@/data/DataTypes';
import ModuleMenu from '@/components/themes/ModuleMenu';
import PaginationSub from '@/components/themes/PaginationSub';
import {
  useThemeContext,
  DarkOptions,
  LightOptions,
} from '@/context/ThemeContent';
import { MDXRemote } from 'next-mdx-remote';
import { Global, Latex, Media, Forms } from '@/components/themes/MDXComponents';
import { HeadTitle } from '@/components/themes/Titles';
import { Sep } from '@/components/themes/General';

export default function ContentHome({
  data,
  dataLayout,
  dataTheme,
  dataNext,
  dataContent,
  slugSub,
  slugCon,
  source,
  frontMatter,
}: {
  data: Content;
  dataLayout: Base[];
  dataTheme: Theme;
  dataNext: SubTheme[];
  dataContent: Content[];
  slugSub: string;
  slugCon: string;
  source: any;
  frontMatter: any;
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
            <HeadTitle content={data} />
            <Sep />
            <MDXRemote
              {...source}
              lazy={true}
              components={{ ...Global, ...Latex, ...Media, ...Forms }}
              frontmatter={frontMatter}
            />
            <PaginationSub
              genContent={slugCon}
              genSubTheme={slugSub}
              subthemes={dataNext}
              content={dataContent}
            />
          </section>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = getContent(
    params.matter,
    params.theme,
    params.subTheme,
    params.content
  );
  const { source, frontMatter } = await getContentSource(
    params.matter,
    params.theme,
    params.subTheme,
    params.content
  );
  const dataTheme = getTheme(params.matter, params.theme);
  // Datos para el layout de las páginas
  const dataLayout = getAllMatterObject();
  // Datos para el componente Next Page
  const dataNext = allSubThemes(params.matter, params.theme);
  const dataContent = allContents(params.matter, params.theme, params.subTheme);
  return {
    props: {
      data,
      dataLayout,
      dataTheme,
      dataNext,
      dataContent,
      slugSub: params.subTheme,
      slugCon: params.content,
      source,
      frontMatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = [];
  // Obtenemos todas las materias
  const mattersGens = genAllMatters();
  mattersGens.forEach((matterGen) => {
    const themesGen = genAllThemes(matterGen);
    themesGen.forEach((themeGen) => {
      const subThemesGen = genAllSubThemes(matterGen, themeGen);
      subThemesGen.forEach((subThemeGen) => {
        const contentsGen = genAllContents(matterGen, themeGen, subThemeGen);
        contentsGen.forEach((contentGen) => {
          paths.push({
            params: {
              matter: matterGen,
              theme: themeGen,
              subTheme: subThemeGen,
              content: contentGen,
            },
          });
        });
      });
    });
  });
  return {
    paths,
    fallback: false,
  };
};
