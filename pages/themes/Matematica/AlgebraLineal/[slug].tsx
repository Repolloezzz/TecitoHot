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
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Content({ source, frontMatter, slug }: any) {
  const navFormatData = defaultData.map((matter: any) => {
    return {
      to: `/#${matter.name}`,
      content: matter.name,
    };
  });
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: contentRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Head>
        <title>TeCitoHot - Algebra Lineal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex w-full h-full bg-stone-800">
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
        <section
          ref={contentRef}
          data-theme="cupcake"
          className="flex text-black flex-col bg-base-300 lg:flex-row lg:gap-2 relative w-full h-screen min-h-[30rem] overflow-x-hidden overflow-y-scrol scroll-smooth scrollbar-thin scrollbar-w-0 md:scrollbar-w-2 lg:scrollbar-w-3 scrollbar-thumb-stone-800 scrollbar-track-amber-100"
        >
          <NavSearch index={index} props={subThemes} actually={slug} />
          <div className="flex bg-base-100 flex-col p-2 py-8  text-base text-justify break-normal shadow-md h-max leading-6 lg:leading-8 md:text-lg lg:text-1.5xl lg:p-8 lg:pr-10 font-patrick">
            <div className="z-30 over flex w-full bg-primary sticky top-20 md:top-24 lg:top-0 mb-5 lg:mb-2">
              <motion.div
                style={{ scaleX }}
                className="w-full origin-[0%] relative h-2 lg:h-5 bg-secondary"
              ></motion.div>
            </div>
            <MDXRemote
              {...source}
              lazy={true}
              components={{ ...generalComponents, ...latexComponets }}
            />
          </div>
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
