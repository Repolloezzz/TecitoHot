from manim import *
from components.backgrounds import *


class Escena(MovingCameraScene):
    def construct(self):
        # cambiar el background
        # self.camera.background = black

        message = Text("Hello world")
        self.play(Write(message))
        self.play(Wiggle(message), run_time=3)
        self.play(Unwrite(message))


print('Hola')
