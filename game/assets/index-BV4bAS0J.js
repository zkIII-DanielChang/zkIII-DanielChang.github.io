(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="160",ac=0,ya=1,oc=2,nl=1,lc=2,cn=3,wn=0,Lt=1,un=2,fn=0,xi=1,Si=2,Ta=3,ba=4,cc=5,On=100,uc=101,hc=102,Aa=103,wa=104,fc=200,dc=201,pc=202,mc=203,Gs=204,Hs=205,gc=206,_c=207,vc=208,xc=209,Mc=210,Sc=211,Ec=212,yc=213,Tc=214,bc=0,Ac=1,wc=2,zr=3,Rc=4,Cc=5,Pc=6,Lc=7,il=0,Dc=1,Uc=2,bn=0,rl=1,sl=2,al=3,Js=4,Ic=5,ol=6,ll=300,Ei=301,yi=302,Vs=303,ks=304,qr=306,Ws=1e3,Zt=1001,Xs=1002,Rt=1003,Ra=1004,os=1005,Ht=1006,Nc=1007,Xi=1008,An=1009,Fc=1010,Oc=1011,Qs=1012,cl=1013,En=1014,yn=1015,dn=1016,ul=1017,hl=1018,Vn=1020,Bc=1021,$t=1023,zc=1024,Gc=1025,kn=1026,Ti=1027,Hc=1028,fl=1029,Vc=1030,dl=1031,pl=1033,ls=33776,cs=33777,us=33778,hs=33779,Ca=35840,Pa=35841,La=35842,Da=35843,ml=36196,Ua=37492,Ia=37496,Na=37808,Fa=37809,Oa=37810,Ba=37811,za=37812,Ga=37813,Ha=37814,Va=37815,ka=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,ja=37821,fs=36492,Ka=36494,Za=36495,kc=36283,$a=36284,Ja=36285,Qa=36286,gl=3e3,Wn=3001,Wc=3200,Xc=3201,_l=0,qc=1,Wt="",vt="srgb",mn="srgb-linear",ea="display-p3",Yr="display-p3-linear",Gr="linear",Qe="srgb",Hr="rec709",Vr="p3",$n=7680,eo=519,Yc=512,jc=513,Kc=514,vl=515,Zc=516,$c=517,Jc=518,Qc=519,to=35044,no="300 es",qs=1035,hn=2e3,kr=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let io=1234567;const Hi=Math.PI/180,qi=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function ta(n,e){return(n%e+e)%e}function eu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function tu(n,e,t){return n!==e?(t-n)/(e-n):0}function Vi(n,e,t){return(1-t)*n+t*e}function nu(n,e,t,i){return Vi(n,e,1-Math.exp(-t*i))}function iu(n,e=1){return e-Math.abs(ta(n,e*2)-e)}function ru(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function su(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function au(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ou(n,e){return n+Math.random()*(e-n)}function lu(n){return n*(.5-Math.random())}function cu(n){n!==void 0&&(io=n);let e=io+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uu(n){return n*Hi}function hu(n){return n*qi}function Ys(n){return(n&n-1)===0&&n!==0}function fu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function du(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ro={DEG2RAD:Hi,RAD2DEG:qi,generateUUID:Ri,clamp:Ct,euclideanModulo:ta,mapLinear:eu,inverseLerp:tu,lerp:Vi,damp:nu,pingpong:iu,smoothstep:ru,smootherstep:su,randInt:au,randFloat:ou,randFloatSpread:lu,seededRandom:cu,degToRad:uu,radToDeg:hu,isPowerOfTwo:Ys,ceilPowerOfTwo:fu,floorPowerOfTwo:Wr,setQuaternionFromProperEuler:du,normalize:At,denormalize:di};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],g=i[8],_=r[0],p=r[3],u=r[6],E=r[1],x=r[4],b=r[7],C=r[2],A=r[5],w=r[8];return s[0]=o*_+a*E+l*C,s[3]=o*p+a*x+l*A,s[6]=o*u+a*b+l*w,s[1]=c*_+h*E+f*C,s[4]=c*p+h*x+f*A,s[7]=c*u+h*b+f*w,s[2]=d*_+m*E+g*C,s[5]=d*p+m*x+g*A,s[8]=d*u+m*b+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,m=c*s-o*l,g=t*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new Ve;function xl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pu(){const n=Xr("canvas");return n.style.display="block",n}const so={};function ki(n){n in so||(so[n]=!0,console.warn(n))}const ao=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oo=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[mn]:{transfer:Gr,primaries:Hr,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:Qe,primaries:Hr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Yr]:{transfer:Gr,primaries:Vr,toReference:n=>n.applyMatrix3(oo),fromReference:n=>n.applyMatrix3(ao)},[ea]:{transfer:Qe,primaries:Vr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(oo),fromReference:n=>n.applyMatrix3(ao).convertLinearToSRGB()}},mu=new Set([mn,Yr]),je={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!mu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ir[e].toReference,r=ir[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ir[n].primaries},getTransfer:function(n){return n===Wt?Gr:ir[n].transfer}};function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Jn;class Ml{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=Xr("canvas")),Jn.width=e.width,Jn.height=e.height;const i=Jn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gu=0;class Sl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ms(r[o].image)):s.push(ms(r[o]))}else s=ms(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ms(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ml.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _u=0;class Ot extends wi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Zt,r=Zt,s=Ht,o=Xi,a=$t,l=An,c=Ot.DEFAULT_ANISOTROPY,h=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Ri(),this.name="",this.source=new Sl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wn?vt:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Wn:gl}set encoding(e){ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wn?vt:Wt}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=ll;Ot.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(m+1)/2,C=(u+1)/2,A=(h+d)/4,w=(f+_)/4,z=(g+p)/4;return x>b&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=w/i):b>C?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=z/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=z/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(f-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vu extends wi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Wn?vt:Wt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends vu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class El extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xu extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==m||h!==g){let p=1-a;const u=l*d+c*m+h*g+f*_,E=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,u*E);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const b=a*E;if(l=l*p+d*b,c=c*p+m*b,h=h*p+g*b,f=f*p+_*b,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*m-c*d,e[t+1]=l*g+h*d+c*f-a*m,e[t+2]=c*g+h*m+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gs.copy(this).projectOnVector(e),this.sub(gs)}reflect(e){return this.sub(gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gs=new P,lo=new Ki;class Zi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(s,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rr.copy(i.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),sr.subVectors(this.max,Ni),Qn.subVectors(e.a,Ni),ei.subVectors(e.b,Ni),ti.subVectors(e.c,Ni),_n.subVectors(ei,Qn),vn.subVectors(ti,ei),Ln.subVectors(Qn,ti);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Ln.z,Ln.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Ln.z,0,-Ln.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Ln.y,Ln.x,0];return!_s(t,Qn,ei,ti,sr)||(t=[1,0,0,0,1,0,0,0,1],!_s(t,Qn,ei,ti,sr))?!1:(ar.crossVectors(_n,vn),t=[ar.x,ar.y,ar.z],_s(t,Qn,ei,ti,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new P,new P,new P,new P,new P,new P,new P,new P],Xt=new P,rr=new Zi,Qn=new P,ei=new P,ti=new P,_n=new P,vn=new P,Ln=new P,Ni=new P,sr=new P,ar=new P,Dn=new P;function _s(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Dn.fromArray(n,s);const a=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Mu=new Zi,Fi=new P,vs=new P;class $i{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Mu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(vs)),this.expandByPoint(Fi.copy(e.center).sub(vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new P,xs=new P,or=new P,xn=new P,Ms=new P,lr=new P,Ss=new P;class na{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xs.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(xs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(or),a=xn.dot(this.direction),l=-xn.dot(or),c=xn.lengthSq(),h=Math.abs(1-o*o);let f,d,m,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xs).addScaledVector(or,d),m}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const i=sn.dot(this.direction),r=sn.dot(sn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,i,r,s){Ms.subVectors(t,e),lr.subVectors(i,e),Ss.crossVectors(Ms,lr);let o=this.direction.dot(Ss),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const l=a*this.direction.dot(lr.crossVectors(xn,lr));if(l<0)return null;const c=a*this.direction.dot(Ms.cross(xn));if(c<0||l+c>o)return null;const h=-a*xn.dot(Ss);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,o,a,l,c,h,f,d,m,g,_,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,f,d,m,g,_,p)}set(e,t,i,r,s,o,a,l,c,h,f,d,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ni.setFromMatrixColumn(e,0).length(),s=1/ni.setFromMatrixColumn(e,1).length(),o=1/ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Su,e,Eu)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Mn.crossVectors(i,Ut),Mn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Mn.crossVectors(i,Ut)),Mn.normalize(),cr.crossVectors(Ut,Mn),r[0]=Mn.x,r[4]=cr.x,r[8]=Ut.x,r[1]=Mn.y,r[5]=cr.y,r[9]=Ut.y,r[2]=Mn.z,r[6]=cr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],E=i[3],x=i[7],b=i[11],C=i[15],A=r[0],w=r[4],z=r[8],M=r[12],T=r[1],G=r[5],H=r[9],Q=r[13],L=r[2],O=r[6],k=r[10],q=r[14],W=r[3],X=r[7],Y=r[11],ee=r[15];return s[0]=o*A+a*T+l*L+c*W,s[4]=o*w+a*G+l*O+c*X,s[8]=o*z+a*H+l*k+c*Y,s[12]=o*M+a*Q+l*q+c*ee,s[1]=h*A+f*T+d*L+m*W,s[5]=h*w+f*G+d*O+m*X,s[9]=h*z+f*H+d*k+m*Y,s[13]=h*M+f*Q+d*q+m*ee,s[2]=g*A+_*T+p*L+u*W,s[6]=g*w+_*G+p*O+u*X,s[10]=g*z+_*H+p*k+u*Y,s[14]=g*M+_*Q+p*q+u*ee,s[3]=E*A+x*T+b*L+C*W,s[7]=E*w+x*G+b*O+C*X,s[11]=E*z+x*H+b*k+C*Y,s[15]=E*M+x*Q+b*q+C*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+_*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*h-s*l*h)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*h-i*c*h)+u*(-r*a*h-t*l*f+t*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],E=f*p*c-_*d*c+_*l*m-a*p*m-f*l*u+a*d*u,x=g*d*c-h*p*c-g*l*m+o*p*m+h*l*u-o*d*u,b=h*_*c-g*f*c+g*a*m-o*_*m-h*a*u+o*f*u,C=g*f*l-h*_*l-g*a*d+o*_*d+h*a*p-o*f*p,A=t*E+i*x+r*b+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=E*w,e[1]=(_*d*s-f*p*s-_*r*m+i*p*m+f*r*u-i*d*u)*w,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*w,e[4]=x*w,e[5]=(h*p*s-g*d*s+g*r*m-t*p*m-h*r*u+t*d*u)*w,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*u-t*l*u)*w,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*m+t*l*m)*w,e[8]=b*w,e[9]=(g*f*s-h*_*s-g*i*m+t*_*m+h*i*u-t*f*u)*w,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*u+t*a*u)*w,e[11]=(h*a*s-o*f*s-h*i*c+t*f*c+o*i*m-t*a*m)*w,e[12]=C*w,e[13]=(h*_*r-g*f*r+g*i*d-t*_*d-h*i*p+t*f*p)*w,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*w,e[15]=(o*f*r-h*a*r+h*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,m=s*h,g=s*f,_=o*h,p=o*f,u=a*f,E=l*c,x=l*h,b=l*f,C=i.x,A=i.y,w=i.z;return r[0]=(1-(_+u))*C,r[1]=(m+b)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(d+u))*A,r[6]=(p+E)*A,r[7]=0,r[8]=(g+x)*w,r[9]=(p-E)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ni.set(r[0],r[1],r[2]).length();const o=ni.set(r[4],r[5],r[6]).length(),a=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,h=1/o,f=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,t.setFromRotationMatrix(qt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=hn){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(a===hn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===kr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=hn){const l=this.elements,c=1/(t-e),h=1/(i-r),f=1/(o-s),d=(t+e)*c,m=(i+r)*h;let g,_;if(a===hn)g=(o+s)*f,_=-2*f;else if(a===kr)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ni=new P,qt=new ot,Su=new P(0,0,0),Eu=new P(1,1,1),Mn=new P,cr=new P,Ut=new P,co=new ot,uo=new Ki;class jr{constructor(e=0,t=0,i=0,r=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uo.setFromEuler(this),this.setFromQuaternion(uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yu=0;const ho=new P,ii=new Ki,an=new ot,ur=new P,Oi=new P,Tu=new P,bu=new Ki,fo=new P(1,0,0),po=new P(0,1,0),mo=new P(0,0,1),Au={type:"added"},wu={type:"removed"};class gt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new P,t=new jr,i=new Ki,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ve}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(fo,e)}rotateY(e){return this.rotateOnAxis(po,e)}rotateZ(e){return this.rotateOnAxis(mo,e)}translateOnAxis(e,t){return ho.copy(e).applyQuaternion(this.quaternion),this.position.add(ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fo,e)}translateY(e){return this.translateOnAxis(po,e)}translateZ(e){return this.translateOnAxis(mo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ur.copy(e):ur.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Oi,ur,this.up):an.lookAt(ur,Oi,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(an),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Au)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,Tu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new P(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new P,on=new P,Es=new P,ln=new P,ri=new P,si=new P,go=new P,ys=new P,Ts=new P,bs=new P;let hr=!1;class jt{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),on.subVectors(i,t),Es.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(on),l=Yt.dot(Es),c=on.dot(on),h=on.dot(Es),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(e,t,i,r,s,o,a,l){return hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hr=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ln.x),l.addScaledVector(o,ln.y),l.addScaledVector(a,ln.z),l)}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),on.subVectors(e,t),Yt.cross(on).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Yt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hr=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ri.subVectors(r,i),si.subVectors(s,i),ys.subVectors(e,i);const l=ri.dot(ys),c=si.dot(ys);if(l<=0&&c<=0)return t.copy(i);Ts.subVectors(e,r);const h=ri.dot(Ts),f=si.dot(Ts);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ri,o);bs.subVectors(e,s);const m=ri.dot(bs),g=si.dot(bs);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(si,a);const p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return go.subVectors(s,r),a=(f-h)/(f-h+(m-g)),t.copy(r).addScaledVector(go,a);const u=1/(p+_+d);return o=_*u,a=d*u,t.copy(i).addScaledVector(ri,o).addScaledVector(si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function As(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=ta(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=As(o,s,e+1/3),this.g=As(o,s,e),this.b=As(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=Tl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return je.fromWorkingColorSpace(St.copy(this),e),Math.round(Ct(St.r*255,0,255))*65536+Math.round(Ct(St.g*255,0,255))*256+Math.round(Ct(St.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=vt){je.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(fr);const i=Vi(Sn.h,fr.h,t),r=Vi(Sn.s,fr.s,t),s=Vi(Sn.l,fr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Re;Re.NAMES=Tl;let Ru=0;class jn extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=xi,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gs,this.blendDst=Hs,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gs&&(i.blendSrc=this.blendSrc),this.blendDst!==Hs&&(i.blendDst=this.blendDst),this.blendEquation!==On&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kr extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new P,dr=new be;class Et{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=to,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==to&&(e.usage=this.usage),e}}class bl extends Et{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Al extends Et{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tt extends Et{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cu=0;const zt=new ot,ws=new gt,ai=new P,It=new Zi,Bi=new Zi,dt=new P;class _t extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xl(e)?Al:bl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return ws.lookAt(e),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];It.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(It.min,Bi.min),It.expandByPoint(dt),dt.addVectors(It.max,Bi.max),It.expandByPoint(dt)):(It.expandByPoint(Bi.min),It.expandByPoint(Bi.max))}It.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dt.fromBufferAttribute(a,c),l&&(ai.fromBufferAttribute(e,c),dt.add(ai)),r=Math.max(r,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new P,h[T]=new P;const f=new P,d=new P,m=new P,g=new be,_=new be,p=new be,u=new P,E=new P;function x(T,G,H){f.fromArray(r,T*3),d.fromArray(r,G*3),m.fromArray(r,H*3),g.fromArray(o,T*2),_.fromArray(o,G*2),p.fromArray(o,H*2),d.sub(f),m.sub(f),_.sub(g),p.sub(g);const Q=1/(_.x*p.y-p.x*_.y);isFinite(Q)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Q),E.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(Q),c[T].add(u),c[G].add(u),c[H].add(u),h[T].add(E),h[G].add(E),h[H].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,G=b.length;T<G;++T){const H=b[T],Q=H.start,L=H.count;for(let O=Q,k=Q+L;O<k;O+=3)x(i[O+0],i[O+1],i[O+2])}const C=new P,A=new P,w=new P,z=new P;function M(T){w.fromArray(s,T*3),z.copy(w);const G=c[T];C.copy(G),C.sub(w.multiplyScalar(w.dot(G))).normalize(),A.crossVectors(z,G);const Q=A.dot(h[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=Q}for(let T=0,G=b.length;T<G;++T){const H=b[T],Q=H.start,L=H.count;for(let O=Q,k=Q+L;O<k;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,f=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)d[g++]=c[m++]}return new Et(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _o=new ot,Un=new na,pr=new $i,vo=new P,oi=new P,li=new P,ci=new P,Rs=new P,mr=new P,gr=new be,_r=new be,vr=new be,xo=new P,Mo=new P,So=new P,xr=new P,Mr=new P;class et extends gt{constructor(e=new _t,t=new Kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){mr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Rs.fromBufferAttribute(f,e),o?mr.addScaledVector(Rs,h):mr.addScaledVector(Rs.sub(t),h))}t.add(mr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(pr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(pr,vo)===null||Un.origin.distanceToSquared(vo)>(e.far-e.near)**2))&&(_o.copy(s).invert(),Un.copy(e.ray).applyMatrix4(_o),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,C=x;b<C;b+=3){const A=a.getX(b),w=a.getX(b+1),z=a.getX(b+2);r=Sr(this,u,e,i,c,h,f,A,w,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const E=a.getX(p),x=a.getX(p+1),b=a.getX(p+2);r=Sr(this,o,e,i,c,h,f,E,x,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,C=x;b<C;b+=3){const A=b,w=b+1,z=b+2;r=Sr(this,u,e,i,c,h,f,A,w,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const E=p,x=p+1,b=p+2;r=Sr(this,o,e,i,c,h,f,E,x,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Pu(n,e,t,i,r,s,o,a){let l;if(e.side===Lt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wn,a),l===null)return null;Mr.copy(a),Mr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Mr);return c<t.near||c>t.far?null:{distance:c,point:Mr.clone(),object:n}}function Sr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,oi),n.getVertexPosition(l,li),n.getVertexPosition(c,ci);const h=Pu(n,e,t,i,oi,li,ci,xr);if(h){r&&(gr.fromBufferAttribute(r,a),_r.fromBufferAttribute(r,l),vr.fromBufferAttribute(r,c),h.uv=jt.getInterpolation(xr,oi,li,ci,gr,_r,vr,new be)),s&&(gr.fromBufferAttribute(s,a),_r.fromBufferAttribute(s,l),vr.fromBufferAttribute(s,c),h.uv1=jt.getInterpolation(xr,oi,li,ci,gr,_r,vr,new be),h.uv2=h.uv1),o&&(xo.fromBufferAttribute(o,a),Mo.fromBufferAttribute(o,l),So.fromBufferAttribute(o,c),h.normal=jt.getInterpolation(xr,oi,li,ci,xo,Mo,So,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};jt.getNormal(oi,li,ci,f.normal),h.face=f}return h}class Ci extends _t{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function g(_,p,u,E,x,b,C,A,w,z,M){const T=b/w,G=C/z,H=b/2,Q=C/2,L=A/2,O=w+1,k=z+1;let q=0,W=0;const X=new P;for(let Y=0;Y<k;Y++){const ee=Y*G-Q;for(let te=0;te<O;te++){const V=te*T-H;X[_]=V*E,X[p]=ee*x,X[u]=L,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[u]=A>0?1:-1,h.push(X.x,X.y,X.z),f.push(te/w),f.push(1-Y/z),q+=1}}for(let Y=0;Y<z;Y++)for(let ee=0;ee<w;ee++){const te=d+ee+O*Y,V=d+ee+O*(Y+1),j=d+(ee+1)+O*(Y+1),le=d+(ee+1)+O*Y;l.push(te,V,le),l.push(V,j,le),W+=6}a.addGroup(m,W,M),m+=W,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=bi(n[t]);for(const r in i)e[r]=i[r]}return e}function Lu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wl(n){return n.getRenderTarget()===null?n.outputColorSpace:je.workingColorSpace}const Yi={clone:bi,merge:wt};var Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Du,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=Lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rl extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Rl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,hi=1;class Iu extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(ui,hi,e,t);r.layers=this.layers,this.add(r);const s=new Vt(ui,hi,e,t);s.layers=this.layers,this.add(s);const o=new Vt(ui,hi,e,t);o.layers=this.layers,this.add(o);const a=new Vt(ui,hi,e,t);a.layers=this.layers,this.add(a);const l=new Vt(ui,hi,e,t);l.layers=this.layers,this.add(l);const c=new Vt(ui,hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cl extends Ot{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nu extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wn?vt:Wt),this.texture=new Cl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ci(5,5,5),s=new Pt({name:"CubemapFromEquirect",uniforms:bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:fn});s.uniforms.tEquirect.value=t;const o=new et(r,s),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Ht),new Iu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Cs=new P,Fu=new P,Ou=new Ve;class Nn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cs.subVectors(i,t).cross(Fu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ou.getNormalMatrix(e),r=this.coplanarPoint(Cs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new $i,Er=new P;class ia{constructor(e=new Nn,t=new Nn,i=new Nn,r=new Nn,s=new Nn,o=new Nn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],E=r[13],x=r[14],b=r[15];if(i[0].setComponents(l-s,d-c,p-m,b-u).normalize(),i[1].setComponents(l+s,d+c,p+m,b+u).normalize(),i[2].setComponents(l+o,d+h,p+g,b+E).normalize(),i[3].setComponents(l-o,d-h,p-g,b-E).normalize(),i[4].setComponents(l-a,d-f,p-_,b-x).normalize(),t===hn)i[5].setComponents(l+a,d+f,p+_,b+x).normalize();else if(t===kr)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Er.x=r.normal.x>0?e.max.x:e.min.x,Er.y=r.normal.y>0?e.max.y:e.min.y,Er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pl(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bu(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const f=c.array,d=c.usage,m=f.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,f){const d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&g.length===0&&n.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];t?n.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):n.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}class ra extends _t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const E=u*d-o;for(let x=0;x<c;x++){const b=x*f-s;g.push(b,-E,0),_.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){const x=E+c*u,b=E+c*(u+1),C=E+1+c*(u+1),A=E+1+c*u;m.push(x,b,A),m.push(b,C,A)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$u=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ch=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",gh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Th=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ah=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ch=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ih=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ef=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,If=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,id=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ad=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ld=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ud=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,md=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:zu,alphahash_pars_fragment:Gu,alphamap_fragment:Hu,alphamap_pars_fragment:Vu,alphatest_fragment:ku,alphatest_pars_fragment:Wu,aomap_fragment:Xu,aomap_pars_fragment:qu,batching_pars_vertex:Yu,batching_vertex:ju,begin_vertex:Ku,beginnormal_vertex:Zu,bsdfs:$u,iridescence_fragment:Ju,bumpmap_pars_fragment:Qu,clipping_planes_fragment:eh,clipping_planes_pars_fragment:th,clipping_planes_pars_vertex:nh,clipping_planes_vertex:ih,color_fragment:rh,color_pars_fragment:sh,color_pars_vertex:ah,color_vertex:oh,common:lh,cube_uv_reflection_fragment:ch,defaultnormal_vertex:uh,displacementmap_pars_vertex:hh,displacementmap_vertex:fh,emissivemap_fragment:dh,emissivemap_pars_fragment:ph,colorspace_fragment:mh,colorspace_pars_fragment:gh,envmap_fragment:_h,envmap_common_pars_fragment:vh,envmap_pars_fragment:xh,envmap_pars_vertex:Mh,envmap_physical_pars_fragment:Dh,envmap_vertex:Sh,fog_vertex:Eh,fog_pars_vertex:yh,fog_fragment:Th,fog_pars_fragment:bh,gradientmap_pars_fragment:Ah,lightmap_fragment:wh,lightmap_pars_fragment:Rh,lights_lambert_fragment:Ch,lights_lambert_pars_fragment:Ph,lights_pars_begin:Lh,lights_toon_fragment:Uh,lights_toon_pars_fragment:Ih,lights_phong_fragment:Nh,lights_phong_pars_fragment:Fh,lights_physical_fragment:Oh,lights_physical_pars_fragment:Bh,lights_fragment_begin:zh,lights_fragment_maps:Gh,lights_fragment_end:Hh,logdepthbuf_fragment:Vh,logdepthbuf_pars_fragment:kh,logdepthbuf_pars_vertex:Wh,logdepthbuf_vertex:Xh,map_fragment:qh,map_pars_fragment:Yh,map_particle_fragment:jh,map_particle_pars_fragment:Kh,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:$h,morphcolor_vertex:Jh,morphnormal_vertex:Qh,morphtarget_pars_vertex:ef,morphtarget_vertex:tf,normal_fragment_begin:nf,normal_fragment_maps:rf,normal_pars_fragment:sf,normal_pars_vertex:af,normal_vertex:of,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:hf,iridescence_pars_fragment:ff,opaque_fragment:df,packing:pf,premultiplied_alpha_fragment:mf,project_vertex:gf,dithering_fragment:_f,dithering_pars_fragment:vf,roughnessmap_fragment:xf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:Sf,shadowmap_pars_vertex:Ef,shadowmap_vertex:yf,shadowmask_pars_fragment:Tf,skinbase_vertex:bf,skinning_pars_vertex:Af,skinning_vertex:wf,skinnormal_vertex:Rf,specularmap_fragment:Cf,specularmap_pars_fragment:Pf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:Uf,transmission_pars_fragment:If,uv_pars_fragment:Nf,uv_pars_vertex:Ff,uv_vertex:Of,worldpos_vertex:Bf,background_vert:zf,background_frag:Gf,backgroundCube_vert:Hf,backgroundCube_frag:Vf,cube_vert:kf,cube_frag:Wf,depth_vert:Xf,depth_frag:qf,distanceRGBA_vert:Yf,distanceRGBA_frag:jf,equirect_vert:Kf,equirect_frag:Zf,linedashed_vert:$f,linedashed_frag:Jf,meshbasic_vert:Qf,meshbasic_frag:ed,meshlambert_vert:td,meshlambert_frag:nd,meshmatcap_vert:id,meshmatcap_frag:rd,meshnormal_vert:sd,meshnormal_frag:ad,meshphong_vert:od,meshphong_frag:ld,meshphysical_vert:cd,meshphysical_frag:ud,meshtoon_vert:hd,meshtoon_frag:fd,points_vert:dd,points_frag:pd,shadow_vert:md,shadow_frag:gd,sprite_vert:_d,sprite_frag:vd},ie={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},en={basic:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Re(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:wt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:wt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Re(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:wt([ie.points,ie.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:wt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:wt([ie.common,ie.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:wt([ie.sprite,ie.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:wt([ie.common,ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:wt([ie.lights,ie.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};en.physical={uniforms:wt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const yr={r:0,b:0,g:0};function xd(n,e,t,i,r,s,o){const a=new Re(0);let l=s===!0?0:1,c,h,f=null,d=0,m=null;function g(p,u){let E=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),E=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qr)?(h===void 0&&(h=new et(new Ci(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:bi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=je.getTransfer(x.colorSpace)!==Qe,(f!==x||d!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new et(new ra(2,2),new Pt({name:"BackgroundMaterial",uniforms:bi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(yr,wl(n)),i.buffers.color.setClear(yr.r,yr.g,yr.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Md(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function f(L,O,k,q,W){let X=!1;if(o){const Y=_(q,k,O);c!==Y&&(c=Y,m(c.object)),X=u(L,q,k,W),X&&E(L,q,k,W)}else{const Y=O.wireframe===!0;(c.geometry!==q.id||c.program!==k.id||c.wireframe!==Y)&&(c.geometry=q.id,c.program=k.id,c.wireframe=Y,X=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,z(L,O,k,q),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,O,k){const q=k.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let X=W[O.id];X===void 0&&(X={},W[O.id]=X);let Y=X[q];return Y===void 0&&(Y=p(d()),X[q]=Y),Y}function p(L){const O=[],k=[],q=[];for(let W=0;W<r;W++)O[W]=0,k[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:q,object:L,attributes:{},index:null}}function u(L,O,k,q){const W=c.attributes,X=O.attributes;let Y=0;const ee=k.getAttributes();for(const te in ee)if(ee[te].location>=0){const j=W[te];let le=X[te];if(le===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),j===void 0||j.attribute!==le||le&&j.data!==le.data)return!0;Y++}return c.attributesNum!==Y||c.index!==q}function E(L,O,k,q){const W={},X=O.attributes;let Y=0;const ee=k.getAttributes();for(const te in ee)if(ee[te].location>=0){let j=X[te];j===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const le={};le.attribute=j,j&&j.data&&(le.data=j.data),W[te]=le,Y++}c.attributes=W,c.attributesNum=Y,c.index=q}function x(){const L=c.newAttributes;for(let O=0,k=L.length;O<k;O++)L[O]=0}function b(L){C(L,0)}function C(L,O){const k=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;k[L]=1,q[L]===0&&(n.enableVertexAttribArray(L),q[L]=1),W[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),W[L]=O)}function A(){const L=c.newAttributes,O=c.enabledAttributes;for(let k=0,q=O.length;k<q;k++)O[k]!==L[k]&&(n.disableVertexAttribArray(k),O[k]=0)}function w(L,O,k,q,W,X,Y){Y===!0?n.vertexAttribIPointer(L,O,k,W,X):n.vertexAttribPointer(L,O,k,q,W,X)}function z(L,O,k,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=q.attributes,X=k.getAttributes(),Y=O.defaultAttributeValues;for(const ee in X){const te=X[ee];if(te.location>=0){let V=W[ee];if(V===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const j=V.normalized,le=V.itemSize,ge=t.get(V);if(ge===void 0)continue;const me=ge.buffer,Le=ge.type,Ie=ge.bytesPerElement,ye=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||V.gpuType===cl);if(V.isInterleavedBufferAttribute){const Xe=V.data,U=Xe.stride,yt=V.offset;if(Xe.isInstancedInterleavedBuffer){for(let ve=0;ve<te.locationSize;ve++)C(te.location+ve,Xe.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ve=0;ve<te.locationSize;ve++)b(te.location+ve);n.bindBuffer(n.ARRAY_BUFFER,me);for(let ve=0;ve<te.locationSize;ve++)w(te.location+ve,le/te.locationSize,Le,j,U*Ie,(yt+le/te.locationSize*ve)*Ie,ye)}else{if(V.isInstancedBufferAttribute){for(let Xe=0;Xe<te.locationSize;Xe++)C(te.location+Xe,V.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Xe=0;Xe<te.locationSize;Xe++)b(te.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,me);for(let Xe=0;Xe<te.locationSize;Xe++)w(te.location+Xe,le/te.locationSize,Le,j,le*Ie,le/te.locationSize*Xe*Ie,ye)}}else if(Y!==void 0){const j=Y[ee];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(te.location,j);break;case 3:n.vertexAttrib3fv(te.location,j);break;case 4:n.vertexAttrib4fv(te.location,j);break;default:n.vertexAttrib1fv(te.location,j)}}}}A()}function M(){H();for(const L in a){const O=a[L];for(const k in O){const q=O[k];for(const W in q)g(q[W].object),delete q[W];delete O[k]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const k in O){const q=O[k];for(const W in q)g(q[W].object),delete q[W];delete O[k]}delete a[L.id]}function G(L){for(const O in a){const k=a[O];if(k[L.id]===void 0)continue;const q=k[L.id];for(const W in q)g(q[W].object),delete q[W];delete k[L.id]}}function H(){Q(),h=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:H,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function Sd(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,f){n.drawArrays(s,h,f),t.update(f,s,1)}function l(h,f,d){if(d===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,f,d),t.update(f,s,d)}function c(h,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{m.multiDrawArraysWEBGL(s,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ed(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,b=o||e.has("OES_texture_float"),C=x&&b,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:A}}function yd(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Nn,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const E=s?0:i,x=E*4;let b=u.clippingState||null;l.value=b,b=h(g,d,x,m);for(let C=0;C!==x;++C)b[C]=t[C];u.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,b=m;x!==_;++x,b+=4)o.copy(f[x]).applyMatrix4(E,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Td(n){let e=new WeakMap;function t(o,a){return a===Vs?o.mapping=Ei:a===ks&&(o.mapping=yi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vs||a===ks)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nu(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sa extends Rl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mi=4,Eo=[.125,.215,.35,.446,.526,.582],Bn=20,Ps=new sa,yo=new Re;let Ls=null,Ds=0,Us=0;const Fn=(1+Math.sqrt(5))/2,fi=1/Fn,To=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Fn,fi),new P(0,Fn,-fi),new P(fi,0,Fn),new P(-fi,0,Fn),new P(Fn,fi,0),new P(-Fn,fi,0)];class bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ls=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ls,Ds,Us),e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ls=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:dn,format:$t,colorSpace:mn,depthBuffer:!1},r=Ao(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ao(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bd(s)),this._blurMaterial=Ad(s,e,t)}return r}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,i,r){const a=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(yo),h.toneMapping=bn,h.autoClear=!1;const m=new Kr({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new et(new Ci,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(yo),_=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;Tr(r,E*x,u>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ei||e.mapping===yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ps)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=To[(r-1)%To.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new et(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Bn;p>Bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const u=[];let E=0;for(let w=0;w<Bn;++w){const z=w/_,M=Math.exp(-z*z/2);u.push(M),w===0?E+=M:w<p&&(E+=2*M)}for(let w=0;w<u.length;w++)u[w]=u[w]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const b=this._sizeLods[r],C=3*b*(r>x-mi?r-x+mi:0),A=4*(this._cubeSize-b);Tr(t,C,A,3*b,2*b),l.setRenderTarget(t),l.render(f,Ps)}}function bd(n){const e=[],t=[],i=[];let r=n;const s=n-mi+1+Eo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-mi?l=Eo[o-n+mi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,_=3,p=2,u=1,E=new Float32Array(_*g*m),x=new Float32Array(p*g*m),b=new Float32Array(u*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,z=A>2?0:-1,M=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];E.set(M,_*g*A),x.set(d,p*g*A);const T=[A,A,A,A,A,A];b.set(T,u*g*A)}const C=new _t;C.setAttribute("position",new Et(E,_)),C.setAttribute("uv",new Et(x,p)),C.setAttribute("faceIndex",new Et(b,u)),e.push(C),r>mi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ao(n,e,t){const i=new Jt(n,e,t);return i.texture.mapping=qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ad(n,e,t){const i=new Float32Array(Bn),r=new P(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function wo(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ro(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wd(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vs||l===ks,h=l===Ei||l===yi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new bo(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new bo(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Rd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Cd(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let x=0,b=E.length;x<b;x+=3){const C=E[x+0],A=E[x+1],w=E[x+2];d.push(C,A,A,w,w,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,b=E.length/3-1;x<b;x+=3){const C=x+0,A=x+1,w=x+2;d.push(C,A,A,w,w,C)}}else return;const p=new(xl(d)?Al:bl)(d,1);p.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Pd(n,e,t,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(s,g,a,m*l),t.update(g,s,1)}function f(m,g,_){if(_===0)return;let p,u;if(r)p=n,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,g,a,m*l,_),t.update(g,s,_)}function d(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let u=0;for(let E=0;E<_;E++)u+=g[E];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function Ld(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Dd(n,e){return n[0]-e[0]}function Ud(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Id(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let O=function(){Q.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),b===!0&&(M=2),C===!0&&(M=3);let T=h.attributes.position.count*M,G=1;T>e.maxTextureSize&&(G=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*G*4*_),Q=new El(H,T,G,_);Q.type=yn,Q.needsUpdate=!0;const L=M*4;for(let k=0;k<_;k++){const q=A[k],W=w[k],X=z[k],Y=T*G*4*k;for(let ee=0;ee<q.count;ee++){const te=ee*L;x===!0&&(o.fromBufferAttribute(q,ee),H[Y+te+0]=o.x,H[Y+te+1]=o.y,H[Y+te+2]=o.z,H[Y+te+3]=0),b===!0&&(o.fromBufferAttribute(W,ee),H[Y+te+4]=o.x,H[Y+te+5]=o.y,H[Y+te+6]=o.z,H[Y+te+7]=0),C===!0&&(o.fromBufferAttribute(X,ee),H[Y+te+8]=o.x,H[Y+te+9]=o.y,H[Y+te+10]=o.z,H[Y+te+11]=X.itemSize===4?o.w:1)}}p={count:_,texture:Q,size:new be(T,G)},s.set(h,p),h.addEventListener("dispose",O)}let u=0;for(let x=0;x<d.length;x++)u+=d[x];const E=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];i[h.id]=_}for(let b=0;b<g;b++){const C=_[b];C[0]=b,C[1]=d[b]}_.sort(Ud);for(let b=0;b<8;b++)b<g&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Dd);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const C=a[b],A=C[0],w=C[1];A!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+b)!==p[A]&&h.setAttribute("morphTarget"+b,p[A]),u&&h.getAttribute("morphNormal"+b)!==u[A]&&h.setAttribute("morphNormal"+b,u[A]),r[b]=w,E+=w):(p&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),u&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),r[b]=0)}const x=h.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Nd(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ll extends Ot{constructor(e,t,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:kn,h!==kn&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===kn&&(i=En),i===void 0&&h===Ti&&(i=Vn),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dl=new Ot,Ul=new Ll(1,1);Ul.compareFunction=vl;const Il=new El,Nl=new xu,Fl=new Cl,Co=[],Po=[],Lo=new Float32Array(16),Do=new Float32Array(9),Uo=new Float32Array(4);function Pi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Co[r];if(s===void 0&&(s=new Float32Array(r),Co[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zr(n,e){let t=Po[e];t===void 0&&(t=new Int32Array(e),Po[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Od(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function Bd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function zd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function Gd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;Uo.set(i),n.uniformMatrix2fv(this.addr,!1,Uo),ut(t,i)}}function Hd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;Do.set(i),n.uniformMatrix3fv(this.addr,!1,Do),ut(t,i)}}function Vd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,i))return;Lo.set(i),n.uniformMatrix4fv(this.addr,!1,Lo),ut(t,i)}}function kd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function Xd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function qd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function Yd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function Kd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function Zd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function $d(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Ul:Dl;t.setTexture2D(e||s,r)}function Jd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nl,r)}function Qd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fl,r)}function ep(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Il,r)}function tp(n){switch(n){case 5126:return Fd;case 35664:return Od;case 35665:return Bd;case 35666:return zd;case 35674:return Gd;case 35675:return Hd;case 35676:return Vd;case 5124:case 35670:return kd;case 35667:case 35671:return Wd;case 35668:case 35672:return Xd;case 35669:case 35673:return qd;case 5125:return Yd;case 36294:return jd;case 36295:return Kd;case 36296:return Zd;case 35678:case 36198:case 36298:case 36306:case 35682:return $d;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return ep}}function np(n,e){n.uniform1fv(this.addr,e)}function ip(n,e){const t=Pi(e,this.size,2);n.uniform2fv(this.addr,t)}function rp(n,e){const t=Pi(e,this.size,3);n.uniform3fv(this.addr,t)}function sp(n,e){const t=Pi(e,this.size,4);n.uniform4fv(this.addr,t)}function ap(n,e){const t=Pi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function op(n,e){const t=Pi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lp(n,e){const t=Pi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cp(n,e){n.uniform1iv(this.addr,e)}function up(n,e){n.uniform2iv(this.addr,e)}function hp(n,e){n.uniform3iv(this.addr,e)}function fp(n,e){n.uniform4iv(this.addr,e)}function dp(n,e){n.uniform1uiv(this.addr,e)}function pp(n,e){n.uniform2uiv(this.addr,e)}function mp(n,e){n.uniform3uiv(this.addr,e)}function gp(n,e){n.uniform4uiv(this.addr,e)}function _p(n,e,t){const i=this.cache,r=e.length,s=Zr(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dl,s[o])}function vp(n,e,t){const i=this.cache,r=e.length,s=Zr(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Nl,s[o])}function xp(n,e,t){const i=this.cache,r=e.length,s=Zr(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fl,s[o])}function Mp(n,e,t){const i=this.cache,r=e.length,s=Zr(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Il,s[o])}function Sp(n){switch(n){case 5126:return np;case 35664:return ip;case 35665:return rp;case 35666:return sp;case 35674:return ap;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return up;case 35668:case 35672:return hp;case 35669:case 35673:return fp;case 5125:return dp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return Mp}}class Ep{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tp(t.type)}}class yp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sp(t.type)}}class Tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function Io(n,e){n.seq.push(e),n.map[e.id]=e}function bp(n,e,t){const i=n.name,r=i.length;for(Is.lastIndex=0;;){const s=Is.exec(i),o=Is.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Io(t,c===void 0?new Ep(a,n,e):new yp(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Tp(a),Io(t,f)),t=f}}}class Rr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);bp(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function No(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ap=37297;let wp=0;function Rp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Cp(n){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(n);let i;switch(e===t?i="":e===Vr&&t===Hr?i="LinearDisplayP3ToLinearSRGB":e===Hr&&t===Vr&&(i="LinearSRGBToLinearDisplayP3"),n){case mn:case Yr:return[i,"LinearTransferOETF"];case vt:case ea:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Fo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Rp(n.getShaderSource(e),o)}else return r}function Pp(n,e){const t=Cp(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Lp(n,e){let t;switch(e){case rl:t="Linear";break;case sl:t="Reinhard";break;case al:t="OptimizedCineon";break;case Js:t="ACESFilmic";break;case ol:t="AgX";break;case Ic:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dp(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function Up(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gi).join(`
`)}function Ip(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Np(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function gi(n){return n!==""}function Oo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(n){return n.replace(Fp,Bp)}const Op=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bp(n,e){let t=Fe[e];if(t===void 0){const i=Op.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return js(t)}const zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zo(n){return n.replace(zp,Gp)}function Gp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Go(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ei:case yi:e="ENVMAP_TYPE_CUBE";break;case qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Wp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case il:e="ENVMAP_BLENDING_MULTIPLY";break;case Dc:e="ENVMAP_BLENDING_MIX";break;case Uc:e="ENVMAP_BLENDING_ADD";break}return e}function Xp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function qp(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hp(t),c=Vp(t),h=kp(t),f=Wp(t),d=Xp(t),m=t.isWebGL2?"":Dp(t),g=Up(t),_=Ip(s),p=r.createProgram();let u,E,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gi).join(`
`),u.length>0&&(u+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gi).join(`
`),E.length>0&&(E+=`
`)):(u=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),E=[m,Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==bn?Lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Pp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gi).join(`
`)),o=js(o),o=Oo(o,t),o=Bo(o,t),a=js(a),a=Oo(a,t),a=Bo(a,t),o=zo(o),a=zo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const b=x+u+o,C=x+E+a,A=No(r,r.VERTEX_SHADER,b),w=No(r,r.FRAGMENT_SHADER,C);r.attachShader(p,A),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function z(H){if(n.debug.checkShaderErrors){const Q=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(w).trim();let k=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,A,w);else{const W=Fo(r,A,"vertex"),X=Fo(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+W+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||O==="")&&(q=!1);q&&(H.diagnostics={runnable:k,programLog:Q,vertexShader:{log:L,prefix:u},fragmentShader:{log:O,prefix:E}})}r.deleteShader(A),r.deleteShader(w),M=new Rr(r,p),T=Np(r,p)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let T;this.getAttributes=function(){return T===void 0&&z(this),T};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(p,Ap)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}let Yp=0;class jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Kp(e),t.set(e,i)),i}}class Kp{constructor(e){this.id=Yp++,this.code=e,this.usedTimes=0}}function Zp(n,e,t,i,r,s,o){const a=new yl,l=new jp,c=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,T,G,H,Q){const L=H.fog,O=Q.geometry,k=M.isMeshStandardMaterial?H.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),W=q&&q.mapping===qr?q.image.height:null,X=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Y=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=Y!==void 0?Y.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let V,j,le,ge;if(X){const Tt=en[X];V=Tt.vertexShader,j=Tt.fragmentShader}else V=M.vertexShader,j=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const me=n.getRenderTarget(),Le=Q.isInstancedMesh===!0,Ie=Q.isBatchedMesh===!0,ye=!!M.map,Xe=!!M.matcap,U=!!q,yt=!!M.aoMap,ve=!!M.lightMap,Ce=!!M.bumpMap,fe=!!M.normalMap,nt=!!M.displacementMap,Oe=!!M.emissiveMap,y=!!M.metalnessMap,v=!!M.roughnessMap,N=M.anisotropy>0,$=M.clearcoat>0,Z=M.iridescence>0,J=M.sheen>0,de=M.transmission>0,oe=N&&!!M.anisotropyMap,ue=$&&!!M.clearcoatMap,Se=$&&!!M.clearcoatNormalMap,Be=$&&!!M.clearcoatRoughnessMap,K=Z&&!!M.iridescenceMap,Ke=Z&&!!M.iridescenceThicknessMap,ke=J&&!!M.sheenColorMap,we=J&&!!M.sheenRoughnessMap,_e=!!M.specularMap,he=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Ye=de&&!!M.transmissionMap,rt=de&&!!M.thicknessMap,Ge=!!M.gradientMap,ne=!!M.alphaMap,R=M.alphaTest>0,re=!!M.alphaHash,se=!!M.extensions,Te=!!O.attributes.uv1,xe=!!O.attributes.uv2,Ze=!!O.attributes.uv3;let $e=bn;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&($e=n.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:j,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ie,instancing:Le,instancingColor:Le&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:mn,map:ye,matcap:Xe,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:W,aoMap:yt,lightMap:ve,bumpMap:Ce,normalMap:fe,displacementMap:d&&nt,emissiveMap:Oe,normalMapObjectSpace:fe&&M.normalMapType===qc,normalMapTangentSpace:fe&&M.normalMapType===_l,metalnessMap:y,roughnessMap:v,anisotropy:N,anisotropyMap:oe,clearcoat:$,clearcoatMap:ue,clearcoatNormalMap:Se,clearcoatRoughnessMap:Be,iridescence:Z,iridescenceMap:K,iridescenceThicknessMap:Ke,sheen:J,sheenColorMap:ke,sheenRoughnessMap:we,specularMap:_e,specularColorMap:he,specularIntensityMap:Ne,transmission:de,transmissionMap:Ye,thicknessMap:rt,gradientMap:Ge,opaque:M.transparent===!1&&M.blending===xi,alphaMap:ne,alphaTest:R,alphaHash:re,combine:M.combine,mapUv:ye&&_(M.map.channel),aoMapUv:yt&&_(M.aoMap.channel),lightMapUv:ve&&_(M.lightMap.channel),bumpMapUv:Ce&&_(M.bumpMap.channel),normalMapUv:fe&&_(M.normalMap.channel),displacementMapUv:nt&&_(M.displacementMap.channel),emissiveMapUv:Oe&&_(M.emissiveMap.channel),metalnessMapUv:y&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:oe&&_(M.anisotropyMap.channel),clearcoatMapUv:ue&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(M.sheenRoughnessMap.channel),specularMapUv:_e&&_(M.specularMap.channel),specularColorMapUv:he&&_(M.specularColorMap.channel),specularIntensityMapUv:Ne&&_(M.specularIntensityMap.channel),transmissionMapUv:Ye&&_(M.transmissionMap.channel),thicknessMapUv:rt&&_(M.thicknessMap.channel),alphaMapUv:ne&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(fe||N),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:xe,vertexUv3s:Ze,pointsUvs:Q.isPoints===!0&&!!O.attributes.uv&&(ye||ne),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===un,flipSided:M.side===Lt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:se&&M.extensions.derivatives===!0,extensionFragDepth:se&&M.extensions.fragDepth===!0,extensionDrawBuffers:se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)T.push(G),T.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(E(T,M),x(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function E(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const T=g[M.type];let G;if(T){const H=en[T];G=Yi.clone(H.uniforms)}else G=M.uniforms;return G}function C(M,T){let G;for(let H=0,Q=c.length;H<Q;H++){const L=c[H];if(L.cacheKey===T){G=L,++G.usedTimes;break}}return G===void 0&&(G=new qp(n,T,M,s),c.push(G)),G}function A(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:z}}function $p(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Jp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ho(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,m,g,_,p){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function a(f,d,m,g,_,p){const u=o(f,d,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(f,d,m,g,_,p){const u=o(f,d,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||Jp),i.length>1&&i.sort(d||Ho),r.length>1&&r.sort(d||Ho)}function h(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Qp(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Vo,n.set(i,[o])):r>=s.length?(o=new Vo,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function em(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Re};break;case"SpotLight":t={position:new P,direction:new P,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function tm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nm=0;function im(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rm(n,e){const t=new em,i=tm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);const s=new P,o=new ot,a=new ot;function l(h,f){let d=0,m=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,p=0,u=0,E=0,x=0,b=0,C=0,A=0,w=0,z=0,M=0;h.sort(im);const T=f===!0?Math.PI:1;for(let H=0,Q=h.length;H<Q;H++){const L=h[H],O=L.color,k=L.intensity,q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*k*T,m+=O.g*k*T,g+=O.b*k*T;else if(L.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(L.sh.coefficients[X],k);M++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const Y=L.shadow,ee=i.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,r.directionalShadow[_]=ee,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=L.shadow.matrix,b++}r.directional[_]=X,_++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(k*T),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,r.spot[u]=X;const Y=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&z++),r.spotLightMatrix[u]=Y.matrix,L.castShadow){const ee=i.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,r.spotShadow[u]=ee,r.spotShadowMap[u]=W,A++}u++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(O).multiplyScalar(k),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),r.rectArea[E]=X,E++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*T),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Y=L.shadow,ee=i.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=L.shadow.matrix,C++}r.point[p]=X,p++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(k*T),X.groundColor.copy(L.groundColor).multiplyScalar(k*T),r.hemi[x]=X,x++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const G=r.hash;(G.directionalLength!==_||G.pointLength!==p||G.spotLength!==u||G.rectAreaLength!==E||G.hemiLength!==x||G.numDirectionalShadows!==b||G.numPointShadows!==C||G.numSpotShadows!==A||G.numSpotMaps!==w||G.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=E,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=A+w-z,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=M,G.directionalLength=_,G.pointLength=p,G.spotLength=u,G.rectAreaLength=E,G.hemiLength=x,G.numDirectionalShadows=b,G.numPointShadows=C,G.numSpotShadows=A,G.numSpotMaps=w,G.numLightProbes=M,r.version=nm++)}function c(h,f){let d=0,m=0,g=0,_=0,p=0;const u=f.matrixWorldInverse;for(let E=0,x=h.length;E<x;E++){const b=h[E];if(b.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),d++}else if(b.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),g++}else if(b.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(b.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(u),m++}else if(b.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function ko(n,e){const t=new rm(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sm(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ko(n,e),t.set(s,[l])):o>=a.length?(l=new ko(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class am extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class om extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function um(n,e,t){let i=new ia;const r=new be,s=new be,o=new mt,a=new am({depthPacking:Xc}),l=new om,c={},h=t.maxTextureSize,f={[wn]:Lt,[Lt]:wn,[un]:un},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:lm,fragmentShader:cm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new et(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let u=this.type;this.render=function(A,w,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),T=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),H=n.state;H.setBlending(fn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Q=u!==cn&&this.type===cn,L=u===cn&&this.type!==cn;for(let O=0,k=A.length;O<k;O++){const q=A[O],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const X=W.getFrameExtents();if(r.multiply(X),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||Q===!0||L===!0){const ee=this.type!==cn?{minFilter:Rt,magFilter:Rt}:{};W.map!==null&&W.map.dispose(),W.map=new Jt(r.x,r.y,ee),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Y=W.getViewportCount();for(let ee=0;ee<Y;ee++){const te=W.getViewport(ee);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),H.viewport(o),W.updateMatrices(q,ee),i=W.getFrustum(),b(w,z,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===cn&&E(W,z),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(M,T,G)};function E(A,w){const z=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jt(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,z,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,z,m,_,null)}function x(A,w,z,M){let T=null;const G=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)T=G;else if(T=z.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=T.uuid,Q=w.uuid;let L=c[H];L===void 0&&(L={},c[H]=L);let O=L[Q];O===void 0&&(O=T.clone(),L[Q]=O,w.addEventListener("dispose",C)),T=O}if(T.visible=w.visible,T.wireframe=w.wireframe,M===cn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=n.properties.get(T);H.light=z}return T}function b(A,w,z,M,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===cn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),L=A.material;if(Array.isArray(L)){const O=Q.groups;for(let k=0,q=O.length;k<q;k++){const W=O[k],X=L[W.materialIndex];if(X&&X.visible){const Y=x(A,X,M,T);A.onBeforeShadow(n,A,w,z,Q,Y,W),n.renderBufferDirect(z,null,Q,Y,A,W),A.onAfterShadow(n,A,w,z,Q,Y,W)}}}else if(L.visible){const O=x(A,L,M,T);A.onBeforeShadow(n,A,w,z,Q,O,null),n.renderBufferDirect(z,null,Q,O,A,null),A.onAfterShadow(n,A,w,z,Q,O,null)}}const H=A.children;for(let Q=0,L=H.length;Q<L;Q++)b(H[Q],w,z,M,T)}function C(A){A.target.removeEventListener("dispose",C);for(const z in c){const M=c[z],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function hm(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const re=new mt;let se=null;const Te=new mt(0,0,0,0);return{setMask:function(xe){se!==xe&&!R&&(n.colorMask(xe,xe,xe,xe),se=xe)},setLocked:function(xe){R=xe},setClear:function(xe,Ze,$e,ht,Tt){Tt===!0&&(xe*=ht,Ze*=ht,$e*=ht),re.set(xe,Ze,$e,ht),Te.equals(re)===!1&&(n.clearColor(xe,Ze,$e,ht),Te.copy(re))},reset:function(){R=!1,se=null,Te.set(-1,0,0,0)}}}function s(){let R=!1,re=null,se=null,Te=null;return{setTest:function(xe){xe?Ie(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(xe){re!==xe&&!R&&(n.depthMask(xe),re=xe)},setFunc:function(xe){if(se!==xe){switch(xe){case bc:n.depthFunc(n.NEVER);break;case Ac:n.depthFunc(n.ALWAYS);break;case wc:n.depthFunc(n.LESS);break;case zr:n.depthFunc(n.LEQUAL);break;case Rc:n.depthFunc(n.EQUAL);break;case Cc:n.depthFunc(n.GEQUAL);break;case Pc:n.depthFunc(n.GREATER);break;case Lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=xe}},setLocked:function(xe){R=xe},setClear:function(xe){Te!==xe&&(n.clearDepth(xe),Te=xe)},reset:function(){R=!1,re=null,se=null,Te=null}}}function o(){let R=!1,re=null,se=null,Te=null,xe=null,Ze=null,$e=null,ht=null,Tt=null;return{setTest:function(Je){R||(Je?Ie(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(Je){re!==Je&&!R&&(n.stencilMask(Je),re=Je)},setFunc:function(Je,bt,Qt){(se!==Je||Te!==bt||xe!==Qt)&&(n.stencilFunc(Je,bt,Qt),se=Je,Te=bt,xe=Qt)},setOp:function(Je,bt,Qt){(Ze!==Je||$e!==bt||ht!==Qt)&&(n.stencilOp(Je,bt,Qt),Ze=Je,$e=bt,ht=Qt)},setLocked:function(Je){R=Je},setClear:function(Je){Tt!==Je&&(n.clearStencil(Je),Tt=Je)},reset:function(){R=!1,re=null,se=null,Te=null,xe=null,Ze=null,$e=null,ht=null,Tt=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,u=!1,E=null,x=null,b=null,C=null,A=null,w=null,z=null,M=new Re(0,0,0),T=0,G=!1,H=null,Q=null,L=null,O=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=X>=2);let ee=null,te={};const V=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),le=new mt().fromArray(V),ge=new mt().fromArray(j);function me(R,re,se,Te){const xe=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(R,Ze),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<se;$e++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(re,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(re+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return Ze}const Le={};Le[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(n.DEPTH_TEST),l.setFunc(zr),Oe(!1),y(ya),Ie(n.CULL_FACE),fe(fn);function Ie(R){d[R]!==!0&&(n.enable(R),d[R]=!0)}function ye(R){d[R]!==!1&&(n.disable(R),d[R]=!1)}function Xe(R,re){return m[R]!==re?(n.bindFramebuffer(R,re),m[R]=re,i&&(R===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=re),R===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function U(R,re){let se=_,Te=!1;if(R)if(se=g.get(re),se===void 0&&(se=[],g.set(re,se)),R.isWebGLMultipleRenderTargets){const xe=R.texture;if(se.length!==xe.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,$e=xe.length;Ze<$e;Ze++)se[Ze]=n.COLOR_ATTACHMENT0+Ze;se.length=xe.length,Te=!0}}else se[0]!==n.COLOR_ATTACHMENT0&&(se[0]=n.COLOR_ATTACHMENT0,Te=!0);else se[0]!==n.BACK&&(se[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function yt(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const ve={[On]:n.FUNC_ADD,[uc]:n.FUNC_SUBTRACT,[hc]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[Aa]=n.MIN,ve[wa]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ve[Aa]=R.MIN_EXT,ve[wa]=R.MAX_EXT)}const Ce={[fc]:n.ZERO,[dc]:n.ONE,[pc]:n.SRC_COLOR,[Gs]:n.SRC_ALPHA,[Mc]:n.SRC_ALPHA_SATURATE,[vc]:n.DST_COLOR,[gc]:n.DST_ALPHA,[mc]:n.ONE_MINUS_SRC_COLOR,[Hs]:n.ONE_MINUS_SRC_ALPHA,[xc]:n.ONE_MINUS_DST_COLOR,[_c]:n.ONE_MINUS_DST_ALPHA,[Sc]:n.CONSTANT_COLOR,[Ec]:n.ONE_MINUS_CONSTANT_COLOR,[yc]:n.CONSTANT_ALPHA,[Tc]:n.ONE_MINUS_CONSTANT_ALPHA};function fe(R,re,se,Te,xe,Ze,$e,ht,Tt,Je){if(R===fn){u===!0&&(ye(n.BLEND),u=!1);return}if(u===!1&&(Ie(n.BLEND),u=!0),R!==cc){if(R!==E||Je!==G){if((x!==On||A!==On)&&(n.blendEquation(n.FUNC_ADD),x=On,A=On),Je)switch(R){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Si:n.blendFunc(n.ONE,n.ONE);break;case Ta:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ba:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Si:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ta:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ba:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,C=null,w=null,z=null,M.set(0,0,0),T=0,E=R,G=Je}return}xe=xe||re,Ze=Ze||se,$e=$e||Te,(re!==x||xe!==A)&&(n.blendEquationSeparate(ve[re],ve[xe]),x=re,A=xe),(se!==b||Te!==C||Ze!==w||$e!==z)&&(n.blendFuncSeparate(Ce[se],Ce[Te],Ce[Ze],Ce[$e]),b=se,C=Te,w=Ze,z=$e),(ht.equals(M)===!1||Tt!==T)&&(n.blendColor(ht.r,ht.g,ht.b,Tt),M.copy(ht),T=Tt),E=R,G=!1}function nt(R,re){R.side===un?ye(n.CULL_FACE):Ie(n.CULL_FACE);let se=R.side===Lt;re&&(se=!se),Oe(se),R.blending===xi&&R.transparent===!1?fe(fn):fe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Te=R.stencilWrite;c.setTest(Te),Te&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),N(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(R){H!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),H=R)}function y(R){R!==ac?(Ie(n.CULL_FACE),R!==Q&&(R===ya?n.cullFace(n.BACK):R===oc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),Q=R}function v(R){R!==L&&(W&&n.lineWidth(R),L=R)}function N(R,re,se){R?(Ie(n.POLYGON_OFFSET_FILL),(O!==re||k!==se)&&(n.polygonOffset(re,se),O=re,k=se)):ye(n.POLYGON_OFFSET_FILL)}function $(R){R?Ie(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Z(R){R===void 0&&(R=n.TEXTURE0+q-1),ee!==R&&(n.activeTexture(R),ee=R)}function J(R,re,se){se===void 0&&(ee===null?se=n.TEXTURE0+q-1:se=ee);let Te=te[se];Te===void 0&&(Te={type:void 0,texture:void 0},te[se]=Te),(Te.type!==R||Te.texture!==re)&&(ee!==se&&(n.activeTexture(se),ee=se),n.bindTexture(R,re||Le[R]),Te.type=R,Te.texture=re)}function de(){const R=te[ee];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(R){le.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function Ye(R){ge.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ge.copy(R))}function rt(R,re){let se=f.get(re);se===void 0&&(se=new WeakMap,f.set(re,se));let Te=se.get(R);Te===void 0&&(Te=n.getUniformBlockIndex(re,R.name),se.set(R,Te))}function Ge(R,re){const Te=f.get(re).get(R);h.get(re)!==Te&&(n.uniformBlockBinding(re,Te,R.__bindingPointIndex),h.set(re,Te))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ee=null,te={},m={},g=new WeakMap,_=[],p=null,u=!1,E=null,x=null,b=null,C=null,A=null,w=null,z=null,M=new Re(0,0,0),T=0,G=!1,H=null,Q=null,L=null,O=null,k=null,le.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:ye,bindFramebuffer:Xe,drawBuffers:U,useProgram:yt,setBlending:fe,setMaterial:nt,setFlipSided:Oe,setCullFace:y,setLineWidth:v,setPolygonOffset:N,setScissorTest:$,activeTexture:Z,bindTexture:J,unbindTexture:de,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:_e,texImage3D:he,updateUBOMapping:rt,uniformBlockBinding:Ge,texStorage2D:ke,texStorage3D:we,texSubImage2D:Se,texSubImage3D:Be,compressedTexSubImage2D:K,compressedTexSubImage3D:Ke,scissor:Ne,viewport:Ye,reset:ne}}function fm(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return m?new OffscreenCanvas(y,v):Xr("canvas")}function _(y,v,N,$){let Z=1;if((y.width>$||y.height>$)&&(Z=$/Math.max(y.width,y.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const J=v?Wr:Math.floor,de=J(Z*y.width),oe=J(Z*y.height);f===void 0&&(f=g(de,oe));const ue=N?g(de,oe):f;return ue.width=de,ue.height=oe,ue.getContext("2d").drawImage(y,0,0,de,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+de+"x"+oe+")."),ue}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Ys(y.width)&&Ys(y.height)}function u(y){return a?!1:y.wrapS!==Zt||y.wrapT!==Zt||y.minFilter!==Rt&&y.minFilter!==Ht}function E(y,v){return y.generateMipmaps&&v&&y.minFilter!==Rt&&y.minFilter!==Ht}function x(y){n.generateMipmap(y)}function b(y,v,N,$,Z=!1){if(a===!1)return v;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let J=v;if(v===n.RED&&(N===n.FLOAT&&(J=n.R32F),N===n.HALF_FLOAT&&(J=n.R16F),N===n.UNSIGNED_BYTE&&(J=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(J=n.R8UI),N===n.UNSIGNED_SHORT&&(J=n.R16UI),N===n.UNSIGNED_INT&&(J=n.R32UI),N===n.BYTE&&(J=n.R8I),N===n.SHORT&&(J=n.R16I),N===n.INT&&(J=n.R32I)),v===n.RG&&(N===n.FLOAT&&(J=n.RG32F),N===n.HALF_FLOAT&&(J=n.RG16F),N===n.UNSIGNED_BYTE&&(J=n.RG8)),v===n.RGBA){const de=Z?Gr:je.getTransfer($);N===n.FLOAT&&(J=n.RGBA32F),N===n.HALF_FLOAT&&(J=n.RGBA16F),N===n.UNSIGNED_BYTE&&(J=de===Qe?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function C(y,v,N){return E(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==Rt&&y.minFilter!==Ht?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function A(y){return y===Rt||y===Ra||y===os?n.NEAREST:n.LINEAR}function w(y){const v=y.target;v.removeEventListener("dispose",w),M(v),v.isVideoTexture&&h.delete(v)}function z(y){const v=y.target;v.removeEventListener("dispose",z),G(v)}function M(y){const v=i.get(y);if(v.__webglInit===void 0)return;const N=y.source,$=d.get(N);if($){const Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(y),Object.keys($).length===0&&d.delete(N)}i.remove(y)}function T(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const N=y.source,$=d.get(N);delete $[v.__cacheKey],o.memory.textures--}function G(y){const v=y.texture,N=i.get(y),$=i.get(v);if($.__webglTexture!==void 0&&(n.deleteTexture($.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(N.__webglFramebuffer[Z]))for(let J=0;J<N.__webglFramebuffer[Z].length;J++)n.deleteFramebuffer(N.__webglFramebuffer[Z][J]);else n.deleteFramebuffer(N.__webglFramebuffer[Z]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[Z])}else{if(Array.isArray(N.__webglFramebuffer))for(let Z=0;Z<N.__webglFramebuffer.length;Z++)n.deleteFramebuffer(N.__webglFramebuffer[Z]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Z=0;Z<N.__webglColorRenderbuffer.length;Z++)N.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[Z]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Z=0,J=v.length;Z<J;Z++){const de=i.get(v[Z]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(v[Z])}i.remove(v),i.remove(y)}let H=0;function Q(){H=0}function L(){const y=H;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),H+=1,y}function O(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function k(y,v){const N=i.get(y);if(y.isVideoTexture&&nt(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const $=y.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(N,y,v);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function q(y,v){const N=i.get(y);if(y.version>0&&N.__version!==y.version){le(N,y,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function W(y,v){const N=i.get(y);if(y.version>0&&N.__version!==y.version){le(N,y,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function X(y,v){const N=i.get(y);if(y.version>0&&N.__version!==y.version){ge(N,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}const Y={[Ws]:n.REPEAT,[Zt]:n.CLAMP_TO_EDGE,[Xs]:n.MIRRORED_REPEAT},ee={[Rt]:n.NEAREST,[Ra]:n.NEAREST_MIPMAP_NEAREST,[os]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Nc]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},te={[Yc]:n.NEVER,[Qc]:n.ALWAYS,[jc]:n.LESS,[vl]:n.LEQUAL,[Kc]:n.EQUAL,[Jc]:n.GEQUAL,[Zc]:n.GREATER,[$c]:n.NOTEQUAL};function V(y,v,N){if(N?(n.texParameteri(y,n.TEXTURE_WRAP_S,Y[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,Y[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,Y[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ee[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ee[v.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Zt||v.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Rt&&v.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Rt||v.minFilter!==os&&v.minFilter!==Xi||v.type===yn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===dn&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(y,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function j(y,v){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",w));const $=v.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const J=O(v);if(J!==y.__cacheKey){Z[J]===void 0&&(Z[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Z[J].usedTimes++;const de=Z[y.__cacheKey];de!==void 0&&(Z[y.__cacheKey].usedTimes--,de.usedTimes===0&&T(v)),y.__cacheKey=J,y.__webglTexture=Z[J].texture}return N}function le(y,v,N){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const Z=j(y,v),J=v.source;t.bindTexture($,y.__webglTexture,n.TEXTURE0+N);const de=i.get(J);if(J.version!==de.__version||Z===!0){t.activeTexture(n.TEXTURE0+N);const oe=je.getPrimaries(je.workingColorSpace),ue=v.colorSpace===Wt?null:je.getPrimaries(v.colorSpace),Se=v.colorSpace===Wt||oe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Be=u(v)&&p(v.image)===!1;let K=_(v.image,Be,!1,r.maxTextureSize);K=Oe(v,K);const Ke=p(K)||a,ke=s.convert(v.format,v.colorSpace);let we=s.convert(v.type),_e=b(v.internalFormat,ke,we,v.colorSpace,v.isVideoTexture);V($,v,Ke);let he;const Ne=v.mipmaps,Ye=a&&v.isVideoTexture!==!0&&_e!==ml,rt=de.__version===void 0||Z===!0,Ge=C(v,K,Ke);if(v.isDepthTexture)_e=n.DEPTH_COMPONENT,a?v.type===yn?_e=n.DEPTH_COMPONENT32F:v.type===En?_e=n.DEPTH_COMPONENT24:v.type===Vn?_e=n.DEPTH24_STENCIL8:_e=n.DEPTH_COMPONENT16:v.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===kn&&_e===n.DEPTH_COMPONENT&&v.type!==Qs&&v.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=En,we=s.convert(v.type)),v.format===Ti&&_e===n.DEPTH_COMPONENT&&(_e=n.DEPTH_STENCIL,v.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Vn,we=s.convert(v.type))),rt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,_e,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,ke,we,null));else if(v.isDataTexture)if(Ne.length>0&&Ke){Ye&&rt&&t.texStorage2D(n.TEXTURE_2D,Ge,_e,Ne[0].width,Ne[0].height);for(let ne=0,R=Ne.length;ne<R;ne++)he=Ne[ne],Ye?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,he.width,he.height,ke,we,he.data):t.texImage2D(n.TEXTURE_2D,ne,_e,he.width,he.height,0,ke,we,he.data);v.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(n.TEXTURE_2D,Ge,_e,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,ke,we,K.data)):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,ke,we,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,_e,Ne[0].width,Ne[0].height,K.depth);for(let ne=0,R=Ne.length;ne<R;ne++)he=Ne[ne],v.format!==$t?ke!==null?Ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,K.depth,ke,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,_e,he.width,he.height,K.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,K.depth,ke,we,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,_e,he.width,he.height,K.depth,0,ke,we,he.data)}else{Ye&&rt&&t.texStorage2D(n.TEXTURE_2D,Ge,_e,Ne[0].width,Ne[0].height);for(let ne=0,R=Ne.length;ne<R;ne++)he=Ne[ne],v.format!==$t?ke!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,he.width,he.height,ke,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,he.width,he.height,ke,we,he.data):t.texImage2D(n.TEXTURE_2D,ne,_e,he.width,he.height,0,ke,we,he.data)}else if(v.isDataArrayTexture)Ye?(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,_e,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ke,we,K.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,K.width,K.height,K.depth,0,ke,we,K.data);else if(v.isData3DTexture)Ye?(rt&&t.texStorage3D(n.TEXTURE_3D,Ge,_e,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ke,we,K.data)):t.texImage3D(n.TEXTURE_3D,0,_e,K.width,K.height,K.depth,0,ke,we,K.data);else if(v.isFramebufferTexture){if(rt)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ge,_e,K.width,K.height);else{let ne=K.width,R=K.height;for(let re=0;re<Ge;re++)t.texImage2D(n.TEXTURE_2D,re,_e,ne,R,0,ke,we,null),ne>>=1,R>>=1}}else if(Ne.length>0&&Ke){Ye&&rt&&t.texStorage2D(n.TEXTURE_2D,Ge,_e,Ne[0].width,Ne[0].height);for(let ne=0,R=Ne.length;ne<R;ne++)he=Ne[ne],Ye?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ke,we,he):t.texImage2D(n.TEXTURE_2D,ne,_e,ke,we,he);v.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(n.TEXTURE_2D,Ge,_e,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,we,K)):t.texImage2D(n.TEXTURE_2D,0,_e,ke,we,K);E(v,Ke)&&x($),de.__version=J.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ge(y,v,N){if(v.image.length!==6)return;const $=j(y,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+N);const J=i.get(Z);if(Z.version!==J.__version||$===!0){t.activeTexture(n.TEXTURE0+N);const de=je.getPrimaries(je.workingColorSpace),oe=v.colorSpace===Wt?null:je.getPrimaries(v.colorSpace),ue=v.colorSpace===Wt||de===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,Be=v.image[0]&&v.image[0].isDataTexture,K=[];for(let ne=0;ne<6;ne++)!Se&&!Be?K[ne]=_(v.image[ne],!1,!0,r.maxCubemapSize):K[ne]=Be?v.image[ne].image:v.image[ne],K[ne]=Oe(v,K[ne]);const Ke=K[0],ke=p(Ke)||a,we=s.convert(v.format,v.colorSpace),_e=s.convert(v.type),he=b(v.internalFormat,we,_e,v.colorSpace),Ne=a&&v.isVideoTexture!==!0,Ye=J.__version===void 0||$===!0;let rt=C(v,Ke,ke);V(n.TEXTURE_CUBE_MAP,v,ke);let Ge;if(Se){Ne&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,rt,he,Ke.width,Ke.height);for(let ne=0;ne<6;ne++){Ge=K[ne].mipmaps;for(let R=0;R<Ge.length;R++){const re=Ge[R];v.format!==$t?we!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,re.width,re.height,we,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,he,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,re.width,re.height,we,_e,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,he,re.width,re.height,0,we,_e,re.data)}}}else{Ge=v.mipmaps,Ne&&Ye&&(Ge.length>0&&rt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,rt,he,K[0].width,K[0].height));for(let ne=0;ne<6;ne++)if(Be){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,K[ne].width,K[ne].height,we,_e,K[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,K[ne].width,K[ne].height,0,we,_e,K[ne].data);for(let R=0;R<Ge.length;R++){const se=Ge[R].image[ne].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,se.width,se.height,we,_e,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,he,se.width,se.height,0,we,_e,se.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,we,_e,K[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,we,_e,K[ne]);for(let R=0;R<Ge.length;R++){const re=Ge[R];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,we,_e,re.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,he,we,_e,re.image[ne])}}}E(v,ke)&&x(n.TEXTURE_CUBE_MAP),J.__version=Z.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function me(y,v,N,$,Z,J){const de=s.convert(N.format,N.colorSpace),oe=s.convert(N.type),ue=b(N.internalFormat,de,oe,N.colorSpace);if(!i.get(v).__hasExternalTextures){const Be=Math.max(1,v.width>>J),K=Math.max(1,v.height>>J);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,J,ue,Be,K,v.depth,0,de,oe,null):t.texImage2D(Z,J,ue,Be,K,0,de,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),fe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,i.get(N).__webglTexture,0,Ce(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,i.get(N).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(y,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let $=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||fe(v)){const Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===yn?$=n.DEPTH_COMPONENT32F:Z.type===En&&($=n.DEPTH_COMPONENT24));const J=Ce(v);fe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,$,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,$,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const $=Ce(v);N&&fe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$,n.DEPTH24_STENCIL8,v.width,v.height):fe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const $=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Z=0;Z<$.length;Z++){const J=$[Z],de=s.convert(J.format,J.colorSpace),oe=s.convert(J.type),ue=b(J.internalFormat,de,oe,J.colorSpace),Se=Ce(v);N&&fe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ue,v.width,v.height):fe(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);const $=i.get(v.depthTexture).__webglTexture,Z=Ce(v);if(v.depthTexture.format===kn)fe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(v.depthTexture.format===Ti)fe(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ye(y){const v=i.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ie(v.__webglFramebuffer,y)}else if(N){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]=n.createRenderbuffer(),Le(v.__webglDepthbuffer[$],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Le(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(y,v,N){const $=i.get(y);v!==void 0&&me($.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&ye(y)}function U(y){const v=y.texture,N=i.get(y),$=i.get(v);y.addEventListener("dispose",z),y.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++);const Z=y.isWebGLCubeRenderTarget===!0,J=y.isWebGLMultipleRenderTargets===!0,de=p(y)||a;if(Z){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let ue=0;ue<v.mipmaps.length;ue++)N.__webglFramebuffer[oe][ue]=n.createFramebuffer()}else N.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)N.__webglFramebuffer[oe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(J)if(r.drawBuffers){const oe=y.texture;for(let ue=0,Se=oe.length;ue<Se;ue++){const Be=i.get(oe[ue]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&fe(y)===!1){const oe=J?v:[v];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<oe.length;ue++){const Se=oe[ue];N.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const Be=s.convert(Se.format,Se.colorSpace),K=s.convert(Se.type),Ke=b(Se.internalFormat,Be,K,Se.colorSpace,y.isXRRenderTarget===!0),ke=Ce(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Ke,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),V(n.TEXTURE_CUBE_MAP,v,de);for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)me(N.__webglFramebuffer[oe][ue],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else me(N.__webglFramebuffer[oe],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);E(v,de)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const oe=y.texture;for(let ue=0,Se=oe.length;ue<Se;ue++){const Be=oe[ue],K=i.get(Be);t.bindTexture(n.TEXTURE_2D,K.__webglTexture),V(n.TEXTURE_2D,Be,de),me(N.__webglFramebuffer,y,Be,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),E(Be,de)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?oe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,$.__webglTexture),V(oe,v,de),a&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)me(N.__webglFramebuffer[ue],y,v,n.COLOR_ATTACHMENT0,oe,ue);else me(N.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,oe,0);E(v,de)&&x(oe),t.unbindTexture()}y.depthBuffer&&ye(y)}function yt(y){const v=p(y)||a,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0,Z=N.length;$<Z;$++){const J=N[$];if(E(J,v)){const de=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(J).__webglTexture;t.bindTexture(de,oe),x(de),t.unbindTexture()}}}function ve(y){if(a&&y.samples>0&&fe(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,$=y.height;let Z=n.COLOR_BUFFER_BIT;const J=[],de=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(y),ue=y.isWebGLMultipleRenderTargets===!0;if(ue)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){J.push(n.COLOR_ATTACHMENT0+Se),y.depthBuffer&&J.push(de);const Be=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Be===!1&&(y.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Se]),Be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[de]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[de])),ue){const K=i.get(v[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,N,$,0,0,N,$,Z,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Se]);const Be=i.get(v[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ce(y){return Math.min(r.maxSamples,y.samples)}function fe(y){const v=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function nt(y){const v=o.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function Oe(y,v){const N=y.colorSpace,$=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===qs||N!==mn&&N!==Wt&&(je.getTransfer(N)===Qe?a===!1?e.has("EXT_sRGB")===!0&&$===$t?(y.format=qs,y.minFilter=Ht,y.generateMipmaps=!1):v=Ml.sRGBToLinear(v):($!==$t||Z!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=L,this.resetTextureUnits=Q,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Xe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=me,this.useMultisampledRTT=fe}function dm(n,e,t){const i=t.isWebGL2;function r(s,o=Wt){let a;const l=je.getTransfer(o);if(s===An)return n.UNSIGNED_BYTE;if(s===ul)return n.UNSIGNED_SHORT_4_4_4_4;if(s===hl)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Fc)return n.BYTE;if(s===Oc)return n.SHORT;if(s===Qs)return n.UNSIGNED_SHORT;if(s===cl)return n.INT;if(s===En)return n.UNSIGNED_INT;if(s===yn)return n.FLOAT;if(s===dn)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Bc)return n.ALPHA;if(s===$t)return n.RGBA;if(s===zc)return n.LUMINANCE;if(s===Gc)return n.LUMINANCE_ALPHA;if(s===kn)return n.DEPTH_COMPONENT;if(s===Ti)return n.DEPTH_STENCIL;if(s===qs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Hc)return n.RED;if(s===fl)return n.RED_INTEGER;if(s===Vc)return n.RG;if(s===dl)return n.RG_INTEGER;if(s===pl)return n.RGBA_INTEGER;if(s===ls||s===cs||s===us||s===hs)if(l===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ls)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ls)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===us)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ca||s===Pa||s===La||s===Da)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ca)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===La)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Da)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ml)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ua||s===Ia)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ua)return l===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ia)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Na||s===Fa||s===Oa||s===Ba||s===za||s===Ga||s===Ha||s===Va||s===ka||s===Wa||s===Xa||s===qa||s===Ya||s===ja)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Na)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fa)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oa)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ba)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===za)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ga)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ha)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Va)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ka)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wa)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xa)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qa)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ya)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ja)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fs||s===Ka||s===Za)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===fs)return l===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ka)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Za)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kc||s===$a||s===Ja||s===Qa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===fs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===$a)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ja)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class pm extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tn extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mm={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class gm extends wi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,u=null;const E=[],x=[],b=new be;let C=null;const A=new Vt;A.layers.enable(1),A.viewport=new mt;const w=new Vt;w.layers.enable(2),w.viewport=new mt;const z=[A,w],M=new pm;M.layers.enable(1),M.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=E[V];return j===void 0&&(j=new Ns,E[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=E[V];return j===void 0&&(j=new Ns,E[V]=j),j.getGripSpace()},this.getHand=function(V){let j=E[V];return j===void 0&&(j=new Ns,E[V]=j),j.getHandSpace()};function H(V){const j=x.indexOf(V.inputSource);if(j===-1)return;const le=E[j];le!==void 0&&(le.update(V.inputSource,V.frame,c||o),le.dispatchEvent({type:V.type,data:V.inputSource}))}function Q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",L);for(let V=0;V<E.length;V++){const j=x[V];j!==null&&(x[V]=null,E[V].disconnect(j))}T=null,G=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,u=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Jt(m.framebufferWidth,m.framebufferHeight,{format:$t,type:An,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,le=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?Ti:kn,le=_.stencil?Vn:En);const me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new Jt(d.textureWidth,d.textureHeight,{format:$t,type:An,depthTexture:new Ll(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Le=e.properties.get(u);Le.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(V){for(let j=0;j<V.removed.length;j++){const le=V.removed[j],ge=x.indexOf(le);ge>=0&&(x[ge]=null,E[ge].disconnect(le))}for(let j=0;j<V.added.length;j++){const le=V.added[j];let ge=x.indexOf(le);if(ge===-1){for(let Le=0;Le<E.length;Le++)if(Le>=x.length){x.push(le),ge=Le;break}else if(x[Le]===null){x[Le]=le,ge=Le;break}if(ge===-1)break}const me=E[ge];me&&me.connect(le)}}const O=new P,k=new P;function q(V,j,le){O.setFromMatrixPosition(j.matrixWorld),k.setFromMatrixPosition(le.matrixWorld);const ge=O.distanceTo(k),me=j.projectionMatrix.elements,Le=le.projectionMatrix.elements,Ie=me[14]/(me[10]-1),ye=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],U=(me[9]-1)/me[5],yt=(me[8]-1)/me[0],ve=(Le[8]+1)/Le[0],Ce=Ie*yt,fe=Ie*ve,nt=ge/(-yt+ve),Oe=nt*-yt;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Oe),V.translateZ(nt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const y=Ie+nt,v=ye+nt,N=Ce-Oe,$=fe+(ge-Oe),Z=Xe*ye/v*y,J=U*ye/v*y;V.projectionMatrix.makePerspective(N,$,Z,J,y,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;M.near=w.near=A.near=V.near,M.far=w.far=A.far=V.far,(T!==M.near||G!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,G=M.far);const j=V.parent,le=M.cameras;W(M,j);for(let ge=0;ge<le.length;ge++)W(le[ge],j);le.length===2?q(M,A,w):M.projectionMatrix.copy(A.projectionMatrix),X(V,M,j)};function X(V,j,le){le===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=qi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let Y=null;function ee(V,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const le=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ge=!1;le.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let me=0;me<le.length;me++){const Le=le[me];let Ie=null;if(m!==null)Ie=m.getViewport(Le);else{const Xe=f.getViewSubImage(d,Le);Ie=Xe.viewport,me===0&&(e.setRenderTargetTextures(u,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(u))}let ye=z[me];ye===void 0&&(ye=new Vt,ye.layers.enable(me),ye.viewport=new mt,z[me]=ye),ye.matrix.fromArray(Le.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Le.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),me===0&&(M.matrix.copy(ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(ye)}}for(let le=0;le<E.length;le++){const ge=x[le],me=E[le];ge!==null&&me!==void 0&&me.update(ge,j,c||o)}Y&&Y(V,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const te=new Pl;te.setAnimationLoop(ee),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}}function _m(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,wl(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,E,x,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,b)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,E,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Lt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Lt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const E=e.get(u).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,E,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Lt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const E=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vm(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const b=x.program;i.uniformBlockBinding(E,b)}function c(E,x){let b=r[E.id];b===void 0&&(g(E),b=h(E),r[E.id]=b,E.addEventListener("dispose",p));const C=x.program;i.updateUBOMapping(E,C);const A=e.render.frame;s[E.id]!==A&&(d(E),s[E.id]=A)}function h(E){const x=f();E.__bindingPointIndex=x;const b=n.createBuffer(),C=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,b),b}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=r[E.id],b=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,w=b.length;A<w;A++){const z=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,T=z.length;M<T;M++){const G=z[M];if(m(G,A,M,C)===!0){const H=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let L=0;for(let O=0;O<Q.length;O++){const k=Q[O],q=_(k);typeof k=="number"||typeof k=="boolean"?(G.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,H+L,G.__data)):k.isMatrix3?(G.__data[0]=k.elements[0],G.__data[1]=k.elements[1],G.__data[2]=k.elements[2],G.__data[3]=0,G.__data[4]=k.elements[3],G.__data[5]=k.elements[4],G.__data[6]=k.elements[5],G.__data[7]=0,G.__data[8]=k.elements[6],G.__data[9]=k.elements[7],G.__data[10]=k.elements[8],G.__data[11]=0):(k.toArray(G.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,x,b,C){const A=E.value,w=x+"_"+b;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const z=C[w];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return C[w]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function g(E){const x=E.uniforms;let b=0;const C=16;for(let w=0,z=x.length;w<z;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,G=M.length;T<G;T++){const H=M[T],Q=Array.isArray(H.value)?H.value:[H.value];for(let L=0,O=Q.length;L<O;L++){const k=Q[L],q=_(k),W=b%C;W!==0&&C-W<q.boundary&&(b+=C-W),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=q.storage}}}const A=b%C;return A>0&&(b+=C-A),E.__size=b,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Ol{constructor(e={}){const{canvas:t=pu(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const x=this;let b=!1,C=0,A=0,w=null,z=-1,M=null;const T=new mt,G=new mt;let H=null;const Q=new Re(0);let L=0,O=t.width,k=t.height,q=1,W=null,X=null;const Y=new mt(0,0,O,k),ee=new mt(0,0,O,k);let te=!1;const V=new ia;let j=!1,le=!1,ge=null;const me=new ot,Le=new be,Ie=new P,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return w===null?q:1}let U=i;function yt(S,D){for(let F=0;F<S.length;F++){const B=S[F],I=t.getContext(B,D);if(I!==null)return I}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$s}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",re,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),U=yt(D,S),U===null)throw yt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ve,Ce,fe,nt,Oe,y,v,N,$,Z,J,de,oe,ue,Se,Be,K,Ke,ke,we,_e,he,Ne,Ye;function rt(){ve=new Rd(U),Ce=new Ed(U,ve,e),ve.init(Ce),he=new dm(U,ve,Ce),fe=new hm(U,ve,Ce),nt=new Ld(U),Oe=new $p,y=new fm(U,ve,fe,Oe,Ce,he,nt),v=new Td(x),N=new wd(x),$=new Bu(U,Ce),Ne=new Md(U,ve,$,Ce),Z=new Cd(U,$,nt,Ne),J=new Nd(U,Z,$,nt),ke=new Id(U,Ce,y),Be=new yd(Oe),de=new Zp(x,v,N,ve,Ce,Ne,Be),oe=new _m(x,Oe),ue=new Qp,Se=new sm(ve,Ce),Ke=new xd(x,v,N,fe,J,d,l),K=new um(x,J,Ce),Ye=new vm(U,nt,Ce,fe),we=new Sd(U,ve,nt,Ce),_e=new Pd(U,ve,nt,Ce),nt.programs=de.programs,x.capabilities=Ce,x.extensions=ve,x.properties=Oe,x.renderLists=ue,x.shadowMap=K,x.state=fe,x.info=nt}rt();const Ge=new gm(x,U);this.xr=Ge,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(O,k,!1))},this.getSize=function(S){return S.set(O,k)},this.setSize=function(S,D,F=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,k=D,t.width=Math.floor(S*q),t.height=Math.floor(D*q),F===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(O*q,k*q).floor()},this.setDrawingBufferSize=function(S,D,F){O=S,k=D,q=F,t.width=Math.floor(S*F),t.height=Math.floor(D*F),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,D,F,B){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,D,F,B),fe.viewport(T.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,D,F,B){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,D,F,B),fe.scissor(G.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(S){fe.setScissorTest(te=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(S=!0,D=!0,F=!0){let B=0;if(S){let I=!1;if(w!==null){const ce=w.texture.format;I=ce===pl||ce===dl||ce===fl}if(I){const ce=w.texture.type,pe=ce===An||ce===En||ce===Qs||ce===Vn||ce===ul||ce===hl,Me=Ke.getClearColor(),Ae=Ke.getClearAlpha(),ze=Me.r,Pe=Me.g,De=Me.b;pe?(m[0]=ze,m[1]=Pe,m[2]=De,m[3]=Ae,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=ze,g[1]=Pe,g[2]=De,g[3]=Ae,U.clearBufferiv(U.COLOR,0,g))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT),F&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ue.dispose(),Se.dispose(),Oe.dispose(),v.dispose(),N.dispose(),J.dispose(),Ne.dispose(),Ye.dispose(),de.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Tt),Ge.removeEventListener("sessionend",Je),ge&&(ge.dispose(),ge=null),bt.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=nt.autoReset,D=K.enabled,F=K.autoUpdate,B=K.needsUpdate,I=K.type;rt(),nt.autoReset=S,K.enabled=D,K.autoUpdate=F,K.needsUpdate=B,K.type=I}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function se(S){const D=S.target;D.removeEventListener("dispose",se),Te(D)}function Te(S){xe(S),Oe.remove(S)}function xe(S){const D=Oe.get(S).programs;D!==void 0&&(D.forEach(function(F){de.releaseProgram(F)}),S.isShaderMaterial&&de.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,F,B,I,ce){D===null&&(D=ye);const pe=I.isMesh&&I.matrixWorld.determinant()<0,Me=nc(S,D,F,B,I);fe.setMaterial(B,pe);let Ae=F.index,ze=1;if(B.wireframe===!0){if(Ae=Z.getWireframeAttribute(F),Ae===void 0)return;ze=2}const Pe=F.drawRange,De=F.attributes.position;let at=Pe.start*ze,Dt=(Pe.start+Pe.count)*ze;ce!==null&&(at=Math.max(at,ce.start*ze),Dt=Math.min(Dt,(ce.start+ce.count)*ze)),Ae!==null?(at=Math.max(at,0),Dt=Math.min(Dt,Ae.count)):De!=null&&(at=Math.max(at,0),Dt=Math.min(Dt,De.count));const ft=Dt-at;if(ft<0||ft===1/0)return;Ne.setup(I,B,Me,F,Ae);let nn,it=we;if(Ae!==null&&(nn=$.get(Ae),it=_e,it.setIndex(nn)),I.isMesh)B.wireframe===!0?(fe.setLineWidth(B.wireframeLinewidth*Xe()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(I.isLine){let He=B.linewidth;He===void 0&&(He=1),fe.setLineWidth(He*Xe()),I.isLineSegments?it.setMode(U.LINES):I.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else I.isPoints?it.setMode(U.POINTS):I.isSprite&&it.setMode(U.TRIANGLES);if(I.isBatchedMesh)it.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)it.renderInstances(at,ft,I.count);else if(F.isInstancedBufferGeometry){const He=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,is=Math.min(F.instanceCount,He);it.renderInstances(at,ft,is)}else it.render(at,ft)};function Ze(S,D,F){S.transparent===!0&&S.side===un&&S.forceSinglePass===!1?(S.side=Lt,S.needsUpdate=!0,nr(S,D,F),S.side=wn,S.needsUpdate=!0,nr(S,D,F),S.side=un):nr(S,D,F)}this.compile=function(S,D,F=null){F===null&&(F=S),p=Se.get(F),p.init(),E.push(p),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),S!==F&&S.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(x._useLegacyLights);const B=new Set;return S.traverse(function(I){const ce=I.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const Me=ce[pe];Ze(Me,F,I),B.add(Me)}else Ze(ce,F,I),B.add(ce)}),E.pop(),p=null,B},this.compileAsync=function(S,D,F=null){const B=this.compile(S,D,F);return new Promise(I=>{function ce(){if(B.forEach(function(pe){Oe.get(pe).currentProgram.isReady()&&B.delete(pe)}),B.size===0){I(S);return}setTimeout(ce,10)}ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let $e=null;function ht(S){$e&&$e(S)}function Tt(){bt.stop()}function Je(){bt.start()}const bt=new Pl;bt.setAnimationLoop(ht),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(S){$e=S,Ge.setAnimationLoop(S),S===null?bt.stop():bt.start()},Ge.addEventListener("sessionstart",Tt),Ge.addEventListener("sessionend",Je),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(D),D=Ge.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,w),p=Se.get(S,E.length),p.init(),E.push(p),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(me),le=this.localClippingEnabled,j=Be.init(this.clippingPlanes,le),_=ue.get(S,u.length),_.init(),u.push(_),Qt(S,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,X),this.info.render.frame++,j===!0&&Be.beginShadows();const F=p.state.shadowsArray;if(K.render(F,S,D),j===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(_,S),p.setupLights(x._useLegacyLights),D.isArrayCamera){const B=D.cameras;for(let I=0,ce=B.length;I<ce;I++){const pe=B[I];_a(_,S,pe,pe.viewport)}}else _a(_,S,D);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,D),Ne.resetDefaultState(),z=-1,M=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Qt(S,D,F,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){B&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const pe=J.update(S),Me=S.material;Me.visible&&_.push(S,pe,Me,F,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){const pe=J.update(S),Me=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ie.copy(pe.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){const Ae=pe.groups;for(let ze=0,Pe=Ae.length;ze<Pe;ze++){const De=Ae[ze],at=Me[De.materialIndex];at&&at.visible&&_.push(S,pe,at,F,Ie.z,De)}}else Me.visible&&_.push(S,pe,Me,F,Ie.z,null)}}const ce=S.children;for(let pe=0,Me=ce.length;pe<Me;pe++)Qt(ce[pe],D,F,B)}function _a(S,D,F,B){const I=S.opaque,ce=S.transmissive,pe=S.transparent;p.setupLightsView(F),j===!0&&Be.setGlobalState(x.clippingPlanes,F),ce.length>0&&tc(I,ce,D,F),B&&fe.viewport(T.copy(B)),I.length>0&&tr(I,D,F),ce.length>0&&tr(ce,D,F),pe.length>0&&tr(pe,D,F),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function tc(S,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const ce=Ce.isWebGL2;ge===null&&(ge=new Jt(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?dn:An,minFilter:Xi,samples:ce?4:0})),x.getDrawingBufferSize(Le),ce?ge.setSize(Le.x,Le.y):ge.setSize(Wr(Le.x),Wr(Le.y));const pe=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(Q),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Me=x.toneMapping;x.toneMapping=bn,tr(S,F,B),y.updateMultisampleRenderTarget(ge),y.updateRenderTargetMipmap(ge);let Ae=!1;for(let ze=0,Pe=D.length;ze<Pe;ze++){const De=D[ze],at=De.object,Dt=De.geometry,ft=De.material,nn=De.group;if(ft.side===un&&at.layers.test(B.layers)){const it=ft.side;ft.side=Lt,ft.needsUpdate=!0,va(at,F,B,Dt,ft,nn),ft.side=it,ft.needsUpdate=!0,Ae=!0}}Ae===!0&&(y.updateMultisampleRenderTarget(ge),y.updateRenderTargetMipmap(ge)),x.setRenderTarget(pe),x.setClearColor(Q,L),x.toneMapping=Me}function tr(S,D,F){const B=D.isScene===!0?D.overrideMaterial:null;for(let I=0,ce=S.length;I<ce;I++){const pe=S[I],Me=pe.object,Ae=pe.geometry,ze=B===null?pe.material:B,Pe=pe.group;Me.layers.test(F.layers)&&va(Me,D,F,Ae,ze,Pe)}}function va(S,D,F,B,I,ce){S.onBeforeRender(x,D,F,B,I,ce),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(x,D,F,B,S,ce),I.transparent===!0&&I.side===un&&I.forceSinglePass===!1?(I.side=Lt,I.needsUpdate=!0,x.renderBufferDirect(F,D,B,I,S,ce),I.side=wn,I.needsUpdate=!0,x.renderBufferDirect(F,D,B,I,S,ce),I.side=un):x.renderBufferDirect(F,D,B,I,S,ce),S.onAfterRender(x,D,F,B,I,ce)}function nr(S,D,F){D.isScene!==!0&&(D=ye);const B=Oe.get(S),I=p.state.lights,ce=p.state.shadowsArray,pe=I.state.version,Me=de.getParameters(S,I.state,ce,D,F),Ae=de.getProgramCacheKey(Me);let ze=B.programs;B.environment=S.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(S.isMeshStandardMaterial?N:v).get(S.envMap||B.environment),ze===void 0&&(S.addEventListener("dispose",se),ze=new Map,B.programs=ze);let Pe=ze.get(Ae);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===pe)return Ma(S,Me),Pe}else Me.uniforms=de.getUniforms(S),S.onBuild(F,Me,x),S.onBeforeCompile(Me,x),Pe=de.acquireProgram(Me,Ae),ze.set(Ae,Pe),B.uniforms=Me.uniforms;const De=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=Be.uniform),Ma(S,Me),B.needsLights=rc(S),B.lightsStateVersion=pe,B.needsLights&&(De.ambientLightColor.value=I.state.ambient,De.lightProbe.value=I.state.probe,De.directionalLights.value=I.state.directional,De.directionalLightShadows.value=I.state.directionalShadow,De.spotLights.value=I.state.spot,De.spotLightShadows.value=I.state.spotShadow,De.rectAreaLights.value=I.state.rectArea,De.ltc_1.value=I.state.rectAreaLTC1,De.ltc_2.value=I.state.rectAreaLTC2,De.pointLights.value=I.state.point,De.pointLightShadows.value=I.state.pointShadow,De.hemisphereLights.value=I.state.hemi,De.directionalShadowMap.value=I.state.directionalShadowMap,De.directionalShadowMatrix.value=I.state.directionalShadowMatrix,De.spotShadowMap.value=I.state.spotShadowMap,De.spotLightMatrix.value=I.state.spotLightMatrix,De.spotLightMap.value=I.state.spotLightMap,De.pointShadowMap.value=I.state.pointShadowMap,De.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function xa(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Rr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Ma(S,D){const F=Oe.get(S);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function nc(S,D,F,B,I){D.isScene!==!0&&(D=ye),y.resetTextureUnits();const ce=D.fog,pe=B.isMeshStandardMaterial?D.environment:null,Me=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:mn,Ae=(B.isMeshStandardMaterial?N:v).get(B.envMap||pe),ze=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),De=!!F.morphAttributes.position,at=!!F.morphAttributes.normal,Dt=!!F.morphAttributes.color;let ft=bn;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ft=x.toneMapping);const nn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=nn!==void 0?nn.length:0,He=Oe.get(B),is=p.state.lights;if(j===!0&&(le===!0||S!==M)){const Bt=S===M&&B.id===z;Be.setState(B,S,Bt)}let st=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==is.state.version||He.outputColorSpace!==Me||I.isBatchedMesh&&He.batching===!1||!I.isBatchedMesh&&He.batching===!0||I.isInstancedMesh&&He.instancing===!1||!I.isInstancedMesh&&He.instancing===!0||I.isSkinnedMesh&&He.skinning===!1||!I.isSkinnedMesh&&He.skinning===!0||I.isInstancedMesh&&He.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&He.instancingColor===!1&&I.instanceColor!==null||He.envMap!==Ae||B.fog===!0&&He.fog!==ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Be.numPlanes||He.numIntersection!==Be.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==Pe||He.morphTargets!==De||He.morphNormals!==at||He.morphColors!==Dt||He.toneMapping!==ft||Ce.isWebGL2===!0&&He.morphTargetsCount!==it)&&(st=!0):(st=!0,He.__version=B.version);let Cn=He.currentProgram;st===!0&&(Cn=nr(B,D,I));let Sa=!1,Ii=!1,rs=!1;const xt=Cn.getUniforms(),Pn=He.uniforms;if(fe.useProgram(Cn.program)&&(Sa=!0,Ii=!0,rs=!0),B.id!==z&&(z=B.id,Ii=!0),Sa||M!==S){xt.setValue(U,"projectionMatrix",S.projectionMatrix),xt.setValue(U,"viewMatrix",S.matrixWorldInverse);const Bt=xt.map.cameraPosition;Bt!==void 0&&Bt.setValue(U,Ie.setFromMatrixPosition(S.matrixWorld)),Ce.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&xt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ii=!0,rs=!0)}if(I.isSkinnedMesh){xt.setOptional(U,I,"bindMatrix"),xt.setOptional(U,I,"bindMatrixInverse");const Bt=I.skeleton;Bt&&(Ce.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),xt.setValue(U,"boneTexture",Bt.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(xt.setOptional(U,I,"batchingTexture"),xt.setValue(U,"batchingTexture",I._matricesTexture,y));const ss=F.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0&&Ce.isWebGL2===!0)&&ke.update(I,F,Cn),(Ii||He.receiveShadow!==I.receiveShadow)&&(He.receiveShadow=I.receiveShadow,xt.setValue(U,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Pn.envMap.value=Ae,Pn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Ii&&(xt.setValue(U,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&ic(Pn,rs),ce&&B.fog===!0&&oe.refreshFogUniforms(Pn,ce),oe.refreshMaterialUniforms(Pn,B,q,k,ge),Rr.upload(U,xa(He),Pn,y)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Rr.upload(U,xa(He),Pn,y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&xt.setValue(U,"center",I.center),xt.setValue(U,"modelViewMatrix",I.modelViewMatrix),xt.setValue(U,"normalMatrix",I.normalMatrix),xt.setValue(U,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Bt=B.uniformsGroups;for(let as=0,sc=Bt.length;as<sc;as++)if(Ce.isWebGL2){const Ea=Bt[as];Ye.update(Ea,Cn),Ye.bind(Ea,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function ic(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function rc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,D,F){Oe.get(S.texture).__webglTexture=D,Oe.get(S.depthTexture).__webglTexture=F;const B=Oe.get(S);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const F=Oe.get(S);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,F=0){w=S,C=D,A=F;let B=!0,I=null,ce=!1,pe=!1;if(S){const Ae=Oe.get(S);Ae.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Ae.__webglFramebuffer===void 0?y.setupRenderTarget(S):Ae.__hasExternalTextures&&y.rebindTextures(S,Oe.get(S.texture).__webglTexture,Oe.get(S.depthTexture).__webglTexture);const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(pe=!0);const Pe=Oe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[D])?I=Pe[D][F]:I=Pe[D],ce=!0):Ce.isWebGL2&&S.samples>0&&y.useMultisampledRTT(S)===!1?I=Oe.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?I=Pe[F]:I=Pe,T.copy(S.viewport),G.copy(S.scissor),H=S.scissorTest}else T.copy(Y).multiplyScalar(q).floor(),G.copy(ee).multiplyScalar(q).floor(),H=te;if(fe.bindFramebuffer(U.FRAMEBUFFER,I)&&Ce.drawBuffers&&B&&fe.drawBuffers(S,I),fe.viewport(T),fe.scissor(G),fe.setScissorTest(H),ce){const Ae=Oe.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,F)}else if(pe){const Ae=Oe.get(S.texture),ze=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,F||0,ze)}z=-1},this.readRenderTargetPixels=function(S,D,F,B,I,ce,pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){fe.bindFramebuffer(U.FRAMEBUFFER,Me);try{const Ae=S.texture,ze=Ae.format,Pe=Ae.type;if(ze!==$t&&he.convert(ze)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===dn&&(ve.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Pe!==An&&he.convert(Pe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===yn&&(Ce.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&F>=0&&F<=S.height-I&&U.readPixels(D,F,B,I,he.convert(ze),he.convert(Pe),ce)}finally{const Ae=w!==null?Oe.get(w).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(S,D,F=0){const B=Math.pow(2,-F),I=Math.floor(D.image.width*B),ce=Math.floor(D.image.height*B);y.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,S.x,S.y,I,ce),fe.unbindTexture()},this.copyTextureToTexture=function(S,D,F,B=0){const I=D.image.width,ce=D.image.height,pe=he.convert(F.format),Me=he.convert(F.type);y.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,S.x,S.y,I,ce,pe,Me,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,pe,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,S.x,S.y,pe,Me,D.image),B===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(S,D,F,B,I=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=S.max.x-S.min.x+1,pe=S.max.y-S.min.y+1,Me=S.max.z-S.min.z+1,Ae=he.convert(B.format),ze=he.convert(B.type);let Pe;if(B.isData3DTexture)y.setTexture3D(B,0),Pe=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)y.setTexture2DArray(B,0),Pe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),at=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Dt=U.getParameter(U.UNPACK_SKIP_PIXELS),ft=U.getParameter(U.UNPACK_SKIP_ROWS),nn=U.getParameter(U.UNPACK_SKIP_IMAGES),it=F.isCompressedTexture?F.mipmaps[I]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,it.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(Pe,I,D.x,D.y,D.z,ce,pe,Me,Ae,ze,it.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Pe,I,D.x,D.y,D.z,ce,pe,Me,Ae,it.data)):U.texSubImage3D(Pe,I,D.x,D.y,D.z,ce,pe,Me,Ae,ze,it),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ft),U.pixelStorei(U.UNPACK_SKIP_IMAGES,nn),I===0&&B.generateMipmaps&&U.generateMipmap(Pe),fe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,fe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ea?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===Yr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Wn:gl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wn?vt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xm extends Ol{}xm.prototype.isWebGL1Renderer=!0;class oa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new oa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mm extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bl extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wo=new P,Xo=new P,qo=new ot,Fs=new na,br=new $i;class Sm extends gt{constructor(e=new _t,t=new Bl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Wo.fromBufferAttribute(t,r-1),Xo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Wo.distanceTo(Xo);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(r),br.radius+=s,e.ray.intersectsSphere(br)===!1)return;qo.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(qo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,f=new P,d=new P,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const u=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let x=u,b=E-1;x<b;x+=m){const C=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(p,C),h.fromBufferAttribute(p,A),Fs.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(d);z<e.near||z>e.far||t.push({distance:z,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),E=Math.min(p.count,o.start+o.count);for(let x=u,b=E-1;x<b;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Fs.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Yo=new P,jo=new P;class Em extends Sm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Yo.fromBufferAttribute(t,r),jo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Yo.distanceTo(jo);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $r extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ko=new ot,Ks=new na,Ar=new $i,wr=new P;class la extends gt{constructor(e=new _t,t=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(r),Ar.radius+=s,e.ray.intersectsSphere(Ar)===!1)return;Ko.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(Ko);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);wr.fromBufferAttribute(f,p),Zo(wr,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,_=m;g<_;g++)wr.fromBufferAttribute(f,g),Zo(wr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zo(n,e,t,i,r,s,o){const a=Ks.distanceSqToPoint(n);if(a<t){const l=new P;Ks.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Jr extends _t{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],m=[];let g=0;const _=[],p=i/2;let u=0;E(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new tt(f,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(m,2));function E(){const b=new P,C=new P;let A=0;const w=(t-e)/i;for(let z=0;z<=s;z++){const M=[],T=z/s,G=T*(t-e)+e;for(let H=0;H<=r;H++){const Q=H/r,L=Q*l+a,O=Math.sin(L),k=Math.cos(L);C.x=G*O,C.y=-T*i+p,C.z=G*k,f.push(C.x,C.y,C.z),b.set(O,w,k).normalize(),d.push(b.x,b.y,b.z),m.push(Q,1-T),M.push(g++)}_.push(M)}for(let z=0;z<r;z++)for(let M=0;M<s;M++){const T=_[M][z],G=_[M+1][z],H=_[M+1][z+1],Q=_[M][z+1];h.push(T,G,Q),h.push(G,H,Q),A+=6}c.addGroup(u,A,0),u+=A}function x(b){const C=g,A=new be,w=new P;let z=0;const M=b===!0?e:t,T=b===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,p*T,0),d.push(0,T,0),m.push(.5,.5),g++;const G=g;for(let H=0;H<=r;H++){const L=H/r*l+a,O=Math.cos(L),k=Math.sin(L);w.x=M*k,w.y=p*T,w.z=M*O,f.push(w.x,w.y,w.z),d.push(0,T,0),A.x=O*.5+.5,A.y=k*.5*T+.5,m.push(A.x,A.y),g++}for(let H=0;H<r;H++){const Q=C+H,L=G+H;b===!0?h.push(L,L+1,Q):h.push(L+1,L,Q),z+=3}c.addGroup(u,z,b===!0?1:2),u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ji extends Jr{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ji(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qr extends _t{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const x=new P,b=new P,C=new P;for(let A=0;A<t.length;A+=3)m(t[A+0],x),m(t[A+1],b),m(t[A+2],C),l(x,b,C,E)}function l(E,x,b,C){const A=C+1,w=[];for(let z=0;z<=A;z++){w[z]=[];const M=E.clone().lerp(b,z/A),T=x.clone().lerp(b,z/A),G=A-z;for(let H=0;H<=G;H++)H===0&&z===A?w[z][H]=M:w[z][H]=M.clone().lerp(T,H/G)}for(let z=0;z<A;z++)for(let M=0;M<2*(A-z)-1;M++){const T=Math.floor(M/2);M%2===0?(d(w[z][T+1]),d(w[z+1][T]),d(w[z][T])):(d(w[z][T+1]),d(w[z+1][T+1]),d(w[z+1][T]))}}function c(E){const x=new P;for(let b=0;b<s.length;b+=3)x.x=s[b+0],x.y=s[b+1],x.z=s[b+2],x.normalize().multiplyScalar(E),s[b+0]=x.x,s[b+1]=x.y,s[b+2]=x.z}function h(){const E=new P;for(let x=0;x<s.length;x+=3){E.x=s[x+0],E.y=s[x+1],E.z=s[x+2];const b=p(E)/2/Math.PI+.5,C=u(E)/Math.PI+.5;o.push(b,1-C)}g(),f()}function f(){for(let E=0;E<o.length;E+=6){const x=o[E+0],b=o[E+2],C=o[E+4],A=Math.max(x,b,C),w=Math.min(x,b,C);A>.9&&w<.1&&(x<.2&&(o[E+0]+=1),b<.2&&(o[E+2]+=1),C<.2&&(o[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function m(E,x){const b=E*3;x.x=e[b+0],x.y=e[b+1],x.z=e[b+2]}function g(){const E=new P,x=new P,b=new P,C=new P,A=new be,w=new be,z=new be;for(let M=0,T=0;M<s.length;M+=9,T+=6){E.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),b.set(s[M+6],s[M+7],s[M+8]),A.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),z.set(o[T+4],o[T+5]),C.copy(E).add(x).add(b).divideScalar(3);const G=p(C);_(A,T+0,E,G),_(w,T+2,x,G),_(z,T+4,b,G)}}function _(E,x,b,C){C<0&&E.x===1&&(o[x]=E.x-1),b.x===0&&b.z===0&&(o[x]=C/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.vertices,e.indices,e.radius,e.details)}}class es extends Qr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new es(e.radius,e.detail)}}class Li extends Qr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Li(e.radius,e.detail)}}class Qi extends _t{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new P,d=new P,m=[],g=[],_=[],p=[];for(let u=0;u<=i;u++){const E=[],x=u/i;let b=0;u===0&&o===0?b=.5/t:u===i&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const A=C/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(A+b,1-x),E.push(c++)}h.push(E)}for(let u=0;u<i;u++)for(let E=0;E<t;E++){const x=h[u][E+1],b=h[u][E],C=h[u+1][E],A=h[u+1][E+1];(u!==0||o>0)&&m.push(x,b,A),(u!==i-1||l<Math.PI)&&m.push(b,C,A)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ji extends _t{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new P,f=new P,d=new P;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const _=g/r*s,p=m/i*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const _=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,u=(r+1)*(m-1)+g,E=(r+1)*m+g;o.push(_,p,E),o.push(p,u,E)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ym extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tm extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Os=new ot,$o=new P,Jo=new P;class bm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$o.setFromMatrixPosition(e.matrixWorld),t.position.copy($o),Jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jo),t.updateMatrixWorld(),Os.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Os),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Os)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Am extends bm{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wm extends zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Am}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rm extends zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qo(){return(typeof performance>"u"?Date:performance).now()}class Cm extends Em{constructor(e=10,t=10,i=4473924,r=8947848){i=new Re(i),r=new Re(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,m=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===s?i:r;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new _t;h.setAttribute("position",new tt(l,3)),h.setAttribute("color",new tt(c,3));const f=new Bl({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);const Hl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Di{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Pm=new sa(-1,1,1,-1,0,1);class Lm extends _t{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}}const Dm=new Lm;class ca{constructor(e){this._mesh=new et(Dm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Pm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Um extends Di{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yi.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ca(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class el extends Di{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Im extends Di{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Nm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new be);this._width=i.width,this._height=i.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Um(Hl),this.copyPass.material.blending=fn,this.clock=new Gl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}el!==void 0&&(o instanceof el?i=!0:o instanceof Im&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Fm extends Di{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Om={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ai extends Di{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(s,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new Jt(s,o,{type:dn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Jt(s,o,{type:dn});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=Om;this.highPassUniforms=Yi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new be(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Hl;this.copyUniforms=Yi.clone(h.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Si,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Kr,this.fsQuad=new ca(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new be(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ai.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ai.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ai.BlurDirectionX=new be(1,0);Ai.BlurDirectionY=new be(0,1);const Bm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class zm extends Di{constructor(){super();const e=Bm;this.uniforms=Yi.clone(e.uniforms),this.material=new ym({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ca(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===Qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===rl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===al?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Js?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ol&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Gm=document.getElementById("game"),Ui=new Ol({canvas:Gm,antialias:!0,powerPreference:"high-performance"});Ui.setPixelRatio(Math.min(window.devicePixelRatio,2));Ui.setSize(window.innerWidth,window.innerHeight);Ui.toneMapping=Js;Ui.toneMappingExposure=1.1;const qe=new Mm;qe.background=new Re(263434);qe.fog=new oa(263434,.0055);const Kt=new Vt(62,window.innerWidth/window.innerHeight,.1,500);Kt.position.set(0,2.5,13);const er=new Nm(Ui);er.addPass(new Fm(qe,Kt));const Hm=new Ai(new be(window.innerWidth,window.innerHeight),1.15,.6,.1);er.addPass(Hm);er.addPass(new zm);qe.add(new Rm(3359846,2.5));const Vl=new wm(8965375,1.2);Vl.position.set(5,10,6);qe.add(Vl);function pt(n,e){return n+Math.random()*(e-n)}new P;function pn(n,e=1.1,t=!0){return new Tm({color:n,emissive:n,emissiveIntensity:e,metalness:.3,roughness:.35,flatShading:t})}function Rn(n,e=1){return new Kr({color:n,transparent:!0,opacity:e,blending:Si,depthWrite:!1})}const ua=new _t,ha=1800,Cr=new Float32Array(ha*3),Pr=new Float32Array(ha*3);for(let n=0;n<ha;n++){Cr[n*3]=(Math.random()-.5)*400,Cr[n*3+1]=(Math.random()-.5)*280,Cr[n*3+2]=(Math.random()-1)*500-30;const e=Math.random();Pr[n*3]=.5+e*.5,Pr[n*3+1]=.6+e*.4,Pr[n*3+2]=1}ua.setAttribute("position",new Et(Cr,3));ua.setAttribute("color",new Et(Pr,3));const Lr=new la(ua,new $r({size:.5,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1}));qe.add(Lr);const kl=new _t,Wl=700,Dr=new Float32Array(Wl*3);for(let n=0;n<Wl;n++)Dr[n*3]=(Math.random()-.5)*130,Dr[n*3+1]=(Math.random()-.5)*80,Dr[n*3+2]=(Math.random()-.5)*150;kl.setAttribute("position",new Et(Dr,3));const Ur=new la(kl,new $r({size:.9,color:5609983,transparent:!0,opacity:.45,blending:Si,depthWrite:!1}));qe.add(Ur);const Xn=new Cm(260,44,2254591,1127270);Xn.position.y=-20;Xn.material.transparent=!0;Xn.material.opacity=.3;qe.add(Xn);const qn=new _t,Kn=3500,tn=new Float32Array(Kn*3),Yn=new Float32Array(Kn*3),fa=new Float32Array(Kn);for(let n=0;n<Kn;n++)tn[n*3]=999,tn[n*3+1]=999,tn[n*3+2]=999,Yn[n*3]=1,Yn[n*3+1]=.7,Yn[n*3+2]=.3,fa[n]=1;qn.setAttribute("position",new Et(tn,3));qn.setAttribute("color",new Et(Yn,3));qn.setAttribute("size",new Et(fa,1));const Xl=new la(qn,new $r({size:.5,vertexColors:!0,transparent:!0,blending:Si,depthWrite:!1}));Xl.frustumCulled=!1;qe.add(Xl);const da=[];for(let n=0;n<Kn;n++)da.push({p:new P,v:new P,life:0,max:1,c:new Re(16777215)});let Bs=0;function Nt(n,e,t,i,r,s=16,o=.6){const a=new Re(r);for(let l=0;l<i;l++){const c=da[Bs];Bs=(Bs+1)%Kn,c.p.set(n,e,t),c.v.set(pt(-1,1),pt(-1,1),pt(-1,1)).normalize().multiplyScalar(pt(3,s)),c.life=c.max=o*pt(.6,1.1),c.c.copy(a)}}function Vm(n){for(let e=0;e<Kn;e++){const t=da[e];if(t.life>0){t.life-=n,t.p.addScaledVector(t.v,n),t.v.multiplyScalar(.96),tn[e*3]=t.p.x,tn[e*3+1]=t.p.y,tn[e*3+2]=t.p.z;const i=Math.max(0,t.life/t.max);Yn[e*3]=t.c.r,Yn[e*3+1]=t.c.g,Yn[e*3+2]=t.c.b,fa[e]=.4+i*.8}else tn[e*3]=999,tn[e*3+1]=999,tn[e*3+2]=999}qn.attributes.position.needsUpdate=!0,qn.attributes.color.needsUpdate=!0,qn.attributes.size.needsUpdate=!0}function km(){const n=new Tn,e=new et(new Ji(.55,2.6,4),pn(6737151,1.2));e.rotation.x=Math.PI/2,e.rotation.y=Math.PI/4,e.position.z=-.3,n.add(e);const t=new et(new Ci(2.8,.12,.9),pn(4487167,1));t.position.y=-.15,t.position.z=.1,n.add(t);const i=new et(new Jr(.22,.4,1.2,8),pn(16737843,1.6));i.rotation.x=Math.PI/2,i.position.z=1.4,n.add(i);const r=new et(new Qi(.3,8,8),Rn(16746564,.9));return r.position.z=1.9,n.add(r),n}const pi=km();qe.add(pi);const Ue=new P(0,0,0),ae={hp:100,maxHp:100,speed:17,fireRate:7,dmg:14,parts:[],invuln:0,dashT:0,dashCd:0,combo:0,comboT:0,magnet:8,wingmen:0,crit:.05,critMult:2.5,pierce:0,twin:0,dashVec:new P(0,0,1)},zn=[];function ql(n,e,t,i,r=.35,s=0){const o=new et(new Li(r,0),Rn(i,1));o.position.copy(n),qe.add(o),zn.push({m:o,v:e.clone(),dmg:t,pierce:s,hit:new Set,life:3})}function Yl(n){let e=null,t=1/0;for(const i of Ft){const r=n.distanceToSquared(i.position);r<t&&(t=r,e=i)}return e}const Ft=[];function Wm(n){const e=new Tn;let t;if(n===0){t=40;const s=new et(new Li(1.1,0),pn(16733508,1.3));e.add(s);const o=new et(new Qi(.35,8,8),Rn(16777215,1));o.position.z=.6,e.add(o)}else if(n===1){t=80;const s=new et(new Ji(.8,2,5),pn(16755251,1.2));s.rotation.x=Math.PI/2,e.add(s);const o=new et(new ji(1.2,.08,8,20),Rn(16768341,1));e.add(o)}else{t=130;const s=new et(new es(1.3,0),pn(13395711,1.2));e.add(s)}const i=pt(-16,16),r=pt(-9,9);return e.position.set(i,r,-95),e.userData={hp:t,maxHp:t,kind:n,shootT:pt(.8,2.5),type:"enemy",moveT:0},qe.add(e),Ft.push(e),e}let Ee=null;function Xm(n){const e=new Tn,t=1+n*.2,i=500*(1+(n-1)*.85),r=new et(new es(3*t,1),pn(16720486,1.4));e.add(r);const s=new et(new ji(4.2*t,.15,10,40),Rn(16729224,1));e.add(s);const o=new et(new ji(5.4*t,.12,10,40),Rn(16720486,.8));o.rotation.x=Math.PI/2.4,o.rotation.y=.6,e.add(o);const a=[];for(let l=0;l<4;l++){const c=new et(new Ji(.9*t,2.4*t,4),pn(16777215,1.1));c.position.set(l%2===0?-3.4*t:3.4*t,l<2?-2.4*t:2.4*t,0),c.rotation.z=l%2===0?Math.PI/4:-Math.PI/4,e.add(c),a.push({mesh:c,hp:i*.3,alive:!0})}return e.position.set(0,0,-120),e.userData={hp:i,maxHp:i,layer:n,parts:a,shootT:1.6,phase:0},qe.add(e),Ee=e,e}const qm=[{id:"turret",ico:"cannon",name:"Cannon Core",desc:"DMG +45% | Rate +25%",apply:n=>{n.dmg*=1.45,n.fireRate*=1.25}},{id:"wingman",ico:"dron",name:"Wingman Wing",desc:"Summon 1 auto-firing wingman",apply:n=>{n.wingmen+=1,Kl()}},{id:"engine",ico:"speed",name:"Vector Engine",desc:"Speed +35% | Dash CD -30%",apply:n=>{n.speed*=1.35}},{id:"shield",ico:"shield",name:"Shield Core",desc:"Max HP +40 | Regen +2/s",apply:n=>{n.maxHp+=40,n.hp=Math.min(n.hp+45,n.maxHp),n.hpRegen=(n.hpRegen||0)+2}},{id:"magnet",ico:"magnet",name:"Magnet Field",desc:"Pull all drops to you",apply:n=>{n.magnet+=999}},{id:"crit",ico:"laser",name:"Crit Laser",desc:"Crit +18% | Mult +100% | Pierce +1",apply:n=>{n.crit+=.18,n.critMult+=1,n.pierce+=1}},{id:"twin",ico:"twin",name:"Twin Barrel",desc:"+1 bullet per shot",apply:n=>{n.twin+=1}}],jl={cannon:"K",dron:"D",speed:">>",shield:"S",magnet:"M",laser:"L",twin:"II"},Ir=[];function Kl(){Ir.forEach(n=>qe.remove(n.g)),Ir.length=0;for(let n=0;n<ae.wingmen;n++){const e=new Tn,t=new et(new Li(.4,0),pn(4521898,1.4));e.add(t),qe.add(e),Ir.push({g:e,ang:n/Math.max(1,ae.wingmen)*Math.PI*2,fireT:0})}}const Gn=[];function tl(n,e,t,i,r){const s=new et(new Li(r?.8:.45,0),Rn(i,1));s.position.set(n,e,t),qe.add(s),Gn.push({m:s,big:!!r,t:0,life:30})}function Ym(){const n=[...qm],e=[],t=new Set;for(;e.length<3&&n.length;){const r=Math.floor(Math.random()*n.length),s=n[r];n.splice(r,1),t.has(s.id)||(t.add(s.id),e.push(s))}const i=document.getElementById("pickCards");i.innerHTML="",We.playing=!1,document.getElementById("pick").classList.remove("hidden"),e.forEach(r=>{const s=document.createElement("div");s.className="card",s.innerHTML='<div class="ico">'+jl[r.ico]+'</div><div class="nm">'+r.name+'</div><div class="desc">'+r.desc+"</div>",s.onclick=()=>{ae.parts.push(r),r.apply(ae),document.getElementById("pick").classList.add("hidden"),Zl(),We.playing=!0,We.picking=!1,Nt(Ue.x,Ue.y,0,120,6737151,26,.7),gn(.5),fg()},i.appendChild(s)})}const We={playing:!1,over:!1,layer:1,killCount:0,time:0,slow:0,picking:!1};let Wi=0;const Gt={mx:0,my:0,keys:new Set};let _i=parseInt(localStorage.getItem("snpb_best")||"0",10);_i>0&&(document.getElementById("bestline").textContent="BEST: Layer "+_i);function gn(n){Wi=Math.max(Wi,n)}const vi=document.createElement("div");vi.style.cssText="position:fixed;inset:0;background:#fff;opacity:0;pointer-events:none;z-index:9;mix-blend-mode:screen";document.body.appendChild(vi);function ts(n){vi.style.transition="none",vi.style.opacity=n,requestAnimationFrame(()=>{vi.style.transition="opacity 0.12s",vi.style.opacity=0})}function ns(n){We.slow=Math.max(We.slow,n)}const Nr=[];function zs(n,e,t,i,r){const s=document.createElement("div");s.className="dmg",s.textContent=i,s.style.color=r||"#fff",document.getElementById("hud").appendChild(s),Nr.push({el:s,p:new P(n,e,t),t:0})}function jm(){document.getElementById("hpbar").style.width=Math.max(0,ae.hp/ae.maxHp*100)+"%",document.getElementById("hpbar").style.background=ae.hp/ae.maxHp>.35?"linear-gradient(90deg,#3f6,#8f6)":"linear-gradient(90deg,#f66,#faa)";const n=document.getElementById("combo");n.textContent=ae.combo>1?ae.combo+"x":"",n.style.opacity=ae.combo>1?1:.25,document.getElementById("layer").textContent="Layer "+We.layer,document.getElementById("center").textContent=We.playing?"BOSS: "+Math.max(0,Math.ceil(Ee?Ee.userData.hp/Ee.userData.maxHp*100:0))+"%":""}function Zl(){const n=document.getElementById("parts");n.innerHTML="",ae.parts.forEach(e=>{const t=document.createElement("div");t.className="slot",t.title=e.name,t.textContent=jl[e.ico],n.appendChild(t)})}const Zn=document.createElement("div");Zn.id="bossbar";Zn.style.cssText="position:fixed;left:50%;top:14px;transform:translateX(-50%);width:46vw;height:14px;border:1px solid #a45;border-radius:8px;background:rgba(0,0,0,.4);overflow:hidden;z-index:10;display:none";Zn.innerHTML='<div id="bossfill" style="height:100%;width:0%;background:linear-gradient(90deg,#f55,#f88);box-shadow:0 0 12px #f55;transition:width .15s"></div>';document.body.appendChild(Zn);let Fr=0,Or=0,Zs=!1,pa=!1;function ma(){Ft.forEach(n=>qe.remove(n)),Ft.length=0,Ee&&(qe.remove(Ee),Ee=null),zn.forEach(n=>qe.remove(n.m)),zn.length=0,Gn.forEach(n=>qe.remove(n.m)),Gn.length=0,Hn.forEach(n=>qe.remove(n.m)),Hn.length=0}function $l(){We.picking=!1,Fr=0,Or=1.2,Zs=!1,pa=!1,Zn.style.display="none"}function Km(n){return 2+Math.min(4,n)}function Zm(n){if(pa)return;Or-=n;const e=Km(We.layer);if(Fr<e){if(Or<=0){Or=3.2-Math.min(1.6,We.layer*.2);const t=2+Math.min(6,We.layer+Fr);for(let i=0;i<t;i++)Wm(Math.random()<.7?0:Math.random()<.5?1:2);Fr++}}else Ft.length===0&&!Zs&&(Zs=!0,Xm(We.layer),Zn.style.display="block")}const kt=new P,zi=new P,Hn=[];function Jl(n,e,t,i,r,s,o){const a=new et(new Qi(.28,6,6),Rn(16746564,1));a.position.set(n,e,t),qe.add(a),Hn.push({m:a,v:new P(i,r,s),dmg:o,life:6})}function $m(n){for(let e=Ft.length-1;e>=0;e--){const t=Ft[e],i=t.userData;if(t.position.z+=n*8,i.moveT-=n,i.moveT<=0&&(i.moveT=pt(.8,1.6),kt.set(Ue.x-t.position.x,Ue.y-t.position.y,0).normalize(),i.dx=kt.x+pt(-1.5,1.5),i.dy=kt.y+pt(-1.5,1.5)),i.dx!==void 0&&(t.position.x+=i.dx*n*3,t.position.y+=i.dy*n*3),t.rotation.y+=n*2,i.shootT-=n,i.shootT<=0&&t.position.z>-70&&(i.shootT=pt(1.5,2.6),kt.set(Ue.x-t.position.x,Ue.y-t.position.y,0).normalize(),Jl(t.position.x,t.position.y,t.position.z,kt.x*14,kt.y*14,14,10)),t.position.z>15){qe.remove(t),Ft.splice(e,1);continue}if(ae.invuln<=0&&Math.hypot(t.position.x-Ue.x,t.position.y-Ue.y)<1.8){ae.invuln=1,ga(25),Nt(t.position.x,t.position.y,t.position.z,60,16746564,16,.6),qe.remove(t),Ft.splice(e,1),gn(.5),ns(.1);continue}}}let Br=0;function Jm(n){if(Br-=n,Br>0)return;Br=1/ae.fireRate;let e=null;if(Ee&&Ee.userData.parts.some(i=>i.alive)?e=Ee:e=Yl(Ue)||Ee,!e)return;kt.copy(e.position).sub(Ue).normalize();const t=1+ae.twin;for(let i=0;i<t;i++){const r=(i-(t-1)/2)*.12;zi.copy(kt);const s=zi.x+r;zi.x=s,zi.normalize(),ql(Ue.clone().add(new P(0,0,-1.6)),zi,ae.dmg,6741503,.3,ae.pierce)}}function ga(n){ae.hp<=0||(ae.hp-=n,ts(.35),ae.combo=0,gn(.4),ae.hp<=0&&(ae.hp=0,dg()))}function Qm(n,e){We.killCount++,ae.combo++,ae.comboT=3,Nt(n.position.x,n.position.y,n.position.z,70,16755251,16,.7),Nt(n.position.x,n.position.y,n.position.z,30,16777215,26,.4),tl(n.position.x,n.position.y,n.position.z,4521898,!1),Math.random()<.35&&tl(n.position.x+pt(-1,1),n.position.y,n.position.z,16768324,!0),gn(.18),ns(.04),qe.remove(n),Ft.splice(e,1)}function eg(n){for(let e=zn.length-1;e>=0;e--){const t=zn[e];if(t.life-=n,t.m.position.addScaledVector(t.v,n*90),t.life<=0||Math.abs(t.m.position.z)>220){qe.remove(t.m),zn.splice(e,1);continue}let i=!1;for(let r=Ft.length-1;r>=0&&!i;r--){const s=Ft[r];if(t.m.position.distanceTo(s.position)<1.7){const o=Math.random()<ae.crit,a=o?Math.round(t.dmg*ae.critMult):t.dmg;s.userData.hp-=a,zs(s.position.x,s.position.y+1.2,s.position.z,a,o?"#ff4488":"#9ef"),Nt(t.m.position.x,t.m.position.y,t.m.position.z,10,8974079,8,.3),s.userData.hp<=0&&Qm(s,r),t.pierce<=0?i=!0:t.pierce--}}if(!i&&Ee){const r=Ee.userData.parts;let s=null;for(const a of r)if(a.alive&&t.m.position.distanceTo(a.mesh.position)<2.6){s=a;break}const o=t.m.position.distanceTo(Ee.position)<4;if(s||o){const a=Math.random()<ae.crit,l=a?Math.round(t.dmg*ae.critMult):t.dmg;s?(s.hp-=l,s.hp<=0&&(s.alive=!1,s.mesh.visible=!1,Nt(s.mesh.position.x,s.mesh.position.y,s.mesh.position.z,140,16777215,24,.9),Nt(s.mesh.position.x,s.mesh.position.y,s.mesh.position.z,80,16729224,16,.7),Ee.userData.hp-=90,gn(.5),ns(.12),ts(.25),zs(Ee.position.x,Ee.position.y+5,Ee.position.z,"PART OFF!","#ffdd44"))):(Ee.userData.hp-=l,zs(Ee.position.x,Ee.position.y+5,Ee.position.z,l,a?"#ff4488":"#9ef")),Nt(t.m.position.x,t.m.position.y,t.m.position.z,12,16755302,10,.3),tg(),Ee.userData.hp<=0&&(rg(),i=!0),t.pierce<=0?i=!0:t.pierce--}}i&&(qe.remove(t.m),zn.splice(e,1))}}function tg(){if(!Ee)return;const n=document.getElementById("bossfill");n&&(n.style.width=Math.max(0,Ee.userData.hp/Ee.userData.maxHp*100)+"%")}function ng(n){for(let e=Hn.length-1;e>=0;e--){const t=Hn[e];if(t.life-=n,t.m.position.addScaledVector(t.v,n),t.life<=0||t.m.position.z>15){qe.remove(t.m),Hn.splice(e,1);continue}t.m.position.distanceTo(Ue)<1.5&&(qe.remove(t.m),Hn.splice(e,1),ae.invuln<=0&&ga(t.dmg))}}function ig(n){if(!Ee)return;const e=Ee.userData;if(Ee.position.z<-26)Ee.position.z+=n*14;else if(e.phase+=n,Ee.position.x=Math.sin(e.phase*.6)*9,Ee.position.y=Math.cos(e.phase*.4)*4.5,Ee.rotation.z+=n*.3,e.shootT-=n,e.shootT<=0){e.shootT=Math.max(.9,2.2-e.layer*.15);const t=7+e.layer;for(let i=0;i<t;i++){const r=i/t*Math.PI*2+e.phase;Jl(Ee.position.x,Ee.position.y,Ee.position.z+4,Math.cos(r)*15,Math.sin(r)*15,17,12)}gn(.12)}ae.invuln<=0&&Ee.position.distanceTo(Ue)<7&&(ae.invuln=1.2,ga(35))}function rg(){pa=!0,Ee.userData.parts;const n=Ee.position.x,e=Ee.position.y,t=Ee.position.z;let i=0;const r=setInterval(()=>{Nt(n+pt(-6,6),e+pt(-6,6),t+pt(-3,3),90,i%2?16729224:16777215,22,.9),gn(.55),++i>6&&(clearInterval(r),qe.remove(Ee),Ee=null,Zn.style.display="none",sg(.9),setTimeout(()=>{We.picking=!0,Ym()},900))},140)}function sg(n){We.slow=Math.max(We.slow,n),ts(.3)}function ag(n){for(let e=Gn.length-1;e>=0;e--){const t=Gn[e];t.t+=n,t.life-=n,t.m.rotation.x+=n*3,t.m.rotation.y+=n*2;const i=t.m.position.distanceTo(Ue);if(i<ae.magnet&&(kt.copy(Ue).sub(t.m.position).normalize(),t.m.position.addScaledVector(kt,n*Math.max(30,60/Math.max(1,i))*1.4)),i<1.6){qe.remove(t.m),Gn.splice(e,1),t.big?(ae.hp=Math.min(ae.hp+15,ae.maxHp),Nt(Ue.x,Ue.y,0,24,4521898,10,.4)):ae.magnetPick=!0;continue}t.life<=0&&(qe.remove(t.m),Gn.splice(e,1))}}function og(n){const e=n,t=Gt.keys;let i=0,r=0;if((t.has("a")||t.has("arrowleft"))&&(i-=1),(t.has("d")||t.has("arrowright"))&&(i+=1),(t.has("w")||t.has("arrowup"))&&(r+=1),(t.has("s")||t.has("arrowdown"))&&(r-=1),Gt.useMouse){const s=Gt.mx/window.innerWidth*2-1,o=-(Gt.my/window.innerHeight)*2+1,a=new P(s*17,o*11,0);Ue.lerp(a,Math.min(1,e*6))}if((i||r)&&(Gt.useMouse=!1,Ue.x+=i*ae.speed*e,Ue.y+=r*ae.speed*e),ae.dashCd>0&&(ae.dashCd-=n),Gt.keys.has(" ")&&ae.dashCd<=0){ae.dashCd=2.2,ae.invuln=.5;const s=i||(Gt.useMouse?0:1),o=r;s===0&&o===0?Ue.x+=6*(Math.random()<.5?1:-1):(Ue.x+=s*7,Ue.y+=o*7),Nt(Ue.x,Ue.y,1,40,6741503,14,.5),ts(.25),gn(.25),Ue.x=Math.max(-17,Math.min(17,Ue.x)),Ue.y=Math.max(-11,Math.min(11,Ue.y))}pi.position.copy(Ue),pi.rotation.z=ro.lerp(pi.rotation.z,-i*.5,Math.min(1,e*8)),pi.rotation.x=ro.lerp(pi.rotation.x,r*.3,Math.min(1,e*8)),ae.invuln>0&&(ae.invuln-=n),ae.hpRegen&&(ae.hp=Math.min(ae.maxHp,ae.hp+ae.hpRegen*n))}function lg(n){Ir.forEach((e,t)=>{e.ang+=n*(1.2+t*.1);const i=Ue.x+Math.cos(e.ang)*3.4,r=Ue.y+Math.sin(e.ang)*2.2;if(e.g.position.set(i,r,.4),e.fireT-=n,e.fireT<=0&&(Ft.length>0||Ee)){e.fireT=.55;let s=Ee&&Ee.position.z>-60?Ee:Yl(e.g.position);s&&(kt.copy(s.position).sub(e.g.position).normalize(),ql(e.g.position.clone(),kt,ae.dmg*.5,4521898,.22,ae.pierce))}})}const Gi=new P;function cg(n){for(let e=Nr.length-1;e>=0;e--){const t=Nr[e];if(t.t+=n,t.t>.8){t.el.remove(),Nr.splice(e,1);continue}Gi.copy(t.p),Gi.y+=t.t*3,Gi.project(Kt),t.el.style.left=(Gi.x*.5+.5)*window.innerWidth+"px",t.el.style.top=(-Gi.y*.5+.5)*window.innerHeight+"px",t.el.style.opacity=1-t.t/.8}}function ug(n){We.time+=n,We.slow>0&&(We.slow-=n);const e=We.slow>0?n*.22:n;Lr.position.z+=e*8,Lr.position.z>40&&(Lr.position.z-=90),Ur.position.z+=e*34,Ur.position.z>40&&(Ur.position.z-=120),Xn.position.z+=e*7,Xn.position.z>20&&(Xn.position.z-=40),We.playing&&(Zm(e),og(e),Jm(e),lg(e),$m(e),eg(e),ng(e),ig(e),ag(e),cg(e),ae.comboT>0&&(ae.comboT-=n,ae.comboT<=0&&(ae.combo=0)),jm()),Wi*=Math.pow(.001,n);const t=Ue.x*.35+pt(-1,1)*Wi*.6,i=Ue.y*.35+2.4+pt(-1,1)*Wi*.6;Kt.position.x+=(t-Kt.position.x)*Math.min(1,n*5),Kt.position.y+=(i-Kt.position.y)*Math.min(1,n*5),Kt.position.z=13+(We.slow>0?2:0),Kt.lookAt(Ue.x*.5,Ue.y*.5,-30),Vm(e)}const hg=new Gl;function Ql(){requestAnimationFrame(Ql);const n=Math.min(.05,hg.getDelta());ug(n),er.render()}Ql();window.addEventListener("resize",()=>{Kt.aspect=window.innerWidth/window.innerHeight,Kt.updateProjectionMatrix(),Ui.setSize(window.innerWidth,window.innerHeight),er.setSize(window.innerWidth,window.innerHeight)});window.addEventListener("keydown",n=>{Gt.keys.add(n.key.toLowerCase()),n.key===" "&&n.preventDefault()});window.addEventListener("keyup",n=>Gt.keys.delete(n.key.toLowerCase()));window.addEventListener("mousemove",n=>{Gt.mx=n.clientX,Gt.my=n.clientY,Gt.useMouse=!0});function ec(){ma(),ae.hp=ae.maxHp=100,ae.speed=17,ae.fireRate=7,ae.dmg=14,ae.parts.length=0,ae.crit=.05,ae.critMult=2.5,ae.pierce=0,ae.twin=0,ae.wingmen=0,ae.magnet=8,ae.hpRegen=0,ae.combo=0,ae.invuln=1,Ue.set(0,0,0),Kl(),We.layer=1,We.killCount=0,We.over=!1,We.picking=!1,We.playing=!0,Br=0,document.getElementById("title").classList.add("hidden"),document.getElementById("over").classList.add("hidden"),document.getElementById("hud").classList.remove("hidden"),Zl(),$l()}function fg(){We.layer++,ma(),$l()}function dg(){We.playing=!1,We.over=!0,ma(),Nt(Ue.x,Ue.y,0,200,6741503,30,1),Nt(Ue.x,Ue.y,0,120,16729224,20,.8),gn(1),ns(1.2),We.layer>_i&&(_i=We.layer,localStorage.setItem("snpb_best",String(_i))),document.getElementById("stats").innerHTML="Layer <b>"+We.layer+"</b><br>Kills <b>"+We.killCount+"</b><br>Parts <b>"+ae.parts.length+"</b>",document.getElementById("overbest").textContent="BEST: Layer "+_i,setTimeout(()=>{document.getElementById("over").classList.remove("hidden"),document.getElementById("hud").classList.add("hidden")},700)}document.getElementById("startBtn").addEventListener("click",ec);document.getElementById("restartBtn").addEventListener("click",ec);
