montageDefine("cf81e1b","ui/label.reel/label",{dependencies:["../../core/core","../text.reel/text","../../composer/press-composer"],factory:function(e,t){var n=(e("../../core/core").Montage,e("../text.reel/text").Text),i=e("../../composer/press-composer").PressComposer;t.Label=n.specialize({constructor:{value:function(){this.super(),this._pressComposer=new i,this.addComposer(this._pressComposer)}},prepareForActivationEvents:{value:function(){this.super(),this._pressComposer.addEventListener("press",this,!1)}},_pressComposer:{value:null},target:{value:null},action:{value:"activate"},handlePress:{value:function(e){this.super(e),this.target&&"function"==typeof this.target[this.action]&&this.target[this.action]({from:this})}}})}});