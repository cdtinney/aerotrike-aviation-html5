(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(164),o=a(162),s=(a(239),a(165));function m(e){var t=e.title,a=e.cost,n=e.description,l=e.paypalId;return r.a.createElement("div",{className:"panel panel-primary gift-cert-package"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"panel-title"},t),r.a.createElement("div",{className:"cost"},a)),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("span",{className:"buy-now"},r.a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"},r.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),r.a.createElement("input",{type:"hidden",name:"hosted_button_id",value:l}),r.a.createElement("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"})))))),r.a.createElement("div",{className:"panel-body"},n))}m.propTypes={title:c.a.string.isRequired,description:c.a.string.isRequired,cost:c.a.string.isRequired,paypalId:c.a.string.isRequired};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Gift Certificates"}),r.a.createElement(s.a,null,r.a.createElement("h3",null,"Flights"),r.a.createElement("p",null,"All prices exclude applicable taxes."),r.a.createElement("p",null,"Gift certificates can also be purchased with payment via e-transfer."),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:montgomery@nexicom.net?subject=Gift%20Certificate%20Purchase"},"E-mail us today to order one.")),r.a.createElement(m,{title:"10 Minute Introductory Flight",cost:"$50",description:"Experience the pure joy of flying in a two-seater, open air ultralight trike.",paypalId:"E7UMBNUQ94HM6"}),r.a.createElement(m,{title:"30 Minute Discovery Flight",cost:"$90",description:"Learn basic control of the aircraft, and experience a 30 minute discovery flight over the Kawarthas.",paypalId:"TCAW3VTBMV55J"}),r.a.createElement(m,{title:"60 Minute Orientation Flight",cost:"$145",description:"In a one hour flight, you will enjoy the beauty of the Kawarthas as never seen before. We can cruise over the Otonabee river at 2,000 feet, and fly the north shore of Rice Lake.",paypalId:"WGQNMP6RA2X9N"}),r.a.createElement("h3",null,"Lessons"),r.a.createElement(m,{title:"5 Hours of Lessons",cost:"$700 (save $25!)",description:"Buy 5 hours in advance and save $25.",paypalId:"FXP7L6XT6ZNKW"})))}},153:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(32),o=a.n(i);a.d(t,"a",function(){return o.a}),a.d(t,"b",function(){return i.withPrefix});a(153),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},155:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(154);function o(e){var t=e.to,a=e.text;return r.a.createElement("li",null,r.a.createElement(i.a,{activeStyle:{color:"#555",backgroundColor:"#e7e7e7"},to:t},a))}function s(){return r.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(i.a,{className:"navbar-brand",to:"/"},"AEROTRIKE AVIATION")),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement(o,{to:"/",text:"Home"}),r.a.createElement(o,{to:"/about",text:"About"}),r.a.createElement(o,{to:"/training",text:"Training"}),r.a.createElement(o,{to:"/gift-certificates",text:"Gift Certificates"}),r.a.createElement(o,{to:"/sales",text:"Sales"}),r.a.createElement(o,{to:"/gallery",text:"Gallery"})),r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement(o,{to:"/faq",text:"FAQ"}),r.a.createElement(o,{to:"/contact",text:"Contact Us"})))))}o.propTypes={to:c.a.string.isRequired,text:c.a.string.isRequired}},156:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(54),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"ADDRESS"),r.a.createElement("div",null,"Aerotrike Aviation",r.a.createElement("br",null),"Peterborough Municipal Airport (YPQ)",r.a.createElement("br",null),"925 Airport Road",r.a.createElement("br",null),"Peterborough, ON K9J 6X6",r.a.createElement("br",null)))}},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"EMAIL"),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:montgomery@nexicom.net?subject=Hello!"},"montgomery@nexicom.net")))}},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"PHONE"),r.a.createElement("p",{style:{marginBottom:0}},"705 927 1256",r.a.createElement("br",null)))}},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(161),c=a.n(l);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"SOCIAL"),r.a.createElement("a",{href:"https://www.facebook.com/www.aerotrikeaviation.net",style:{display:"block"}},r.a.createElement("img",{alt:"Facebook",src:c.a})))}},161:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExODA4M0NDMTM4MEMyQTVFQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCN0YwMzNGQUE2MTYxMUUyOEJFQUJDRTMzOERDQjM5MCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCN0YwMzNGOUE2MTYxMUUyOEJFQUJDRTMzOERDQjM5MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUM3QUJGQTkzODIwNjgxMThDMTQ5OEFGOTgxQUJBQ0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTgwODNDQzEzODBDMkE1RUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5VkWTUAAABF0lEQVR42mK0Dp/LyMDAUATEDUDMw0A78AVqRy8L1MIeBtoDHpg9TEDcyEBf0AiylJvOlnIzMQwAYKGK0znZGALdNBgcLRQYFKQFGNjZWBi+//jN8OHzT4bQ3FXUt1RFQZihvdiZQVIUNeFzcrCCMdV9ysPFxtBb4cYgLMBJkj6K4jTSR5dkCyn2qb25PAp//e6bDDOXn2b48u0X7XwqK8GHwp+/9jxBCym2lJkZVfv7j99oH6fo4P9/BvpbSpOEdGRFEknyv//8Y3CJX8Tw9+8/+vn00fOPGBbS3NIHjz/QP04fPP1AeZzaRMzDG4fo8oMq9Y5aOmrp0Lb0K53t/AqytJ3OlraDLG0D4hI6+Pgr1J5WgAADACLKR4SeAF87AAAAAElFTkSuQmCC"},162:function(e,t,a){"use strict";var n=a(163),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(166),s=a.n(o);function m(e){var t=e.title,a=e.description,r=n.data.site,c=a||r.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:"en"},title:t,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:t},{property:"og:description",content:c},{property:"og:type",content:"website"}]})}m.propTypes={title:i.a.string.isRequired,description:i.a.string},m.defaultProps={description:""},t.a=m},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Aerotrike Aviation",description:"Ultralight flight training at its best."}}}}},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(155),o=a(157),s=a(158),m=a(159),u=a(160);var d=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},r.a.createElement("div",{className:"col-md-3 col-sm-4 col-xs-8 contact-info-container"},r.a.createElement(s.a,null)),r.a.createElement("div",{className:"col-md-3 col-sm-2 col-xs-12 contact-info-container"},r.a.createElement(m.a,null)),r.a.createElement("div",{className:"col-md-3 col-sm-3 col-xs-8 contact-info-container"},r.a.createElement(o.a,null)),r.a.createElement("div",{className:"col-md-3 col-sm-3 col-xs-4 contact-info-container"},r.a.createElement(u.a,null))))))};function p(e){var t=e.className,a=e.children;return r.a.createElement("div",{className:t},r.a.createElement(i.a,null),a,r.a.createElement("hr",null),r.a.createElement(d,null))}p.propTypes={className:c.a.string,children:c.a.node},p.defaultProps={className:void 0,children:null};t.a=p},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),c=a.n(l);function i(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1"},t)))}i.propTypes={children:c.a.node},i.defaultProps={children:null};t.a=i}}]);
//# sourceMappingURL=component---src-pages-gift-certificates-js-0691e7c1136bb7e363ac.js.map