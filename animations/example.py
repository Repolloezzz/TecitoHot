from manim import *
from components.backgrounds import mycolor


class Escena(MovingCameraScene):
    def construct(self):
        # cambiar el background

        message = Text("Hello world", color=mycolor)
        self.play(Write(message))
        self.play(Wiggle(message), run_time=3)
        self.play(Unwrite(message))
