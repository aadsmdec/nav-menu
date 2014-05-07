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
            //if (event.direction === "RIGHT") {
                var menu = this.templateObjects.menu;
                if (event.translateX > 50) {
                    menu.element.style.flexBasis = "200px";
                } else {
                    menu.element.style.flexBasis = 0;
                }
            //}
            console.log("End", event.translateX);
        }
    }
});
