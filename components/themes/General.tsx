export function Ref({ id }: { id: string }) {
    return <span id={id} className="relative -top-24 lg:top-5" />;
  }
export function Sep() {
    return <div className='divider'/>
}

const all = {Ref, Sep}
export default all