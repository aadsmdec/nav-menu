/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    templateDidLoad: {
        value: function() {
            this.templateObjects.content.content = new Array(30).join("a,").split(",");
            this.templateObjects.menu.content = [
                "Profile", "Actions", "Games", "Friends", "Settings", "Logout"
            ];
        }
    },
    
    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                var translateComposer = this.templateObjects.translateComposer;
                
                translateComposer.addEventListener("translate", this, false);
                translateComposer.addEventListener("translateEnd", this, false);
            }
        }
    },
    
    _menuClosed: {
        value: true;
    },
    
    handleTranslate: {
        value: function(event) {
            //if (event.direction === "RIGHT") {
                var menu = this.templateObjects.menu;
                menu.element.style.flexBasis = event.translateX + "px";
            //}
            console.log(event.translateX);
        }
    },
    
    handleTranslateEnd: {
        value: function(event) {
            var menu = this.templateObjects.menu;
            var shouldClose = this._menuClosed && event.translateX < 50 ||
                              !this._menuClosed && event.translateX < 150;
                
            if (shouldClose) {
                menu.element.style.flexBasis = 0;
                this.templateObjects.translateComposer.translateX = 0;
                this._menuClosed = true;
            } else {
                menu.element.style.flexBasis = "200px";
                this.templateObjects.translateComposer.translateX = 200;
                this._menuClosed = false;
            }
            
            console.log("End", event.translateX);
        }
    }
});
