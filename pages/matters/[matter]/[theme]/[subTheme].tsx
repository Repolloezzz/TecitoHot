import { GetStaticPaths, GetStaticProps } from 'next/types'
import {
  genAllThemes,
  genAllMatters,
  genAllSubThemes,
} from '@/lib/getGenerators'
import { getSubTheme, getTheme } from '@/lib/getParsedObjects'
import { getAllMatterObject } from '@/lib/getObjects'
import Layout from '@/components/layout/Layout'
import type { SubTheme, Theme, Base } from '@/data/DataTypes'
import ModuleMenu from '@/components/themes/ModuleMenu'
import {
  useThemeContext,
  DarkOptions,
  LightOptions,
} from '@/context/ThemeContent'

export default function SubThemeHome({
  data,
  dataLayout,
  dataTheme,
  slug,
}: {
  data: Theme
  dataLayout: Base[]
  dataTheme: Theme
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
          <ModuleMenu
            className="xl:min-w-[25%]"
            theme={dataTheme}
            actually={slug}
          />
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
  const data = getSubTheme(params.matter, params.theme, params.subTheme)
  const dataTheme = getTheme(params.matter, params.theme)
  // Datos para el layout de las páginas
  const dataLayout = getAllMatterObject()
  return {
    props: {
      data,
      dataLayout,
      dataTheme,
      slug: params.subTheme,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths: any = []
  const matters = genAllMatters()
  matters.forEach((matter) => {
    const themes = genAllThemes(matter)
    themes.forEach((theme) => {
      const subThemes = genAllSubThemes(matter, theme)
      subThemes.forEach((subTheme) => {
        paths.push({
          params: {
            matter,
            theme,
            subTheme,
          },
        })
      })
    })
  })
  return {
    paths,
    fallback: false,
  }
}
