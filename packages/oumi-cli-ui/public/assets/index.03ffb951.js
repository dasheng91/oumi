var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,a=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))l.call(t,n)&&s(e,n,t[n]);return e},i=(e,r)=>t(e,n(r)),c={exports:{}};const u={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},h={};for(const re of Object.keys(u))h[u[re]]=re;const g={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var b=g;for(const re of Object.keys(g)){if(!("channels"in g[re]))throw new Error("missing channels property: "+re);if(!("labels"in g[re]))throw new Error("missing channel labels property: "+re);if(g[re].labels.length!==g[re].channels)throw new Error("channel and label counts mismatch: "+re);const{channels:e,labels:t}=g[re];delete g[re].channels,delete g[re].labels,Object.defineProperty(g[re],"channels",{value:e}),Object.defineProperty(g[re],"labels",{value:t})}g.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),l=Math.max(t,n,r),s=l-o;let a,i;l===o?a=0:t===l?a=(n-r)/s:n===l?a=2+(r-t)/s:r===l&&(a=4+(t-n)/s),a=Math.min(60*a,360),a<0&&(a+=360);const c=(o+l)/2;return i=l===o?0:c<=.5?s/(l+o):s/(2-l-o),[a,100*i,100*c]},g.rgb.hsv=function(e){let t,n,r,o,l;const s=e[0]/255,a=e[1]/255,i=e[2]/255,c=Math.max(s,a,i),u=c-Math.min(s,a,i),h=function(e){return(c-e)/6/u+.5};return 0===u?(o=0,l=0):(l=u/c,t=h(s),n=h(a),r=h(i),s===c?o=r-n:a===c?o=1/3+t-r:i===c&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*l,100*c]},g.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=g.rgb.hsl(e)[0],l=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,100*l,100*r]},g.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r);return[100*((1-t-o)/(1-o)||0),100*((1-n-o)/(1-o)||0),100*((1-r-o)/(1-o)||0),100*o]},g.rgb.keyword=function(e){const t=h[e];if(t)return t;let n,r=1/0;for(const s of Object.keys(u)){const t=(l=u[s],((o=e)[0]-l[0])**2+(o[1]-l[1])**2+(o[2]-l[2])**2);t<r&&(r=t,n=s)}var o,l;return n},g.keyword.rgb=function(e){return u[e]},g.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;return[100*(.4124*t+.3576*n+.1805*r),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]},g.rgb.lab=function(e){const t=g.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;return[116*r-16,500*(n-r),200*(r-o)]},g.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,l,s;if(0===n)return s=255*r,[s,s,s];o=r<.5?r*(1+n):r+n-r*n;const a=2*r-o,i=[0,0,0];for(let c=0;c<3;c++)l=t+1/3*-(c-1),l<0&&l++,l>1&&l--,s=6*l<1?a+6*(o-a)*l:2*l<1?o:3*l<2?a+(o-a)*(2/3-l)*6:a,i[c]=255*s;return i},g.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const l=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=l<=1?l:2-l;return[t,100*(0===r?2*o/(l+o):2*n/(r+n)),100*((r+n)/2)]},g.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,l=t-Math.floor(t),s=255*r*(1-n),a=255*r*(1-n*l),i=255*r*(1-n*(1-l));switch(r*=255,o){case 0:return[r,i,s];case 1:return[a,r,s];case 2:return[s,r,i];case 3:return[s,a,r];case 4:return[i,s,r];case 5:return[r,s,a]}},g.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let l,s;s=(2-n)*r;const a=(2-n)*o;return l=n*o,l/=a<=1?a:2-a,l=l||0,s/=2,[t,100*l,100*s]},g.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let l;o>1&&(n/=o,r/=o);const s=Math.floor(6*t),a=1-r;l=6*t-s,0!=(1&s)&&(l=1-l);const i=n+l*(a-n);let c,u,h;switch(s){default:case 6:case 0:c=a,u=i,h=n;break;case 1:c=i,u=a,h=n;break;case 2:c=n,u=a,h=i;break;case 3:c=n,u=i,h=a;break;case 4:c=i,u=n,h=a;break;case 5:c=a,u=n,h=i}return[255*c,255*u,255*h]},g.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o))]},g.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,l,s;return o=3.2406*t+-1.5372*n+-.4986*r,l=-.9689*t+1.8758*n+.0415*r,s=.0557*t+-.204*n+1.057*r,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,o=Math.min(Math.max(0,o),1),l=Math.min(Math.max(0,l),1),s=Math.min(Math.max(0,s),1),[255*o,255*l,255*s]},g.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;return[116*n-16,500*(t-n),200*(n-r)]},g.lab.xyz=function(e){let t,n,r;n=(e[0]+16)/116,t=e[1]/500+n,r=n-e[2]/200;const o=n**3,l=t**3,s=r**3;return n=o>.008856?o:(n-16/116)/7.787,t=l>.008856?l:(t-16/116)/7.787,r=s>.008856?s:(r-16/116)/7.787,t*=95.047,n*=100,r*=108.883,[t,n,r]},g.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=360*Math.atan2(r,n)/2/Math.PI,o<0&&(o+=360);return[t,Math.sqrt(n*n+r*r),o]},g.lch.lab=function(e){const t=e[0],n=e[1],r=e[2]/360*2*Math.PI;return[t,n*Math.cos(r),n*Math.sin(r)]},g.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let l=null===t?g.rgb.hsv(e)[2]:t;if(l=Math.round(l/50),0===l)return 30;let s=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===l&&(s+=60),s},g.hsv.ansi16=function(e){return g.rgb.ansi16(g.hsv.rgb(e),e[2])},g.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];if(t===n&&n===r)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;return 16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},g.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=.5*(1+~~(e>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},g.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;e-=16;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},g.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},g.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];3===t[0].length&&(n=n.split("").map((e=>e+e)).join(""));const r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},g.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),l=Math.min(Math.min(t,n),r),s=o-l;let a,i;return a=s<1?l/(1-s):0,i=s<=0?0:o===t?(n-r)/s%6:o===n?2+(r-t)/s:4+(t-n)/s,i/=6,i%=1,[360*i,100*s,100*a]},g.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],100*r,100*o]},g.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],100*r,100*o]},g.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(0===n)return[255*r,255*r,255*r];const o=[0,0,0],l=t%1*6,s=l%1,a=1-s;let i=0;switch(Math.floor(l)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=a,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=a,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=a}return i=(1-n)*r,[255*(n*o[0]+i),255*(n*o[1]+i),255*(n*o[2]+i)]},g.hcg.hsv=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);let r=0;return n>0&&(r=t/n),[e[0],100*r,100*n]},g.hcg.hsl=function(e){const t=e[1]/100,n=e[2]/100*(1-t)+.5*t;let r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],100*r,100*n]},g.hcg.hwb=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],100*(n-t),100*(1-n)]},g.hwb.hcg=function(e){const t=e[1]/100,n=1-e[2]/100,r=n-t;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],100*r,100*o]},g.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},g.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},g.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},g.gray.hsl=function(e){return[0,0,e[0]]},g.gray.hsv=g.gray.hsl,g.gray.hwb=function(e){return[0,100,e[0]]},g.gray.cmyk=function(e){return[0,0,0,e[0]]},g.gray.lab=function(e){return[e[0],0,0]},g.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n},g.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const f=b;function d(e){const t=function(){const e={},t=Object.keys(f);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}(),n=[e];for(t[e].distance=0;n.length;){const e=n.pop(),r=Object.keys(f[e]);for(let o=r.length,l=0;l<o;l++){const o=r[l],s=t[o];-1===s.distance&&(s.distance=t[e].distance+1,s.parent=e,n.unshift(o))}}return t}function p(e,t){return function(n){return t(e(n))}}function y(e,t){const n=[t[e].parent,e];let r=f[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=p(f[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}const m=b,v=function(e){const t=d(e),n={},r=Object.keys(t);for(let o=r.length,l=0;l<o;l++){const e=r[l];null!==t[e].parent&&(n[e]=y(e,t))}return n},k={};Object.keys(m).forEach((e=>{k[e]={},Object.defineProperty(k[e],"channels",{value:m[e].channels}),Object.defineProperty(k[e],"labels",{value:m[e].labels});const t=v(e);Object.keys(t).forEach((n=>{const r=t[n];k[e][n]=function(e){const t=function(...t){const n=t[0];if(null==n)return n;n.length>1&&(t=n);const r=e(t);if("object"==typeof r)for(let e=r.length,o=0;o<e;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(r),k[e][n].raw=function(e){const t=function(...t){const n=t[0];return null==n?n:(n.length>1&&(t=n),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(r)}))}));var w=k;!function(e){const t=(e,t)=>(...n)=>`[${e(...n)+t}m`,n=(e,t)=>(...n)=>{const r=e(...n);return`[${38+t};5;${r}m`},r=(e,t)=>(...n)=>{const r=e(...n);return`[${38+t};2;${r[0]};${r[1]};${r[2]}m`},o=e=>e,l=(e,t,n)=>[e,t,n],s=(e,t,n)=>{Object.defineProperty(e,t,{get:()=>{const r=n();return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0}),r},enumerable:!0,configurable:!0})};let a;const i=(e,t,n,r)=>{void 0===a&&(a=w);const o=r?10:0,l={};for(const[s,i]of Object.entries(a)){const r="ansi16"===s?"ansi":s;s===t?l[r]=e(n,o):"object"==typeof i&&(l[r]=e(i[t],o))}return l};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){const e=new Map,a={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};a.color.gray=a.color.blackBright,a.bgColor.bgGray=a.bgColor.bgBlackBright,a.color.grey=a.color.blackBright,a.bgColor.bgGrey=a.bgColor.bgBlackBright;for(const[t,n]of Object.entries(a)){for(const[t,r]of Object.entries(n))a[t]={open:`[${r[0]}m`,close:`[${r[1]}m`},n[t]=a[t],e.set(r[0],r[1]);Object.defineProperty(a,t,{value:n,enumerable:!1})}return Object.defineProperty(a,"codes",{value:e,enumerable:!1}),a.color.close="[39m",a.bgColor.close="[49m",s(a.color,"ansi",(()=>i(t,"ansi16",o,!1))),s(a.color,"ansi256",(()=>i(n,"ansi256",o,!1))),s(a.color,"ansi16m",(()=>i(r,"rgb",l,!1))),s(a.bgColor,"ansi",(()=>i(t,"ansi16",o,!0))),s(a.bgColor,"ansi256",(()=>i(n,"ansi256",o,!0))),s(a.bgColor,"ansi16m",(()=>i(r,"rgb",l,!0))),a}})}(c);var M={stringReplaceAll:(e,t,n)=>{let r=e.indexOf(t);if(-1===r)return e;const o=t.length;let l=0,s="";do{s+=e.substr(l,r-l)+t+n,l=r+o,r=e.indexOf(t,l)}while(-1!==r);return s+=e.substr(l),s},stringEncaseCRLFWithFirstIndex:(e,t,n,r)=>{let o=0,l="";do{const s="\r"===e[r-1];l+=e.substr(o,(s?r-1:r)-o)+t+(s?"\r\n":"\n")+n,o=r+1,r=e.indexOf("\n",o)}while(-1!==r);return l+=e.substr(o),l}};const j=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,O=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,x=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,C=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,B=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function P(e){const t="u"===e[0],n="{"===e[1];return t&&!n&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):t&&n?String.fromCodePoint(parseInt(e.slice(2,-1),16)):B.get(e)||e}function E(e,t){const n=[],r=t.trim().split(/\s*,\s*/g);let o;for(const l of r){const t=Number(l);if(Number.isNaN(t)){if(!(o=l.match(x)))throw new Error(`Invalid Chalk template style argument: ${l} (in style '${e}')`);n.push(o[2].replace(C,((e,t,n)=>t?P(t):n)))}else n.push(t)}return n}function $(e){O.lastIndex=0;const t=[];let n;for(;null!==(n=O.exec(e));){const e=n[1];if(n[2]){const r=E(e,n[2]);t.push([e].concat(r))}else t.push([e])}return t}function A(e,t){const n={};for(const o of t)for(const e of o.styles)n[e[0]]=o.inverse?null:e.slice(1);let r=e;for(const[o,l]of Object.entries(n))if(Array.isArray(l)){if(!(o in r))throw new Error(`Unknown Chalk style: ${o}`);r=l.length>0?r[o](...l):r[o]}return r}var _=(e,t)=>{const n=[],r=[];let o=[];if(t.replace(j,((t,l,s,a,i,c)=>{if(l)o.push(P(l));else if(a){const t=o.join("");o=[],r.push(0===n.length?t:A(e,n)(t)),n.push({inverse:s,styles:$(a)})}else if(i){if(0===n.length)throw new Error("Found extraneous } in Chalk template literal");r.push(A(e,n)(o.join(""))),o=[],n.pop()}else o.push(c)})),r.push(o.join("")),n.length>0){const e=`Chalk template literal is missing ${n.length} closing bracket${1===n.length?"":"s"} (\`}\`)`;throw new Error(e)}return r.join("")};const I=c.exports,{stdout:q,stderr:z}={stdout:!1,stderr:!1},{stringReplaceAll:S,stringEncaseCRLFWithFirstIndex:R}=M,{isArray:F}=Array,N=["ansi","ansi","ansi256","ansi16m"],U=Object.create(null);class G{constructor(e){return W(e)}}const W=e=>{const t={};return((e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const n=q?q.level:0;e.level=void 0===t.level?n:t.level})(t,e),t.template=(...e)=>Q(t.template,...e),Object.setPrototypeOf(t,L.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},t.template.Instance=G,t.template};function L(e){return W(e)}for(const[re,oe]of Object.entries(I))U[re]={get(){const e=H(this,T(oe.open,oe.close,this._styler),this._isEmpty);return Object.defineProperty(this,re,{value:e}),e}};U.visible={get(){const e=H(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:e}),e}};const Y=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(const re of Y)U[re]={get(){const{level:e}=this;return function(...t){const n=T(I.color[N[e]][re](...t),I.color.close,this._styler);return H(this,n,this._isEmpty)}}};for(const re of Y){U["bg"+re[0].toUpperCase()+re.slice(1)]={get(){const{level:e}=this;return function(...t){const n=T(I.bgColor[N[e]][re](...t),I.bgColor.close,this._styler);return H(this,n,this._isEmpty)}}}}const D=Object.defineProperties((()=>{}),i(a({},U),{level:{enumerable:!0,get(){return this._generator.level},set(e){this._generator.level=e}}})),T=(e,t,n)=>{let r,o;return void 0===n?(r=e,o=t):(r=n.openAll+e,o=t+n.closeAll),{open:e,close:t,openAll:r,closeAll:o,parent:n}},H=(e,t,n)=>{const r=(...e)=>F(e[0])&&F(e[0].raw)?J(r,Q(r,...e)):J(r,1===e.length?""+e[0]:e.join(" "));return Object.setPrototypeOf(r,D),r._generator=e,r._styler=t,r._isEmpty=n,r},J=(e,t)=>{if(e.level<=0||!t)return e._isEmpty?"":t;let n=e._styler;if(void 0===n)return t;const{openAll:r,closeAll:o}=n;if(-1!==t.indexOf(""))for(;void 0!==n;)t=S(t,n.close,n.open),n=n.parent;const l=t.indexOf("\n");return-1!==l&&(t=R(t,o,r,l)),r+t+o};let K;const Q=(e,...t)=>{const[n]=t;if(!F(n)||!F(n.raw))return t.join(" ");const r=t.slice(1),o=[n.raw[0]];for(let l=1;l<n.length;l++)o.push(String(r[l-1]).replace(/[{}\\]/g,"\\$&"),String(n.raw[l]));return void 0===K&&(K=_),K(e,o.join(""))};Object.defineProperties(L.prototype,U);const V=L();V.supportsColor=q,V.stderr=L({level:z?z.level:0}),V.stderr.supportsColor=z;const X=(e=8,t)=>{const n=[],r=t||"0123456789abcdef";for(let o=0;o<e;o++)n[o]=r.substr(Math.floor(Math.random()*r.length),1);return n.join("")};function Z(e,t,n){return e.map((e=>e.key===t?i(a({},e),{children:n}):e.children?i(a({},e),{children:Z(e.children,t,n)}):e))}const ee=(e,t,n)=>{if(Array.isArray(e))for(let r=0;r<e.length;r++){if(e[r].key===t)return void n(e[r],r,e);e[r].children&&ee(e[r].children,t,n)}},te=function(e,t){return function(n,r){let o,l;if("object"==typeof n&&"object"==typeof r&&n&&r){if(o=n[e],l=r[e],o===l)return 0;if(typeof o==typeof l){if(!t||"asc"===t)return o<l?-1:1;if("desc"===t)return o>l?-1:1}return typeof o<typeof l?-1:1}return 0}},ne=e=>{const t={};return e.forEach((e=>{const n=e.name.substr(0,1);t[n]||(t[n]=[]),t[n].push(e)})),t};export{te as a,X as c,ee as l,ne as t,Z as u};