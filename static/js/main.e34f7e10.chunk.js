(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),o=a.n(i),l=a(1),r=a(2),s=a(4),m=a(3),u=(a(12),function(e){var t=e.name,a=e.callback;return c.a.createElement("button",{type:"button",onClick:a},t)}),h=(a(13),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={date:(new Date).toLocaleTimeString()},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({date:(new Date).toLocaleTimeString()}),console.log(e.state.date)}),1e3)}},{key:"componentDidUpdate",value:function(e){this.props.clockName!==e.clockName&&console.log("The Clock was renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return c.a.createElement("div",{className:"clock"},c.a.createElement("h1",{className:"clock__title"},"React Clock"),c.a.createElement("p",null,"Current time:"," ",this.state.date))}}]),a}(c.a.Component)),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={name:0,isVisible:!0},e.changeName=function(){if(e.state.isVisible){var t=(1e5*Math.random()).toFixed(0);e.setState({name:t})}},e.hideTime=function(){e.setState({isVisible:!1})},e.showTime=function(){e.setState({isVisible:!0})},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},this.state.isVisible?c.a.createElement(h,{clockName:this.state.name}):c.a.createElement("p",{className:"destroyed"},"Time was stopped"),c.a.createElement("div",{className:"App__container-button"},c.a.createElement(u,{name:"Show time",callback:this.showTime}),c.a.createElement(u,{name:"Hide time",callback:this.hideTime}),c.a.createElement(u,{name:"Change Name",callback:this.changeName})))}}]),a}(c.a.Component);o.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e34f7e10.chunk.js.map