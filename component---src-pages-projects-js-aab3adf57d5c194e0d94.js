"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[853],{1210:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(7294),l=r(1082),n=r(9446);function c(e){switch(e){case"C++":return"from-red-400 to-red-600";case"React":case"JavaScript":case"Vue":return"from-green-400 to-green-600";case"Python":return"from-yellow-400 to-yellow-600";case"Unreal Engine":return"from-blue-400 to-blue-600";case"Java":case"Kotlin":return"from-orange-400 to-orange-600";case"C#":return"from-pink-500 to-pink-700";default:return"from-gray-400 to-gray-500"}}var s=function(e){var t=e.details,r=e.url,s=e.useGradient?c(t.languages[0]):c();return a.createElement("article",{className:"p-1 h-full self-stretch shadow-xl rounded-2xl bg-gradient-to-r "+s},a.createElement("div",{className:"flex flex-col justify-between h-full p-4 bg-neutral sm:p-5 rounded-xl"},a.createElement("div",{className:"flex flex-row justify-between w-full"},a.createElement("p",{className:"text-xs font-medium text-gray-500 mb-2"},t.date),a.createElement("div",{className:"text-xs flex flex-row gap-2"},t.externalLinks?t.externalLinks.map((function(e){return a.createElement("a",{id:e.url,href:e.url,key:e.url,className:"hover:text-gray-200"},"Github"===e.icon?a.createElement(n.g_Y,{size:16}):a.createElement(n.Pfi,{size:16}))})):a.createElement(a.Fragment,null))),a.createElement("div",{className:"h-full"},a.createElement(l.rU,{to:"/projects/"+r,className:"group"},a.createElement("h5",{className:"text-xl font-bold text-white group-hover:underline"},t.title),a.createElement("p",{className:"mt-2 text-sm text-gray-400"},t.description))),a.createElement("div",{className:"flex items-center align-self-end justify-between mt-4"},a.createElement("p",{className:"text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r "+s},t.languages[0]),a.createElement("ul",{className:"flex space-x-1"},t.tags.map((function(e){return a.createElement("li",{key:e,className:"inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-700"},e)}))))))},i=function(e){var t=e.cards,r=e.useGradient;return a.createElement("div",null,a.createElement("dl",{className:"space-y-10 mt-6 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-8 items-stretch"},t.map((function(e){return a.createElement("div",null,e.childMdx?a.createElement("div",{key:e.childMdx.id,className:"relative self-stretch"},a.createElement(s,{details:e.childMdx.frontmatter,url:e.name,useGradient:r})):null)}))))}},4982:function(e,t,r){var a=r(7294);t.Z=function(e){var t=e.text;return a.createElement("header",{className:"w-fit py-6"},a.createElement("h1",{className:"text-4xl font-bold text-gray-200"},t))}},7219:function(e,t,r){r.r(t),r.d(t,{Head:function(){return i}});var a=r(7294),l=r(4717),n=r(4982),c=r(1210),s="Projects";t.default=function(e){var t=e.data,r=(0,a.useState)(!0),i=r[0],m=r[1];return a.createElement(l.Z,{pageTitle:s,navCurrent:"/projects"},a.createElement(n.Z,{text:s}),a.createElement("div",{className:"flex justify-end -mt-10"},a.createElement("span",{className:"mr-3 text-sm font-semibold text-gray-900 dark:text-gray-300"},"Color Coding"),a.createElement("label",{className:"inline-flex relative items-center cursor-pointer"},a.createElement("input",{type:"checkbox",value:"",id:"checked-toggle",className:"sr-only peer",onChange:function(){return m(!i)},checked:i}),a.createElement("div",{className:"w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}))),a.createElement("div",null,a.createElement("div",{className:"divider"}),a.createElement(c.Z,{cards:t.allFile.nodes,useGradient:i})))};var i=function(){return a.createElement("title",null,s)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-aab3adf57d5c194e0d94.js.map