
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([5],{371:function(e,t,n){e.exports=n(372)},372:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(31),r=a(u),l=n(36),o=a(l),f=n(8),d=a(f),s=n(3),c=a(s),i=n(4),p=a(i),m=n(9),h=a(m),_=n(10),v=a(_),g=n(1),y=a(g),M=n(127),b=a(M),E=n(404),k=a(E),Y=n(421),w=a(Y),x=n(53),P=function(e){function t(){return(0,c.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){document.title="Sean Blanton ",(0,x.initGA)(),(0,x.logPageView)()}},{key:"render",value:function(){return y.default.createElement(b.default,null,y.default.createElement(k.default,null),y.default.createElement(w.default,{post:this.props.posts}))}}]),t}(g.Component);P.getInitialProps=(0,o.default)(r.default.mark(function e(){var t;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.default.fetch();case 2:return t=e.sent,e.abrupt("return",{posts:t});case 4:case"end":return e.stop()}},e,this)})),t.default=P},404:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),r=a(u),l=n(16),o=n(19),f=(a(o),n(68)),d=n(50),s=a(d),c=n(93),i=a(c),p=function(e){return r.default.createElement(s.default,{py:l.spacing[6]},r.default.createElement(i.default,{href:"/"},r.default.createElement(f.Title,null,"Sean Blanton")),r.default.createElement(f.Subtitle,null,"I'm a product designer building design systems and tools at Facebook."))};t.default=p},421:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(31),r=a(u),l=n(36),o=a(l),f=n(8),d=a(f),s=n(3),c=a(s),i=n(4),p=a(i),m=n(9),h=a(m),_=n(10),v=a(_),g=n(1),y=a(g),M=n(69);a(M);n(253);var b=n(0),E=a(b),k=n(16),Y=n(53),w=n(50),x=a(w),P=n(68),S=n(93),j=a(S),D=function(e){function t(){return(0,c.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return y.default.createElement(x.default,{pt:k.spacing[3],pb:k.spacing[3]},this.props.post.filter(function(e){return 1!=e.private}).map(function(e,t){return y.default.createElement(j.default,{href:"/post?title="+e.title+"&date="+e.date+"&post="+e.body,as:"/"+(0,E.default)(e.date).format("YYYY/MM/D")+"/"+(0,Y.spaceToDash)(e.title).toLowerCase(),key:t,prefetch:!0},y.default.createElement(x.default,{pt:k.spacing[3],pb:k.spacing[3]},y.default.createElement(P.Heading,null," ",e.title," "),y.default.createElement(P.ParagraphSecondary,null," ",(0,E.default)(e.date).format("MMMM D, YYYY")," ")))}))}}],[{key:"fetch",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((0,o.default)(r.default.mark(function e(){var t,n;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(k.hostname+"/api/posts/");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n?n.data:{});case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])})))}]),t}(y.default.Component);t.default=D}},[371]);
            return { page: comp.default }
          })
        