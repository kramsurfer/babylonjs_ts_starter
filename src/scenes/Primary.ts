import {ArcRotateCamera, HemisphericLight, Mesh, MeshBuilder, Scene, Vector3} from "@babylonjs/core";

class Primary extends Scene {
    constructor( engine, canvas ) {
        super( engine );

        var camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), this);
        camera.attachControl(canvas, true);

        var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), this);
        var sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this);

        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if ( ev.keyCode === 73) {
                if (this.debugLayer.isVisible()) {
                    this.debugLayer.hide();
                } else {
                    this.debugLayer.show();
                }
            }
        });
    }
}

export { Primary };
