/**
 **Rutas absolutas donde se encuentran los archivos necesarios de los objetos generados
 * 1.- Ruta donde se encuentran los archivos .json y .mdx
 * 2.- Ruta donde se encuentran archivos media (video, imagenes, etc)
 * 3.- Ruta donde se encuentran las páginas de los objetos generados
 */
const Markdown = 'markdown'
const Public = 'public/matters'
const Pages = 'pages/matters'
const rootMarkdown = `${process.cwd()}/${Markdown}`
const rootPublic = `${process.cwd()}/${Public}}`
const rootPage = `${process.cwd()}/${Pages}}`

export { rootMarkdown, rootPublic, rootPage, Markdown, Public, Pages }
