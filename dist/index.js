"use strict";var d=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=d(function(j,n){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-dxpy/dist').ndarray;function p(i){var r,e;return r=i[0],e=i[1],m(o(r,0),v(r),t(r,0),u(r),v(e),t(e,0),u(e)),e}n.exports=p
});var x=require("path").join,f=require('@stdlib/utils-try-require/dist'),y=require('@stdlib/assert-is-error/dist'),c=s(),a,q=f(x(__dirname,"./native.js"));y(q)?a=c:a=q;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
