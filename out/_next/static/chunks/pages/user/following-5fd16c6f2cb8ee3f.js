(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{5540:function(e,t,n){"use strict";var r=n(29),o=n(4687),s=n.n(o),a=n(7294),c=n(1163),u=n(5121),i=n(8165),l=n(143),p=n(5893);t.Z=function(e){var t=e.children,n=(0,a.useState)(!1),o=n[0],f=n[1],d=(0,a.useContext)(l.S)[0],h=(0,c.useRouter)();function x(){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark(function e(){var t;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/current-user");case 3:console.log("data wooo =>",t=e.sent.data),t.success&&f(!0),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),f(!1),h.push("/login");case 14:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}return(0,a.useEffect)(function(){d&&d.token&&x()},[d,d.token]),null===d&&setTimeout(function(){return x()},1e3),o?(0,p.jsx)(p.Fragment,{children:t}):(0,p.jsx)(i.Z,{spin:!0,className:"d-flex justify-content-center display-1 text-primary p-5"})}},360:function(e,t,n){"use strict";n.r(t);var r=n(29),o=n(4687),s=n.n(o),a=n(7294),c=n(1163),u=n(143),i=n(5540),l=n(381),p=n.n(l),f=n(9930),d=n(3863),h=n(5121),x=n(2920),m=n(5893);t.default=function(e){e.handleFollow,(0,c.useRouter)();var t,n,o=(0,a.useContext)(u.S),l=o[0];o[1];var g=(0,a.useState)(!1),v=g[0],w=g[1],j=(0,a.useState)([]),k=j[0],_=j[1];(0,a.useEffect)(function(){l&&l.token&&y()},[l&&l.token]);var y=(t=(0,r.Z)(s().mark(function e(){var t;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,h.Z.get("/user-following",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)}});case 4:console.log(t=e.sent.data),_(t.followingUsers),w(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])})),function(){return t.apply(this,arguments)}),Z=(n=(0,r.Z)(s().mark(function e(t){var n,r,o;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,h.Z.put("/unfollow-user",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.token)},data:{personId:t._id}});case 4:n=e.sent.data,(r=JSON.parse(localStorage.getItem("auth")||"")).user=n,localStorage.setItem("auth",JSON.stringify(r)),o=k.filter(function(e){return e._id!==t._id}),console.log(n),_(o),w(!1),x.Am.success(n.message,{theme:"colored"}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}},e,null,[[0,16]])})),function(e){return n.apply(this,arguments)});return(0,m.jsx)(i.Z,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"People You Are Following"}),(0,m.jsx)(f.Z,{loading:v,itemLayout:"horizontal",dataSource:k,renderItem:function(e){return(0,m.jsx)(f.Z.Item,{children:(0,m.jsx)(f.Z.Item.Meta,{avatar:(0,m.jsx)(d.C,{src:e.photo?e.photo.data:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:(0,m.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,m.jsx)("a",{href:"#",children:e.name}),(0,m.jsx)("span",{className:"text-primary pointer",onClick:function(){return Z(e)},children:"unfollow"})]}),description:p()(e.createdAt).fromNow()})},e.id)}})]})})}},1957:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/following",function(){return n(360)}])}},function(e){e.O(0,[885,438,777,774,888,179],function(){return e(e.s=1957)}),_N_E=e.O()}]);