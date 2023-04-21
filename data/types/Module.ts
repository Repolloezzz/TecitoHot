import type { Page } from "./Post";
export default interface Module {
  name: string;
  description: string;
  image: string;
  url: string;
  posts: Page[];
}
