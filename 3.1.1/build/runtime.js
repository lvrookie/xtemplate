KISSY.add("kg/xtemplate/3.1.1/runtime",[],function(n,t,r,e){var i,a,o,f,s;i=function(n){function t(){var n="";for(var t in e)n+=t+"|";return n=n.slice(0,-1),a=new RegExp(n,"g")}var r,e={"&":"&amp;",">":"&gt;","<":"&lt;","`":"&#x60;","/":"&#x2F;",'"':"&quot;","'":"&#x27;"},i=/[&<>"'`]/,a=t(),o=/\\?\{([^{}]+)\}/g,f="undefined"!=typeof global?global:window,s=Object.prototype.toString;return n=r={isArray:Array.isArray||function(n){return"[object Array]"===s.call(n)},keys:Object.keys||function(n){var t,r=[];for(t in n)n.hasOwnProperty(t)&&r.push(t);return r},each:function(n,t,e){if(n){var i,a,o,f=0,s=n&&n.length,c=void 0===s||"[object Function]"===Object.prototype.toString.call(n);if(e=e||null,c)for(o=r.keys(n);f<o.length&&(i=o[f],t.call(e,n[i],i,n)!==!1);f++);else for(a=n[0];s>f&&t.call(e,a,f,n)!==!1;a=n[++f]);}return n},mix:function(n,t){for(var r in t)n[r]=t[r];return n},globalEval:function(n){f.execScript?f.execScript(n):!function(n){f.eval.call(f,n)}(n)},substitute:function(n,t,r){return"string"==typeof n&&t?n.replace(r||o,function(n,r){return"\\"===n.charAt(0)?n.slice(1):void 0===t[r]?"":t[r]}):n},escapeHtml:function(n){return n=""+n,i.test(n)?(n+"").replace(a,function(n){return e[n]}):n}}}(),a=function(n){function t(n,t,r){this.data=void 0!==n?n:{},r?(this.parent=r,this.root=r.root):(this.parent=void 0,this.root=this),this.affix=t||{},this.ready=!1}return t.prototype={isScope:1,constructor:t,setParent:function(n){this.parent=n,this.root=n.root},set:function(n,t){this.affix[n]=t},setData:function(n){this.data=n},getData:function(){return this.data},mix:function(n){var t=this.affix;for(var r in n)t[r]=n[r]},get:function(n){var t,r=this.data,e=this.affix;return null!=r&&(t=r[n]),void 0!==t?t:e[n]},resolveInternal:function(n){var t,r,e=n[0],i=this,a=i,o=n.length;if("this"===e)t=i.data;else if("root"===e)a=a.root,t=a.data;else{if(!e)return a.data;do t=a.get(e);while(void 0===t&&(a=a.parent))}for(r=1;o>r;r++)t=t[n[r]];return t},resolveUp:function(n){return this.parent&&this.parent.resolveInternal(n)},resolve:function(n,t){var r,e=this,i=e;if(!t&&1===n.length){if(r=e.get(n[0]),void 0!==r)return r;t=1}if(t)for(;i&&t--;)i=i.parent;return i?i.resolveInternal(n):void 0}},n=t}(),o=function(n){function t(n,t,r){this.list=n,this.init(),this.next=t,this.ready=!1,this.tpl=r}function r(n,r){var e=this;e.config=r,e.head=new t(e,void 0),e.callback=n,this.init()}var e=i;return t.prototype={constructor:t,isBuffer:1,init:function(){this.data=""},append:function(n){return this.data+=n,this},write:function(n){if(null!=n){if(n.isBuffer)return n;this.data+=n}return this},writeEscaped:function(n){if(null!=n){if(n.isBuffer)return n;this.data+=e.escapeHtml(n)}return this},async:function(n){var r=this,e=r.list,i=r.tpl,a=new t(e,r.next,i),o=new t(e,a,i);return r.next=o,r.ready=!0,n(o),a},error:function(n){var t=this.list.callback;if(t){var r=this.tpl;if(r){n instanceof Error||(n=new Error(n));var e=r.name,i=r.pos.line,a="At "+e+":"+i+": ";n.stack=a+n.stack,n.message=a+n.message,n.xtpl={pos:{line:i},name:e}}this.list.callback=null,t(n,void 0)}},end:function(){var n=this;return n.list.callback&&(n.ready=!0,n.list.flush()),n}},r.prototype={constructor:r,init:function(){this.data=""},append:function(n){this.data+=n},end:function(){this.callback(null,this.data),this.callback=null},flush:function(){for(var n=this,t=n.head;t;){if(!t.ready)return n.head=t,void 0;this.data+=t.data,t=t.next}n.end()}},r.Buffer=t,n=r}(),f=function(n){var t=a,r=i,e={range:function(n,t){var r=t.params,e=r[0],i=r[1],a=r[2];a?(e>i&&a>0||i>e&&0>a)&&(a=-a):a=e>i?-1:1;for(var o=[],f=e;i>e?i>f:f>i;f+=a)o.push(f);return o},foreach:function(n,r,e){var i,a,o,f,s=r.params,c=s[0],u=s[2]||"xindex",l=s[1];if(c)for(i=c.length,f=0;i>f;f++)a=new t(c[f],{xcount:i,xindex:f},n),o=a.affix,"xindex"!==u&&(o[u]=f,o.xindex=void 0),l&&(o[l]=c[f]),e=r.fn(a,e);return e},forin:function(n,r,e){var i,a,o,f=r.params,s=f[0],c=f[2]||"xindex",u=f[1];if(s)for(o in s)i=new t(s[o],{xindex:o},n),a=i.affix,"xindex"!==c&&(a[c]=o,a.xindex=void 0),u&&(a[u]=s[o]),e=r.fn(i,e);return e},each:function(n,t,i){var a=t.params,o=a[0];return o?r.isArray(o)?e.foreach(n,t,i):e.forin(n,t,i):i},"with":function(n,r,e){var i=r.params,a=i[0];if(a){var o=new t(a,void 0,n);e=r.fn(o,e)}return e},"if":function(n,t,r){var e=t.params,i=e[0];if(i){var a=t.fn;a&&(r=a(n,r))}else{var o=!1,f=t.elseIfs,s=t.inverse;if(f)for(var c=0,u=f.length;u>c;c++){var l=f[c];if(o=l.test(n)){r=l.fn(n,r);break}}!o&&s&&(r=s(n,r))}return r},set:function(n,t,r){return n.mix(t.hash),r},include:1,parse:1,extend:function(n,t,r){return this.runtime.extendTplName=t.params[0],r},block:function(n,t,r){var e,i=this,a=i.runtime,o=t.params,f=o[0];2===o.length&&(e=o[0],f=o[1]);var s,c=a.blocks=a.blocks||{},u=c[f],l={fn:t.fn,type:e};if(u){if(u.type)if("append"===u.type)l.next=u,c[f]=l;else if("prepend"===u.type){var d;for(s=u;s&&"prepend"===s.type;)d=s,s=s.next;l.next=s,d.next=l}}else c[f]=l;if(!a.extendTplName)for(s=c[f];s;)s.fn&&(r=s.fn.call(i,n,r)),s=s.next;return r},macro:function(n,r,e){var i=r.hash,a=r.params,o=a[0],f=a.slice(1),s=this,c=s.runtime,u=c.macros=c.macros||{};if(r.fn)u[o]={paramNames:f,hash:i,fn:r.fn};else{var l,d=u[o],h=d.hash||{};if(!d||!(l=d.paramNames)){var v="in file: "+s.name+" can not find macro: "+name+'" at line '+s.pos.line+", col "+s.pos.col;throw new Error(v)}for(var p=0,m=l.length;m>p;p++){var x=l[p];h[x]=f[p]}if(i)for(var g in i)h[g]=i[g];var y=new t(h);e=d.fn.call(s,y,e)}return e}};return e["debugger"]=function(){},n=e}(),s=function(n){function r(n,t,r,e,i,a){this.name=n,this.originalName=a,this.runtime=t,this.root=r,this.pos={line:1},this.scope=e,this.buffer=i}function e(n,t,r){var e=r[0],i=n&&n[e]||t&&t[e]||x[e];if(1===r.length)return i;if(i)for(var a=r.length,o=1;a>o&&(i=i[r[o]],i);o++);return i}function s(n,t){var r=n.split("/"),e=t.split("/");r.pop();for(var i=0,a=e.length;a>i;i++){var o=e[i];"."===o||(".."===o?r.pop():r.push(o))}return r.join("/")}function c(n,t,r,i,a,o){var f,s,c;return o||(c=e(n.runtime.commands,n.root.config.commands,a)),c?c.call(n,t,r,i):(f=t.resolve(a.slice(0,-1),o),(s=f[a[a.length-1]])?s.apply(f,r.params):(i.error("Command Not Found: "+a.join(".")),i))}function u(n,t){var r=this;r.fn=n,t=r.config=t||{},t.loader=t.loader||u.loader,this.subNameResolveCache={}}function l(n,t,r){if("."!==t.charAt(0))return t;if(!r){var e="parent template does not have name for relative sub tpl name: "+t;throw new Error(e)}var i=r+"_ks_"+t,a=n.subNameResolveCache,o=a[i];return o?o:t=a[i]=s(r,t)}function d(n,t,r,e,i,a){var o=l(n,a,i.name);return e.async(function(e){h(n,o,i.runtime,t,e,a,r)})}function h(n,t,e,i,a,o,f){var s=new r(t,e,n,i,a,o);a.tpl=s,n.config.loader.load(s,function(t,r){"function"==typeof r?v(n,i,a,s,r):t?a.error(t):r&&(f?a.writeEscaped(r):a.data+=r,a.end())})}function v(n,t,r,e,i){if(r=i(e)){var a=e.runtime,o=a.extendTplName;return o&&(a.extendTplName=null,r=d(n,t,0,r,e,o)),r.end()}}var p=i,m=f,x={},g=a,y=o,w={callFn:c,callCommand:function(n,t,r,e,i){return c(n,t,r,e,i)}},b={cache:{},load:function(n,r){var e=this.cache,i=n.name,a=e[i];return void 0!==a?r(void 0,a):(t([i],function(n){e[i]=n,r(void 0,n)},function(){var n='template "'+i+'" does not exist';console.error(n),r(n)}),void 0)}};return p.mix(u,{loader:b,version:"3.1.1",nativeCommands:m,utils:w,util:p,addCommand:function(n,t){x[n]=t},removeCommand:function(n){delete x[n]}}),u.prototype={constructor:u,Scope:g,nativeCommands:m,utils:w,removeCommand:function(n){var t=this.config;t.commands&&delete t.commands[n]},addCommand:function(n,t){var r=this.config;r.commands=r.commands||{},r.commands[n]=t},include:function(n,t,r,e){var i,a,o=t.params,f=o.length;a=n;var s=t.hash,c=t&&t.escape;for(i=0;f>i;i++)s&&(a=new g(s,void 0,n)),r=d(this,a,c,r,e,o[i]);return r},render:function(n,t,e){var i="",a=this,o=a.fn,f=a.config;"function"==typeof t&&(e=t,t=null),t=t||{},e=e||function(n,t){if(n)throw n instanceof Error||(n=new Error(n)),n;i=t};var s=a.config.name;!s&&o&&o.TPL_NAME&&(s=o.TPL_NAME);var c=new g(n),l=new u.LinkedBuffer(e,f).head,d=new r(s,{commands:t.commands},a,c,l,s);return l.tpl=d,o?(v(a,c,l,d,o),i):(f.loader.load(d,function(n,t){t?(a.fn=t,v(a,c,l,d,t)):n&&l.error(n)}),i)}},u.Scope=g,u.LinkedBuffer=y,n=u}(),e.exports=s});