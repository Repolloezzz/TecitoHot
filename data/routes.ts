import path from "path";

const root = path.join(process.cwd());
export const content = "markdown";
export const contentDir = path.join(root, content);
export const resource = "public/resources";
export const sourceDir = path.join(root, resource);
export default root;
