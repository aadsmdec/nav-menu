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
                var swipeComposer = this.templateObjects.swipeComposer;
                
                swipeComposer.addEventListener("swipemove", this, false);
                swipeComposer.addEventListener("swipe", this, false);
            }
        }
    },
    
    handleSwipemove: {
        value: function(event) {
            if (event.direction === "RIGHT") {
            }
            console.log(event.direction, event.dX);
        }
    },
    
    handleSwipe: {
        value: function(event) {
            console.log("SWIPE");
        }
    }
});
