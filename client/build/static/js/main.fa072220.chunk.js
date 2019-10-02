(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){e.exports=n(37)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(18),r=n.n(i),l=(n(27),n(8)),o=n(9),s=n(11),u=n(10),d=n(12),m=n(19),h=n(5);n(28);var E=function(e){return c.a.createElement("div",{className:"formContainer"},c.a.createElement("div",{className:"InputParams"},c.a.createElement("input",{id:"drugCode",type:"text",name:"drugCode",placeholder:"Enter the drug code"}),c.a.createElement("input",{id:"diseaseCode",type:"text",name:"diseaseCode",placeholder:"Enter the disease code"}),c.a.createElement("select",{id:"type",type:"number",name:"type"},c.a.createElement("option",{value:""}," Type "),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2"))),c.a.createElement("input",{type:"submit",value:"Search",onClick:e.onAction}))};n(29);var p=function(e){var t=e.medications[0],n=Object.keys(t);return c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,n.map((function(e,t){return c.a.createElement("th",{key:t},e[0].toUpperCase()+e.substring(1,e.length))})))),c.a.createElement("tbody",null,e.medications.map((function(e,t){var n=e.id,a=e.decription,i=e.drugcode,r=e.diseasecode,l=e.type;return c.a.createElement("tr",{key:t},c.a.createElement("td",null,n),c.a.createElement("td",null,a),c.a.createElement("td",null,i),c.a.createElement("td",null,r),c.a.createElement("td",null,l))}))))};var f=function(e){return c.a.createElement("div",null,c.a.createElement(p,{medications:e.medications}))},v=(n(30),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).readInputs=function(){return[document.getElementById("drugCode"),document.getElementById("diseaseCode"),document.getElementById("type")]},e.handlingGetAction=function(){e.setState({isAction:!0,fetchIsDone:!1,hasMedications:!1});var t=e.readInputs(),n="?";t.forEach((function(e){n=n+(e.name+"=")+(e.value?e.value:e.name)+"&"})),n=n.slice(0,-1),fetch("/api/getMedicationsInfo"+n).then((function(e){return e.json()})).then((function(t){console.log(t),1===t.code?e.setState({fetchIsDone:!0,hasMedications:!0,medications:t.medications}):2===t.code&&e.setState({fetchIsDone:!0,hasMedications:!1})}))},e.state={},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("h1",{className:"Title"}," Drugs & Medications Search "),c.a.createElement(E,{onAction:this.handlingGetAction}),this.state.isAction?this.state.fetchIsDone?c.a.createElement("div",{className:"MedicationsViewSection"},c.a.createElement("h2",{className:"ShowResultsTitle"}," The retrieved drugs and medications are: "),this.state.hasMedications?c.a.createElement(f,{medications:this.state.medications}):c.a.createElement(y,null)):c.a.createElement("h1",null," Loading ... "):null)}}]),t}(a.Component)),y=function(){return c.a.createElement("center",null,c.a.createElement("h1",null," No Medications "))},b=v,g=(n(31),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement(h.a,{path:"/",component:b}))}}]),t}(a.Component));r.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fa072220.chunk.js.map