(this["webpackJsonpweather-finder"]=this["webpackJsonpweather-finder"]||[]).push([[0],{13:function(e,t,r){e.exports=r(23)},18:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(4),o=r.n(i),c=(r(18),r(3)),s=r.n(c),u=r(5),l=r(6),m=r(7),d=r(12),h=r(11),p=function(e){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header__title"},e.title))},y=function(e){return n.a.createElement("form",{className:"form",onSubmit:e.getWeather},n.a.createElement("input",{className:"form__input",type:"text",name:"city",placeholder:"city..."}),n.a.createElement("input",{className:"form__input",type:"text",name:"country",placeholder:"country..."}),n.a.createElement("button",{className:"form__submit"},"Check weather"))},f=function(e){return n.a.createElement("div",{className:e.city&&e.country?"results results--grey":"results"},e.city&&e.country&&n.a.createElement("h2",null,e.city,", ",e.country," "),e.description&&n.a.createElement("p",{className:"results__data"},e.description),e.temperature&&n.a.createElement("p",{className:"results__data"},"Temperature: ",n.a.createElement("strong",null,Math.round(e.temperature-273.15)," \u2103")),e.humidity&&n.a.createElement("p",{className:"results__data"},"Humidity: ",n.a.createElement("strong",null,e.humidity," %")),e.error&&n.a.createElement("p",{className:"results__error"},e.error))},v=function(e){return n.a.createElement("footer",{className:"footer"},n.a.createElement("p",{className:"footer__info"},e.info))},w=r(8),E="9e2f1c9dcba6b906904ed1c166a94535",b=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(l.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={title:"Basic information about weather | The weather finder",temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},e.getWeather=function(){var t=Object(u.a)(s.a.mark((function t(r){var a,n,i,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),a=r.target.elements.country.value,n=r.target.elements.city.value,t.next=5,fetch(" http://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(a,"&APPID=").concat(E));case 5:return i=t.sent,t.next=8,i.json();case 8:o=t.sent,n&&a?"404"===o.cod?e.setState({title:"Basic information about weather | The weather finder",temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"City not found"}):e.setState({title:"Weather in ".concat(o.name,", ").concat(o.sys.country," | The weather finder"),temperature:o.main.temp,city:o.name,country:o.sys.country,humidity:o.main.humidity,description:o.weather[0].description,error:void 0}):e.setState({title:"Basic information about weather | The weather finder",temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Please fill out fields"});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(w.a,null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",n.a.createElement("title",null,this.state.title),n.a.createElement("meta",{name:"description",content:"Find\xa0the\xa0basic\xa0information\xa0about\xa0weather\xa0with\xa0The\xa0Weather\xa0Finder. Check temperature, humidity and weather description in your city \u2600\u2601"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),n.a.createElement(p,{title:"The weather finder"}),n.a.createElement(y,{getWeather:this.getWeather}),n.a.createElement(f,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error}),n.a.createElement(v,{info:"Designed & created by Karolina Guzik"}))}}]),r}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.059bcaf8.chunk.js.map