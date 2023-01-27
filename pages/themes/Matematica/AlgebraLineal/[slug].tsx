import Head from "next/head";
import { getFileBySlug, getFiles } from "../../../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import { VerticalNav } from "../../../../components/global/Navigator";
import { allData as defaultData } from "../../../../data/main";
import { NavSearch } from "../../../../components/themes/navSearch";
import { subThemes, index } from "../../../../data/Matematica/AlgebraLineal";
import {
  generalComponents,
  latexComponets,
} from "../../../../components/MDXComponents";

export default function Content({ source, frontMatter, slug }: any) {
  const navFormatData = defaultData.map((matter: any) => {
    return {
      to: `/#${matter.name}`,
      content: matter.name,
    };
  });
  return (
    <>
      <Head>
        <title>TeCitoHot - Algebra Lineal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex w-full h-screen min-h-[40rem] bg-slate-50">
        <VerticalNav
          options={[
            {
              to: "/#home",
              content: "Inicio",
              iconName: "home",
            },
            {
              to: "#",
              content: "Materias",
              iconName: "archive",
              suboptions: navFormatData,
            },
            {
              to: "/Resource",
              content: "Recursos",
              iconName: "folder-plus",
            },
            {
              to: "/Apps",
              content: "Aplicaciones",
              iconName: "calculator",
            },
          ]}
        />
        <section className="relative flex flex-col w-full overflow-x-hidden lg:flex-row lg:gap-2 bg-slate-300/20 scroll-smooth snap-y scrollbar-thin scrollbar-w-1 md:scrollbar-w-2 lg:scrollbar-w-3 scrollbar-thumb-stone-800 scrollbar-track-amber-100">
          <NavSearch index={index} props={subThemes} actually={slug} />
          <section className="w-full h-auto p-2 text-base leading-6 text-justify break-normal lg:leading-8 md:text-lg lg:text-xl lg:p-5 lg:pr-8 font-patrick bg-slate-50">
            <MDXRemote
              lazy={true}
              {...source}
              components={{ ...generalComponents, ...latexComponets }}
            />
          </section>
        </section>
      </section>
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
