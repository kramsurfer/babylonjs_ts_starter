import { Scene, Engine } from "@babylonjs/core";
class BaseScene extends Scene {
    constructor( engine:Engine, canvas:any ) {
        super( engine );
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
export { BaseScene };