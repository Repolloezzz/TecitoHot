Actually the problem refers to the use of python modules with manim, I am somewhat new using the language and I am not so familiar with the way modules are imported and exported in python, I came to a "solution" by structuring the project as a package . Now I have this:
```python
from manim import *
from animations.components.backgrounds import *


class Escena(MovingCameraScene):
    def construct(self):
        # cambiar el background
        # black es una variable de background
        self.camera.background = black

        message = Text("Hello world")
        self.play(Write(message))
        self.play(Wiggle(message), run_time=3)
        self.play(Unwrite(message))

```
For this first case I have the error that the animations module does not exist as the first attached image. But, changing the import like this
```python
from components.backgrounds import *
```
the program runs, but another error occurs as in the second image

When i clear the imported variable then the program works correctly.
```python
from manim import *
from components.backgrounds import *


class Escena(MovingCameraScene):
    def construct(self):
        # cambiar el background
        #self.camera.background = black
        # ✅works without imported variable✅

        message = Text("Hello world")
        self.play(Write(message))
        self.play(Wiggle(message), run_time=3)
        self.play(Unwrite(message))
```
But again, I want to use modules