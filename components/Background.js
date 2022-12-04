export function HeroBackground({ id = "", className = "" }) {
  return (
    <>
      <div
        id={id}
        className={`${className} h-screen overflow-hidden`}
      >
      </div>
    </>
  );
}
