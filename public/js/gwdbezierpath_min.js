-function(){"use strict";var q=/[-+]?[0-9]*\.?[0-9]+%/g,r=/[-+]?[0-9]*\.?[0-9]+px/g,v=function(c,d,e,g,a){var b,h;if(d.gradientMode){a=[[a,a,0],[a,g-a,0],[e-a,g-a,0],[e-a,a,0]];if("radial"==d.gradientMode){(b=d.c)||(b="center");h=c="center";var f=b.match(q);b=b.match(r);f&&1<f.length?(c=f[0],h=f[1]):b&&1<b.length&&(c=b[0],h=b[1]);c=t(c,a[0][0],a[3][0]);h=t(h,a[0][1],a[1][1]);f=d.shape;b=[.5*(a[0][0]+a[2][0]),.5*(a[0][0]+a[2][0])];var k=c<b[0]?a[2][0]:a[0][0];b=h<b[1]?a[1][1]:a[0][1];k=Math.abs(c-k);b=Math.abs(h-b);var l=
a[3][0]-a[0][0];a=a[1][1]-a[0][1];.001<Math.abs(l)&&(a/=l,k=Math.sqrt(k*k+b*b/(a*a)),b=a*k);a=k;f&&"farthest-corner"!=f&&(f=f.match(r))&&1<f.length&&(a=parseFloat(f[0]),b=parseFloat(f[1]));l=Math.max(a,b);f=document.createElement("canvas");f.width=e;f.height=g;k=f.getContext("2d");l=k.createRadialGradient(c,h,0,c,h,l);u(l,d.color);k.rect(0,0,e,g);b<a?(d=1,e=b/a):(e=1,d=a/b);k.save();k.transform(d,0,0,e,d*-c+c,e*-h+h);k.fillStyle=l;k.fill();k.restore();d=k.createPattern(f,"no-repeat")}else{e=0;d.orientation&&
(e=parseFloat(d.orientation)*Math.PI/180);isFinite(e)&&!isNaN(e)||(e=0);b=-1*e;e=[];h=[];g=[.5*(a[0][0]+a[2][0]),.5*(a[0][1]+a[2][1])];f=Math.tan(b);if(.001>Math.abs(Math.tan(.5*Math.PI-.001)-f))h=0<=Math.sin(b)?1:-1,a=.5*(a[2][1]-a[0][1]),e=[g[0],g[1]-h*a],h=[g[0],g[1]+h*a];else{b=0<=Math.cos(b)?1:-1;b=[b,b*f];for(var k=Infinity,l=-Infinity,m=0;4>m;m++){var n,p=[a[m][0]-g[0],a[m][1]-g[1]],p=f*p[1]+p[0],p=p/(1+f*f);n=[p,p*f];p=(0<b[0]*n[0]+b[1]*n[1]?1:-1)*Math.sqrt(n[0]*n[0]+n[1]*n[1]);n=[n[0]+g[0],
n[1]+g[1]];p<k&&(e=n,k=p);p>l&&(h=n,l=p)}}a=c.createLinearGradient(e[0],e[1],h[0],h[1]);u(a,d.color);d=a}return d}return"rgba("+Math.floor(255*d[0])+","+Math.floor(255*d[1])+","+Math.floor(255*d[2])+","+d[3]+")"},u=function(c,d){if(c)for(var e=d.length,g=0;g<e;g++){var a=d[g].position/100,b=d[g].value;if(void 0===b.a||null===b.a)b.a=1;c.addColorStop(a,"rgba("+b.r+","+b.g+","+b.b+","+b.a+")")}},t=function(c,d,e){return c?0<=c.indexOf("%")?d+parseInt(c,10)/100*(e-d):0<=c.indexOf("px")?d+parseInt(c,
10):d+.5*(e-d):0};var w=function(){};goog.inherits(w,HTMLCanvasElement);
w.prototype.attachedCallback=function(){var c=this.getContext("2d"),d=this.width,e=this.height,g,a,b,h,f;g=JSON.parse(this.getAttribute("anchors"))||[];a=parseFloat(this.getAttribute("stroke-width"))||0;b=JSON.parse(this.getAttribute("stroke-color"));h=JSON.parse(this.getAttribute("fill-color"));f=this.hasAttribute("closed");c.save();var k=g.length;c.beginPath();var l=g[0],m;c.moveTo(l[1][0],l[1][1]);for(var n=1;n<k;n++)m=g[n],c.bezierCurveTo(l[2][0],l[2][1],m[0][0],m[0][1],m[1][0],m[1][1]),l=m;k&&
f&&(m=g[0],c.bezierCurveTo(l[2][0],l[2][1],m[0][0],m[0][1],m[1][0],m[1][1]));c.lineCap="round";c.lineJoin="round";null!=h&&(c.fillStyle=v(c,h,d,e,a),c.fill());null!=b&&0<a&&(c.lineWidth=a,c.strokeStyle=v(c,b,d,e,0),c.stroke());c.restore()};w.prototype.attributeChangedCallback=null;document.registerElement("gwd-bezierpath",{prototype:w.prototype,"extends":"canvas"});}()
