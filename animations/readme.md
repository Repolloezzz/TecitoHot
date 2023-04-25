# 🚀 Comenzar

Actualmente te encuentras con el proyecto de todas
las animaciones hechas en [Manim](https://www.manim.community/),
este "subproyecto" es para almacenar y compartir como
se realizaron las animaciones, de cirta forma para
las personas que desean saber como fueron hechas.

Si quieres ver las animaciones, primero necesitas
las dependencias de `Manim`, naturalmente de `Python` y
una gestor de paquetes como [Choco](https://chocolatey.org/),
Esto por que lo más rápido es instalar `Manim` con `Choco`.

```bash
choco install manim
```
Ahora bien eso no es todo, esta es la lista de los programas
que se necesitan para que las animaciones funcionen:

- [ffmpeg](https://ffmpeg.org/)
- [sox](http://sox.sourceforge.net/)
- [latex](https://www.latex-project.org/)
- [ImageMagick](https://imagemagick.org/index.php)

Con todo eso ya puedes comenzar a ver las animaciones.

## 🥽 Ejecutar las animaciones

Para poder ejecutar cualquier archivo del directorio `animtions`
debe saber que tiene una estructura de directorios y archivos
y que lo debe de ejecutar desde la terminal. Por ejemplo
para el archivo `animations/example.py`

```bash
cd animations
python -m example --pqm
```