montageDefine("8827da1","test",{dependencies:["./bindings"],factory:function(e){function t(e,t){console.log(e===t?"* ":"x ",e,t)}var n=e("./bindings"),i=n.defineBindings({target:[1]},{source:{"<->":"target.rangeContent()"}});t(i.source[0],1);var r=i.source;t(r[0],1),i.source=[2],t(r[0],1),i.target.splice(0,3,3),t(r,i.source),t(r[0],1),t(i.source[0],3)}});