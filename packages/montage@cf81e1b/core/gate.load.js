montageDefine("cf81e1b","core/gate",{dependencies:["./core","./logger"],factory:function(e,t){var n=e("./core").Montage,r=e("./logger").logger("gate");t.Gate=n.specialize({constructor:{value:function(){this.super()}},init:{enumerable:!1,value:function(){return this.reset(),this}},initWithDelegate:{enumerable:!1,value:function(e){return this.reset(),this.delegate=e,this}},initWithDescriptor:{enumerable:!1,value:function(e){var t;this.reset();for(t in e)this.setField(t,e[t].value);return this}},count:{value:0},table:{value:null},getField:{enumerable:!1,value:function(e){var t=this.table;return!t||t[e]}},setField:{enumerable:!1,value:function(e,t){var n,i=this.table,a=this.count;i=i?i:this.table={},n=i[e],void 0!==n||t?n!==void 0&&n!==t?t?this.count--:this.count++:t&&r.isDebug&&r.debug(this,e+" was not set before."):this.count++,i[e]=!!t,0===this.count&&a>0?this.callDelegateMethod(!0):0===a&&this.count>0&&this.callDelegateMethod(!1)}},removeField:{enumerable:!1,value:function(e){var t=this.table,n=t[e];void 0===n||n||this.count--,delete t[e]}},delegate:{enumerable:!1,value:null},callDelegateMethod:{value:function(e){var t;this.delegate&&"function"==typeof(t=this.delegate["gateDidBecome"+(e?"True":"False")])&&t.call(this.delegate,this)},enumerable:!1},value:{enumerable:!1,get:function(){return 0===this.count}},reset:{enumerable:!1,value:function(){this.table={},this.count=0}},toString:{value:function(){var e,t,n=this._fields,r="";for(e=0;t=n[e];e++)r+=t+"["+(this._value&n[t])+"], ";return r}}})}});