KISSY.add("kg/xtemplate/3.2.1/index",["./runtime"],function(t,e,a,n){var r,i,s,o,u,p=e("./runtime");r=function(t){function e(t,a,n){var r=t[0];if(1===t.length)return"("+a+r+")";var i="t"+n;return"(("+i+"="+a+r+") != null?"+e(t.slice(1),i,++n)+":"+i+")"}var a=/\\*"/g,n=/\\*'/g,r=[].push,i={};i.undefined=i["null"]=i["true"]=i["false"]=1;var s=t={isGlobalId:function(t){return i[t.string]?1:0},chainedVariableRead:function(t,a,n,r,i,o){var u=s.convertIdPartsToRawAccessor(t,a,n),p=u.parts[0],h=u.parts,c="";r&&(c="scope.root.");var l=c+"affix",f=c+"data",b=["(","(t=("+l+p+")) !== undefined ? ",n.length>1?l+u.str:"t",":"];return i?b=b.concat(["(","(t = "+f+p+") !== undefined ? ",n.length>1?o?e(h.slice(1),"t",0):f+u.str:"t"," :",o?"scope.resolveLooseUp("+u.arr+")":"scope.resolveUp("+u.arr+")",")"]):b.push(o?e(h,f,0):f+u.str),b.push(")"),b.join("")},convertIdPartsToRawAccessor:function(t,e,a){var n,r,i,o,u,p=[],h=[];for(n=0,r=a.length;r>n;n++)i=a[n],o=i.type,o?(u=t[o](i),s.pushToArray(e,u.source),h.push("["+u.exp+"]"),p.push(u.exp)):(h.push("."+i),p.push(s.wrapByDoubleQuote(i)));return{str:h.join(""),arr:"["+p.join(",")+"]",parts:h}},wrapByDoubleQuote:function(t){return'"'+t+'"'},wrapBySingleQuote:function(t){return"'"+t+"'"},joinArrayOfString:function(t){return s.wrapByDoubleQuote(t.join('","'))},escapeSingleQuoteInCodeString:function(t,e){return t.replace(e?a:n,function(t){return t.length%2&&(t="\\"+t),t})},escapeString:function(t,e){return t=e?s.escapeSingleQuoteInCodeString(t,0):t.replace(/\\/g,"\\\\").replace(/'/g,"\\'"),t=t.replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")},pushToArray:function(t,e){e&&r.apply(t,e)}};return t}(),i=function(t){var e=function(t){function e(t,e){return e=e||1,t[t.length-e]}function a(t,e){for(var a in e)t[a]=e[a]}function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function r(t,e,a){if(t){var r,i,s,o=0;if(a=a||null,n(t))for(s=t.length,i=t[0];s>o&&e.call(a,i,o,t)!==!1;i=t[++o]);else for(r in t)if(e.call(a,t[r],r,t)===!1)break}}function i(t,e){for(var a=0,n=e.length;n>a;a++)if(e[a]===t)return!0;return!1}var s={},o={SHIFT_TYPE:1,REDUCE_TYPE:2,ACCEPT_TYPE:0,TYPE_INDEX:0,PRODUCTION_INDEX:1,TO_INDEX:2},u=function(t){var e=this;e.rules=[],a(e,t),e.resetInput(e.input)};u.prototype={resetInput:function(t){a(this,{input:t,matched:"",stateStack:[u.STATIC.INITIAL],match:"",text:"",firstLine:1,lineNumber:1,lastLine:1,firstColumn:1,lastColumn:1})},getCurrentRules:function(){var t=this,e=t.stateStack[t.stateStack.length-1],a=[];return t.mapState&&(e=t.mapState(e)),r(t.rules,function(t){var n=t.state||t[3];n?i(e,n)&&a.push(t):e===u.STATIC.INITIAL&&a.push(t)}),a},pushState:function(t){this.stateStack.push(t)},popState:function(t){t=t||1;for(var e;t--;)e=this.stateStack.pop();return e},showDebugInfo:function(){var t=this,e=u.STATIC.DEBUG_CONTEXT_LIMIT,a=t.matched,n=t.match,r=t.input;a=a.slice(0,a.length-n.length);var i=(a.length>e?"...":"")+a.slice(0-e).replace(/\n/g," "),s=n+r;return s=s.slice(0,e).replace(/\n/g," ")+(s.length>e?"...":""),i+s+"\n"+new Array(i.length+1).join("-")+"^"},mapSymbol:function(t){return this.symbolMap[t]},mapReverseSymbol:function(t){var e,a=this,n=a.symbolMap,r=a.reverseSymbolMap;if(!r&&n){r=a.reverseSymbolMap={};for(e in n)r[n[e]]=e}return r?r[t]:t},lex:function(){var e,n,r,i,s,o=this,p=o.input,h=o.getCurrentRules();if(o.match=o.text="",!p)return o.mapSymbol(u.STATIC.END_TAG);for(e=0;e<h.length;e++){n=h[e];var c=n.regexp||n[1],l=n.token||n[0],f=n.action||n[2]||t;if(r=p.match(c)){s=r[0].match(/\n.*/g),s&&(o.lineNumber+=s.length),a(o,{firstLine:o.lastLine,lastLine:o.lineNumber,firstColumn:o.lastColumn,lastColumn:s?s[s.length-1].length-1:o.lastColumn+r[0].length});var b;return b=o.match=r[0],o.matches=r,o.text=b,o.matched+=b,i=f&&f.call(o),i=i===t?l:o.mapSymbol(i),p=p.slice(b.length),o.input=p,i?i:o.lex()}}}},u.STATIC={INITIAL:"I",DEBUG_CONTEXT_LIMIT:20,END_TAG:"$EOF"};var p=new u({rules:[[0,/^[\s\S]*?(?={{)/,function(){var t,e=this,a=e.text,n=0;return(t=a.match(/\\+$/))&&(n=t[0].length),n%2?(e.pushState("et"),a=a.slice(0,-1)):e.pushState("t"),n&&(a=a.replace(/\\+$/g,function(t){return new Array(t.length/2+1).join("\\")})),e.text=a,"CONTENT"}],["b",/^[\s\S]+/,0],["b",/^[\s\S]{2,}?(?:(?={{)|$)/,function(){this.popState()},["et"]],["c",/^{{{?(?:#|@)/,function(){var t=this,e=t.text;4===e.length?t.pushState("p"):t.pushState("e")},["t"]],["d",/^{{{?\//,function(){var t=this,e=t.text;4===e.length?t.pushState("p"):t.pushState("e")},["t"]],["e",/^{{\s*else\s*}}/,function(){this.popState()},["t"]],[0,/^{{![\s\S]*?}}/,function(){this.popState()},["t"]],["b",/^{{%([\s\S]*?)%}}/,function(){this.text=this.matches[1]||"",this.popState()},["t"]],["f",/^{{{?/,function(){var t=this,e=t.text;3===e.length?t.pushState("p"):t.pushState("e")},["t"]],[0,/^\s+/,0,["p","e"]],["g",/^,/,0,["p","e"]],["h",/^}}}/,function(){this.popState(2)},["p"]],["h",/^}}/,function(){this.popState(2)},["e"]],["i",/^\(/,0,["p","e"]],["j",/^\)/,0,["p","e"]],["k",/^\|\|/,0,["p","e"]],["l",/^&&/,0,["p","e"]],["m",/^===/,0,["p","e"]],["n",/^!==/,0,["p","e"]],["o",/^>=/,0,["p","e"]],["p",/^<=/,0,["p","e"]],["q",/^>/,0,["p","e"]],["r",/^</,0,["p","e"]],["s",/^\+/,0,["p","e"]],["t",/^-/,0,["p","e"]],["u",/^\*/,0,["p","e"]],["v",/^\//,0,["p","e"]],["w",/^%/,0,["p","e"]],["x",/^!/,0,["p","e"]],["y",/^"(\\[\s\S]|[^\\"\n])*"/,function(){this.text=this.text.slice(1,-1).replace(/\\"/g,'"')},["p","e"]],["y",/^'(\\[\s\S]|[^\\'\n])*'/,function(){this.text=this.text.slice(1,-1).replace(/\\'/g,"'")},["p","e"]],["z",/^\d+(?:\.\d+)?(?:e-?\d+)?/i,0,["p","e"]],["aa",/^=/,0,["p","e"]],["ab",/^\.\./,function(){this.pushState("ws")},["p","e"]],["ac",/^\//,function(){this.popState()},["ws"]],["ac",/^\./,0,["p","e"]],["ad",/^\[/,0,["p","e"]],["ae",/^\]/,0,["p","e"]],["af",/^\{/,0,["p","e"]],["ag",/^\:/,0,["p","e"]],["ah",/^\}/,0,["p","e"]],["ab",/^[a-zA-Z_$][a-zA-Z0-9_$]*/,0,["p","e"]]]});return s.lexer=p,p.symbolMap={$EOF:"a",CONTENT:"b",OPEN_BLOCK:"c",OPEN_CLOSE_BLOCK:"d",INVERSE:"e",OPEN_TPL:"f",COMMA:"g",CLOSE:"h",L_PAREN:"i",R_PAREN:"j",OR:"k",AND:"l",LOGIC_EQUALS:"m",LOGIC_NOT_EQUALS:"n",GE:"o",LE:"p",GT:"q",LT:"r",PLUS:"s",MINUS:"t",MULTIPLY:"u",DIVIDE:"v",MODULUS:"w",NOT:"x",STRING:"y",NUMBER:"z",EQUALS:"aa",ID:"ab",SEP:"ac",L_BRACKET:"ad",R_BRACKET:"ae",L_BRACE:"af",COLON:"ag",R_BRACE:"ah",$START:"ai",program:"aj",statements:"ak",statement:"al","function":"am",id:"an",expression:"ao",params:"ap",hash:"aq",param:"ar",conditionalOrExpression:"as",listExpression:"at",jsonExpression:"au",jsonPart:"av",conditionalAndExpression:"aw",equalityExpression:"ax",relationalExpression:"ay",additiveExpression:"az",multiplicativeExpression:"ba",unaryExpression:"bb",primaryExpression:"bc",hashSegment:"bd",idSegments:"be"},s.productions=[["ai",["aj"]],["aj",["ak","e","ak"],function(){return new this.yy.ProgramNode({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1,this.$3)}],["aj",["ak"],function(){return new this.yy.ProgramNode({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["ak",["al"],function(){return[this.$1]}],["ak",["ak","al"],function(){this.$1.push(this.$2)}],["al",["c","am","h","aj","d","an","h"],function(){return new this.yy.BlockStatement({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$2,this.$4,this.$6,4!==this.$1.length)}],["al",["f","ao","h"],function(){return new this.yy.ExpressionStatement({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$2,3!==this.$1.length)}],["al",["b"],function(){return new this.yy.ContentStatement({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["am",["an","i","ap","g","aq","j"],function(){return new this.yy.Function({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1,this.$3,this.$5)}],["am",["an","i","ap","j"],function(){return new this.yy.Function({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1,this.$3)}],["am",["an","i","aq","j"],function(){return new this.yy.Function({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1,null,this.$3)}],["am",["an","i","j"],function(){return new this.yy.Function({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["ap",["ap","g","ar"],function(){this.$1.push(this.$3)}],["ap",["ar"],function(){return[this.$1]}],["ar",["ao"]],["ao",["as"]],["ao",["ad","at","ae"],function(){return new this.yy.ArrayExpression(this.$2)}],["ao",["af","au","ah"],function(){return new this.yy.JsonExpression(this.$2)}],["av",["y","ag","ao"],function(){return[this.$1,this.$3]}],["av",["ab","ag","ao"],function(){return[this.$1,this.$3]}],["au",["av"],function(){return[this.$1]}],["au",["au","g","av"],function(){this.$1.push(this.$3)}],["at",["ao"],function(){return[this.$1]}],["at",["at","g","ao"],function(){this.$1.push(this.$3)}],["as",["aw"]],["as",["as","k","aw"],function(){return new this.yy.ConditionalOrExpression(this.$1,this.$3)}],["aw",["ax"]],["aw",["aw","l","ax"],function(){return new this.yy.ConditionalAndExpression(this.$1,this.$3)}],["ax",["ay"]],["ax",["ax","m","ay"],function(){return new this.yy.EqualityExpression(this.$1,"===",this.$3)}],["ax",["ax","n","ay"],function(){return new this.yy.EqualityExpression(this.$1,"!==",this.$3)}],["ay",["az"]],["ay",["ay","r","az"],function(){return new this.yy.RelationalExpression(this.$1,"<",this.$3)}],["ay",["ay","q","az"],function(){return new this.yy.RelationalExpression(this.$1,">",this.$3)}],["ay",["ay","p","az"],function(){return new this.yy.RelationalExpression(this.$1,"<=",this.$3)}],["ay",["ay","o","az"],function(){return new this.yy.RelationalExpression(this.$1,">=",this.$3)}],["az",["ba"]],["az",["az","s","ba"],function(){return new this.yy.AdditiveExpression(this.$1,"+",this.$3)}],["az",["az","t","ba"],function(){return new this.yy.AdditiveExpression(this.$1,"-",this.$3)}],["ba",["bb"]],["ba",["ba","u","bb"],function(){return new this.yy.MultiplicativeExpression(this.$1,"*",this.$3)}],["ba",["ba","v","bb"],function(){return new this.yy.MultiplicativeExpression(this.$1,"/",this.$3)}],["ba",["ba","w","bb"],function(){return new this.yy.MultiplicativeExpression(this.$1,"%",this.$3)}],["bb",["x","bb"],function(){return new this.yy.UnaryExpression(this.$1,this.$2)}],["bb",["t","bb"],function(){return new this.yy.UnaryExpression(this.$1,this.$2)}],["bb",["bc"]],["bc",["am"]],["bc",["y"],function(){return new this.yy.String({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["bc",["z"],function(){return new this.yy.Number({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["bc",["an"]],["bc",["i","ao","j"],function(){return this.$2}],["aq",["aq","g","bd"],function(){var t=this.$1,e=this.$3;t.value[e[0]]=e[1]}],["aq",["bd"],function(){var t=new this.yy.Hash({line:this.lexer.firstLine,col:this.lexer.firstColumn}),e=this.$1;return t.value[e[0]]=e[1],t}],["bd",["ab","aa","ao"],function(){return[this.$1,this.$3]}],["an",["be"],function(){return new this.yy.Id({line:this.lexer.firstLine,col:this.lexer.firstColumn},this.$1)}],["be",["be","ac","ab"],function(){this.$1.push(this.$3)}],["be",["be","ad","ao","ae"],function(){this.$1.push(this.$3)}],["be",["ab"],function(){return[this.$1]}]],s.table={gotos:{0:{aj:4,ak:5,al:6},2:{am:8,an:9,be:10},3:{am:18,an:19,ao:20,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},5:{al:30},11:{am:18,an:19,ao:35,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},12:{am:18,an:19,bb:36,bc:28,be:10},13:{am:18,an:19,bb:37,bc:28,be:10},16:{am:18,an:19,ao:38,as:21,at:39,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},17:{au:42,av:43},29:{ak:58,al:6},31:{aj:59,ak:5,al:6},32:{am:18,an:19,ao:62,ap:63,aq:64,ar:65,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,bd:66,be:10},34:{am:18,an:19,ao:68,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},45:{am:18,an:19,aw:76,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},46:{am:18,an:19,ax:77,ay:24,az:25,ba:26,bb:27,bc:28,be:10},47:{am:18,an:19,ay:78,az:25,ba:26,bb:27,bc:28,be:10},48:{am:18,an:19,ay:79,az:25,ba:26,bb:27,bc:28,be:10},49:{am:18,an:19,az:80,ba:26,bb:27,bc:28,be:10},50:{am:18,an:19,az:81,ba:26,bb:27,bc:28,be:10},51:{am:18,an:19,az:82,ba:26,bb:27,bc:28,be:10},52:{am:18,an:19,az:83,ba:26,bb:27,bc:28,be:10},53:{am:18,an:19,ba:84,bb:27,bc:28,be:10},54:{am:18,an:19,ba:85,bb:27,bc:28,be:10},55:{am:18,an:19,bb:86,bc:28,be:10},56:{am:18,an:19,bb:87,bc:28,be:10},57:{am:18,an:19,bb:88,bc:28,be:10},58:{al:30},70:{am:18,an:19,ao:96,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},72:{am:18,an:19,ao:97,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},73:{am:18,an:19,ao:98,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},74:{av:99},89:{an:100,be:10},90:{am:18,an:19,ao:101,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,be:10},91:{am:18,an:19,ao:62,aq:102,ar:103,as:21,aw:22,ax:23,ay:24,az:25,ba:26,bb:27,bc:28,bd:66,be:10},93:{bd:105}},action:{0:{b:[1,t,1],c:[1,t,2],f:[1,t,3]},1:{a:[2,7],e:[2,7],c:[2,7],f:[2,7],b:[2,7],d:[2,7]},2:{ab:[1,t,7]},3:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7],ad:[1,t,16],af:[1,t,17]},4:{a:[0]},5:{a:[2,2],d:[2,2],b:[1,t,1],c:[1,t,2],e:[1,t,29],f:[1,t,3]},6:{a:[2,3],e:[2,3],c:[2,3],f:[2,3],b:[2,3],d:[2,3]},7:{i:[2,57],ac:[2,57],ad:[2,57],h:[2,57],k:[2,57],l:[2,57],m:[2,57],n:[2,57],o:[2,57],p:[2,57],q:[2,57],r:[2,57],s:[2,57],t:[2,57],u:[2,57],v:[2,57],w:[2,57],j:[2,57],ae:[2,57],g:[2,57],ah:[2,57]},8:{h:[1,t,31]},9:{i:[1,t,32]},10:{i:[2,54],h:[2,54],k:[2,54],l:[2,54],m:[2,54],n:[2,54],o:[2,54],p:[2,54],q:[2,54],r:[2,54],s:[2,54],t:[2,54],u:[2,54],v:[2,54],w:[2,54],j:[2,54],ae:[2,54],g:[2,54],ah:[2,54],ac:[1,t,33],ad:[1,t,34]},11:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7],ad:[1,t,16],af:[1,t,17]},12:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},13:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},14:{h:[2,47],k:[2,47],l:[2,47],m:[2,47],n:[2,47],o:[2,47],p:[2,47],q:[2,47],r:[2,47],s:[2,47],t:[2,47],u:[2,47],v:[2,47],w:[2,47],j:[2,47],ae:[2,47],g:[2,47],ah:[2,47]},15:{h:[2,48],k:[2,48],l:[2,48],m:[2,48],n:[2,48],o:[2,48],p:[2,48],q:[2,48],r:[2,48],s:[2,48],t:[2,48],u:[2,48],v:[2,48],w:[2,48],j:[2,48],ae:[2,48],g:[2,48],ah:[2,48]},16:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7],ad:[1,t,16],af:[1,t,17]},17:{y:[1,t,40],ab:[1,t,41]},18:{h:[2,46],k:[2,46],l:[2,46],m:[2,46],n:[2,46],o:[2,46],p:[2,46],q:[2,46],r:[2,46],s:[2,46],t:[2,46],u:[2,46],v:[2,46],w:[2,46],j:[2,46],ae:[2,46],g:[2,46],ah:[2,46]},19:{h:[2,49],k:[2,49],l:[2,49],m:[2,49],n:[2,49],o:[2,49],p:[2,49],q:[2,49],r:[2,49],s:[2,49],t:[2,49],u:[2,49],v:[2,49],w:[2,49],j:[2,49],ae:[2,49],g:[2,49],ah:[2,49],i:[1,t,32]},20:{h:[1,t,44]},21:{h:[2,15],j:[2,15],ae:[2,15],g:[2,15],ah:[2,15],k:[1,t,45]},22:{h:[2,24],k:[2,24],j:[2,24],ae:[2,24],g:[2,24],ah:[2,24],l:[1,t,46]},23:{h:[2,26],k:[2,26],l:[2,26],j:[2,26],ae:[2,26],g:[2,26],ah:[2,26],m:[1,t,47],n:[1,t,48]},24:{h:[2,28],k:[2,28],l:[2,28],m:[2,28],n:[2,28],j:[2,28],ae:[2,28],g:[2,28],ah:[2,28],o:[1,t,49],p:[1,t,50],q:[1,t,51],r:[1,t,52]},25:{h:[2,31],k:[2,31],l:[2,31],m:[2,31],n:[2,31],o:[2,31],p:[2,31],q:[2,31],r:[2,31],j:[2,31],ae:[2,31],g:[2,31],ah:[2,31],s:[1,t,53],t:[1,t,54]},26:{h:[2,36],k:[2,36],l:[2,36],m:[2,36],n:[2,36],o:[2,36],p:[2,36],q:[2,36],r:[2,36],s:[2,36],t:[2,36],j:[2,36],ae:[2,36],g:[2,36],ah:[2,36],u:[1,t,55],v:[1,t,56],w:[1,t,57]},27:{h:[2,39],k:[2,39],l:[2,39],m:[2,39],n:[2,39],o:[2,39],p:[2,39],q:[2,39],r:[2,39],s:[2,39],t:[2,39],u:[2,39],v:[2,39],w:[2,39],j:[2,39],ae:[2,39],g:[2,39],ah:[2,39]},28:{h:[2,45],k:[2,45],l:[2,45],m:[2,45],n:[2,45],o:[2,45],p:[2,45],q:[2,45],r:[2,45],s:[2,45],t:[2,45],u:[2,45],v:[2,45],w:[2,45],j:[2,45],ae:[2,45],g:[2,45],ah:[2,45]},29:{b:[1,t,1],c:[1,t,2],f:[1,t,3]},30:{a:[2,4],e:[2,4],c:[2,4],f:[2,4],b:[2,4],d:[2,4]},31:{b:[1,t,1],c:[1,t,2],f:[1,t,3]},32:{i:[1,t,11],j:[1,t,60],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,61],ad:[1,t,16],af:[1,t,17]},33:{ab:[1,t,67]},34:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7],ad:[1,t,16],af:[1,t,17]},35:{j:[1,t,69]},36:{h:[2,44],k:[2,44],l:[2,44],m:[2,44],n:[2,44],o:[2,44],p:[2,44],q:[2,44],r:[2,44],s:[2,44],t:[2,44],u:[2,44],v:[2,44],w:[2,44],j:[2,44],ae:[2,44],g:[2,44],ah:[2,44]},37:{h:[2,43],k:[2,43],l:[2,43],m:[2,43],n:[2,43],o:[2,43],p:[2,43],q:[2,43],r:[2,43],s:[2,43],t:[2,43],u:[2,43],v:[2,43],w:[2,43],j:[2,43],ae:[2,43],g:[2,43],ah:[2,43]},38:{ae:[2,22],g:[2,22]},39:{g:[1,t,70],ae:[1,t,71]},40:{ag:[1,t,72]},41:{ag:[1,t,73]},42:{g:[1,t,74],ah:[1,t,75]},43:{ah:[2,20],g:[2,20]},44:{a:[2,6],e:[2,6],c:[2,6],f:[2,6],b:[2,6],d:[2,6]},45:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},46:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},47:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},48:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},49:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},50:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},51:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},52:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},53:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},54:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},55:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},56:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},57:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7]},58:{a:[2,1],d:[2,1],b:[1,t,1],c:[1,t,2],f:[1,t,3]},59:{d:[1,t,89]},60:{h:[2,11],k:[2,11],l:[2,11],m:[2,11],n:[2,11],o:[2,11],p:[2,11],q:[2,11],r:[2,11],s:[2,11],t:[2,11],u:[2,11],v:[2,11],w:[2,11],j:[2,11],ae:[2,11],g:[2,11],ah:[2,11]},61:{g:[2,57],i:[2,57],j:[2,57],k:[2,57],l:[2,57],m:[2,57],n:[2,57],o:[2,57],p:[2,57],q:[2,57],r:[2,57],s:[2,57],t:[2,57],u:[2,57],v:[2,57],w:[2,57],ac:[2,57],ad:[2,57],aa:[1,t,90]},62:{g:[2,14],j:[2,14]},63:{g:[1,t,91],j:[1,t,92]},64:{g:[1,t,93],j:[1,t,94]},65:{g:[2,13],j:[2,13]},66:{j:[2,52],g:[2,52]},67:{i:[2,55],ac:[2,55],ad:[2,55],h:[2,55],k:[2,55],l:[2,55],m:[2,55],n:[2,55],o:[2,55],p:[2,55],q:[2,55],r:[2,55],s:[2,55],t:[2,55],u:[2,55],v:[2,55],w:[2,55],j:[2,55],ae:[2,55],g:[2,55],ah:[2,55]},68:{ae:[1,t,95]},69:{h:[2,50],k:[2,50],l:[2,50],m:[2,50],n:[2,50],o:[2,50],p:[2,50],q:[2,50],r:[2,50],s:[2,50],t:[2,50],u:[2,50],v:[2,50],w:[2,50],j:[2,50],ae:[2,50],g:[2,50],ah:[2,50]},70:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7],ad:[1,t,16],af:[1,t,17]},71:{h:[2,16],j:[2,16],ae:[2,16],g:[2,16],ah:[2,16]},72:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7],ad:[1,t,16],af:[1,t,17]},73:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7],ad:[1,t,16],af:[1,t,17]},74:{y:[1,t,40],ab:[1,t,41]},75:{h:[2,17],j:[2,17],ae:[2,17],g:[2,17],ah:[2,17]},76:{h:[2,25],k:[2,25],j:[2,25],ae:[2,25],g:[2,25],ah:[2,25],l:[1,t,46]},77:{h:[2,27],k:[2,27],l:[2,27],j:[2,27],ae:[2,27],g:[2,27],ah:[2,27],m:[1,t,47],n:[1,t,48]},78:{h:[2,29],k:[2,29],l:[2,29],m:[2,29],n:[2,29],j:[2,29],ae:[2,29],g:[2,29],ah:[2,29],o:[1,t,49],p:[1,t,50],q:[1,t,51],r:[1,t,52]},79:{h:[2,30],k:[2,30],l:[2,30],m:[2,30],n:[2,30],j:[2,30],ae:[2,30],g:[2,30],ah:[2,30],o:[1,t,49],p:[1,t,50],q:[1,t,51],r:[1,t,52]},80:{h:[2,35],k:[2,35],l:[2,35],m:[2,35],n:[2,35],o:[2,35],p:[2,35],q:[2,35],r:[2,35],j:[2,35],ae:[2,35],g:[2,35],ah:[2,35],s:[1,t,53],t:[1,t,54]},81:{h:[2,34],k:[2,34],l:[2,34],m:[2,34],n:[2,34],o:[2,34],p:[2,34],q:[2,34],r:[2,34],j:[2,34],ae:[2,34],g:[2,34],ah:[2,34],s:[1,t,53],t:[1,t,54]},82:{h:[2,33],k:[2,33],l:[2,33],m:[2,33],n:[2,33],o:[2,33],p:[2,33],q:[2,33],r:[2,33],j:[2,33],ae:[2,33],g:[2,33],ah:[2,33],s:[1,t,53],t:[1,t,54]},83:{h:[2,32],k:[2,32],l:[2,32],m:[2,32],n:[2,32],o:[2,32],p:[2,32],q:[2,32],r:[2,32],j:[2,32],ae:[2,32],g:[2,32],ah:[2,32],s:[1,t,53],t:[1,t,54]},84:{h:[2,37],k:[2,37],l:[2,37],m:[2,37],n:[2,37],o:[2,37],p:[2,37],q:[2,37],r:[2,37],s:[2,37],t:[2,37],j:[2,37],ae:[2,37],g:[2,37],ah:[2,37],u:[1,t,55],v:[1,t,56],w:[1,t,57]},85:{h:[2,38],k:[2,38],l:[2,38],m:[2,38],n:[2,38],o:[2,38],p:[2,38],q:[2,38],r:[2,38],s:[2,38],t:[2,38],j:[2,38],ae:[2,38],g:[2,38],ah:[2,38],u:[1,t,55],v:[1,t,56],w:[1,t,57]},86:{h:[2,40],k:[2,40],l:[2,40],m:[2,40],n:[2,40],o:[2,40],p:[2,40],q:[2,40],r:[2,40],s:[2,40],t:[2,40],u:[2,40],v:[2,40],w:[2,40],j:[2,40],ae:[2,40],g:[2,40],ah:[2,40]},87:{h:[2,41],k:[2,41],l:[2,41],m:[2,41],n:[2,41],o:[2,41],p:[2,41],q:[2,41],r:[2,41],s:[2,41],t:[2,41],u:[2,41],v:[2,41],w:[2,41],j:[2,41],ae:[2,41],g:[2,41],ah:[2,41]},88:{h:[2,42],k:[2,42],l:[2,42],m:[2,42],n:[2,42],o:[2,42],p:[2,42],q:[2,42],r:[2,42],s:[2,42],t:[2,42],u:[2,42],v:[2,42],w:[2,42],j:[2,42],ae:[2,42],g:[2,42],ah:[2,42]},89:{ab:[1,t,7]},90:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,7],ad:[1,t,16],af:[1,t,17]},91:{i:[1,t,11],t:[1,t,12],x:[1,t,13],y:[1,t,14],z:[1,t,15],ab:[1,t,61],ad:[1,t,16],af:[1,t,17]},92:{h:[2,9],k:[2,9],l:[2,9],m:[2,9],n:[2,9],o:[2,9],p:[2,9],q:[2,9],r:[2,9],s:[2,9],t:[2,9],u:[2,9],v:[2,9],w:[2,9],j:[2,9],ae:[2,9],g:[2,9],ah:[2,9]},93:{ab:[1,t,104]},94:{h:[2,10],k:[2,10],l:[2,10],m:[2,10],n:[2,10],o:[2,10],p:[2,10],q:[2,10],r:[2,10],s:[2,10],t:[2,10],u:[2,10],v:[2,10],w:[2,10],j:[2,10],ae:[2,10],g:[2,10],ah:[2,10]},95:{i:[2,56],ac:[2,56],ad:[2,56],h:[2,56],k:[2,56],l:[2,56],m:[2,56],n:[2,56],o:[2,56],p:[2,56],q:[2,56],r:[2,56],s:[2,56],t:[2,56],u:[2,56],v:[2,56],w:[2,56],j:[2,56],ae:[2,56],g:[2,56],ah:[2,56]},96:{ae:[2,23],g:[2,23]},97:{ah:[2,18],g:[2,18]},98:{ah:[2,19],g:[2,19]},99:{ah:[2,21],g:[2,21]},100:{h:[1,t,106]},101:{j:[2,53],g:[2,53]},102:{g:[1,t,93],j:[1,t,107]},103:{g:[2,12],j:[2,12]},104:{aa:[1,t,90]},105:{j:[2,51],g:[2,51]},106:{a:[2,5],e:[2,5],c:[2,5],f:[2,5],b:[2,5],d:[2,5]},107:{h:[2,8],k:[2,8],l:[2,8],m:[2,8],n:[2,8],o:[2,8],p:[2,8],q:[2,8],r:[2,8],s:[2,8],t:[2,8],u:[2,8],v:[2,8],w:[2,8],j:[2,8],ae:[2,8],g:[2,8],ah:[2,8]}}},s.parse=function(a,n){var i,s,u,p,h,c=this,l=c.lexer,f=c.table,b=f.gotos,y=f.action,m=c.productions,v=n?"in file: "+n+" ":"",x=[],d=[0],g=[];for(l.resetInput(a);;){if(i=e(d),s||(s=l.lex()),p=s?y[i]&&y[i][s]:null,!p){var E,w=[];throw y[i]&&r(y[i],function(t,e){p=t[o.TYPE_INDEX];var a=[];a[o.SHIFT_TYPE]="shift",a[o.REDUCE_TYPE]="reduce",a[o.ACCEPT_TYPE]="accept",w.push(a[p]+":"+c.lexer.mapReverseSymbol(e))}),E=v+"syntax error at line "+l.lineNumber+":\n"+l.showDebugInfo()+"\nexpect "+w.join(", "),new Error(E)}switch(p[o.TYPE_INDEX]){case o.SHIFT_TYPE:g.push(s),x.push(l.text),d.push(p[o.TO_INDEX]),s=null;break;case o.REDUCE_TYPE:var S=m[p[o.PRODUCTION_INDEX]],j=S.symbol||S[0],$=S.action||S[2],T=S.rhs||S[1],C=T.length;h=e(x,C),u=t,c.$$=h;for(var k=0;C>k;k++)c["$"+(C-k)]=e(x,k+1);$&&(u=$.call(c)),h=u!==t?u:c.$$;var z=-1*C;d.splice(z,C),x.splice(z,C),g.splice(z,C),g.push(j),x.push(h);var I=b[e(d)][j];d.push(I);break;case o.ACCEPT_TYPE:return h}}},s}();return"undefined"!=typeof n&&(t=e),t}(),s=function(t){function e(t,e){var a=t.length,n=e.length;if(a!==n)return 0;for(var r=0;a>r;r++)if(t[r]!==e[r])return 0;return 1}var a={};return a.ProgramNode=function(t,e,a){var n=this;n.pos=t,n.statements=e,n.inverse=a},a.ProgramNode.prototype.type="program",a.BlockStatement=function(t,a,n,r,i){var s,o=r.parts,u=this;if(!e(a.id.parts,o))throw s="Syntax error at line "+t.line+", col "+t.col+":\nexpect {{/"+a.id.parts+"}} not {{/"+o+"}}",new Error(s);u.escape=i,u.pos=t,u.func=a,u.program=n},a.BlockStatement.prototype.type="blockStatement",a.ExpressionStatement=function(t,e,a){var n=this;n.pos=t,n.value=e,n.escape=a},a.ExpressionStatement.prototype.type="expressionStatement",a.ContentStatement=function(t,e){var a=this;a.pos=t,a.value=e},a.ContentStatement.prototype.type="contentStatement",a.UnaryExpression=function(t,e){this.value=e,this.unaryType=t},a.Function=function(t,e,a,n){var r=this;r.pos=t,r.id=e,r.params=a,r.hash=n},a.Function.prototype.type="function",a.UnaryExpression.prototype.type="unaryExpression",a.MultiplicativeExpression=function(t,e,a){var n=this;n.op1=t,n.opType=e,n.op2=a},a.MultiplicativeExpression.prototype.type="multiplicativeExpression",a.AdditiveExpression=function(t,e,a){var n=this;n.op1=t,n.opType=e,n.op2=a},a.AdditiveExpression.prototype.type="additiveExpression",a.RelationalExpression=function(t,e,a){var n=this;n.op1=t,n.opType=e,n.op2=a},a.RelationalExpression.prototype.type="relationalExpression",a.EqualityExpression=function(t,e,a){var n=this;n.op1=t,n.opType=e,n.op2=a},a.EqualityExpression.prototype.type="equalityExpression",a.ConditionalAndExpression=function(t,e){var a=this;a.op1=t,a.op2=e,a.opType="&&"},a.ConditionalAndExpression.prototype.type="conditionalAndExpression",a.ConditionalOrExpression=function(t,e){var a=this;a.op1=t,a.op2=e,a.opType="||"},a.ConditionalOrExpression.prototype.type="conditionalOrExpression",a.String=function(t,e){var a=this;a.pos=t,a.value=e},a.String.prototype.type="string",a.Number=function(t,e){var a=this;a.pos=t,a.value=e},a.Number.prototype.type="number",a.Hash=function(t){var e=this,a={};e.pos=t,e.value=a},a.Hash.prototype.type="hash",a.ArrayExpression=function(t){this.list=t},a.ArrayExpression.prototype.type="arrayExpression",a.JsonExpression=function(t){this.json=t},a.JsonExpression.prototype.type="jsonExpression",a.Id=function(t,e){var a=this,n=[],r=0;a.pos=t;for(var i=0,s=e.length;s>i;i++){var o=e[i];".."===o?r++:n.push(o)}a.parts=n,a.string=n.join("."),a.depth=r},a.Id.prototype.type="id",t=a}(),o=function(t){function e(t){return["function "+t+"(scope, buffer, undefined) {","var data = scope.data;","var affix = scope.affix;"]}function a(t,e){return e+t.uuid++}function n(t){var e,n,r,i,s=[],o=t.opType,u=this[t.op1.type](t.op1),p=this[t.op2.type](t.op2),h=a(this,"exp");return e=u.exp,n=p.exp,r=u.source,i=p.source,v(s,r),s.push("var "+h+" = "+e+";"),"&&"===o||"||"===o?(s.push("if("+("&&"===o?"":"!")+"("+h+")){"),v(s,i),s.push(h+" = "+n+";"),s.push("}")):(v(s,i),s.push(h+" = ("+e+")"+o+"("+n+");")),{exp:h,source:s}}function o(t,e){Y!==t.line&&(Y=t.line,e.push("pos.line = "+t.line+";"))}function u(t,n){for(var r,i=a(t,"func"),s=e(i),o=0,u=n.length;u>o;o++)r=n[o],v(s,t[r.type](r).source);return s.push(R),s.push("}"),v(t.functionDeclares,s),i}function h(t,n){var r=a(t,"func"),i=e(r),s=t[n.type](n);return v(i,s.source),i.push("return "+s.exp+";"),i.push("}"),v(t.functionDeclares,i),r}function c(t,e){var a,n,r,i=t.config.catchError,s=[E,D,i?"try {":""];for(n=0,r=e.length;r>n;n++)a=e[n],v(s,t[a.type](a,{top:1}).source);return s.splice.apply(s,[2,0].concat(t.functionDeclares).concat("")),s.push(R),i&&(s.push("} catch(e) {"),s.push("if(!e.xtpl){"),s.push("buffer.error(e);"),s.push("}else{ throw e; }"),s.push("}")),{params:["undefined"],source:s.join("\n")}}function l(t,e,a,n,r,i){var s=[],o=e.params,u=e.hash,p=[];o&&M(o,function(e){var a=t[e.type](e);v(s,a.source),p.push(a.exp)});var h=[];u&&M(u.value,function(e,a){var n=t[e.type](e);v(s,n.source),h.push([x(a),n.exp])});var c="";if(p.length||h.length||a||n||i||r){if(a&&(c+=",escape:1"),p.length&&(c+=",params:["+p.join(",")+"]"),h.length){var l="";y.each(h,function(t){l+=","+t[0]+":"+t[1]}),c+=",hash:{"+l.slice(1)+"}"}n&&(c+=",fn: "+n),i&&(c+=",inverse: "+i),r&&(c+=",elseIfs: "+r),c="{"+c.slice(1)+"}"}return{exp:c||"{}",source:s}}function f(t,e,n,r){var i=[];o(e.pos,i);var s,p,c=e.id,f=c.string;f in B&&(r=0);var b,y=c.parts;if("elseif"===f)return{exp:"",source:[]};if(n){var x,d,g,E,T,C,k=n.program,z=k.inverse,I=[],A=k.statements,q=[];for(b=0;b<A.length;b++)C=A[b],"expressionStatement"===C.type&&(T=C.value)&&"function"===T.type&&"elseif"===T.id.string?(E&&I.push(E),E={condition:T.params[0],statements:[]}):E?E.statements.push(C):q.push(C);if(E&&I.push(E),x=u(t,q),z&&(g=u(t,z)),I.length){var N=[];for(b=0;b<I.length;b++){var L=I[b],P=h(t,L.condition);N.push("{test: "+P+",fn : "+u(t,L.statements)+"}")}d="["+N.join(",")+"]"}s=l(t,e,r,x,d,g),v(i,s.source)}return t.config.isModule&&("include"===f||"extend"===f||"parse"===f)&&(e.params[0]={type:"raw",value:'require("'+e.params[0].value+'").TPL_NAME'}),s||(s=l(t,e,r,null,null,null),v(i,s.source)),n||(p=a(t,"callRet"),i.push("var "+p)),f in B?"include"===f?i.push("buffer = root.include(scope,"+s.exp+",buffer,tpl);"):"parse"===f?i.push("buffer = root.include(new scope.constructor(),"+s.exp+",buffer,tpl);"):i.push(U(w,{lhs:n?"buffer":p,name:f,option:s.exp})):n?i.push(U(S,{option:s.exp,idParts:m.convertIdPartsToRawAccessor(t,i,y).arr})):i.push(U(c.depth?$:j,{lhs:p,option:s.exp,idParts:m.convertIdPartsToRawAccessor(t,i,y).arr,depth:c.depth})),{exp:p,source:i}}function b(t){this.functionDeclares=[],this.config=t,this.uuid=0}for(var y=p.util,m=r,v=m.pushToArray,x=m.wrapByDoubleQuote,d=["var t;"],g=0;10>g;g++)d.push("var t"+g+";");var E=d.concat(["var tpl = this;","var root = tpl.root;","var buffer = tpl.buffer;","var scope = tpl.scope;","var name = tpl.name;","var pos = tpl.pos;","var data = scope.data;","var affix = scope.affix;","var nativeCommands = root.nativeCommands;","var utils = root.utils;"]).join("\n"),w="{lhs} = {name}Command.call(tpl, scope, {option}, buffer);",S="buffer = callCommandUtil(tpl, scope, {option}, buffer, {idParts});",j="{lhs} = callFnUtil(tpl, scope, {option}, buffer, {idParts});",$="{lhs} = callFnUtil(tpl, scope, {option}, buffer, {idParts}, {depth});",T="var {lhs} = {value};",C="var {lhs} = scope.resolve({idParts},{depth});",k="var {lhs} = scope.resolveLoose({idParts},{depth});",z=["function {functionName}({params}){","{body}","}"].join("\n"),I=["","//# sourceURL = {name}.js"].join("\n"),A='var {name}Command = nativeCommands["{name}"];',q='var {name}Util = utils["{name}"];',N="buffer = buffer.write({value});",L="buffer.data += {value};",P="buffer = buffer.writeEscaped({value});",R="return buffer;",_=p,O=i;O.yy=s;var D=[],U=y.substitute,M=y.each,B=_.nativeCommands,F=_.utils;M(F,function(t,e){D.push(U(q,{name:e}))}),M(B,function(t,e){D.push(U(A,{name:e}))}),D=D.join("\n");var Y=1;b.prototype={constructor:b,raw:function(t){return{exp:t.value}},arrayExpression:function(t){for(var e,a=t.list,n=a.length,r=[],i=[],s=0;n>s;s++)e=this[a[s].type](a[s]),v(r,e.source),i.push(e.exp);return{exp:"["+i.join(",")+"]",source:r}},jsonExpression:function(t){for(var e,a=t.json,n=a.length,r=[],i=[],s=0;n>s;s++){var o=a[s];e=this[o[1].type](o[1]),v(r,e.source),i.push(x(o[0])+": "+e.exp)}return{exp:"{"+i.join(",")+"}",source:r}},conditionalOrExpression:n,conditionalAndExpression:n,relationalExpression:n,equalityExpression:n,additiveExpression:n,multiplicativeExpression:n,unaryExpression:function(t){var e=this[t.value.type](t.value);return{exp:t.unaryType+"("+e.exp+")",source:e.source}},string:function(t){return{exp:m.wrapBySingleQuote(m.escapeString(t.value,1)),source:[]}},number:function(t){return{exp:t.value,source:[]}},id:function(t){var e=[],n=this,r=!n.config.strict;if(o(t.pos,e),m.isGlobalId(t))return{exp:t.string,source:e};var i=t.depth,s=t.parts,u=a(n,"id");if(i)return e.push(U(r?k:C,{lhs:u,idParts:m.convertIdPartsToRawAccessor(n,e,s).arr,depth:i})),{exp:u,source:e};var p,h,c=s[0];return"this"===c?(h=s.slice(1),e.push(U(T,{lhs:u,value:h.length?m.chainedVariableRead(n,e,h,void 0,void 0,r):"data"})),{exp:u,source:e}):"root"===c?(h=s.slice(1),p=h.join("."),p&&(p="."+p),e.push(U(T,{lhs:u,value:p?m.chainedVariableRead(n,e,h,!0,void 0,r):"scope.root.data",idParts:p})),{exp:u,source:e}):(e.push(U(T,{lhs:u,value:m.chainedVariableRead(n,e,s,!1,!0,r)})),{exp:u,source:e})},"function":function(t,e){return f(this,t,!1,e)},blockStatement:function(t){return f(this,t.func,t)},expressionStatement:function(t){var e,a,n=[],r=t.escape,i=t.value,s=i.type;return e=this[s](i,r),v(n,e.source),a=e.exp,n.push(U(r?P:N,{value:a})),{exp:"",source:n}},contentStatement:function(t){return{exp:"",source:[U(L,{value:m.wrapBySingleQuote(m.escapeString(t.value,0))})]}}};var Q,G=0;return Q={parse:function(t,e){return O.parse(t,e)},compileToStr:function(t){var e=Q.compileToJson(t);return U(z,{functionName:t.functionName||"",params:e.params.join(","),body:e.source})},compileToJson:function(t){var e=t.name=t.name||"xtemplate"+ ++G,a=Q.parse(t.content,e);return c(new b(t),a.statements)
},compile:function(t,e,a){var n=Q.compileToJson(y.merge(a,{content:t,name:e}));return Function.apply(null,n.params.concat(n.source+U(I,{name:e})))}},t=Q}(),u=function(t){function a(t,e){var n=typeof t;"string"!==n&&"function"!==n&&(e=t,t=void 0),e=this.config=e||{},e.loader=e.loader||a.loader,"string"===n&&(t=this.compile(t,e.name)),r.call(this,t,e)}function n(){}var r=p,i=r.util,s=o,u=s.compile,h={cache:{},load:function(t,a){var n=this.cache,r=t.name,i=n[r];return void 0!==i?a(void 0,i):(e([r],function(e){if("string"==typeof e)try{e=t.root.compile(e,r)}catch(i){return a(i)}n[r]=e,a(void 0,e)},function(){var t='template "'+r+'" does not exist';console.error(t),a(t)}),void 0)}};return n.prototype=r.prototype,a.prototype=new n,a.prototype.constructor=a,a.prototype.compile=function(t,e){return u(t,e,this.config)},t=i.mix(a,{compile:u,version:"3.2.1",loader:h,Compiler:s,Scope:r.Scope,Runtime:r,addCommand:r.addCommand,removeCommand:r.removeCommand})}(),n.exports=u});