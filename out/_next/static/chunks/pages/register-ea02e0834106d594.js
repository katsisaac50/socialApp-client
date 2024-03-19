(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{8165:function(e,s,t){"use strict";t.d(s,{Z:function(){return o}});var a=t(7462),r=t(7294),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},l=t(2135),o=r.forwardRef(function(e,s){return r.createElement(l.Z,(0,a.Z)({},e,{ref:s,icon:n}))})},1441:function(e,s,t){"use strict";t(7294);var a=t(8165),r=t(5893);s.Z=function(e){var s=e.name,t=e.setName,n=e.handleSubmit,l=e.email,o=e.setEmail,c=e.selectedQuestion,i=e.setSelectedQuestion,u=e.secretAnswer,m=e.setSecretAnswer,d=e.password,h=e.setPassword,f=e.loading,p=e.repeatPassword,x=e.setRepeatPassword,g=e.consent,b=e.setConsent,j=e.page,v=e.about,N=e.setAbout,w=e.username,y=e.setUsername;return(0,r.jsxs)("form",{onSubmit:n,children:["profile"===j&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"form-outline mb-4",children:[(0,r.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),(0,r.jsx)("input",{type:"text",id:"username",className:"form-control form-control-lg",value:w,onChange:function(e){return y(e.target.value)},autoComplete:"username",placeholder:"Username"})]}),(0,r.jsxs)("div",{className:"form-outline mb-4",children:[(0,r.jsx)("label",{htmlFor:"about",className:"form-label",children:"About"}),(0,r.jsx)("input",{type:"text",id:"about",className:"form-control form-control-lg",value:v,onChange:function(e){return N(e.target.value)},autoComplete:"about",placeholder:"Write about yourself"})]})]}),"login"!==j&&(0,r.jsxs)("div",{className:"form-outline mb-4",children:[(0,r.jsx)("label",{htmlFor:"name",className:"form-label",children:"Your Name"}),(0,r.jsx)("input",{type:"text",id:"name",className:"form-control form-control-lg",value:s,onChange:function(e){return t(e.target.value)},autoComplete:"name"})]}),(0,r.jsxs)("div",{className:"form-outline mb-4",children:[(0,r.jsx)("label",{htmlFor:"email",className:"form-label",children:"Your Email"}),(0,r.jsx)("input",{type:"email",id:"email",className:"form-control form-control-lg",value:l,onChange:function(e){return o(e.target.value)},autoComplete:"email",disabled:"profile"===j})]}),"login"!==j&&(0,r.jsxs)("div",{className:"form-outline mb-4",children:[(0,r.jsx)("label",{htmlFor:"selectedQuestion",className:"form-label",children:"Pick a question"}),(0,r.jsxs)("select",{id:"selectedQuestion",className:"form-select form-select-lg","aria-label":"Default select example",value:c,onChange:function(e){return i(e.target.value)},autoComplete:"question",children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Pick a question"}),(0,r.jsx)("option",{value:"What is your favourite color?",children:"What is your favourite color?"}),(0,r.jsx)("option",{value:"What is your favourite food?",children:"What is your favourite food?"}),(0,r.jsx)("option",{value:"What is your favourite book?",children:"What is your favourite book?"})]}),(0,r.jsx)("small",{children:(0,r.jsx)("label",{htmlFor:"secretAnswer",className:"form-label",children:"You can use this to reset your password if forgotten."})}),(0,r.jsx)("input",{type:"text",id:"secretAnswer",className:"mt-2 form-control form-control-lg",value:u,onChange:function(e){return m(e.target.value)},autoComplete:"off"})]}),(0,r.jsxs)("div",{className:"form-outline mb-4",children:[(0,r.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),(0,r.jsx)("input",{type:"password",id:"password",className:"form-control form-control-lg",value:d,onChange:function(e){return h(e.target.value)},autoComplete:"new-password"})]}),"login"!==j&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"form-outline mb-4",children:[(0,r.jsx)("label",{htmlFor:"repeatPassword",className:"form-label",children:"Repeat your password"}),(0,r.jsx)("input",{type:"password",id:"repeatPassword",className:"form-control form-control-lg",value:p,onChange:function(e){return x(e.target.value)},autoComplete:"new-password"})]}),(0,r.jsxs)("div",{className:"form-check d-flex justify-content-center mb-5",children:[(0,r.jsx)("input",{className:"form-check-input me-2",type:"checkbox",value:"",onChange:function(){return b(!g)},id:"consent"}),(0,r.jsxs)("label",{htmlFor:"consent",className:"form-check-label",children:["I agree all statements in ",(0,r.jsx)("a",{href:"#!",className:"text-body",children:(0,r.jsx)("u",{children:"Terms of service"})})]})]})]}),(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("button",{type:"submit",disabled:"login"===j?!(l&&d):!(s&&l&&c&&u&&d&&p&&g),className:"btn btn-success btn-block btn-lg gradient-custom-4 text-body",children:f?(0,r.jsx)(a.Z,{spin:!0,className:"py-1"}):"login"===j?"Login":"Register"})})]})}},2785:function(e,s,t){"use strict";t.r(s);var a=t(29),r=t(4687),n=t.n(r),l=t(7294),o=t(5121),c=t(2920),i=t(4513),u=t(5093),m=t(1664),d=t.n(m),h=t(1441),f=t(143),p=t(1163),x=t(5893);s.default=function(){var e,s=(0,l.useState)(""),t=s[0],r=s[1],m=(0,l.useState)(""),g=m[0],b=m[1],j=(0,l.useState)(""),v=j[0],N=j[1],w=(0,l.useState)(""),y=w[0],C=w[1],k=(0,l.useState)(""),S=k[0],P=k[1],A=(0,l.useState)(""),_=A[0],F=A[1],E=(0,l.useState)(!1),Z=E[0],R=E[1],Q=(0,l.useState)(!1),W=Q[0],q=Q[1],T=(0,l.useState)(!1),U=T[0],L=T[1],Y=(0,l.useContext)(f.S)[0],z=(0,p.useRouter)(),D=(e=(0,a.Z)(n().mark(function e(s){var a,r;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),a={name:t,email:g,selectedQuestion:v,secretAnswer:y,password:S,repeatPassword:_},e.prev=2,L(!0),e.next=6,o.Z.post("".concat("http://localhost:8000/api","/register"),a,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 6:r=e.sent,c.Am.success(r.data.message,{theme:"colored"}),R(r.data.success),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),c.Am.error(e.t0.response.data.message,{theme:"colored"}),console.error("Error making request:",e.t0);case 15:return e.prev=15,L(!1),H(),e.finish(15);case 19:case"end":return e.stop()}},e,null,[[2,11,15,19]])})),function(s){return e.apply(this,arguments)}),H=function(){r(""),b(""),N(""),C(""),P(""),F("")};return Y&&Y.token&&z.push("/"),(0,x.jsxs)("div",{className:"container-fluid p-0",children:[(0,x.jsx)("div",{className:"row py-5 bg-default-image text-light",children:(0,x.jsx)("div",{className:"col text-center",children:(0,x.jsx)("h1",{className:"display-3",children:"Register Page"})})}),(0,x.jsx)("section",{className:"vh-200 bg-image",style:{backgroundImage:"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"},children:(0,x.jsx)("div",{className:"mask d-flex align-items-center h-100 gradient-custom-3",children:(0,x.jsx)("div",{className:"container h-100",children:(0,x.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:(0,x.jsx)("div",{className:"col-12 col-md-9 col-lg-7 col-xl-6",children:(0,x.jsx)("div",{className:"card mt-5 mb-5",style:{borderRadius:"15px"},children:(0,x.jsxs)("div",{className:"card-body p-5",children:[(0,x.jsx)("h2",{className:"text-uppercase text-center mb-5",children:"Create an account"}),(0,x.jsx)(h.Z,{handleSubmit:D,name:t,page:"register",setName:r,email:g,setEmail:b,selectedQuestion:v,setSelectedQuestion:N,secretAnswer:y,setSecretAnswer:C,password:S,setPassword:P,repeatPassword:_,setRepeatPassword:F,consent:W,setConsent:q,loading:U,about:"",setAbout:function(){},username:"",setUsername:function(){}}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col",children:(0,x.jsxs)("p",{className:"text-center text-muted mt-5 mb-0",children:["Have already an account?"," ",(0,x.jsx)(d(),{href:"/login",passHref:!0,children:(0,x.jsx)("u",{children:"Login here"})})]})})})]})})})})})})}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col",children:(0,x.jsx)(i.Z,{title:"Success",visible:Z,onCancel:function(){R(!1)},footer:[(0,x.jsx)(d(),{href:"/login",children:(0,x.jsx)(u.ZP,{children:"Go to Login"})},"login")],children:(0,x.jsx)("p",{children:"Account created successfully. Please login."})})})})]})}},4722:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(2785)}])}},function(e){e.O(0,[438,513,774,888,179],function(){return e(e.s=4722)}),_N_E=e.O()}]);