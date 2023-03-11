export default function Test({ data }: any) {
  console.log(data)
  return <section>Hola mundo, esto es un test</section>
}

import { allMatters } from '@/lib/getParsedObjects'
export async function getStaticProps() {
  const data = allMatters()
  return {
    props: {
      data,
    },
  }
}