(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(10),u=n(6),s=n(1),m=n(2),d=n(4),f=n(3),b=n(5),h=(n(18),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header col-3"},o.a.createElement("h1",null,"ToDo"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),p=(n(19),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.onSearchChange=function(e){var t=e.target.value;n.setState({term:t}),n.props.onSearch(t)},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{className:"search-input",placeholder:"Type here to search",onChange:this.onSearchChange})}}]),t}(a.Component)),g=n(11),v=(n(20),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=e.done,l=e.important,i=e.date,u="todo-list-item ";return c&&(u+=" done"),l&&(u+=" important"),o.a.createElement("span",{className:u},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("span",{className:"time"},i))}}]),t}(a.Component)),O=(n(21),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleDone,r=e.onToggleImportant,c=t.map(function(e){var t=e.id,c=Object(g.a)(e,["id"]);return o.a.createElement("li",{className:"list-group-item",key:t},o.a.createElement(v,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleDone:function(){return a(t)},onToggleImportant:function(){return r(t)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},c)}),j=(n(22),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map(function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},r)});return o.a.createElement("div",{className:"btn-group"},a)}}]),t}(a.Component)),y=(n(23),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onItemAdded(n.state.label),n.setState({label:""})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),o.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add ToDo"))}}]),t}(a.Component)),E=(n(24),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.state={todoData:[n.createTodoItem("Drink Water"),n.createTodoItem("Do Sport"),n.createTodoItem("Make Awesome App"),n.createTodoItem("Smile")],term:"",filter:"all"},n.addItem=function(e){var t=n.createTodoItem(e);n.setState(function(e){var n=e.todoData;return{todoData:[].concat(Object(u.a)(n),[t])}})},n.searchItem=function(e){n.setState({term:e})},n.onFilterChange=function(e){n.setState({filter:e})},n.onToggleDone=function(e){n.setState(function(t){var a=t.todoData;return{todoData:n.onToggleProperty(a,e,"done")}})},n.onToggleImportant=function(e){n.setState(function(t){var a=t.todoData;return{todoData:n.onToggleProperty(a,e,"important")}})},n.deleteItem=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e});return{todoData:[].concat(Object(u.a)(n.slice(0,a)),Object(u.a)(n.slice(a+1)))}})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++,date:(new Date).toLocaleString()}}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!e.done});case"done":return e.filter(function(e){return e.done});default:return e}}},{key:"onToggleProperty",value:function(e,t,n){var a=e.findIndex(function(e){return e.id===t}),o=e[a],r=Object(i.a)({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(u.a)(e.slice(0,a)),[r],Object(u.a)(e.slice(a+1)))}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.filter(this.search(t,n),a),c=t.filter(function(e){return e.done}).length,l=t.length-c;return o.a.createElement("div",{className:"todo-app container"},o.a.createElement("div",{className:"row"},o.a.createElement(h,{toDo:l,done:c}),o.a.createElement("div",{className:"main col-9"},o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(p,{onSearch:this.searchItem}),o.a.createElement(j,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(O,{todos:r,onDeleted:this.deleteItem,onToggleDone:this.onToggleDone,onToggleImportant:this.onToggleImportant}),o.a.createElement(y,{onItemAdded:this.addItem}))))}}]),t}(a.Component));c.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.d4da9fd8.chunk.js.map