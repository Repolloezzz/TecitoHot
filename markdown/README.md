# **👺 Estructura y funcionamiento del contenido**

Las áreas son una forma de organizar los contenidos de un curso. Pero, en este contexto simplemente es un contenedor donde se organizan los posts. En el caso se tiene la siguiente estructura:

```bash
# Estructura de carpetas
# Markdown
├── 📂 Area
│ ├── 📄 index.json
│ ├── 📂 Theme
│ │ ├── 📄 index.json
│ │ ├── 📂 Module
│ │ │ ├── 📄 index.json
│ │ │ ├── 📚 Post.mdx
```

En simples palabras, un área es un contenedor de temas, un tema es un contenedor de módulos y un módulo es un contenedor de posts.

> **Nota:** visto desde la perspectiva de la programación orientada a objectos, es una agregación y composición de objetos.

## **Reconocimiento**

La carpeta `markdown` es la carpeta raíz de todo el contenido, toda la estructura y organización se encuentra en este directorio. Ahora bien, la razón de estructurar esto así es tener un **control sobre la composición de objectos**, es decir que su objectivo es tener implementado un sistema para generar un objeto de tipo `Area` que contenga un objeto de tipo `Theme` que contenga un objeto de tipo `Module` que contenga un objeto de tipo `Post`.

Para que una 📂carpeta sea considerada para la generación de su representación como objeto, debe contener un archivo `index.json` con la siguiente estructura:

```json
{
  "name": "Nombre del área",
  "description": "Descripción del área"
}
```

Entonces, si cumple con eso se genera un objeto de tipo `Area` con los datos que se encuentran en el archivo `index.json` y datos generados a partir de la información de la carpeta.

> **Nota:** el nombre de la carpeta es el identificador del objeto, por lo que no debe contener espacios ni caracteres especiales.

> **Generalización:** para los demás tipos como `Theme` y `Module` se sigue la misma lógica, solo cambia algunos aspectos en el contenido del archivo `index.json`.

## **Generación**

La generación de objetos se realiza en el momento de correr
el proyecto, es decir, cuando se ejecuta el comando `npm run dev` o `npm run build`. Para esto se crearon funciones que se encargan de generar los objetos a partir de la información de las carpetas y archivos.

> **Importante:** Actualmente tanto los componentes, como páginas hacen uso de los métodos para obtener los datos desde el servidor, pero en el futuro se implementará un sistema de cache para que los datos se almacenen en el navegador y no se vuelvan a generar cada vez que se recargue la página.
