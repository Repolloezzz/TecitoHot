// Modulos
import type { GetStaticPaths, GetStaticProps } from 'next/types';
import type { Theme, Base, Content, SubTheme } from '@/data/DataTypes';
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
import {
  useThemeContext,
  DarkOptions,
  LightOptions,
} from '@/context/ThemeContent';
import { MDXRemote } from 'next-mdx-remote';
// Componentes
import Layout from '@/components/layout/Layout';
import ModuleMenu from '@/components/themes/ModuleMenu';
import PaginationSub from '@/components/themes/PaginationSub';
import { Global, Latex, Media, Forms } from '@/components/themes/MDXComponents';
import { HeadTitle } from '@/components/themes/Titles';
import { Sep } from '@/components/themes/General';
// Estilos
import style from '@/styles/Content.module.css';

interface ContentParams {
  data: { current: Content; layout: Base[] };
  pagination: {
    theme: Theme;
    next_prev: { subtheme: SubTheme[]; content: Content[] };
  };
  route: { pattern: string; current: string };
  content: { source: any; frontMatter: any };
}

/**
 * Creacion de las rutas de las paginas de cada contenido
 * @prop { data } : Datos del contenido y layout
 * @prop { pagination } : Datos para la paginación y navegación
 * @prop { route } : Datos para la ruta
 * @prop { content } : Datos del contenido
 * @return Pagina basada en mdx
 */
function ContentHome({
  data,
  pagination,
  route,
  content,
}: ContentParams) {
  const { layout, current } = data;
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
            theme={pagination.theme}
            actually={route.pattern}
            contentslug={route.current}
          />
          <section
            data-theme={themeContent.is ? LightOptions[0] : DarkOptions[0]}
            className="lg:min-w-[60%] xl:min-w-[75%] p-3 lg:p-5 lg:pr-7 xl:p-10 xl:pr-12 text-justify font-patrick bg-base-200 min-h-screen break-words lg:text-xl"
          >
            <HeadTitle content={current} />
            <Sep />
            <section className={`${style.content_mdx}`}>
              <MDXRemote
                {...content.source}
                lazy={true}
                components={{ ...Global, ...Latex, ...Media, ...Forms }}
                frontmatter={content.frontMatter}
              />
            </section>
            <PaginationSub
              genSubTheme={route.pattern}
              genContent={route.current}
              subthemes={pagination.next_prev.subtheme}
              content={pagination.next_prev.content}
            />
          </section>
        </section>
      </Layout>
    </>
  );
}

export default ContentHome;

// Datos necesarios para ContentHome
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
      data: { current: data, layout: dataLayout },
      pagination: {
        theme: dataTheme,
        next_prev: { subtheme: dataNext, content: dataContent },
      },
      route: { pattern: params.subTheme, current: params.content },
      content: { source, frontMatter },
    },
  };
};

// Rutas dinamicas de las paginas de cada contenido
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = [];
  // Obtenemos todas las materias
  const mattersGens = genAllMatters();
  mattersGens.forEach((matterGen) => {
    // Los temas de la materia acutal
    const themesGen = genAllThemes(matterGen);
    themesGen.forEach((themeGen) => {
      // Los subtemas del tema actual
      const subThemesGen = genAllSubThemes(matterGen, themeGen);
      subThemesGen.forEach((subThemeGen) => {
        // Los contenidos del subtema actual
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
