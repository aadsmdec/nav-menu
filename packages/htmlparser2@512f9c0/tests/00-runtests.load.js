montageDefine("512f9c0","tests/00-runtests",{dependencies:["fs","path","assert"],factory:function(e){var t=e("fs"),n=e("path"),i=e("assert"),r=0,a=0,s=!1;["./01-events.js","./02-stream.js","./03-feed.js"].map(e).forEach(function(o){console.log("\nStarting",o.dir,"\n----");var l=n.resolve(__dirname,o.dir);t.readdirSync(l).filter(RegExp.prototype.test,/^[^\._]/).map(function(e){return n.resolve(l,e)}).map(e).forEach(function(e){r++,console.log("Testing:",e.name);var t=!1;o.test(e,function(n,o){i.ifError(n),i.deepEqual(e.expected,o,"didn't get expected output"),t?(a++,!--r&&s&&console.log("Total tests:",a)):t=!0})})});var s=!0}});