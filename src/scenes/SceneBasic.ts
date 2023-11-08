import {BaseScene} from "./BaseScene";
import {ArcRotateCamera, HemisphericLight, Mesh, MeshBuilder, Scene, Vector3} from "@babylonjs/core";
class SceneBasic extends BaseScene {
    constructor( engine, canvas ) {
        super( engine, canvas );
        var camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), this);
        camera.attachControl(canvas, true);
        var light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), this);
        var sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this);
    }
}
export { SceneBasic };