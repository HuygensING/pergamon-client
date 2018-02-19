webpackJsonp([4],{0:function(e,t){e.exports=React},12:function(e,t){e.exports=ReactDOM},24:function(e,t,n){"use strict";var r=n(0);n.n(r);class s extends r.PureComponent{async componentDidMount(){this.d3=await n.e(2).then(n.bind(null,81)),this.createGraph()}componentDidUpdate(){this.createGraph()}async createGraph(){const e=this.d3.select("#graph"),t=e.node().getBoundingClientRect(),{height:n,width:r}=t,s=this.d3.forceSimulation(this.props.nodes).force("charge",this.d3.forceManyBody().strength(this.props.strength)).force("link",this.d3.forceLink(this.props.links).distance(this.props.distance)).force("center",this.d3.forceCenter(r/2,n/2)),i=e.append("g").attr("class","links").selectAll("line").data(this.props.links).enter().append("line").attr("stroke-width",e=>{let t=e.w/1e3*10;return t<1?t=1:t>10&&(t=10),t}).attr("stroke",e=>"#444"),a=e.append("g").attr("class","nodes").selectAll("circle").data(this.props.nodes).enter().append("circle").attr("r",3).attr("stroke","#000"),o=e.append("g").attr("class","labels").selectAll("text").data(this.props.nodes).enter().append("text").text(e=>e.name).style("fill","#444").style("font-family","Arial").style("font-size",12);s.nodes(this.props.nodes).on("tick",()=>{i.attr("x1",e=>e.source.x).attr("y1",e=>e.source.y).attr("x2",e=>e.target.x).attr("y2",e=>e.target.y),a.attr("cx",e=>e.x>=r?r-3:e.x<3?3:e.x).attr("cy",e=>e.y>=n?n-3:e.y<3?3:e.y),o.attr("x",e=>e.x>r/2?e.x+8:e.x-8).attr("y",e=>e.y+4).style("text-anchor",e=>e.x>r/2?"start":"end")});const l=this.d3.drag().on("start",e=>{this.d3.event.active||s.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y}).on("drag",e=>{e.fx=this.d3.event.x,e.fy=this.d3.event.y}).on("end",e=>{this.d3.event.active||s.alphaTarget(0),e.fx=null,e.fy=null});a.call(l),o.call(l)}render(){return r.createElement("svg",{id:"graph",style:{width:"100%",height:"100%"}})}}s.defaultProps={distance:200,links:[],nodes:[],strength:-100},t.a=s},25:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},27:function(e,t,n){(function(t){var n="Expected a function",r=NaN,s="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),h=Object.prototype.toString,m=Math.max,g=Math.min,f=function(){return p.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||(n=t)&&"object"==typeof n&&h.call(t)==s)return r;var t,n;if(y(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=y(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var d=o.test(e);return d||l.test(e)?c(e.slice(2),d?2:8):a.test(e)?r:+e}e.exports=function(e,t,r){var s,i,a,o,l,c,u=0,d=!1,p=!1,h=!0;if("function"!=typeof e)throw new TypeError(n);function S(t){var n=s,r=i;return s=i=void 0,u=t,o=e.apply(r,n)}function E(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=a}function b(){var e,n,r=f();if(E(r))return x(r);l=setTimeout(b,(n=t-((e=r)-c),p?g(n,a-(e-u)):n))}function x(e){return l=void 0,h&&s?S(e):(s=i=void 0,o)}function w(){var e,n=f(),r=E(n);if(s=arguments,i=this,c=n,r){if(void 0===l)return u=e=c,l=setTimeout(b,t),d?S(e):o;if(p)return l=setTimeout(b,t),S(c)}return void 0===l&&(l=setTimeout(b,t)),o}return t=v(t)||0,y(r)&&(d=!!r.leading,a=(p="maxWait"in r)?m(v(r.maxWait)||0,t):a,h="trailing"in r?!!r.trailing:h),w.cancel=function(){void 0!==l&&clearTimeout(l),u=0,s=c=i=l=void 0},w.flush=function(){return void 0===l?o:x(f())},w}}).call(t,n(25))},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=(n.n(r),n(12)),i=(n.n(s),n(6)),a=n(68),o=n(9);Object(s.hydrate)(r.createElement(a.a,Object.assign({},Object(i.a)())),document.getElementById("container")),window.addEventListener(o.b,e=>{Object(s.render)(r.createElement(a.a,Object.assign({},e.detail)),document.getElementById("container"))})},68:function(e,t,n){"use strict";var r=n(0),s=(n.n(r),n(4)),i=(n.n(s),n(69)),a=n(70),o=n(75),l=n(76),c=n(27),u=(n.n(c),n(11)),d=n(78),p=n(22),h=n(10);const m=e=>r.createElement("div",{role:"search",style:{display:"grid",gridTemplateColumns:"320px 4em auto",margin:"2em auto",maxWidth:"1100px"}},e.children);t.a=class extends r.PureComponent{constructor(){super(...arguments),this.onScroll=(()=>{const e=document.documentElement;e.scrollHeight-(e.scrollTop+e.clientHeight)<.1*e.scrollHeight&&Object(u.a)()}),this.onScrollDebounced=c(this.onScroll,100)}componentDidMount(){document.addEventListener("scroll",this.onScrollDebounced)}componentWillUnmount(){document.removeEventListener("scroll",this.onScrollDebounced)}render(){return r.createElement(p.a,null,r.createElement(m,null,r.createElement("div",{style:{marginLeft:"2em"}},r.createElement(l.a,Object.assign({},this.props)),r.createElement(i.a,{receiveSearchResults:u.c})),r.createElement("div",null),r.createElement("div",{style:{marginBottom:"10em",marginRight:"2em"}},r.createElement(s.HucSearchResults,{onClickResult:e=>Object(h.a)(`/documents/${e.id}`),resultBodyComponent:o.a,searchResults:this.props.search.results}),r.createElement(d.a,{aggregate:this.props.search.aggregate})),r.createElement(a.a,{searchResults:this.props.search.results})))}}},69:function(e,t,n){"use strict";var r=n(0),s=(n.n(r),n(2));n.n(s);t.a=class extends r.PureComponent{async componentDidMount(){this.searchkit=await n.e(1).then(n.bind(null,80)),this.searchkitManager=new this.searchkit.SearchkitManager("/api/documents/search",{searchUrlPath:""}),this.resultsListener=this.searchkitManager.addResultsListener(e=>this.props.receiveSearchResults(this.query,e)),this.searchkitManager.setQueryProcessor(e=>{const t={date_histogram:{field:"date",interval:"year"}};return e.hasOwnProperty("post_filter")?e.aggs.letter_per_year={filter:e.post_filter,aggs:{letter_per_year:t}}:e.aggs.letter_per_year=t,e.size=20,e.sort="date",this.query=e,e}),this.forceUpdate()}componentWillUnmount(){this.resultsListener()}render(){if(!this.searchkit)return null;const{RefinementListFilter:e,SearchkitProvider:t,ResetFilters:n,DynamicRangeFilter:i}=this.searchkit;return r.createElement(t,{searchkit:this.searchkitManager},r.createElement("div",{style:s.fontStyle},r.createElement(n,null),r.createElement(i,{field:"year",id:"range_year",title:"Date range"}),r.createElement(e,{field:"sender",id:"count_per_sender",operator:"OR",size:10,title:"Senders"}),r.createElement(e,{field:"recipient",id:"count_per_recipient",operator:"OR",size:10,title:"Recipients"}),r.createElement(e,{field:"senderloc",id:"count_per_senderloc",operator:"OR",size:10,title:"Sender Locations"}),r.createElement(e,{field:"recipientloc",id:"count_per_recipientloc",operator:"OR",size:10,title:"Recipient Locations"}),r.createElement(e,{field:"correspondence",id:"count_per_correspondence",operator:"OR",size:10,title:"Correspondence"})))}}},70:function(e,t,n){"use strict";var r=n(0),s=(n.n(r),n(4)),i=(n.n(s),n(71));t.a=class extends r.PureComponent{constructor(){super(...arguments),this.state={fullScreen:!1}}render(){return null==this.props.searchResults||this.props.searchResults.total>0?null:r.createElement(s.HucOffCanvasAside,{fullScreen:this.state.fullScreen,onClose:()=>this.setState({fullScreen:!1})},r.createElement(s.Panel,{style:{height:"calc(100% - 65px)"},type:s.Aside.Visualisations},r.createElement(i.a,{fullScreen:this.state.fullScreen,handleFullScreen:()=>this.setState({fullScreen:!0}),searchResults:this.props.searchResults})))}}},71:function(e,t,n){"use strict";var r=n(0),s=(n.n(r),n(72)),i=n(73),a=n(74);const o=e=>r.createElement("li",{onClick:e.onClick,style:Object.assign({backgroundColor:e.fullScreen?"initial":"#f2f2f2",backgroundPosition:0,backgroundSize:"cover",border:e.fullScreen?"none":"2px solid #ccc",borderRadius:"6px",cursor:"pointer",display:"block",fontWeight:e.active?"bold":"initial",marginBottom:"1em",padding:e.fullScreen?0:"1.5em",transition:"all 300ms",width:e.fullScreen?"100px":"auto"},e.style)},e.children);var l,c;(c=l||(l={}))[c.Map=0]="Map",c[c.Timeline=1]="Timeline",c[c.CorrespondentGraph=2]="CorrespondentGraph",c[c.CoCitationGraph=3]="CoCitationGraph";t.a=class extends r.PureComponent{constructor(){super(...arguments),this.state={active:l.Timeline}}render(){return r.createElement("div",{style:{display:this.props.fullScreen?"grid":"block",gridTemplateColumns:"1fr 5fr 3em",height:"100%",width:"100%"}},r.createElement("ul",{style:{margin:"3em 0",padding:0}},r.createElement(o,{active:this.state.active===l.Map,fullScreen:this.props.fullScreen,onClick:()=>{this.setState({active:l.Map}),this.props.handleFullScreen()}},"Map"),r.createElement(o,{active:this.state.active===l.Timeline,fullScreen:this.props.fullScreen,onClick:()=>{this.setState({active:l.Timeline}),this.props.handleFullScreen()}},"Timeline"),r.createElement(o,{active:this.state.active===l.CorrespondentGraph,fullScreen:this.props.fullScreen,onClick:()=>{this.setState({active:l.CorrespondentGraph}),this.props.handleFullScreen()}},"Correspondent graph"),r.createElement(o,{active:this.state.active===l.CoCitationGraph,fullScreen:this.props.fullScreen,onClick:()=>{this.setState({active:l.CoCitationGraph}),this.props.handleFullScreen()}},"Cocitation graph")),this.state.active===l.Timeline&&this.props.fullScreen&&r.createElement(s.a,null),this.state.active===l.CorrespondentGraph&&this.props.fullScreen&&r.createElement(a.a,{searchResults:this.props.searchResults}),this.state.active===l.CoCitationGraph&&this.props.fullScreen&&r.createElement(i.a,{searchResults:this.props.searchResults}))}}},72:function(e,t,n){"use strict";var r=n(0),s=(n.n(r),n(11));t.a=class extends r.PureComponent{constructor(){super(...arguments),this.state={aggregate:[],events:[],from:null,to:null},this.fetchEvents=(async(e,t)=>{const n=await Object(s.b)({_source:["date","sender","recipient"],query:{range:{date:{gte:e.toISOString(),lte:t.toISOString()}}},size:1e4,sort:"date"}),r=(await n.json()).hits.hits.map(e=>{const t=e._source.sender.replace(/\s\(.*\)/,""),n=e._source.recipient.replace(/\s\(.*\)/,"");return{date:new Date(e._source.date),title:`${t} - ${n}`}});this.setState({events:r})})}async componentDidMount(){this.timeline=await n.e(0).then(n.bind(null,26)),this.init()}render(){return null==this.state.from?null:r.createElement(this.timeline.default,Object.assign({domains:[{heightRatio:.25,topOffsetRatio:.75,type:this.timeline.DomainType.Sparkline},{heightRatio:.75,type:this.timeline.DomainType.Event,visibleRatio:.01}],fetchEvents:this.fetchEvents},this.state))}async init(){const e=await Object(s.b)({aggs:{letter_per_year:{date_histogram:{field:"date",interval:"year"}}},size:0}),t=(await e.json()).aggregations.letter_per_year.buckets.map(e=>({count:e.doc_count,year:+e.key_as_string.slice(0,4)}));this.setState({aggregate:t,from:new Date(t.first().year,0,1),to:new Date(t.last().year,0,1)})}}},73:function(e,t,n){"use strict";var r=n(0),s=(n.n(r),n(24));t.a=class extends r.PureComponent{constructor(){super(...arguments),this.state={links:[],loading:!0,nodes:[]}}async componentDidMount(){let e=JSON.parse(JSON.stringify(this.props.searchResults.query));e={query:e=e.hasOwnProperty("query")?e.query:e.hasOwnProperty("post_filter")?e.post_filter:{match_all:{}}};let t=(await fetch("/api/docsets",{body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"}),method:"POST"})).headers.get("Location");if(null==t)return;t+="/cocitations";const n=await fetch(t),r=await n.json(),s=r.reduce((e,t)=>{const[n,r]=t.items,s=e.findIndex(e=>e.name===n),i=e.findIndex(e=>e.name===r);return-1===s?e.push({name:n,group:1,w:1}):e[s].w++,-1===i?e.push({name:r,group:1,w:1}):e[i].w++,e},[]),i=r.reduce((e,t)=>{const[n,r]=t.items,i=s.findIndex(e=>e.name===n),a=s.findIndex(e=>e.name===r);return e.push({source:i,target:a,w:t.count}),e},[]);this.setState({links:i,loading:!1,nodes:s})}render(){return this.state.loading?r.createElement("img",{src:"/static/graphics/ui/loader.svg"}):r.createElement(s.a,Object.assign({links:this.state.links,nodes:this.state.nodes},this.props))}}},74:function(e,t,n){"use strict";var r=n(0),s=(n.n(r),n(24));t.a=class extends r.PureComponent{constructor(){super(...arguments),this.state={links:[],loading:!0,nodes:[]}}async componentDidMount(){let e=JSON.parse(JSON.stringify(this.props.searchResults.query));e=e.hasOwnProperty("query")?e.query:e.hasOwnProperty("post_filter")?e.post_filter:{match_all:{}};const t=await fetch("/api/documents/graph?field1=sender&field2=recipient",{body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"}),method:"POST"});let n=await t.json();const r=n.reduce((e,t)=>{const n=e.findIndex(e=>e.name===t.source),r=e.findIndex(e=>e.name===t.target);return-1===n?e.push({name:t.source,group:1,w:1}):e[n].w++,-1===r?e.push({name:t.target,group:1,w:1}):e[r].w++,e},[]),s=n.reduce((e,t)=>{const n=r.findIndex(e=>e.name===t.source),s=r.findIndex(e=>e.name===t.target);return e.push({source:n,target:s,w:t.weight}),e},[]);this.setState({links:s,loading:!1,nodes:r})}render(){return this.state.loading?r.createElement("img",{src:"/static/graphics/ui/loader.svg"}):r.createElement(s.a,Object.assign({links:this.state.links,nodes:this.state.nodes},this.props))}}},75:function(e,t,n){"use strict";var r=n(0);n.n(r);const s=e=>r.createElement("section",{style:{display:"grid",gridTemplateRows:"1fr .5fr .5fr 1fr 1fr",gridTemplateColumns:"4fr auto 4fr"}},e.children),i=e=>r.createElement("div",{style:{color:e.small?"#888":"black",fontSize:e.small?".85em":"1em",fontWeight:e.bold?"bold":"normal",textAlign:e.right?"right":"left"}},e.children);t.a=(e=>r.createElement(s,null,r.createElement(i,{bold:!0},e.result.date),r.createElement("div",null),r.createElement(i,{right:!0},e.result.correspondence),r.createElement("div",{style:{gridColumn:"1 / 4"}}),r.createElement("div",{style:{borderTop:"1px solid #CCC",gridColumn:"1 / 4"}}),r.createElement(i,null,e.result.sender),r.createElement("div",null,"⇒"),r.createElement(i,{right:!0},e.result.recipient),r.createElement(i,{small:!0},e.result.senderloc),r.createElement("div",null),r.createElement(i,{right:!0,small:!0},e.result.recipientloc)))},76:function(e,t,n){"use strict";var r=n(0),s=(n.n(r),n(4)),i=(n.n(s),n(77)),a=n(2);n.n(a);t.a=class extends r.PureComponent{constructor(){super(...arguments),this.state={requesting:!1,suggestions:[]},this.search=(async e=>{this.setState({requesting:!0}),Object(i.b)(e);const t=await Object(i.c)(e);this.setState({suggestions:t,requesting:!1})})}render(){return r.createElement(r.Fragment,null,r.createElement(s.HucFullTextSearchInput,{autoSuggest:i.a,onChange:()=>{this.state.suggestions.length&&this.setState({suggestions:[]})},onKeyDown:e=>{13===e.keyCode&&this.search(e.target.value)},query:"",search:e=>this.search(e)}),r.createElement(a.SemanticSuggestions,{onClickSuggestion:i.b,requesting:this.state.requesting,semanticSuggestions:this.state.suggestions}))}}},77:function(e,t,n){"use strict";var r=n(11);t.a=(async e=>{const t={suggest:{woorden:{text:e,term:{field:"body"}}}};return(await Object(r.b)(t)).suggest.woorden[0].options.map(e=>e.text)});t.b=(async e=>{const t={query_string:{query:e}},n={aggs:{letter_per_year:{date_histogram:{field:"date",interval:"year"}}},query:t,sort:"date",size:20},s=await Object(r.b)(n);Object(r.c)(t,s)});t.c=(async e=>{const t=await fetch("/api/search",{body:JSON.stringify({query:e}),headers:{"Content-Type":"application/json"},method:"POST"});return(await t.json()).suggestions})},78:function(e,t,n){"use strict";var r=n(0);n.n(r);const s=e=>r.createElement("div",{style:{bottom:0,display:"grid",gridTemplateColumns:"320px 3em auto 1em",margin:"0 auto",left:0,right:0,position:"fixed",width:"1100px"}},e.children),i=e=>r.createElement("div",{style:{backgroundColor:"white",border:"1px solid #ccc",boxShadow:"0 0 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23)",height:"40px",padding:"1em 1em 1.25em 1em"}},e.children);t.a=class extends r.PureComponent{async componentDidMount(){this.timeline=await n.e(0).then(n.bind(null,26))}render(){return null!=this.timeline&&this.props.aggregate.length?r.createElement(s,null,r.createElement("div",null),r.createElement("div",null),this.props.aggregate.length>1&&r.createElement(i,null,r.createElement(this.timeline.default,{aggregate:this.props.aggregate,domains:[{domainLabels:!0,rulers:!1,type:this.timeline.DomainType.Sparkline}],from:new Date(this.props.aggregate[0].year,0,1),to:new Date(this.props.aggregate[this.props.aggregate.length-1].year,0,1)}),r.createElement("div",null)),r.createElement("div",null)):null}}}},[67]);