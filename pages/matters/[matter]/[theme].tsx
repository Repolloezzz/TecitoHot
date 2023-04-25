// Modulos
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { Theme, Base } from '@/data/DataTypes';
import { genAllMatters, genAllThemes } from '@/lib/getGenerators';
import { getTheme } from '@/lib/getParsedObjects';
import { getAllMatterObject } from '@/lib/getObjects';
import {
  useThemeContext,
  DarkOptions,
  LightOptions,
} from '@/context/ThemeContent';
// Componentes
import Layout from '@/components/layout/Layout';
import ModuleMenu from '@/components/themes/ModuleMenu';
import { TextScale } from '@/components/global/TextAnimation';
import { PixelIcons } from '@/components/global/Icons';
import ImgAbs from '@/components/global/Image';
import Link from 'next/link';
import { ID_txt } from '@/components/global/Text';

interface ThemeParams {
  data: {current: Theme; layout: Base[]}
  route: string;
}

/**
 * Representación dinámica de las páginas de cada tema
 * @prop { data } : Datos del tema y layout
 * @prop { route } : Ruta actual del tema
 * @returns Página del tema
 */
function ThemeHome({ data, route }: ThemeParams) {
  const {layout, current} = data
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
            theme={current}
            actually={route} />
          <section
            data-theme={themeContent.is ? LightOptions[0] : DarkOptions[0]}
            className="lg:min-w-[60%] xl:min-w-[75%] p-2 lg:p-5 lg:pr-7 xl:p-10 xl:pr-12 text-justify bg-base-200 min-h-screen break-words lg:text-xl"
          >
            <div className="hero min-h-[80dvh] bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <ImgAbs
                  src={current.img}
                  title={`Images de ${current.name}`}
                  className="h-full" />
                <div className="lg:max-w-[60%]">
                  <h1 className="text-5xl lg:text-7xl font-bold flex items-center w-full">
                    <PixelIcons name="play" />
                    <TextScale
                      content={current.name}
                      className="hover:bg-slate-100 hover:text-slate-800" />
                  </h1>
                  <p className="py-6">{current.description}</p>
                  <Link
                    href={current.subThemes[0] ? current.subThemes[0].url : '#'}
                    className="btn btn-primary"
                  >
                    Comenzar a ver los contenidos
                  </Link>
                </div>
              </div>
            </div>
            <ID_txt id="subthemes">Subtemas</ID_txt>
            <table className="border-separate border-l-8 border-primary bg-base-300/50 w-full text-center border-spacing-2">
              <thead className="bg-secondary text-secondary-content">
                <tr>
                  <th>Nro</th>
                  <th>Nombre</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody className="">
                {current.subThemes.map((subTheme, index) => {
                  return (
                    <tr key={index}>
                      <td className="">{index + 1}</td>
                      <td className="">{subTheme.name}</td>
                      <td className="">
                        <a
                          href={subTheme.url}
                          className="btn btn-outline btn-sm text-lg"
                        >
                          Ver más
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <ID_txt id="resources">Recursos relacionados</ID_txt>
            <section
              className={`w-full h-[50vh] ${themeContent.is ? 'bg-neutral/10' : 'bg-neutral-content/10'}`}
            ></section>
          </section>
        </section>
      </Layout>
    </>
  );
}

export default ThemeHome;

// Para obtener los datos de cada tema
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = getTheme(params.matter, params.theme);
  // Datos para el layout de las páginas
  const dataLayout = getAllMatterObject();
  return {
    props: {
      data: {current: data, layout: dataLayout},
      route: params.theme,
    },
  };
};

// Para definir las rutas de las páginas
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = [];
  // Obtenemos todas las materias
  const matterGens = genAllMatters();
  matterGens.forEach((matterGen) => {
    // Obtenemos todos los temas de cada materia
    const themeGens = genAllThemes(matterGen);
    themeGens.forEach((themeGen) => {
      // Agregamos los paths de cada tema respectivo a su materia
      paths.push({ params: { matter: matterGen, theme: themeGen } });
    });
  });
  return { paths, fallback: false };
};
