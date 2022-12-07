export function SectionSelector({className, id, title, description, options}) {
    return(
        <>
        <div className={`${className} p-5`} id={id}>
            <h1 className={`text-8xl`}>{title}</h1>
            <p>{description}</p>
            <menu>

            </menu>
        </div>
        </>
    )
}