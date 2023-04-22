import path from "path";

const root = path.join(process.cwd());
export const contentDir = path.join(root, "markdown");
export const sourceDir = path.join(root, "public", "resources");
export default root;
