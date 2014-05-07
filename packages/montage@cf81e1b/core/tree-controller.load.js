montageDefine("cf81e1b","core/tree-controller",{dependencies:["./core","collections/map","collections/weak-map","collections/shim-object"],factory:function(e,t){var n=e("./core").Montage;e("collections/map");var r=e("collections/weak-map"),i=e("collections/shim-object"),a=t.TreeControllerNode=n.specialize({expanded:{value:!0},content:{value:null},depth:{value:null},index:{value:null},isFinal:{value:null},parent:{value:null},children:{value:null},_controller:{value:null},_childrenContent:{value:null},_childrenEntries:{value:null},iterations:{value:null},junctions:{value:null},_junction:{value:null},_followingJunction:{value:null},_followingJunctions:{value:null},_entry:{value:null},constructor:{value:function(e,t,n,r,i){this.super(),this._controller=e,this.parent=t,this.content=n,this.depth=r,this._entry=i||[0,this],this.expanded=e.initiallyExpanded||!1,this.children=[],this.defineBinding("index",{"<-":"_entry.0"}),this.defineBinding("isFinal",{"<-":"index == parent.children.length - 1"}),this.defineBinding("_childrenContent",{"<-":"depth.defined() ? content.path(_controller.childrenPath ?? 'children') : []"}),this.defineBinding("_childrenEntries",{"<-":"_childrenContent.enumerate()"}),this.handleChildrenEntriesRangeChange(this._childrenEntries,[],0),this._childrenEntries.addRangeChangeListener(this,"childrenEntries"),this.defineBinding("iterations",{"<-":"[this].concat(expanded ? children.flatten{iterations} : [])"}),this.defineBinding("nodes",{"<-":"[this].concat(children.flatten{nodes})"}),this.defineBinding("_junction",{"<-":"isFinal ? 'final' : 'medial'"}),this.defineBinding("_followingJunction",{"<-":"isFinal ? 'after' : 'before'"}),this.defineBinding("_followingJunctions",{"<-":"(parent._followingJunctions ?? []).concat([_followingJunction])"}),this.defineBinding("junctions",{"<-":"(parent._followingJunctions ?? []).concat([_junction])"})}},findNodeByContent:{value:function(e,t){if(t=t||i.is,t(this.content,e))return this;for(var n,r=0;this.children.length>r&&!(n=this.children[r].findNodeByContent(e,t));r++);return n}},preOrderWalk:{value:function(e){e(this);for(var t=0;this.children.length>t;t++)this.children[t].preOrderWalk(e)}},postOrderWalk:{value:function(e){for(var t=0;this.children.length>t;t++)this.children[t].postOrderWalk(e);e(this)}},handleChildrenEntriesRangeChange:{value:function(e,t,n){this.children.swap(n,t.length,e.map(function(e){return new this.constructor(this._controller,this,e[1],this.depth+1,e)},this))}}});t.TreeController=n.specialize({content:{value:null},childrenPath:{value:null},initiallyExpanded:{value:null},allExpanded:{value:null},noneExpanded:{value:null},iterations:{value:null},root:{value:null},_roots:{value:null},constructor:{value:function(e,t,n){this.super(),this._roots=new r,this.addOwnPropertyChangeListener("content",this),this.defineBinding("iterations",{"<-":"root.iterations"}),this.defineBinding("nodes",{"<-":"root.nodes"}),this.defineBinding("allExpanded",{"<->":"nodes.every{expanded || children.length == 0}"}),this.defineBinding("noneExpanded",{"<->":"nodes.every{!expanded}"}),this.initiallyExpanded=n,this.childrenPath=t,this.content=e}},handleContentChange:{value:function(e){return e?(this._roots.has(e)||this._roots.set(e,new this.Node(this,null,e,0,null)),this.root=this._roots.get(e),void 0):(this.root=null,void 0)}},Node:{value:a},findNodeByContent:{value:function(e,t){return this.root?this.root.findNodeByContent(e,t):null}},preOrderWalk:{value:function(e){this.root&&this.root.preOrderWalk(e)}},postOrderWalk:{value:function(e){this.root&&this.root.postOrderWalk(e)}}},{blueprintModuleId:e("./core")._blueprintModuleIdDescriptor,blueprint:e("./core")._blueprintDescriptor})}});