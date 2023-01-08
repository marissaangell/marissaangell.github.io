"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[853],{7281:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(7294),l=a(1082),n=a(9446);function c(e){switch(e){case"C++":return"from-red-400 to-red-600";case"React":case"JavaScript":case"Vue":return"from-green-400 to-green-600";case"Python":return"from-yellow-400 to-yellow-600";case"Unreal Engine":case"WebGL":case"GLSL":return"from-blue-400 to-blue-600";case"Java":case"Kotlin":return"from-orange-400 to-orange-600";case"C#":return"from-pink-500 to-pink-700";default:return"from-gray-400 to-gray-500"}}var s=function(e){var t=e.details,a=e.url,s=e.useGradient?c(t.languages[0]):c();return r.createElement("article",{className:"p-1 h-full shadow-xl rounded-2xl bg-gradient-to-r "+s},r.createElement("div",{className:"flex flex-col justify-between h-full p-4 bg-neutral sm:p-5 rounded-xl"},r.createElement("div",{className:"flex flex-row justify-between w-full"},r.createElement("p",{className:"text-xs font-medium text-gray-500 mb-2"},t.date),r.createElement("div",{className:"text-xs flex flex-row gap-2"},t.externalLinks?t.externalLinks.map((function(e){return r.createElement("a",{id:e.url,href:e.url,key:e.url,className:"hover:text-gray-200"},"Github"===e.icon?r.createElement(n.g_Y,{size:16}):r.createElement(n.Pfi,{size:16}))})):r.createElement(r.Fragment,null))),r.createElement("div",{className:"h-full"},r.createElement(l.rU,{to:"/"+a,className:"group"},r.createElement("h5",{className:"text-xl font-bold text-white group-hover:underline"},t.title),r.createElement("p",{className:"mt-2 text-sm text-gray-400"},t.description))),r.createElement("div",{className:"flex items-center align-self-end justify-between mt-4"},r.createElement("p",{className:"text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r "+s},t.languages[0]),r.createElement("ul",{className:"flex space-x-1"},t.tags.map((function(e){return r.createElement("li",{key:e,className:"inline-block rounded-full text-gray-100 text-xs font-normal px-2 py-1 bg-gray-700"},e)}))))))},m=a(7059);function o(e){switch(e){case"red":return"from-red-400 to-red-600";case"green":return"from-green-400 to-green-600";case"yellow":return"from-yellow-400 to-yellow-600";case"blue":return"from-blue-400 to-blue-600";case"orange":return"from-orange-400 to-orange-600";case"pink":return"from-pink-500 to-pink-700";default:return"from-gray-400 to-gray-500"}}var i=function(e){var t,a,c=e.details,s=e.url,i=e.useGradient,u=void 0!==i&&i,d=(0,m.c)(null===(t=c.thumbnail)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.gatsbyImageData),f=u?o(c.languages[0]):o();return r.createElement("article",{className:"p-1 h-full shadow-xl rounded-2xl bg-gradient-to-r "+f},r.createElement("div",{className:"flex flex-col justify-between h-full px-4 py-3 bg-neutral sm:px-5 sm:py-4 rounded-xl"},r.createElement("div",{className:"w-full h-full"},r.createElement("div",{className:"flex flex-row justify-between w-full "},r.createElement(l.rU,{to:"/"+s,className:"group h-full justify-start"},r.createElement("h5",{className:"text-xl font-bold text-white group-hover:underline inline-block "},c.title),r.createElement("p",{className:"ml-1.5 text-s font-medium text-gray-500 align-self-end inline-block"},"(",c.date,")")),r.createElement("div",{className:"text-xs flex flex-row gap-2"},c.externalLinks?c.externalLinks.map((function(e){return r.createElement("a",{id:e.url,href:e.url,key:e.url,className:"hover:text-gray-200 inline-block place-self-center mt-1"},function(e){switch(e){case"Github":return r.createElement(n.g_Y,{size:16});case"Itch":return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"19",viewBox:"0 20 230 198.92646",className:"inline-block fill-current h-full -mb-[2px]"},r.createElement("path",{d:"M28.832 1.228C19.188 6.954.186 28.785.004 34.51v9.478c0 12.014 11.23 22.572 21.424 22.572 12.24 0 22.44-10.146 22.442-22.187 0 12.04 9.85 22.187 22.093 22.187 12.242 0 21.776-10.146 21.776-22.187 0 12.04 10.47 22.187 22.71 22.187h.22c12.24 0 22.72-10.146 22.72-22.187 0 12.04 9.53 22.187 21.77 22.187s22.09-10.146 22.09-22.187c0 12.04 10.2 22.187 22.44 22.187 10.19 0 21.42-10.557 21.42-22.572V34.51c-.19-5.725-19.19-27.556-28.83-33.282-29.97-1.053-50.76-1.234-81.73-1.23C79.59 0 37.36.483 28.83 1.228zm58.753 59.674c-1.166 2.046-2.627 3.903-4.308 5.546-4.62 4.52-10.956 7.32-17.94 7.32-6.985 0-13.356-2.8-17.976-7.322-1.67-1.64-2.94-3.394-4.11-5.436v.004c-1.16 2.046-2.79 3.798-4.46 5.44-4.62 4.52-10.99 7.317-17.97 7.317-.84 0-1.71-.23-2.42-.47-.982 10.25-1.4 20.04-1.545 27.19v.04c-.02 3.63-.035 6.61-.054 10.75.19 21.51-2.13 69.7 9.48 81.54 17.99 4.2 51.094 6.11 84.31 6.12h.003c33.214-.01 66.32-1.92 84.31-6.11 11.61-11.843 9.29-60.033 9.48-81.536-.017-4.14-.034-7.122-.053-10.75v-.04c-.15-7.142-.565-16.935-1.55-27.183-.71.24-1.587.473-2.43.473-6.98 0-13.354-2.797-17.975-7.316-1.675-1.644-3.3-3.396-4.463-5.44l-.005-.006c-1.166 2.04-2.437 3.797-4.112 5.436-4.62 4.522-10.99 7.322-17.973 7.322s-13.32-2.8-17.94-7.32c-1.68-1.644-3.14-3.5-4.31-5.547-1.163 2.04-2.59 3.907-4.266 5.546-4.62 4.52-10.99 7.32-17.98 7.32-.244 0-.49-.01-.73-.02h-.008c-.243.01-.486.02-.73.02-6.986 0-13.357-2.8-17.978-7.32-1.678-1.64-3.106-3.503-4.27-5.544zM69.123 84.775l-.002.008h.02c7.31.016 13.81 0 21.85 8.783 6.34-.663 12.95-.996 19.58-.985h.01c6.63-.01 13.24.33 19.58.99 8.05-8.78 14.54-8.76 21.85-8.78h.02v-.01c3.458 0 17.27 0 26.9 27.04l10.347 37.1c7.665 27.6-2.453 28.28-15.073 28.3-18.72-.69-29.08-14.29-29.08-27.88-10.36 1.7-22.45 2.55-34.535 2.55h-.005c-12.086 0-24.172-.85-34.53-2.55 0 13.59-10.36 27.18-29.078 27.88-12.62-.02-22.74-.7-15.073-28.29l10.34-37.1c9.63-27.04 23.45-27.04 26.9-27.04zm41.44 21.25v.007c-.017.017-19.702 18.096-23.24 24.526l12.89-.516v11.24c0 .527 5.174.313 10.35.074h.007c5.177.24 10.35.453 10.35-.073v-11.24l12.89.514c-3.538-6.43-23.24-24.525-23.24-24.525v-.006l-.002.002z"}));default:return r.createElement(n.Pfi,{size:16})}}(e.icon))})):r.createElement(r.Fragment,null))),r.createElement(l.rU,{to:"/"+s,className:"flex flex-shrink mx-10 md:mx-0"},r.createElement(m.G,{image:d,className:"mt-3 mb-1 rounded-xl"}))),r.createElement("div",{className:"flex items-center align-self-end justify-between mt-2"},r.createElement("p",{className:"text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r "+f},c.languages[0]),r.createElement("ul",{className:"flex space-x-1"},c.tags.map((function(e){return r.createElement("li",{key:e,className:"inline-block rounded-full text-gray-100 text-xs font-normal px-2 py-1 bg-gray-700"},e)}))))))};function u(e){switch(e){case"red":return"from-red-400 to-red-600";case"green":return"from-green-400 to-green-600";case"yellow":return"from-yellow-400 to-yellow-600";case"blue":return"from-blue-400 to-blue-600";case"orange":return"from-orange-400 to-orange-600";case"pink":return"from-pink-500 to-pink-700";default:return"from-gray-400 to-gray-500"}}var d=function(e){var t,a,n=e.details,c=e.url,s=e.useGradient,o=void 0!==s&&s,i=(0,m.c)(null===(t=n.thumbnail)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.gatsbyImageData),d=o?u(n.languages[0]):u();return r.createElement("article",{className:"p-1 h-full shadow-xl rounded-2xl bg-gradient-to-r "+d},r.createElement("div",{className:"flex flex-col justify-between h-full p-4 bg-neutral sm:p-5 rounded-xl"},r.createElement("div",{className:"h-full"},r.createElement(l.rU,{to:"/"+c,className:"group"},r.createElement("div",{className:"w-full flex justify-between "},r.createElement("h5",{className:"text-xl font-bold text-white group-hover:underline inline-block"},n.title),r.createElement("p",{className:"ml-1.5 text-s font-medium text-gray-500 place-self-end inline-block"},n.date)),r.createElement("div",{className:"flex flex-shrink max-h-[200px]"},r.createElement(m.G,{image:i,className:"mt-3 mb-1 rounded-lg"})))),r.createElement("div",{className:"flex items-center align-self-end justify-between mt-2"},r.createElement("p",{className:"text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r "+d},n.languages[0]),r.createElement("ul",{className:"flex space-x-1"},n.tags.map((function(e){return r.createElement("li",{key:e,className:"inline-block rounded-full text-gray-100 text-xs font-normal px-2 py-1 bg-gray-700"},e)}))))))};var f=function(e){var t=e.cards,a=e.useGradient;return r.createElement("div",null,r.createElement("dl",{className:"space-y-4 mt-4 md:mt-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-stretch"},t.map((function(e){return r.createElement("div",{className:"relative self-stretch h-full"},function(e,t){var a;switch(e.childMdx.frontmatter.category){case"games":return r.createElement(i,{details:e.childMdx.frontmatter,url:e.sourceInstanceName+"/"+e.name,useGradient:t});case"vfx":return r.createElement(d,{details:e.childMdx.frontmatter,url:e.sourceInstanceName+"/"+e.name,useGradient:t});default:return r.createElement(s,{details:null===(a=e.childMdx)||void 0===a?void 0:a.frontmatter,url:e.sourceInstanceName+"/"+e.name,useGradient:t})}}(e,a))}))))}},4982:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.text;return r.createElement("header",{className:"w-fit py-6"},r.createElement("h1",{className:"text-4xl font-bold text-gray-200"},t))}},7219:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m}});var r=a(7294),l=a(4717),n=a(4982),c=a(7281),s="Projects";t.default=function(e){var t=e.data,a=(0,r.useState)(!0),m=a[0],o=a[1];return r.createElement(l.Z,{pageTitle:s,navCurrent:"/projects"},r.createElement(n.Z,{text:s}),r.createElement("div",{className:"flex justify-end -mt-10"},r.createElement("span",{className:"mr-3 text-sm font-semibold text-gray-900 dark:text-gray-300"},"Color Coding"),r.createElement("label",{className:"inline-flex relative items-center cursor-pointer"},r.createElement("input",{type:"checkbox",value:"",id:"checked-toggle",className:"sr-only peer",onChange:function(){return o(!m)},checked:m}),r.createElement("div",{className:"w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"}))),r.createElement("div",null,r.createElement("div",{className:"divider"}),r.createElement(c.Z,{cards:t.allFile.nodes,useGradient:m})))};var m=function(){return r.createElement("title",null,s)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-4d9c7840f4f2416ec303.js.map