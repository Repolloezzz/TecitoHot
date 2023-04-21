# **CLI** de categorias

El CLI de categorias es una aplicación que permite gestionar las categorías de los posts de momento, pero llegara el momento en el que se extienda a otro tipo de datos.
Los datos de las categorías se guardan en un archivo `JSON` ubicado en el directorio `/data/categories.json`. Donde se guardan los datos de las categorías por el momento.
Pero, no se considera migrar los datos a una base de datos, ya que la aplicación es muy pequeña y no se necesita una por su sencillez. <br/><br/>
Todos los datos de tipo Category tienen la siguiente estructura:

```javascript
{
  name: 'nombre de la categoria',
  description: 'descripcion de la categoria'
}
```

Del cual se puede ver que es un objeto con dos propiedades, `name` y `description`.

## **Funciones CRUD**

Son funciones especializadas para la gestión de categorías.
todo esto está guardado en la base de datos que es un archivo `JSON` ubicada en el directorio `/data/categories.json`. Donde se guardan los datos de las categorías por el momento. <br/>
Toda la parte lógica de la aplicación está en la carpeta
`functions` y la parte de la interfaz de usuario está en la carpeta `views`.

Todas las funciones trabajan con el tipo de dato `Category` que es un objeto con la siguiente estructura:

### **(C)** - crear una categoria

La función `createCategory` se encarga de crear una nueva categoría. Donde, la misma recibe como parámetro un objeto del tipo `Category` con

1. @param category : Category - objeto del tipo `Category` que contiene la información necesaria

La misma es leida desde la consola y se le pide al usuario que ingrese los datos de la categoría.

> **Nota**: La función `createCategory` se encarga de validar que los datos ingresados por el usuario sean correctos y que no exista una categoría con el mismo nombre.

### **(R)** - leer una categoria

La función `readCategory` se encarga de leer una categoría. Donde, la misma recibe como parámetro un string con la siguiente el nombre de la categoría a leer.

1. @param name : string - nombre de la categoría a leer

Simplemente retorna la categoría que se le pase como parámetro.

> **Nota**: La función `readCategory` puede retornar `undefined` si no encuentra la categoría que se le pase como parámetro.

### **(U)** - actualizar una categoria

La funcion `updateCategory` se encarga de actualizar una categoría. Donde, la misma recibe como parámetros el nombre de la categoría a actualizar y un objeto con la siguiente estructura:

1. @param name : string - nombre de la categoría a actualizar
2. @param category : Category - objeto del tipo `Category` que contiene la información a actualizar

El objeto que se le pasa como parámetro es el que se va a actualizar en la categoría y practicamente se reemplaza por el objeto que se le pasa como parámetro.

> **Nota**: La función `updateCategory` valida que la categoría que se le pasa como parámetro exista y que el nuevo objeto no tenga el mismo nombre que otra categoría.

### **(D)** - eliminar una categoria

La función `deleteCategory` se encarga de eliminar una categoría. Donde, la misma recibe como parámetro el nombre de la categoría a eliminar.

1. @param name : string - nombre de la categoría a eliminar

> **Nota**: La función `deleteCategory` valida que la categoría que se le pasa como parámetro exista.

<hr/>

### **Funciones de extensión**

Son funciones que se encargan de extender la funcionalidad de la aplicación, expandiendo el alcance de las funciones básicas a
operaciones que no son necesariamente parte del CRUD.

En esta sección se debe comprender que una categoria es parte
de un `Post`, entonces se puede extender la funcionalidad de la aplicación operaciones de un `Post`.
