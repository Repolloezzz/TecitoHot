// * Métodos, datos y tipos
import { getFileBySlug, getFiles } from "../../../../lib/mdx";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
// * Componentes
import HeadNav from "../../../../components/layout/HeadNav";
import { Global, Latex, Media, Forms } from "../../../../components/themes/MDXComponents";
import ModuleMenu from "../../../../components/themes/ModuleMenu";
import { subThemes, index } from "../../../../data/Matematica/AlgebraLineal";
import { useThemeContext, DarkOptions, LightOptions } from "../../../../context/ThemeContent";
import Ventage from "../../../../components/layout/AbsolutVentage";
import Footer from "../../../../components/layout/FooterTCH";

export default function Content({ source, frontMatter, slug }: any) {
  const { themeContent } = useThemeContext();
  return (
    <>
      <Head>
        <title>TeCitoHot - Algebra Lineal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeadNav />
      <Ventage/>
      <section
        data-theme='halloween'
        className="flex flex-col h-max w-full pattern-dots pattern-slate-600 pattern-bg-transparent pattern-opacity-100 pattern-size-4 lg:gap-0 xl:gap-5 lg:flex-row"
      >
        <ModuleMenu
          className="xl:min-w-[25%]"
          title={index.name}
          options={subThemes}
          actually={slug}
        />
        <section data-theme={themeContent.is ? LightOptions[0] : DarkOptions[0]} className="lg:min-w-[60%] xl:min-w-[75%] p-2 lg:p-5 lg:pr-7 xl:p-10 xl:pr-12 text-justify font-patrick bg-base-200 min-h-screen break-words lg:text-xl">
          <MDXRemote
            {...source}
            lazy={true}
            components={{ ...Global, ...Latex, ...Media, ...Forms }}
            frontmatter={frontMatter}
          />
        </section>
      </section>
      <Footer/>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  const { source, frontMatter } = await getFileBySlug(
    params.slug,
    "markdown/Matematica/AlgebraLineal"
  );
  return {
    props: {
      source,
      frontMatter,
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles("markdown/Matematica/AlgebraLineal");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
