montageDefine("512f9c0","lib/Tokenizer",{dependencies:[],factory:function(e,t,n){function i(e){return" "===e||"	"===e||"\r"===e||"\n"===e}function r(e,t){this._state=s,this._buffer="",this._sectionStart=0,this._index=0,this._options=e,this._special=0,this._cbs=t,this._running=!0}n.exports=r;var a=0,s=a++,o=a++,l=a++,c=a++,u=a++,h=a++,d=a++,p=a++,g=a++,f=a++,m=a++,v=a++,_=a++,y=a++,b=a++,L=a++,C=a++,w=a++,M=a++,x=a++,z=a++,E=a++,S=a++,T=a++,P=a++,O=a++,D=a++,A=a++,j=a++,k=a++,B=a++,I=a++,R=a++,N=a++,F=a++,q=a++,U=a++,V=a++,W=a++,Y=a++,H=a++,G=a++,X=a++,K=a++,Z=a++,J=a++,$=a++,Q=a++,et=a++;r.prototype.write=function(e){for(this._buffer+=e;this._index<this._buffer.length&&this._running;){var t=this._buffer.charAt(this._index);this._state===s?"<"===t&&(this._emitIfToken("text"),this._state=o,this._sectionStart=this._index):this._state===o?"/"===t?this._state=c:">"===t||this._special>0?this._state=s:i(t)||("!"===t?(this._state=y,this._sectionStart=this._index+1):"?"===t?(this._state=L,this._sectionStart=this._index+1):this._options&&this._options.xmlMode||"s"!==t&&"S"!==t?(this._state=l,this._sectionStart=this._index):(this._state=k,this._sectionStart=this._index)):this._state===l?"/"===t?(this._emitToken("opentagname"),this._cbs.onselfclosingtag(),this._state=h):">"===t?(this._emitToken("opentagname"),this._cbs.onopentagend(),this._state=s,this._sectionStart=this._index+1):i(t)&&(this._emitToken("opentagname"),this._state=d):this._state===c?i(t)||(">"===t?this._state=s:this._special>0?("s"===t||"S"===t)&&(this._state=B):(this._state=u,this._sectionStart=this._index)):this._state===u?">"===t?(this._emitToken("closetag"),this._state=s,this._sectionStart=this._index+1,this._special=0):i(t)&&(this._emitToken("closetag"),this._state=h,this._special=0):this._state===h?">"===t&&(this._state=s,this._sectionStart=this._index+1):this._state===d?">"===t?(this._state=s,this._cbs.onopentagend(),this._sectionStart=this._index+1):"/"===t?(this._cbs.onselfclosingtag(),this._state=h):i(t)||(this._state=p,this._sectionStart=this._index):this._state===p?"="===t?(this._emitIfToken("attribname"),this._state=f):i(t)?(this._emitIfToken("attribname"),this._state=g):("/"===t||">"===t)&&(this._emitIfToken("attribname"),this._state=d,this._index--):this._state===g?"="===t?this._state=f:"/"===t||">"===t?(this._state=d,this._index--):i(t)||(this._state=p,this._sectionStart=this._index):this._state===f?'"'===t?(this._state=m,this._sectionStart=this._index+1):"'"===t?(this._state=v,this._sectionStart=this._index+1):i(t)||(this._state=_,this._sectionStart=this._index):this._state===m?'"'===t&&(this._emitToken("attribvalue"),this._state=d):this._state===v?"'"===t&&(this._emitToken("attribvalue"),this._state=d):this._state===_?">"===t?(this._emitToken("attribvalue"),this._state=s,this._cbs.onopentagend(),this._sectionStart=this._index+1):i(t)&&(this._emitToken("attribvalue"),this._state=d):this._state===y?this._state="["===t?z:"-"===t?C:b:this._state===b?">"===t&&(this._emitToken("declaration"),this._state=s,this._sectionStart=this._index+1):this._state===L?">"===t&&(this._emitToken("processinginstruction"),this._state=s,this._sectionStart=this._index+1):this._state===C?"-"===t?(this._state=w,this._sectionStart=this._index+1):this._state=b:this._state===w?"-"===t&&(this._state=M):this._state===M?this._state="-"===t?x:w:this._state===x?">"===t?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=s,this._sectionStart=this._index+1):this._state=w:this._state===z?this._state="C"===t?E:b:this._state===E?this._state="D"===t?S:b:this._state===S?this._state="A"===t?T:b:this._state===T?this._state="T"===t?P:b:this._state===P?this._state="A"===t?O:b:this._state===O?"["===t?(this._state=D,this._sectionStart=this._index+1):this._state=b:this._state===D?"]"===t&&(this._state=A):this._state===A?this._state="]"===t?j:D:this._state===j?">"===t?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=s,this._sectionStart=this._index+1):this._state=D:this._state===k?"c"===t||"C"===t?this._state=I:"t"===t||"T"===t?this._state=G:(this._state=l,this._index--):this._state===B?this._state=1!==this._special||"c"!==t&&"C"!==t?2!==this._special||"t"!==t&&"T"!==t?s:J:U:this._state===I?"r"===t||"R"===t?this._state=R:(this._state=l,this._index--):this._state===R?"i"===t||"I"===t?this._state=N:(this._state=l,this._index--):this._state===N?"p"===t||"P"===t?this._state=F:(this._state=l,this._index--):this._state===F?"t"===t||"T"===t?this._state=q:(this._state=l,this._index--):this._state===q?(("/"===t||">"===t||i(t))&&(this._special=1),this._state=l,this._index--):this._state===U?this._state="r"===t||"R"===t?V:s:this._state===V?this._state="i"===t||"I"===t?W:s:this._state===W?this._state="p"===t||"P"===t?Y:s:this._state===Y?this._state="t"===t||"T"===t?H:s:this._state===H?">"===t||i(t)?(this._state=u,this._sectionStart=this._index-6,this._index--):this._state=s:this._state===G?"y"===t||"Y"===t?this._state=X:(this._state=l,this._index--):this._state===X?"l"===t||"L"===t?this._state=K:(this._state=l,this._index--):this._state===K?"e"===t||"E"===t?this._state=Z:(this._state=l,this._index--):this._state===Z?(("/"===t||">"===t||i(t))&&(this._special=2),this._state=l,this._index--):this._state===J?this._state="y"===t||"Y"===t?$:s:this._state===$?this._state="l"===t||"L"===t?Q:s:this._state===Q?this._state="e"===t||"E"===t?et:s:this._state===et?">"===t||i(t)?(this._state=u,this._sectionStart=this._index-5,this._index--):this._state=s:this._cbs.onerror(Error("unknown state"),this._state),this._index++}-1===this._sectionStart?(this._buffer="",this._index=0):(this._state===s?(this._emitIfToken("text"),this._buffer="",this._index=0):this._sectionStart===this._index?(this._buffer="",this._index=0):this._sectionStart>0&&(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart),this._sectionStart=0)},r.prototype.pause=function(){this._running=!1},r.prototype.resume=function(){this._running=!0},r.prototype.end=function(e){e&&this.write(e),""===this._buffer||-1===this._sectionStart||this._sectionStart===this._index||(this._state===D||this._state===A||this._state===j?this._emitIfToken("cdata"):this._state===w||this._state===M||this._state===x?this._emitIfToken("comment"):this._state===l?this._emitIfToken("opentagname"):this._state===u?this._emitIfToken("closetag"):this._emitIfToken("text")),this._cbs.onend()},r.prototype.reset=function(){r.call(this,this._options,this._cbs)},r.prototype._emitToken=function(e){this._cbs["on"+e](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1},r.prototype._emitIfToken=function(e){this._index>this._sectionStart&&this._cbs["on"+e](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1}}});