import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine } from "@babylonjs/core/Engines/engine";
import { SceneBasic } from "./scenes/SceneBasic";

class App {
    constructor() {
        // create the canvas html element and attach it to the webpage
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        var engine = new Engine(canvas, true);

        var scene = new SceneBasic(engine,canvas);
        
        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }
}
new App();