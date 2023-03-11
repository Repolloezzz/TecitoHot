import { GetStaticPaths, GetStaticProps } from 'next'

export default function MyPage({ ruta, id }: any) {
  return (
    <>
      <h1>Ruta: {ruta}</h1>
      <h2>ID: {id}</h2>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const rutas = ['ruta1', 'ruta2', 'ruta3']
  const ids = ['id1', 'id2', 'id3']
  const paths: any[] = []

  rutas.forEach((ruta) => {
    ids.forEach((id) => {
      paths.push({ params: { rutas: ruta, gen: id } })
    })
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  return {
    props: {
      ruta: params.rutas,
      id: params.gen,
    },
  }
}
