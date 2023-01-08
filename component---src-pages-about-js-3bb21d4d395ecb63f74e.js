"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[682],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return y},P:function(){return w},S:function(){return O},_:function(){return l},a:function(){return i},b:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(4811),a(5697)),s=a.n(n);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,o){var c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);var d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var m,A=["children"],u=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,a=l(e,A);return r.createElement(r.Fragment,null,r.createElement(u,i({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){var t=e.src,a=e.srcSet,n=e.loading,s=e.alt,o=void 0===s?"":s,c=e.shouldLoad,d=l(e,g);return r.createElement("img",i({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:o}))},E=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,s=e.shouldLoad,o=void 0===s||s,c=l(e,f),d=c.sizes||(null==t?void 0:t.sizes),m=r.createElement(h,i({},c,t,{sizes:d,shouldLoad:o}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:d})})),m):m};h.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},E.displayName="Picture",E.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var v=["fallback"],w=function(e){var t=e.fallback,a=l(e,v);return t?r.createElement(E,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(m=E.propTypes)?void 0:m.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var y=function(e){return r.createElement(r.Fragment,null,r.createElement(E,i({},e)),r.createElement("noscript",null,r.createElement(E,i({},e,{shouldLoad:!0}))))};y.displayName="MainImage",y.propTypes=E.propTypes;var b,x,N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:s().object.isRequired,alt:N},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],Q=new Set,B=function(e){var t=e.as,n=void 0===t?"div":t,s=e.image,c=e.style,d=e.backgroundColor,m=e.className,A=e.class,u=e.onStartLoad,p=e.onLoad,g=e.onError,f=l(e,I),h=s.width,E=s.height,v=s.layout,w=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(h,E,v),y=w.style,N=w.className,C=l(w,j),B=(0,r.useRef)(),k=(0,r.useMemo)((function(){return JSON.stringify(s.images)}),[s.images]);A&&(m=A);var T=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,h,E);return(0,r.useEffect)((function(){b||(b=Promise.all([a.e(774),a.e(826)]).then(a.bind(a,8826)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=B.current.querySelector("[data-gatsby-image-ssr]");return r&&o()?(r.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void Q.add(k)):x&&Q.has(k)?void 0:(b.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;B.current&&(B.current.innerHTML=r(i({isLoading:!0,isLoaded:Q.has(k),image:s},f)),Q.has(k)||(e=requestAnimationFrame((function(){B.current&&(t=n(B.current,k,Q,c,u,p,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[s]),(0,r.useLayoutEffect)((function(){Q.has(k)&&x&&(B.current.innerHTML=x(i({isLoading:Q.has(k),isLoaded:Q.has(k),image:s},f)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[s]),(0,r.createElement)(n,i({},C,{style:i({},y,c,{backgroundColor:d}),className:N+(m?" "+m:""),ref:B,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},k=(0,r.memo)((function(e){return e.image?(0,r.createElement)(B,e):null}));k.propTypes=C,k.displayName="GatsbyImage";var T,S=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],L=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),P={src:s().string.isRequired,alt:N,width:L,height:L,sizes:s().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},O=(T=k,function(e){var t=e.src,a=e.__imageData,n=e.__error,s=l(e,S);return n&&console.warn(n),a?r.createElement(T,i({image:a},s)):(console.warn("Image not loaded",t),null)});O.displayName="StaticImage",O.propTypes=P},4982:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.text;return r.createElement("header",{className:"w-fit py-6"},r.createElement("h1",{className:"text-4xl font-bold text-gray-200"},t))}},1695:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d},default:function(){return c}});var r=a(7294),n=a(7059);var s=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z",clipRule:"evenodd"}))})),i=a(4717),l=a(4982),o="About Me";function c(){return r.createElement(i.Z,{pageTitle:o,navCurrent:"/about"},r.createElement(l.Z,{text:o}),r.createElement("div",{className:"max-w-2xl mx-auto grid grid-cols-1 gap-x-8 lg:max-w-7xl lg:grid-cols-3 items-start"},r.createElement("div",{className:"peer empty:hidden max-w-xs mx-auto mt-6 lg:-mt-12 lg:max-w-7xl"},r.createElement("div",{className:"shadow-2xl rounded-lg bg-base-300 p-4"},r.createElement(n.S,{src:"../assets/NCWITPic.jpg",alt:"A photo of Marissa Angell",aspectRatio:1,placeholder:"blurred",transformOptions:"cover",objectFit:"cover",objectPosition:"50% 50%",className:"rounded-lg shadow-sm",__imageData:a(8314)}))),r.createElement("div",{className:"col-start-1 col-span-2 row-start-1 peer-empty:col-span-full lg:peer-empty:px-36"},r.createElement("div",{className:"text-lg"},r.createElement("p",{className:"pb-6"},"Hi, I'm Marissa! I'm a software engineer and game developer in my senior year of study at the University of Utah. I'm expecting to graduate with a Bachelor's in Computer Science with Entertainment Arts and Engineering emphasis in May of 2023."),r.createElement("p",{className:"pb-6"},"If you'd like to get in touch, feel free to reach out:"),r.createElement("div",{className:"shadow-md overflow-hidden sm:rounded-lg max-w-lg"},r.createElement("div",{className:"border border-base-300"},r.createElement("dl",null,r.createElement("div",{className:"bg-base-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},r.createElement("dt",{className:"text-sm font-semibold"},"Email"),r.createElement("dd",{className:"mt-1 text-sm sm:mt-0 sm:col-span-2 ml-4"},"maa.angell (at) gmail.com")),r.createElement("div",{className:"bg-base-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},r.createElement("dt",{className:"text-sm font-semibold"},"LinkedIn"),r.createElement("dd",{className:"mt-1 text-sm sm:mt-0 sm:col-span-2 link ml-4"},r.createElement("a",{href:"http://www.linkedin.com/in/marissa-angell"},"linkedin.com/in/marissa-angell"))))))),r.createElement("div",{className:"text-lg mt-6"},r.createElement("p",{className:"pb-6"},"If you'd like to take a look at a resume:"),r.createElement("div",{className:"shadow-md overflow-hidden sm:rounded-lg max-w-lg"},r.createElement("div",{className:"border border-base-300"},r.createElement("dl",null,r.createElement("div",{className:"bg-base-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6"},r.createElement("dt",{className:"text-sm font-semibold"},"Software Engineering"),r.createElement("dd",{className:"mt-1 text-sm sm:mt-0 sm:col-span-2 link"},r.createElement("div",{className:"flex-1 flex items-center ml-4"},r.createElement(s,{className:"flex-shrink-0 h-5 w-5 text-gray-400","aria-hidden":"true"}),r.createElement("a",{href:"/SoftwareResume-MarissaAngell.pdf",className:"ml-1 flex-1 w-0"},"SoftwareResume-MarissaAngell.pdf")))),r.createElement("div",{className:"bg-base-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6"},r.createElement("dt",{className:"text-sm font-semibold"},"Game Development"),r.createElement("dd",{className:"mt-1 text-sm sm:mt-0 sm:col-span-2 link"},r.createElement("div",{className:"flex-1 flex items-center ml-4"},r.createElement(s,{className:"flex-shrink-0 h-5 w-5 text-gray-400","aria-hidden":"true"}),r.createElement("a",{href:"/GamesResume-MarissaAngell.pdf",className:"ml-1 flex-1 w-0"},"GamesResume-MarissaAngell.pdf")))))))))))}var d=function(){return r.createElement("title",null,o)}},8314:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBP/EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAdL59JrVDHJQqg6f/8QAHBAAAwABBQAAAAAAAAAAAAAAAQIRAAMSIjEy/9oACAEBAAEFAmmxODv2xhZo51Bh9ObiOQP/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIQEUH/2gAIAQMBAT8Bynwklp//xAAWEQADAAAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BqP/EABsQAAICAwEAAAAAAAAAAAAAAAABAjEQESFx/9oACAEBAAY/AtK2zTVo4R9IMp4WP//EABsQAQACAwEBAAAAAAAAAAAAAAEAETFBYSFR/9oACAEBAAE/IaPRiVC2Q+m4XlUJ3yMGPbico8jukT20RYDuf//aAAwDAQACAAMAAAAQ1/8Agf/EABoRAAICAwAAAAAAAAAAAAAAAAERACEQQfD/2gAIAQMBAT8QAJ4oeajCp//EABcRAQEBAQAAAAAAAAAAAAAAAAABIUH/2gAIAQIBAT8Qta5VY//EABsQAQEBAQEBAQEAAAAAAAAAAAERIQAxQXHB/9oACAEBAAE/EGQVANWLM60ShImjToagQgHnKJxBS0pPn70wjrsj4JvKEwejPeeuQadcv0gfOy8X/O//2Q=="},"images":{"fallback":{"src":"/static/b4abf45cea439ff7fe8972997281df67/7de29/NCWITPic.jpg","srcSet":"/static/b4abf45cea439ff7fe8972997281df67/4694a/NCWITPic.jpg 576w,\\n/static/b4abf45cea439ff7fe8972997281df67/37bf6/NCWITPic.jpg 1152w,\\n/static/b4abf45cea439ff7fe8972997281df67/7de29/NCWITPic.jpg 2304w","sizes":"(min-width: 2304px) 2304px, 100vw"},"sources":[{"srcSet":"/static/b4abf45cea439ff7fe8972997281df67/aa866/NCWITPic.webp 576w,\\n/static/b4abf45cea439ff7fe8972997281df67/bc1d2/NCWITPic.webp 1152w,\\n/static/b4abf45cea439ff7fe8972997281df67/b5efd/NCWITPic.webp 2304w","type":"image/webp","sizes":"(min-width: 2304px) 2304px, 100vw"}]},"width":2304,"height":2304}')}}]);
//# sourceMappingURL=component---src-pages-about-js-3bb21d4d395ecb63f74e.js.map