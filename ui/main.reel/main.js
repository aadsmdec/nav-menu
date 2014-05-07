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
    
    draw: {
        value: function() {
            this._menuElement.style.flexBasis = this._menuOffset + "px";
        }
    },
    
    _menuClosed: {
        value: true
    },
    
    _menuOffset: {
        value: 0
    },
    
    handleTranslate: {
        value: function(event) {
            var menu = this.templateObjects.menu;
            
            this._menuOffset = event.translateX;
            this.needsDraw = true;
            //console.log(event.translateX);
        }
    },
    
    handleTranslateEnd: {
        value: function(event) {
            var translateComposer = this.templateObjects.translateComposer;
            var shouldClose = (this._menuClosed && event.translateX < 50) ||
                              (!this._menuClosed && event.translateX < 150);
                
            if (shouldClose) {
                this._menuOffset = 0;
                translateComposer.translateX = 0;
                this._menuClosed = true;
            } else {
                this._menuOffset = 200;
                translateComposer.translateX = 200;
                this._menuClosed = false;
            }
            
            this.needsDraw = true;
        }
    }
});
