// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import FormationController from "./formation_controller"
application.register("formation", FormationController)

import AnimationController from "./animation_controller"
application.register("animation", AnimationController)

import AboutController from "./about_controller"
application.register("about", AboutController)

import ProjectController from "./project_controller"
application.register("project", ProjectController)
