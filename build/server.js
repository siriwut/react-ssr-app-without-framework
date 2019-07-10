!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=40)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(a,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(e){return n[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var u=Object.prototype.toString;t.toString=u;var s=function(e){return"function"==typeof e};s(/x/)&&(t.isFunction=s=function(e){return"function"==typeof e&&"[object Function]"===u.call(e)}),t.isFunction=s;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===u.call(e)};t.isArray=c},function(e,t){e.exports=require("@material-ui/core/Grid")},function(e,t,r){"use strict";t.__esModule=!0;var n=["description","fileName","lineNumber","message","name","number","stack"];function a(e,t){var r=t&&t.loc,o=void 0,i=void 0;r&&(e+=" - "+(o=r.start.line)+":"+(i=r.start.column));for(var l=Error.prototype.constructor.call(this,e),u=0;u<n.length;u++)this[n[u]]=l[n[u]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{r&&(this.lineNumber=o,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(e){}}a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("@material-ui/core/CssBaseline")},function(e,t){e.exports=require("@material-ui/core/styles")},function(e,t){e.exports=require("@material-ui/styles")},function(e,t){e.exports=require("@material-ui/core/Link")},function(e,t){e.exports=require("@material-ui/core/TextField")},function(e,t){e.exports=require("@material-ui/core/Typography")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=s;var a=r(1),o=n(r(3)),i=r(26),l=r(34),u=n(r(36));t.VERSION="4.1.2";t.COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function s(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}s.prototype={constructor:s,logger:u.default,log:u.default.log,registerHelper:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple helpers");a.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===a.toString.call(e))a.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple decorators");a.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=u.default.log;t.log=c,t.createFrame=a.createFrame,t.logger=u.default},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("@material-ui/core/Avatar")},function(e,t){e.exports=require("@material-ui/core/Button")},function(e,t){e.exports=require("@material-ui/core/FormControlLabel")},function(e,t){e.exports=require("@material-ui/core/Checkbox")},function(e,t){e.exports=require("@material-ui/core/Paper")},function(e,t){e.exports=require("@material-ui/core/Box")},function(e,t){e.exports=require("@material-ui/icons/LockOutlined")},function(e,t,r){var n=r(24);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,n,a){var o,i,l=null!=t?t:e.nullContext||{},u=r.helperMissing;return'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />\n    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />\n    <style id="jss-server-side">'+(null!=(o="function"==typeof(i=null!=(i=r.materialCss||(null!=t?t.materialCss:t))?i:u)?i.call(l,{name:"materialCss",hash:{},data:a}):i)?o:"")+'</style>\n  </head>\n  <body>\n    <div id="app">'+(null!=(o="function"==typeof(i=null!=(i=r.body||(null!=t?t.body:t))?i:u)?i.call(l,{name:"body",hash:{},data:a}):i)?o:"")+'</div>\n    <script src="/client.js"><\/script>\n  </body>\n</html>\n'},useData:!0})},function(e,t){e.exports=require("handlebars")},function(e,t,r){e.exports=r(25).default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var o=a(r(11)),i=n(r(37)),l=n(r(3)),u=a(r(1)),s=a(r(38)),c=n(r(39));function f(){var e=new o.HandlebarsEnvironment;return u.extend(e,o),e.SafeString=i.default,e.Exception=l.default,e.Utils=u,e.escapeExpression=u.escapeExpression,e.VM=s,e.template=function(t){return s.template(t,e)},e}var d=f();d.create=f,c.default(d),d.default=d,t.default=d,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){a.default(e),o.default(e),i.default(e),l.default(e),u.default(e),s.default(e),c.default(e)};var a=n(r(27)),o=n(r(28)),i=n(r(29)),l=n(r(30)),u=n(r(31)),s=n(r(32)),c=n(r(33))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var a=r.inverse,o=r.fn;if(!0===t)return o(this);if(!1===t||null==t)return a(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):a(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return o(t,r)})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n,a=r(1),o=r(3),i=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var r=t.fn,n=t.inverse,o=0,l="",u=void 0,s=void 0;function c(t,n,o){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!o,s&&(u.contextPath=s+t)),l+=r(e[t],{data:u,blockParams:a.blockParams([e[t],t],[s+t,null])})}if(t.data&&t.ids&&(s=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(u=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var f=e.length;o<f;o++)o in e&&c(o,o,o===e.length-1);else{var d=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==d&&c(d,o-1),d=p,o++);void 0!==d&&c(d,o-1,!0)}return 0===o&&(l=n(this)),l})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n,a=r(3),o=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t.default=function(e){e.registerHelper("if",function(e,t){return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var a=1;null!=r.hash.level?a=r.hash.level:r.data&&null!=r.data.level&&(a=r.data.level),t[0]=a,e.log.apply(e,t)})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e?"constructor"!==t||e.propertyIsEnumerable(t)?e[t]:void 0:e})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t.default=function(e){e.registerHelper("with",function(e,t){n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var a=t.data;return t.data&&t.ids&&((a=n.createFrame(t.data)).contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:a,blockParams:n.blockParams([e],[a&&a.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var n,a=r(35),o=(n=a)&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t.default=function(e){e.registerDecorator("inline",function(e,t,r,a){var o=e;return t.partials||(t.partials={},o=function(a,o){var i=r.partials;r.partials=n.extend({},i,t.partials);var l=e(a,o);return r.partials=i,l}),t.partials[a.args[0]]=a.fn,o})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(a.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=a.lookupLevel(e),"undefined"!=typeof console&&a.lookupLevel(a.level)<=e){var t=a.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];console[t].apply(console,n)}}};t.default=a,e.exports=t.default},function(e,t,r){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=l.COMPILER_REVISION;if(t!==r){if(t<r){var n=l.REVISION_CHANGES[r],a=l.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+a+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r={strict:function(e,t){if(!(t in e))throw new i.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++)if(e[n]&&null!=e[n][t])return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:a.escapeExpression,invokePartial:function(r,n,o){o.hash&&(n=a.extend({},n,o.hash),o.ids&&(o.ids[0]=!0));r=t.VM.resolvePartial.call(this,r,n,o);var l=t.VM.invokePartial.call(this,r,n,o);null==l&&t.compile&&(o.partials[o.name]=t.compile(r,e.compilerOptions,t),l=o.partials[o.name](n,o));if(null!=l){if(o.indent){for(var u=l.split("\n"),s=0,c=u.length;s<c&&(u[s]||s+1!==c);s++)u[s]=o.indent+u[s];l=u.join("\n")}return l}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,a){var o=this.programs[e],i=this.fn(e);return t||a||n||r?o=u(this,e,i,t,r,n,a):o||(o=this.programs[e]=u(this,e,i)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=a.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function n(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=a.data;n._setup(a),!a.partial&&e.useData&&(o=function(e,t){t&&"root"in t||((t=t?l.createFrame(t):{}).root=e);return t}(t,o));var i=void 0,u=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,o,u,i)}return e.useDepths&&(i=a.depths?t!=a.depths[0]?[t].concat(a.depths):a.depths:[t]),(s=c(e.main,s,r,a.depths||[],o,u))(t,a)}return n.isTop=!0,n._setup=function(n){n.partial?(r.helpers=n.helpers,r.partials=n.partials,r.decorators=n.decorators):(r.helpers=r.merge(n.helpers,t.helpers),e.usePartial&&(r.partials=r.merge(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=r.merge(n.decorators,t.decorators)))},n._child=function(t,n,a,o){if(e.useBlockParams&&!a)throw new i.default("must pass block params");if(e.useDepths&&!o)throw new i.default("must pass parent depths");return u(r,t,e[t],n,0,a,o)},n},t.wrapProgram=u,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;r.fn&&r.fn!==s&&function(){r.data=l.createFrame(r.data);var e=r.fn;o=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=l.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=a.extend({},r.partials,e.partials))}();void 0===e&&o&&(e=o);if(void 0===e)throw new i.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=s;var n,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(1)),o=r(3),i=(n=o)&&n.__esModule?n:{default:n},l=r(11);function u(e,t,r,n,a,o,i){function l(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),r(e,t,e.helpers,e.partials,a.data||n,o&&[a.blockParams].concat(o),l)}return(l=c(r,l,e,i,n,o)).program=t,l.depth=i?i.length:0,l.blockParams=a||0,l}function s(){return""}function c(e,t,r,n,o,i){if(e.decorator){var l={};t=e.decorator(t,l,r,n&&n[0],o,i,n),a.extend(t,l)}return t}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){var t="undefined"!=typeof global?global:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default},function(e,t,r){"use strict";r.r(t);var n=r(4),a=r.n(n),o=r(12),i=r.n(o),l=r(0),u=r.n(l),s=r(13),c=r.n(s),f=r(14),d=(r(23),r(5)),p=r.n(d),m=r(7),h=r(6),v=Object(h.createMuiTheme)(),g=r(15),b=r.n(g),x=r(16),y=r.n(x),_=r(9),w=r.n(_),E=r(17),P=r.n(E),M=r(18),k=r.n(M),O=r(8),S=r.n(O),j=r(19),H=r.n(j),C=r(20),q=r.n(C),I=r(2),F=r.n(I),T=r(21),D=r.n(T),N=r(10),A=r.n(N);function R(){return u.a.createElement(A.a,{variant:"body2",color:"textSecondary",align:"center"},"Built with love by the ",u.a.createElement(S.a,{color:"inherit",href:"https://material-ui.com/"},"Material-UI")," team.")}var L=Object(h.makeStyles)(function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}});function V(){var e=L();return u.a.createElement(F.a,{container:!0,component:"main"},u.a.createElement(p.a,null),u.a.createElement(F.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),u.a.createElement(F.a,{item:!0,xs:12,sm:8,md:5,component:H.a,elevation:6,square:!0},u.a.createElement("div",{className:e.paper},u.a.createElement(b.a,{className:e.avatar},u.a.createElement(D.a,null)),u.a.createElement(A.a,{component:"h1",variant:"h5"},"Sign in"),u.a.createElement("form",{className:e.form,noValidate:!0},u.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),u.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),u.a.createElement(P.a,{control:u.a.createElement(k.a,{value:"remember",color:"primary"}),label:"Remember me"}),u.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),u.a.createElement(F.a,{container:!0},u.a.createElement(F.a,{item:!0,xs:!0},u.a.createElement(S.a,{href:"#",variant:"body2"},"Forgot password?")),u.a.createElement(F.a,{item:!0},u.a.createElement(S.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))),u.a.createElement(q.a,{mt:5},u.a.createElement(R,null))))))}function B(){return u.a.createElement(V,{name:"Alligator"})}var G=r(22),U=r.n(G),W=a()();W.use(a.a.static(c.a.resolve(__dirname,"..","build","public"))),W.use(function(e,t){var r=new m.ServerStyleSheets,n=Object(f.renderToString)(r.collect(u.a.createElement(m.StylesProvider,null,u.a.createElement(m.ThemeProvider,{theme:v},u.a.createElement(p.a,null),u.a.createElement(B,null))))),a=r.toString();t.send(U()({body:n,materialCss:a}))});var z=W;i.a.createServer(z).listen(process.env.PORT||3e3,function(e){e&&console.log(e),console.log("🚀 started")})}]);