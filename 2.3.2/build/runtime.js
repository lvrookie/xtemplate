KISSY.add("kg/xtemplate/2.3.2/runtime",[],function(n,t,e,r){var i,a,o,f,s;i=function(n){function t(){var n="";for(var t in r)n+=t+"|";return n=n.slice(0,-1),a=new RegExp(n,"g")}var e,r={"&":"&amp;",">":"&gt;","<":"&lt;","`":"&#x60;","/":"&#x2F;",'"':"&quot;","'":"&#x27;"},i=/[&<>"'`]/,a=t(),o=/\\?\{([^{}]+)\}/g,f="undefined"!=typeof global?global:window,s=Object.prototype.toString;return n=e={isArray:Array.isArray||function(n){return"[object Array]"===s.call(n)},keys:Object.keys||function(n){var t,e=[];for(t in n)n.hasOwnProperty(t)&&e.push(t);return e},each:function(n,t,r){if(n){var i,a,o,f=0,s=n&&n.length,c=void 0===s||"[object Function]"===Object.prototype.toString.call(n);if(r=r||null,c)for(o=e.keys(n);f<o.length&&(i=o[f],t.call(r,n[i],i,n)!==!1);f++);else for(a=n[0];s>f&&t.call(r,a,f,n)!==!1;a=n[++f]);}return n},mix:function(n,t){for(var e in t)n[e]=t[e];return n},globalEval:function(n){f.execScript?f.execScript(n):!function(n){f.eval.call(f,n)}(n)},substitute:function(n,t,e){return"string"==typeof n&&t?n.replace(e||o,function(n,e){return"\\"===n.charAt(0)?n.slice(1):void 0===t[e]?"":t[e]}):n},escapeHtml:function(n){return n=""+n,i.test(n)?(n+"").replace(a,function(n){return r[n]}):n},log:function(){"undefined"!=typeof console&&console.log.apply(console,arguments)}}}(),a=function(n){function t(n,t){this.data=void 0!==n?n:{},this.root=this,this.parent=void 0,this.affix=t||{}}return t.prototype={isScope:1,setParent:function(n){this.parent=n,this.root=n.root},set:function(n,t){this.affix[n]=t},setData:function(n){this.data=n},getData:function(){return this.data},mix:function(n){var t=this.affix;for(var e in n)t[e]=n[e]},get:function(n){var t,e=this.data,r=this.affix;return null!=e&&(t=e[n]),void 0!==t?t:r[n]},resolveInternal:function(n){var t,e,r=n[0],i=this,a=i,o=n.length;if("this"===r)t=i.data;else if("root"===r)a=a.root,t=a.data;else{if(!r)return a.data;do t=a.get(r);while(void 0===t&&(a=a.parent))}for(e=1;o>e;e++)t=t[n[e]];return t},resolveUp:function(n){return this.parent&&this.parent.resolveInternal(n)},resolve:function(n,t){var e,r=this,i=r;if(!t&&1===n.length){if(e=r.get(n[0]),void 0!==e)return e;t=1}if(t)for(;i&&t--;)i=i.parent;return i?i.resolveInternal(n):void 0}},n=t}(),o=function(n){function t(n,t){this.list=n,this.init(),this.next=t,this.ready=!1,this.tpl=void 0}function e(n,e){var r=this;r.config=e,r.head=new t(r,void 0),r.callback=n,this.init()}var r=i;return t.prototype={constructor:t,isBuffer:1,init:function(){this.data=""},append:function(n){return this.data+=n,this},write:function(n){if(null!=n){if(n.isBuffer)return n;this.data+=n}return this},writeEscaped:function(n){if(null!=n){if(n.isBuffer)return n;this.data+=r.escapeHtml(n)}return this},async:function(n){var e=this,r=e.list,i=e.tpl,a=new t(r,e.next);a.tpl=i;var o=new t(r,a);return o.tpl=i,e.next=o,e.ready=!0,n(o),a},error:function(n){var t=this.list.callback;if(t){var e=this.tpl;if(e){n instanceof Error||(n=new Error(n));var r=e.name,i=e.pos,a="At "+r+":"+i.line+": ";n.stack=a+n.stack,n.message=a+n.message,n.xtpl={pos:i,name:r}}this.list.callback=null,t(n,void 0)}},end:function(){var n=this;return n.list.callback&&(n.ready=!0,n.list.flush()),n}},e.prototype={constructor:e,init:function(){this.data=""},append:function(n){this.data+=n},end:function(){this.callback(null,this.data),this.callback=null},flush:function(){for(var n=this,t=n.head;t;){if(!t.ready)return n.head=t,void 0;this.data+=t.data,t=t.next}n.end()}},e.Buffer=t,n=e}(),f=function(n){var t=a,e=i,r={range:function(n,t){var e=t.params,r=e[0],i=e[1],a=e[2];a?(r>i&&a>0||i>r&&0>a)&&(a=-a):a=r>i?-1:1;for(var o=[],f=r;i>r?i>f:f>i;f+=a)o.push(f);return o},foreach:function(n,e,r){var i,a,o,f,s=e.params,c=s[0],u=s[2]||"xindex",l=s[1];if(c)for(i=c.length,f=0;i>f;f++)a=new t(c[f],{xcount:i,xindex:f}),o=a.affix,"xindex"!==u&&(o[u]=f,o.xindex=void 0),l&&(o[l]=c[f]),a.setParent(n),r=e.fn(a,r);return r},forin:function(n,e,r){var i,a,o,f=e.params,s=f[0],c=f[2]||"xindex",u=f[1];if(s)for(o in s)i=new t(s[o],{xindex:o}),a=i.affix,"xindex"!==c&&(a[c]=o,a.xindex=void 0),u&&(a[u]=s[o]),i.setParent(n),r=e.fn(i,r);return r},each:function(n,t,i){var a=t.params,o=a[0];return o?e.isArray(o)?r.foreach(n,t,i):r.forin(n,t,i):i},"with":function(n,e,r){var i=e.params,a=i[0];if(a){var o=new t(a);o.setParent(n),r=e.fn(o,r)}return r},"if":function(n,t,e){var r=t.params,i=r[0];if(i){var a=t.fn;a&&(e=a(n,e))}else{var o=!1,f=t.elseIfs,s=t.inverse;if(f)for(var c=0,u=f.length;u>c;c++){var l=f[c];if(o=l.test(n)){e=l.fn(n,e);break}}!o&&s&&(e=s(n,e))}return e},set:function(n,t,e){return n.mix(t.hash),e},include:function(n,e,r){var i,a,o=e.params,f=o.length;a=n;var s=!0;for(e.hash&&(a=new t(e.hash),a.setParent(n),s=!1),i=0;f>i;i++)r=this.root.include(o[i],this,a,e,r,s);return r},parse:function(n,e,i){return r.include.call(this,new t,e,i)},extend:function(n,t,e){return this.runtime.extendTplName=t.params[0],e},block:function(n,t,e){var r,i=this,a=i.runtime,o=t.params,f=o[0];2===o.length&&(r=o[0],f=o[1]);var s,c=a.blocks=a.blocks||{},u=c[f],l={fn:t.fn,type:r};if(u){if(u.type)if("append"===u.type)l.next=u,c[f]=l;else if("prepend"===u.type){var d;for(s=u;s&&"prepend"===s.type;)d=s,s=s.next;l.next=s,d.next=l}}else c[f]=l;if(!a.extendTplName)for(s=c[f];s;)s.fn&&(e=s.fn.call(i,n,e)),s=s.next;return e},macro:function(n,e,r){var i=e.hash,a=e.params,o=a[0],f=a.slice(1),s=this,c=s.runtime,u=c.macros=c.macros||{};if(e.fn)u[o]={paramNames:f,hash:i,fn:e.fn};else{var l,d=u[o],h=d.hash||{};if(!d||!(l=d.paramNames)){var p="in file: "+s.name+" can not find macro: "+name+'" at line '+s.pos.line+", col "+s.pos.col;throw new Error(p)}for(var v=0,m=l.length;m>v;v++){var x=l[v];h[x]=f[v]}if(i)for(var g in i)h[g]=i[g];var y=new t(h);r=d.fn.call(s,y,r)}return r}};return r["debugger"]=function(){},n=r}(),s=function(n){function e(n,t,e){var r=e[0],i=n&&n[r]||t&&t[r]||h[r];if(1===e.length)return i;if(i)for(var a=e.length,o=1;a>o&&(i=i[e[o]],i);o++);return i}function r(n,t){var e=n.split("/"),r=t.split("/");e.pop();for(var i=0,a=r.length;a>i;i++){var o=r[i];"."===o||(".."===o?e.pop():e.push(o))}return e.join("/")}function s(n,t,e){if(e=n.fn(t,e)){var r=n.runtime,i=r.extendTplName;return i&&(r.extendTplName=null,e=n.root.include(i,n,t,null,e)),e.end()}}function c(n,t,r,i,a,o){var f,s,c;if(o||(c=e(n.runtime.commands,n.root.config.commands,a)),c)return c.call(n,t,r,i);if(f=t.resolve(a.slice(0,-1),o),s=f[a[a.length-1]])return s.apply(f,r.params);throw new Error("in file: "+n.name+" can not call: "+a.join(".")+'" at line '+n.pos.line)}function u(n,t){var e=this;e.fn=n,t=e.config=t||{},t.loader=t.loader||u.loader,this.subNameResolveCache={}}var l=i,d=f,h={},p=a,v=o,m={callFn:c,callCommand:function(n,t,e,r,i){return c(n,t,e,r,i)}},x={cache:{},load:function(n,e){var r=n.name,i=this.cache,a=i[r];return a?e(void 0,a):(t([r],function(n){i[r]=n,e(void 0,n)},function(){var t='template "'+n.name+'" does not exist';l.log(t,"error"),e(t)}),void 0)}};return l.mix(u,{loader:x,version:"2.3.2",nativeCommands:d,utils:m,util:l,addCommand:function(n,t){h[n]=t},removeCommand:function(n){delete h[n]}}),u.prototype={constructor:u,Scope:p,nativeCommands:d,utils:m,removeCommand:function(n){var t=this.config;t.commands&&delete t.commands[n]},addCommand:function(n,t){var e=this.config;e.commands=e.commands||{},e.commands[n]=t},resolve:function(n,t){if("."!==n.charAt(0))return n;if(!t){var e="parent template does not have name for relative sub tpl name: "+n;throw new Error(e)}var i=t+"_ks_"+n,a=this.subNameResolveCache,o=a[i];return o?o:n=a[i]=r(t,n)},include:function(n,t,e,r,i,a){var o=this,f=t.name,c=o.resolve(n,f);return i.async(function(i){o.config.loader.load({root:o,parentName:f,originalName:n,name:c,scope:e,option:r},function(n,o){var f={directAccess:a,pos:{line:1},root:t.root,fn:o,name:c,runtime:t.runtime};i.tpl=f,"function"==typeof o?s(f,e,i):n?i.error(n):(r&&r.escaped?i.writeEscaped(o):i.data+=o,i.end())})})},render:function(n,t,e){var r="",i=this,a=i.fn;"function"==typeof t&&(e=t,t=null),t=t||{},e=e||function(n,t){if(n)throw n instanceof Error||(n=new Error(n)),n;r=t};var o=i.config.name;!o&&a.TPL_NAME&&(o=a.TPL_NAME);var f=new p(n),c=new u.LinkedBuffer(e,i.config).head,l={name:o,fn:a,pos:{line:1},runtime:{commands:t.commands},root:i,directAccess:!0};return c.tpl=l,s(l,f,c),r}},u.Scope=p,u.LinkedBuffer=v,n=u}(),r.exports=s});