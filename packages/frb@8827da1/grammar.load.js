montageDefine("8827da1","grammar",{dependencies:[],factory:function(e,t,n){n.exports=function(){function e(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}function t(e,t,n,i,r){function a(e,t){function n(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0180-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1080-\uFFFF]/g,function(e){return"\\u"+t(e)})}var i,r;switch(e.length){case 0:i="end of input";break;case 1:i=e[0];break;default:i=e.slice(0,-1).join(", ")+" or "+e[e.length-1]}return r=t?'"'+n(t)+'"':"end of input","Expected "+i+" but "+r+" found."}this.expected=e,this.found=t,this.offset=n,this.line=i,this.column=r,this.name="SyntaxError",this.message=a(e,t)}function n(e){function n(t){function n(t,n,i){var r,a;for(r=n;i>r;r++)a=e.charAt(r),"\n"===a?(t.seenCR||t.line++,t.column=1,t.seenCR=!1):"\r"===a||"\u2028"===a||"\u2029"===a?(t.line++,t.column=1,t.seenCR=!0):(t.column++,t.seenCR=!1)}return Hr!==t&&(Hr>t&&(Hr=0,Yr={line:1,column:1,seenCR:!1}),n(Yr,Hr,t),Hr=t),Yr}function i(e){Gr>Wr||(Wr>Gr&&(Gr=Wr,Xr=[]),Xr.push(e))}function r(e){var t=0;for(e.sort();e.length>t;)e[t-1]===e[t]?e.splice(t,1):t++}function a(){var e,t;return Kr++,e=l(),Kr--,null===e&&(t=null,0===Kr&&i(Q)),e}function s(){var t,n,r,s,o,l,c;if(t=Wr,n=a(),null!==n){for(r=[],s=Wr,44===e.charCodeAt(Wr)?(o=tt,Wr++):(o=null,0===Kr&&i(nt)),null!==o?(l=F(),null!==l?(c=a(),null!==c?(o=[o,l,c],s=o):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et);null!==s;)r.push(s),s=Wr,44===e.charCodeAt(Wr)?(o=tt,Wr++):(o=null,0===Kr&&i(nt)),null!==o?(l=F(),null!==l?(c=a(),null!==c?(o=[o,l,c],s=o):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et);null!==r?(Ur=t,n=it(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function o(){var t,n,r,a;return t=Wr,40===e.charCodeAt(Wr)?(n=rt,Wr++):(n=null,0===Kr&&i(at)),null!==n?(r=F(),null!==r?(41===e.charCodeAt(Wr)?(a=st,Wr++):(a=null,0===Kr&&i(ot)),null!==a?(Ur=t,n=lt(),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,40===e.charCodeAt(Wr)?(n=rt,Wr++):(n=null,0===Kr&&i(at)),null!==n?(r=s(),null!==r?(41===e.charCodeAt(Wr)?(a=st,Wr++):(a=null,0===Kr&&i(ot)),null!==a?(Ur=t,n=ct(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)),t}function l(){var t,n,r,s,o,l,u,h,d,p,g;return t=Wr,n=c(),null!==n?(r=F(),null!==r?(s=Wr,63===e.charCodeAt(Wr)?(o=ht,Wr++):(o=null,0===Kr&&i(dt)),null!==o?(l=F(),null!==l?(u=a(),null!==u?(h=F(),null!==h?(58===e.charCodeAt(Wr)?(d=pt,Wr++):(d=null,0===Kr&&i(gt)),null!==d?(p=F(),null!==p?(g=a(),null!==g?(o=[o,l,u,h,d,p,g],s=o):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et),null===s&&(s=ut),null!==s?(Ur=t,n=mt(n,s),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),t}function c(){var t,n,r,a,s,o,l,c;if(t=Wr,n=u(),null!==n){for(r=[],a=Wr,s=F(),null!==s?(e.substr(Wr,2)===ft?(o=ft,Wr+=2):(o=null,0===Kr&&i(vt)),null!==o?(l=F(),null!==l?(c=u(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,s=F(),null!==s?(e.substr(Wr,2)===ft?(o=ft,Wr+=2):(o=null,0===Kr&&i(vt)),null!==o?(l=F(),null!==l?(c=u(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function u(){var t,n,r,a,s,o,l,c;if(t=Wr,n=h(),null!==n){for(r=[],a=Wr,s=F(),null!==s?(e.substr(Wr,2)===yt?(o=yt,Wr+=2):(o=null,0===Kr&&i(bt)),null!==o?(l=F(),null!==l?(c=h(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,s=F(),null!==s?(e.substr(Wr,2)===yt?(o=yt,Wr+=2):(o=null,0===Kr&&i(bt)),null!==o?(l=F(),null!==l?(c=h(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function h(){var t,n,r,a,s,o,l,c,u;return t=Wr,n=d(),null!==n?(r=Wr,a=F(),null!==a?(s=Wr,e.substr(Wr,3)===Ct?(o=Ct,Wr+=3):(o=null,0===Kr&&i(Lt)),null===o&&(e.substr(Wr,2)===wt?(o=wt,Wr+=2):(o=null,0===Kr&&i(xt)),null===o&&(e.substr(Wr,2)===Mt?(o=Mt,Wr+=2):(o=null,0===Kr&&i(Et)),null===o&&(o=Wr,60===e.charCodeAt(Wr)?(l=St,Wr++):(l=null,0===Kr&&i(zt)),null!==l?(c=Wr,Kr++,45===e.charCodeAt(Wr)?(u=Tt,Wr++):(u=null,0===Kr&&i(Pt)),Kr--,null===u?c=ut:(Wr=c,c=et),null!==c?(l=[l,c],o=l):(Wr=o,o=et)):(Wr=o,o=et),null===o&&(62===e.charCodeAt(Wr)?(o=Ot,Wr++):(o=null,0===Kr&&i(Dt)),null===o&&(e.substr(Wr,2)===At?(o=At,Wr+=2):(o=null,0===Kr&&i(kt)),null===o&&(e.substr(Wr,2)===Bt?(o=Bt,Wr+=2):(o=null,0===Kr&&i(jt)))))))),null!==o&&(o=e.substring(s,Wr)),s=o,null!==s?(o=F(),null!==o?(l=d(),null!==l?(a=[a,s,o,l],r=a):(Wr=r,r=et)):(Wr=r,r=et)):(Wr=r,r=et)):(Wr=r,r=et),null===r&&(r=ut),null!==r?(Ur=t,n=It(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),t}function d(){var t,n,r,a,s,o,l,c;if(t=Wr,n=p(),null!==n){for(r=[],a=Wr,s=F(),null!==s?(o=Wr,43===e.charCodeAt(Wr)?(l=Rt,Wr++):(l=null,0===Kr&&i(Nt)),null===l&&(45===e.charCodeAt(Wr)?(l=Tt,Wr++):(l=null,0===Kr&&i(Pt))),null!==l&&(l=e.substring(o,Wr)),o=l,null!==o?(l=F(),null!==l?(c=p(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,s=F(),null!==s?(o=Wr,43===e.charCodeAt(Wr)?(l=Rt,Wr++):(l=null,0===Kr&&i(Nt)),null===l&&(45===e.charCodeAt(Wr)?(l=Tt,Wr++):(l=null,0===Kr&&i(Pt))),null!==l&&(l=e.substring(o,Wr)),o=l,null!==o?(l=F(),null!==l?(c=p(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function p(){var t,n,r,a,s,o,l,c;if(t=Wr,n=g(),null!==n){for(r=[],a=Wr,s=F(),null!==s?(o=Wr,42===e.charCodeAt(Wr)?(l=Ft,Wr++):(l=null,0===Kr&&i(qt)),null===l&&(47===e.charCodeAt(Wr)?(l=Vt,Wr++):(l=null,0===Kr&&i(Wt)),null===l&&(37===e.charCodeAt(Wr)?(l=Ut,Wr++):(l=null,0===Kr&&i(Ht)),null===l&&(e.substr(Wr,3)===Yt?(l=Yt,Wr+=3):(l=null,0===Kr&&i(Gt))))),null!==l&&(l=e.substring(o,Wr)),o=l,null!==o?(l=F(),null!==l?(c=g(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,s=F(),null!==s?(o=Wr,42===e.charCodeAt(Wr)?(l=Ft,Wr++):(l=null,0===Kr&&i(qt)),null===l&&(47===e.charCodeAt(Wr)?(l=Vt,Wr++):(l=null,0===Kr&&i(Wt)),null===l&&(37===e.charCodeAt(Wr)?(l=Ut,Wr++):(l=null,0===Kr&&i(Ht)),null===l&&(e.substr(Wr,3)===Yt?(l=Yt,Wr+=3):(l=null,0===Kr&&i(Gt))))),null!==l&&(l=e.substring(o,Wr)),o=l,null!==o?(l=F(),null!==l?(c=g(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function g(){var t,n,r,a,s,o,l,c;if(t=Wr,n=m(),null!==n){for(r=[],a=Wr,s=F(),null!==s?(o=Wr,e.substr(Wr,2)===Xt?(l=Xt,Wr+=2):(l=null,0===Kr&&i(Kt)),null===l&&(e.substr(Wr,2)===Zt?(l=Zt,Wr+=2):(l=null,0===Kr&&i(Jt)),null===l&&(e.substr(Wr,2)===$t?(l=$t,Wr+=2):(l=null,0===Kr&&i(Qt)))),null!==l&&(l=e.substring(o,Wr)),o=l,null!==o?(l=F(),null!==l?(c=m(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,s=F(),null!==s?(o=Wr,e.substr(Wr,2)===Xt?(l=Xt,Wr+=2):(l=null,0===Kr&&i(Kt)),null===l&&(e.substr(Wr,2)===Zt?(l=Zt,Wr+=2):(l=null,0===Kr&&i(Jt)),null===l&&(e.substr(Wr,2)===$t?(l=$t,Wr+=2):(l=null,0===Kr&&i(Qt)))),null!==l&&(l=e.substring(o,Wr)),o=l,null!==o?(l=F(),null!==l?(c=m(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function m(){var t,n,r,a,s,o,l,c;if(t=Wr,n=f(),null!==n){for(r=[],a=Wr,s=F(),null!==s?(e.substr(Wr,2)===en?(o=en,Wr+=2):(o=null,0===Kr&&i(tn)),null!==o?(l=F(),null!==l?(c=f(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,s=F(),null!==s?(e.substr(Wr,2)===en?(o=en,Wr+=2):(o=null,0===Kr&&i(tn)),null!==o?(l=F(),null!==l?(c=f(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function f(){var t,n,r;return t=Wr,n=Wr,33===e.charCodeAt(Wr)?(r=nn,Wr++):(r=null,0===Kr&&i(rn)),null===r&&(43===e.charCodeAt(Wr)?(r=Rt,Wr++):(r=null,0===Kr&&i(Nt)),null===r&&(45===e.charCodeAt(Wr)?(r=Tt,Wr++):(r=null,0===Kr&&i(Pt)))),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n?(r=f(),null!==r?(Ur=t,n=an(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=v()),t}function v(){var e,t,n,i;if(e=Wr,t=b(),null!==t){for(n=[],i=_();null!==i;)n.push(i),i=_();null!==n?(Ur=e,t=sn(t,n),null===t?(Wr=e,e=t):e=t):(Wr=e,e=et)}else Wr=e,e=et;return e}function _(){var t,n,r,s;return t=Wr,46===e.charCodeAt(Wr)?(n=on,Wr++):(n=null,0===Kr&&i(ln)),null!==n?(r=y(),null!==r?(Ur=t,n=cn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,91===e.charCodeAt(Wr)?(n=un,Wr++):(n=null,0===Kr&&i(hn)),null!==n?(r=a(),null!==r?(93===e.charCodeAt(Wr)?(s=dn,Wr++):(s=null,0===Kr&&i(pn)),null!==s?(Ur=t,n=gn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)),t}function y(){var t,n,r,s,l;return t=Wr,n=Wr,r=C(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n?(123===e.charCodeAt(Wr)?(r=mn,Wr++):(r=null,0===Kr&&i(fn)),null!==r?(s=a(),null!==s?(125===e.charCodeAt(Wr)?(l=vn,Wr++):(l=null,0===Kr&&i(_n)),null!==l?(Ur=t,n=yn(n,s),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,n=Wr,r=C(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n?(r=o(),null!==r?(Ur=t,n=bn(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,n=j(),null!==n&&(Ur=t,n=Cn(n)),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,n=Wr,r=C(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n&&(Ur=t,n=Ln(n)),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,n=S(),null!==n&&(Ur=t,n=wn(n)),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,n=z(),null!==n&&(Ur=t,n=wn(n)),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,40===e.charCodeAt(Wr)?(n=rt,Wr++):(n=null,0===Kr&&i(at)),null!==n?(r=a(),null!==r?(41===e.charCodeAt(Wr)?(s=st,Wr++):(s=null,0===Kr&&i(ot)),null!==s?(Ur=t,n=wn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et))))))),t}function b(){var t,n,r,s;return t=S(),null===t&&(t=z(),null===t&&(t=L(),null===t&&(t=O(),null===t&&(t=Wr,e.substr(Wr,4)===xn?(n=xn,Wr+=4):(n=null,0===Kr&&i(Mn)),null!==n&&(Ur=t,n=En()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,4)===Sn?(n=Sn,Wr+=4):(n=null,0===Kr&&i(zn)),null!==n&&(Ur=t,n=Tn()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,5)===Pn?(n=Pn,Wr+=5):(n=null,0===Kr&&i(On)),null!==n&&(Ur=t,n=Dn()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,4)===An?(n=An,Wr+=4):(n=null,0===Kr&&i(kn)),null!==n&&(Ur=t,n=Bn()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,64===e.charCodeAt(Wr)?(n=jn,Wr++):(n=null,0===Kr&&i(In)),null!==n?(r=Wr,s=Y(),null!==s&&(s=e.substring(r,Wr)),r=s,null!==r?(Ur=t,n=Rn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,36===e.charCodeAt(Wr)?(n=Nn,Wr++):(n=null,0===Kr&&i(Fn)),null!==n?(r=Wr,s=C(),null!==s&&(s=e.substring(r,Wr)),r=s,null!==r?(Ur=t,n=qn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,36===e.charCodeAt(Wr)?(n=Nn,Wr++):(n=null,0===Kr&&i(Fn)),null!==n&&(Ur=t,n=Vn()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,35===e.charCodeAt(Wr)?(n=Wn,Wr++):(n=null,0===Kr&&i(Un)),null!==n?(r=Wr,s=C(),null!==s&&(s=e.substring(r,Wr)),r=s,null!==r?(Ur=t,n=Hn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,38===e.charCodeAt(Wr)?(n=Yn,Wr++):(n=null,0===Kr&&i(Gn)),null!==n?(r=Wr,s=C(),null!==s&&(s=e.substring(r,Wr)),r=s,null!==r?(s=o(),null!==s?(Ur=t,n=Xn(r,s),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,94===e.charCodeAt(Wr)?(n=Kn,Wr++):(n=null,0===Kr&&i(Zn)),null!==n?(r=b(),null!==r?(Ur=t,n=Jn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,40===e.charCodeAt(Wr)?(n=rt,Wr++):(n=null,0===Kr&&i(at)),null!==n?(r=a(),null!==r?(41===e.charCodeAt(Wr)?(s=st,Wr++):(s=null,0===Kr&&i(ot)),null!==s?(Ur=t,n=$n(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,n=y(),null!==n&&(Ur=t,n=Qn(n)),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,n=[],null!==n&&(Ur=t,n=ei()),null===n?(Wr=t,t=n):t=n)))))))))))))))),t}function C(){var t,n;if(Kr++,t=[],ni.test(e.charAt(Wr))?(n=e.charAt(Wr),Wr++):(n=null,0===Kr&&i(ii)),null!==n)for(;null!==n;)t.push(n),ni.test(e.charAt(Wr))?(n=e.charAt(Wr),Wr++):(n=null,0===Kr&&i(ii));else t=et;return Kr--,null===t&&(n=null,0===Kr&&i(ti)),t}function L(){var t,n,r,a;if(Kr++,t=Wr,39===e.charCodeAt(Wr)?(n=ai,Wr++):(n=null,0===Kr&&i(si)),null!==n){for(r=[],a=w();null!==a;)r.push(a),a=w();null!==r?(39===e.charCodeAt(Wr)?(a=ai,Wr++):(a=null,0===Kr&&i(si)),null!==a?(Ur=t,n=oi(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)}else Wr=t,t=et;if(null===t)if(t=Wr,34===e.charCodeAt(Wr)?(n=li,Wr++):(n=null,0===Kr&&i(ci)),null!==n){for(r=[],a=x();null!==a;)r.push(a),a=x();null!==r?(34===e.charCodeAt(Wr)?(a=li,Wr++):(a=null,0===Kr&&i(ci)),null!==a?(Ur=t,n=oi(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)}else Wr=t,t=et;return Kr--,null===t&&(n=null,0===Kr&&i(ri)),t}function w(){var t,n;return ui.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(hi)),null===t&&(t=Wr,e.substr(Wr,2)===di?(n=di,Wr+=2):(n=null,0===Kr&&i(pi)),null!==n&&(Ur=t,n=gi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=M())),t}function x(){var t,n;return mi.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(fi)),null===t&&(t=Wr,e.substr(Wr,2)===vi?(n=vi,Wr+=2):(n=null,0===Kr&&i(_i)),null!==n&&(Ur=t,n=yi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=M())),t}function M(){var t,n,r,a,s,o,l,c;return t=Wr,e.substr(Wr,2)===bi?(n=bi,Wr+=2):(n=null,0===Kr&&i(Ci)),null!==n&&(Ur=t,n=Li()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===wi?(n=wi,Wr+=2):(n=null,0===Kr&&i(xi)),null!==n&&(Ur=t,n=Mi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Ei?(n=Ei,Wr+=2):(n=null,0===Kr&&i(Si)),null!==n&&(Ur=t,n=zi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Ti?(n=Ti,Wr+=2):(n=null,0===Kr&&i(Pi)),null!==n&&(Ur=t,n=Oi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Di?(n=Di,Wr+=2):(n=null,0===Kr&&i(Ai)),null!==n&&(Ur=t,n=ki()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Bi?(n=Bi,Wr+=2):(n=null,0===Kr&&i(ji)),null!==n&&(Ur=t,n=Ii()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Ri?(n=Ri,Wr+=2):(n=null,0===Kr&&i(Ni)),null!==n&&(Ur=t,n=Fi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===qi?(n=qi,Wr+=2):(n=null,0===Kr&&i(Vi)),null!==n&&(Ur=t,n=Wi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Ui?(n=Ui,Wr+=2):(n=null,0===Kr&&i(Hi)),null!==n?(r=Wr,a=Wr,s=E(),null!==s?(o=E(),null!==o?(l=E(),null!==l?(c=E(),null!==c?(s=[s,o,l,c],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et),null!==a&&(a=e.substring(r,Wr)),r=a,null!==r?(Ur=t,n=Yi(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et))))))))),t}function E(){var t;return Gi.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(Xi)),t}function S(){var t,n,r,a;return t=Wr,91===e.charCodeAt(Wr)?(n=un,Wr++):(n=null,0===Kr&&i(hn)),null!==n?(r=F(),null!==r?(93===e.charCodeAt(Wr)?(a=dn,Wr++):(a=null,0===Kr&&i(pn)),null!==a?(Ur=t,n=Ki(),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,91===e.charCodeAt(Wr)?(n=un,Wr++):(n=null,0===Kr&&i(hn)),null!==n?(r=s(),null!==r?(93===e.charCodeAt(Wr)?(a=dn,Wr++):(a=null,0===Kr&&i(pn)),null!==a?(Ur=t,n=Zi(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)),t}function z(){var t,n,r,a,s,o;return t=Wr,123===e.charCodeAt(Wr)?(n=mn,Wr++):(n=null,0===Kr&&i(fn)),null!==n?(r=F(),null!==r?(125===e.charCodeAt(Wr)?(a=vn,Wr++):(a=null,0===Kr&&i(_n)),null!==a?(s=F(),null!==s?(Ur=t,n=Ji(),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,123===e.charCodeAt(Wr)?(n=mn,Wr++):(n=null,0===Kr&&i(fn)),null!==n?(r=F(),null!==r?(a=T(),null!==a?(125===e.charCodeAt(Wr)?(s=vn,Wr++):(s=null,0===Kr&&i(_n)),null!==s?(o=F(),null!==o?(Ur=t,n=$i(a),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)),t}function T(){var t,n,r,a,s,o,l;if(t=Wr,n=P(),null!==n){for(r=[],a=Wr,44===e.charCodeAt(Wr)?(s=tt,Wr++):(s=null,0===Kr&&i(nt)),null!==s?(o=F(),null!==o?(l=P(),null!==l?(s=[s,o,l],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,44===e.charCodeAt(Wr)?(s=tt,Wr++):(s=null,0===Kr&&i(nt)),null!==s?(o=F(),null!==o?(l=P(),null!==l?(s=[s,o,l],a=s):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=Qi(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function P(){var t,n,r,s,o;return t=Wr,n=Wr,r=C(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n?(58===e.charCodeAt(Wr)?(r=pt,Wr++):(r=null,0===Kr&&i(gt)),null!==r?(s=F(),null!==s?(o=a(),null!==o?(Ur=t,n=er(n,o),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),t}function O(){var t,n,r;return Kr++,t=Wr,n=Wr,r=D(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n&&(Ur=t,n=nr(n)),null===n?(Wr=t,t=n):t=n,Kr--,null===t&&(n=null,0===Kr&&i(tr)),t}function D(){var e,t,n,i;return e=Wr,t=A(),null!==t?(n=k(),null!==n?(i=B(),null!==i?(t=[t,n,i],e=t):(Wr=e,e=et)):(Wr=e,e=et)):(Wr=e,e=et),null===e&&(e=Wr,t=A(),null!==t?(n=k(),null!==n?(t=[t,n],e=t):(Wr=e,e=et)):(Wr=e,e=et),null===e&&(e=Wr,t=A(),null!==t?(n=B(),null!==n?(t=[t,n],e=t):(Wr=e,e=et)):(Wr=e,e=et),null===e&&(e=A()))),e}function A(){var t,n,r,a;return t=Wr,n=N(),null!==n?(r=j(),null!==r?(n=[n,r],t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=R(),null===t&&(t=Wr,45===e.charCodeAt(Wr)?(n=Tt,Wr++):(n=null,0===Kr&&i(Pt)),null!==n?(r=N(),null!==r?(a=j(),null!==a?(n=[n,r,a],t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,45===e.charCodeAt(Wr)?(n=Tt,Wr++):(n=null,0===Kr&&i(Pt)),null!==n?(r=R(),null!==r?(n=[n,r],t=n):(Wr=t,t=et)):(Wr=t,t=et)))),t}function k(){var t,n,r;return t=Wr,46===e.charCodeAt(Wr)?(n=on,Wr++):(n=null,0===Kr&&i(ln)),null!==n?(r=j(),null!==r?(n=[n,r],t=n):(Wr=t,t=et)):(Wr=t,t=et),t}function B(){var e,t,n;return e=Wr,t=I(),null!==t?(n=j(),null!==n?(t=[t,n],e=t):(Wr=e,e=et)):(Wr=e,e=et),e}function j(){var e,t;if(e=[],t=R(),null!==t)for(;null!==t;)e.push(t),t=R();else e=et;return e}function I(){var t,n,r;return t=Wr,ir.test(e.charAt(Wr))?(n=e.charAt(Wr),Wr++):(n=null,0===Kr&&i(rr)),null!==n?(ar.test(e.charAt(Wr))?(r=e.charAt(Wr),Wr++):(r=null,0===Kr&&i(sr)),null===r&&(r=ut),null!==r?(n=[n,r],t=n):(Wr=t,t=et)):(Wr=t,t=et),t}function R(){var t;return or.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(lr)),t}function N(){var t;return cr.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(ur)),t}function F(){var e,t;for(e=[],t=q(),null===t&&(t=V());null!==t;)e.push(t),t=q(),null===t&&(t=V());return e}function q(){var t,n;return Kr++,dr.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(pr)),null===t&&(gr.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(mr))),Kr--,null===t&&(n=null,0===Kr&&i(hr)),t}function V(){var t,n;return Kr++,vr.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(_r)),Kr--,null===t&&(n=null,0===Kr&&i(fr)),t}function W(){var e,t,n,i;if(e=Wr,t=F(),null!==t){for(n=[],i=U();null!==i;)n.push(i),i=U();null!==n?(i=F(),null!==i?(Ur=e,t=yr(n),null===t?(Wr=e,e=t):e=t):(Wr=e,e=et)):(Wr=e,e=et)}else Wr=e,e=et;return e}function U(){var t,n,r,a,s,o,l,c,u,h;return t=Wr,64===e.charCodeAt(Wr)?(n=jn,Wr++):(n=null,0===Kr&&i(In)),null!==n?(r=Wr,a=Y(),null!==a&&(a=e.substring(r,Wr)),r=a,null!==r?(a=F(),null!==a?(s=H(),null===s&&(s=ut),null!==s?(123===e.charCodeAt(Wr)?(o=mn,Wr++):(o=null,0===Kr&&i(fn)),null!==o?(l=F(),null!==l?(c=G(),null!==c?(125===e.charCodeAt(Wr)?(u=vn,Wr++):(u=null,0===Kr&&i(_n)),null!==u?(h=F(),null!==h?(Ur=t,n=br(r,s,c),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),t}function H(){var t,n,r,s,o,l,c,u;return t=Wr,60===e.charCodeAt(Wr)?(n=St,Wr++):(n=null,0===Kr&&i(zt)),null===n&&(58===e.charCodeAt(Wr)?(n=pt,Wr++):(n=null,0===Kr&&i(gt))),null!==n?(r=F(),null!==r?(s=L(),null===s&&(s=ut),null!==s?(o=F(),null!==o?(l=Wr,c=Wr,Kr++,123===e.charCodeAt(Wr)?(u=mn,Wr++):(u=null,0===Kr&&i(fn)),Kr--,null===u?c=ut:(Wr=c,c=et),null!==c?(u=a(),null!==u?(c=[c,u],l=c):(Wr=l,l=et)):(Wr=l,l=et),null===l&&(l=ut),null!==l?(c=F(),null!==c?(Ur=t,n=Cr(n,s,l),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,n=F(),null!==n&&(Ur=t,n=Lr()),null===n?(Wr=t,t=n):t=n),t}function Y(){var t,n,r,a,s,o,l;if(t=Wr,n=[],wr.test(e.charAt(Wr))?(r=e.charAt(Wr),Wr++):(r=null,0===Kr&&i(xr)),null!==r)for(;null!==r;)n.push(r),wr.test(e.charAt(Wr))?(r=e.charAt(Wr),Wr++):(r=null,0===Kr&&i(xr));else n=et;if(null!==n){if(r=[],a=Wr,58===e.charCodeAt(Wr)?(s=pt,Wr++):(s=null,0===Kr&&i(gt)),null!==s){if(o=[],wr.test(e.charAt(Wr))?(l=e.charAt(Wr),Wr++):(l=null,0===Kr&&i(xr)),null!==l)for(;null!==l;)o.push(l),wr.test(e.charAt(Wr))?(l=e.charAt(Wr),Wr++):(l=null,0===Kr&&i(xr));else o=et;null!==o?(s=[s,o],a=s):(Wr=a,a=et)}else Wr=a,a=et;for(;null!==a;)if(r.push(a),a=Wr,58===e.charCodeAt(Wr)?(s=pt,Wr++):(s=null,0===Kr&&i(gt)),null!==s){if(o=[],wr.test(e.charAt(Wr))?(l=e.charAt(Wr),Wr++):(l=null,0===Kr&&i(xr)),null!==l)for(;null!==l;)o.push(l),wr.test(e.charAt(Wr))?(l=e.charAt(Wr),Wr++):(l=null,0===Kr&&i(xr));else o=et;null!==o?(s=[s,o],a=s):(Wr=a,a=et)}else Wr=a,a=et;null!==r?(n=[n,r],t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function G(){var t,n,r,a,s,o,l,c,u;if(t=Wr,n=X(),null!==n)if(r=F(),null!==r){for(a=[],s=Wr,59===e.charCodeAt(Wr)?(o=Mr,Wr++):(o=null,0===Kr&&i(Er)),null!==o?(l=F(),null!==l?(c=X(),null!==c?(u=F(),null!==u?(o=[o,l,c,u],s=o):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et);null!==s;)a.push(s),s=Wr,59===e.charCodeAt(Wr)?(o=Mr,Wr++):(o=null,0===Kr&&i(Er)),null!==o?(l=F(),null!==l?(c=X(),null!==c?(u=F(),null!==u?(o=[o,l,c,u],s=o):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et)):(Wr=s,s=et);null!==a?(59===e.charCodeAt(Wr)?(s=Mr,Wr++):(s=null,0===Kr&&i(Er)),null===s&&(s=ut),null!==s?(o=F(),null!==o?(Ur=t,n=it(n,a),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)}else Wr=t,t=et;else Wr=t,t=et;return null===t&&(t=Wr,n=X(),null!==n?(r=F(),null!==r?(59===e.charCodeAt(Wr)?(a=Mr,Wr++):(a=null,0===Kr&&i(Er)),null===a&&(a=ut),null!==a?(s=F(),null!==s?(Ur=t,n=Sr(n),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,n=F(),null!==n&&(Ur=t,n=lt()),null===n?(Wr=t,t=n):t=n)),t}function X(){var t,n,r,s,o,l,c,u,h,d,p,g,m,f,v,_,y;if(t=Wr,e.substr(Wr,2)===zr?(n=zr,Wr+=2):(n=null,0===Kr&&i(Tr)),null===n&&(e.substr(Wr,6)===Pr?(n=Pr,Wr+=6):(n=null,0===Kr&&i(Or))),null!==n?(32===e.charCodeAt(Wr)?(r=Dr,Wr++):(r=null,0===Kr&&i(Ar)),null!==r?(s=F(),null!==s?(o=Wr,l=C(),null!==l&&(l=e.substring(o,Wr)),o=l,null!==o?(l=F(),null!==l?(e.substr(Wr,2)===kr?(c=kr,Wr+=2):(c=null,0===Kr&&i(Br)),null!==c?(u=F(),null!==u?(h=a(),null!==h?(d=F(),null!==d?(Ur=t,n=jr(n,o,h),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t){if(t=Wr,n=a(),null!==n)if(r=F(),null!==r)if(58===e.charCodeAt(Wr)?(s=pt,Wr++):(s=null,0===Kr&&i(gt)),null===s&&(e.substr(Wr,3)===Ir?(s=Ir,Wr+=3):(s=null,0===Kr&&i(Rr)),null===s&&(e.substr(Wr,2)===Nr?(s=Nr,Wr+=2):(s=null,0===Kr&&i(Fr)))),null!==s)if(o=F(),null!==o)if(l=a(),null!==l)if(c=F(),null!==c){for(u=[],h=Wr,44===e.charCodeAt(Wr)?(d=tt,Wr++):(d=null,0===Kr&&i(nt)),null!==d?(p=F(),null!==p?(g=Wr,m=C(),null!==m&&(m=e.substring(g,Wr)),g=m,null!==g?(m=F(),null!==m?(58===e.charCodeAt(Wr)?(f=pt,Wr++):(f=null,0===Kr&&i(gt)),null!==f?(v=F(),null!==v?(_=a(),null!==_?(y=F(),null!==y?(d=[d,p,g,m,f,v,_,y],h=d):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et);null!==h;)u.push(h),h=Wr,44===e.charCodeAt(Wr)?(d=tt,Wr++):(d=null,0===Kr&&i(nt)),null!==d?(p=F(),null!==p?(g=Wr,m=C(),null!==m&&(m=e.substring(g,Wr)),g=m,null!==g?(m=F(),null!==m?(58===e.charCodeAt(Wr)?(f=pt,Wr++):(f=null,0===Kr&&i(gt)),null!==f?(v=F(),null!==v?(_=a(),null!==_?(y=F(),null!==y?(d=[d,p,g,m,f,v,_,y],h=d):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et);null!==u?(Ur=t,n=qr(n,s,l,u),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;else Wr=t,t=et;else Wr=t,t=et;else Wr=t,t=et;else Wr=t,t=et;else Wr=t,t=et;null===t&&(t=Wr,n=Wr,r=C(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n?(r=F(),null!==r?(s=a(),null!==s?(o=F(),null!==o?(Ur=t,n=Vr(n,s),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et))}return t}var K,Z=arguments.length>1?arguments[1]:{},J={expression:a,sheet:W},$=a,Q="expression",et=null,tt=",",nt='","',it=function(e,t){for(var n=[e],i=0;t.length>i;i++)n.push(t[i][2]);return n},rt="(",at='"("',st=")",ot='")"',lt=function(){return[]},ct=function(e){return e},ut="",ht="?",dt='"?"',pt=":",gt='":"',mt=function(e,t){if(t){var n=t[2],i=t[6];return{type:"if",args:[e,n,i]}}return e},ft="||",vt='"||"',_t=function(e,t){for(var n=0;t.length>n;n++)e={type:Zr[t[n][1]],args:[e,t[n][3]]};return e},yt="&&",bt='"&&"',Ct="<=>",Lt='"<=>"',wt="<=",xt='"<="',Mt=">=",Et='">="',St="<",zt='"<"',Tt="-",Pt='"-"',Ot=">",Dt='">"',At="==",kt='"=="',Bt="!=",jt='"!="',It=function(e,t){if(t){var n=t[1],i=t[3];return"!="===n?{type:"not",args:[{type:"equals",args:[e,i]}]}:{type:Zr[n],args:[e,i]}}return e},Rt="+",Nt='"+"',Ft="*",qt='"*"',Vt="/",Wt='"/"',Ut="%",Ht='"%"',Yt="rem",Gt='"rem"',Xt="**",Kt='"**"',Zt="//",Jt='"//"',$t="%%",Qt='"%%"',en="??",tn='"??"',nn="!",rn='"!"',an=function(e,t){return{type:Jr[e],args:[t]}},sn=function(e,t){for(var n=0;t.length>n;n++)e=t[n](e);return e},on=".",ln='"."',cn=function(e){return e},un="[",hn='"["',dn="]",pn='"]"',gn=function(e){return function(t){return{type:"property",args:[t,e]}}},mn="{",fn='"{"',vn="}",_n='"}"',yn=function(e,t){return $r[e]?function(n){return{type:$r[e],args:[n,t]}}:"value"===t.type?function(t){return{type:e,args:[t]}}:function(n){return{type:e,args:[{type:"mapBlock",args:[n,t]}]}}},bn=function(e,t){return function(n){return{type:e,args:[n].concat(t)}}},Cn=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:+e.join("")}]}}},Ln=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:e}]}}},wn=function(e){return function(t){return{type:"with",args:[t,e]}}},xn="this",Mn='"this"',En=function(){return{type:"value"}},Sn="true",zn='"true"',Tn=function(){return{type:"literal",value:!0}},Pn="false",On='"false"',Dn=function(){return{type:"literal",value:!1}},An="null",kn='"null"',Bn=function(){return{type:"literal",value:null}},jn="@",In='"@"',Rn=function(e){return{type:"component",label:e}},Nn="$",Fn='"$"',qn=function(e){return{type:"property",args:[{type:"parameters"},{type:"literal",value:e}]}},Vn=function(){return{type:"parameters"}},Wn="#",Un='"#"',Hn=function(e){return{type:"element",id:e}},Yn="&",Gn='"&"',Xn=function(e,t){return{type:e,args:t,inline:!0}},Kn="^",Zn='"^"',Jn=function(e){return{type:"parent",args:[e]}},$n=function(e){return e},Qn=function(e){return e({type:"value"})},ei=function(){return{type:"value"}},ti="word",ni=/^[a-zA-Z_0-9\-]/,ii="[a-zA-Z_0-9\\-]",ri="string",ai="'",si='"\'"',oi=function(e){return{type:"literal",value:e.join("")}},li='"',ci='"\\""',ui=/^[^'\\\0-\x1F]/,hi="[^'\\\\\\0-\\x1F]",di="\\'",pi='"\\\\\'"',gi=function(){return"'"},mi=/^[^"\\\0-\x1F]/,fi='[^"\\\\\\0-\\x1F]',vi='\\"',_i='"\\\\\\""',yi=function(){return'"'},bi="\\\\",Ci='"\\\\\\\\"',Li=function(){return"\\"},wi="\\/",xi='"\\\\/"',Mi=function(){return"/"},Ei="\\b",Si='"\\\\b"',zi=function(){return"\b"},Ti="\\f",Pi='"\\\\f"',Oi=function(){return"\f"},Di="\\n",Ai='"\\\\n"',ki=function(){return"\n"},Bi="\\r",ji='"\\\\r"',Ii=function(){return"\r"},Ri="\\t",Ni='"\\\\t"',Fi=function(){return"	"},qi="\\0",Vi='"\\\\0"',Wi=function(){return"\0"},Ui="\\u",Hi='"\\\\u"',Yi=function(e){return String.fromCharCode(parseInt(e,16))},Gi=/^[0-9a-fA-F]/,Xi="[0-9a-fA-F]",Ki=function(){return{type:"tuple",args:[]}},Zi=function(e){return{type:"tuple",args:e}},Ji=function(){return{type:"record",args:[]}},$i=function(e){return{type:"record",args:e}},Qi=function(e,t){var n={};n[e[0]]=e[1];for(var i=0;t.length>i;i++)n[t[i][2][0]]=t[i][2][1];return n},er=function(e,t){return[e,t]},tr="number",nr=function(e){return{type:"literal",value:+e}},ir=/^[eE]/,rr="[eE]",ar=/^[+\-]/,sr="[+\\-]",or=/^[0-9]/,lr="[0-9]",cr=/^[1-9]/,ur="[1-9]",hr="whitespace",dr=/^[\t\x0B\f \xA0\uFEFF]/,pr="[\\t\\x0B\\f \\xA0\\uFEFF]",gr=/^[ \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000]/,mr="[ \\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000]",fr="line terminator",vr=/^[\n\r\u2028\u2029]/,_r="[\\n\\r\\u2028\\u2029]",yr=function(e){return{type:"sheet",blocks:e}},br=function(e,t,n){return{type:"block",connection:t.connection,module:t.module,exports:t.exports,label:e,statements:n}},Cr=function(e,t,n){return{connection:{"<":"prototype",":":"object"}[e],module:t&&t.value,exports:""!==n?n[1]:void 0}},Lr=function(){return{}},wr=/^[a-zA-Z_0-9]/,xr="[a-zA-Z_0-9]",Mr=";",Er='";"',Sr=function(e){return[e]},zr="on",Tr='"on"',Pr="before",Or='"before"',Dr=" ",Ar='" "',kr="->",Br='"->"',jr=function(e,t,n){return{type:"event",when:e,event:t,listener:n}},Ir="<->",Rr='"<->"',Nr="<-",Fr='"<-"',qr=function(e,t,n,i){var r={type:Qr[t],args:[e,n]};if(i.length){for(var a={},s=0;i.length>s;s++)a[i[s][2]]=i[s][6];r.descriptor=a}return r},Vr=function(e,t){return{type:"unit",name:e,value:t}},Wr=0,Ur=0,Hr=0,Yr={line:1,column:1,seenCR:!1},Gr=0,Xr=[],Kr=0;if("startRule"in Z){if(!(Z.startRule in J))throw Error("Can't start parsing from rule \""+Z.startRule+'".');$=J[Z.startRule]}var Zr={"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","??":"default","&&":"and","||":"or","<-":"bind","<->":"bind2",":":"assign"},Jr={"+":"toNumber","-":"neg","!":"not","^":"parent"},$r={map:"mapBlock",filter:"filterBlock",some:"someBlock",every:"everyBlock",sorted:"sortedBlock",sortedSet:"sortedSetBlock",group:"groupBlock",groupMap:"groupMapBlock",min:"minBlock",max:"maxBlock"},Qr={":":"assign","<-":"bind","<->":"bind2"};if(K=$(),null!==K&&Wr===e.length)return K;throw r(Xr),Ur=Math.max(Wr,Gr),new t(Xr,e.length>Ur?e.charAt(Ur):null,Ur,n(Ur).line,n(Ur).column)}return e(t,Error),{SyntaxError:t,parse:n}}()}});