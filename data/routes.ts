import path from "path";

export const root = path.join(process.cwd());
export const content = "markdown";
export const contentDir = path.join(root, content);
export const resource = "public/resources";
export const resourceDir = path.join(root, resource);
