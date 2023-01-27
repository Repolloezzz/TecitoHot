import { allData } from "./main"
import type { Matter } from "./Types"
const getMatter = (gen:string) : Matter => {
    return allData.find((e:Matter) => e.gen == gen)
}
export {getMatter}