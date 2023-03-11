import { GetStaticPaths, GetStaticProps } from 'next'
import { genAllMatters, genAllThemes } from '@/lib/getGenerators'
import { getTheme } from '@/lib/getParsedObjects'
import { getAllMatterObject } from '@/lib/getObjects'
import type { Theme, Base } from '@/data/DataTypes'
import Layout from '@/components/layout/Layout'
import ModuleMenu from '@/components/themes/ModuleMenu'
import {
  useThemeContext,
  DarkOptions,
  LightOptions,
} from '@/context/ThemeContent'

export default function ThemeHome({
  data,
  dataLayout,
  slug,
}: {
  data: Theme
  dataLayout: Base[]
  slug: string
}) {
  const { themeContent } = useThemeContext()
  return (
    <>
      <Layout listData={dataLayout}>
        <section
          data-theme="halloween"
          className="flex flex-col h-max w-full pattern-dots pattern-slate-600 pattern-bg-transparent pattern-opacity-100 pattern-size-4 lg:gap-0 xl:gap-5 lg:flex-row"
        >
          <ModuleMenu className="xl:min-w-[25%]" theme={data} actually={slug} />
          <section
            data-theme={themeContent.is ? LightOptions[0] : DarkOptions[0]}
            className="lg:min-w-[60%] xl:min-w-[75%] p-2 lg:p-5 lg:pr-7 xl:p-10 xl:pr-12 text-justify font-patrick bg-base-200 min-h-screen break-words lg:text-xl"
          >
            <h1 className="text-4xl font-bold">{data.name}</h1>
          </section>
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = getTheme(params.matter, params.theme)
  // Datos para el layout de las páginas
  const dataLayout = getAllMatterObject()
  return {
    props: {
      data,
      dataLayout,
      slug: params.theme,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = []
  // Obtenemos todas las materias
  const matterGens = genAllMatters()
  matterGens.forEach((matterGen) => {
    // Obtenemos todos los temas de cada materia
    const themeGens = genAllThemes(matterGen)
    themeGens.forEach((themeGen) => {
      // Agregamos los paths de cada tema respectivo a su materia
      paths.push({ params: { matter: matterGen, theme: themeGen } })
    })
  })
  return { paths, fallback: false }
}
