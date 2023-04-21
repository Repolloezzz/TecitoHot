/**
 * * Author interface
 * @interface
 * @property {string} name - The name of the author
 * @property {string} [email] - The email of the author
 * @property {string} [github] - The github username of the author
 * @property {string} [twitter] - The twitter username of the author
 * example: { name: 'John Doe', email: 'johndoe@gmail.com', github: 'github.com/johndoe/...}
 */
export default interface Contributor {
  name: string;
  email?: string;
  github?: string;
  twitter?: string;
}
