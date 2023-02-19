import {Check} from '../components/forms/Quiz'
export default function Test() {
  return (
    <>
      <section>
        <Check options={[{content: <>Nombres de guardia</>, value: true}, {content: <>Esto funciona?</>, value: false}]}/>
      </section>
    </>
  );
}
