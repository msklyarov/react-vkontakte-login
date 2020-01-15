!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.vkLogin=t(require("react")):e.vkLogin=t(e.react)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(2),a=o(r);t["default"]=a["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(8),p=o(u),f=n(6),d=o(f),y=n(3),b=o(y),h=function(e){function t(){var e,n,o,r;a(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={isSdkLoaded:!1,isProcessing:!1},o.checkLoginState=function(e){o.setState({isProcessing:!1}),o.props.callback&&o.props.callback(e)},o.click=function(){!o.state.isSdkLoaded||o.state.isProcessing||o.props.disabled||(o.setState({isProcessing:!0}),window.VK.Auth.login(o.checkLoginState))},r=n,i(o,r)}return c(t,e),l(t,[{key:"componentDidMount",value:function(){return document.getElementById("vk-jssdk")?void this.sdkLoaded():(this.setVkAsyncInit(),void this.loadSdkAsynchronously())}},{key:"setVkAsyncInit",value:function(){var e=this,t=this.props.apiId;window.vkAsyncInit=function(){window.VK.init({apiId:t}),e.setState({isSdkLoaded:!0})}}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=document.createElement("script");e.type="text/javascript",e.src="https://vk.com/js/api/openapi.js?163",e.async=!0,e.id="vk-jssdk",document.getElementsByTagName("head")[0].appendChild(e)}},{key:"style",value:function(){return p["default"].createElement("style",{dangerouslySetInnerHTML:{__html:b["default"]}})}},{key:"containerStyle",value:function(){var e={transition:"opacity 0.5s"};return(this.state.isProcessing||!this.state.isSdkLoaded||this.props.disabled)&&(e.opacity=.6),s(e,this.props.containerStyle)}},{key:"render",value:function(){var e=this.props,t=(e.disabled,e.callback,e.apiId,r(e,["disabled","callback","apiId"]));return p["default"].createElement("span",{style:this.containerStyle()},p["default"].createElement("button",s({},t,{type:"button",onClick:this.click})),this.style())}}]),t}(p["default"].Component);h.propTypes={disabled:d["default"].bool,callback:d["default"].func.isRequired,apiId:d["default"].string.isRequired,containerStyle:d["default"].object},t["default"]=h},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){"use strict";function o(){}function r(){}var a=n(7);r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,i){if(i!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){e.exports=n(5)()},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(t,n){t.exports=e}])});