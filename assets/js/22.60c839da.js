(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{569:function(t,s,a){"use strict";a.r(s);var r=a(8),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hexo插入音乐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hexo插入音乐"}},[t._v("#")]),t._v(" hexo插入音乐")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://alexcld.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以到我的博客参考一下样式"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("两种方式：\n")]),t._v(" "),a("ul",[a("li",[t._v("单个音乐")]),t._v(" "),a("li",[t._v("歌单")])]),t._v(" "),a("h3",{attrs:{id:"第一种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种"}},[t._v("#")]),t._v(" 第一种：")]),t._v(" "),a("p",[t._v("这种方式比较简单，直接到网易云搜索需要添加的背景音乐然后生成外链，将外链粘贴到sidebar.swig里边，可以切换粘贴位置以达到自己需要的效果。\n这里随便找了首歌的外链粘了进去")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("vim "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("blog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("themes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("_macro"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sidebar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("swig\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("iframe frameborder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no"')]),t._v(" border"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" marginwidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" marginheight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("330")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("86")]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//music.163.com/outchain/player?type=3&id=2069329741&auto=1&height=66"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("iframe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"第二种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种"}},[t._v("#")]),t._v(" 第二种：")]),t._v(" "),a("p",[t._v("以歌单的形式插入背景音乐，具体操作如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("vim "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("blog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("themes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("_macro"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sidebar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("swig\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" require APlayer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" require MetingJS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("网易云"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("js\n      server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"netease"')]),t._v("\n      id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3129764102"')]),t._v("\n          type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"playlist"')]),t._v("\n          mini"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n      fixed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n      list"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("folded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n      autoplay"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n      volume"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.4"')]),t._v("\n      theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#FADFA3"')]),t._v("\n      order"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"random"')]),t._v("\n          loop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"all"')]),t._v("\n      preload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),t._v("\n      mutex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("meting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("aside"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sidebar-dimmer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" endmacro "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/metowolf/MetingJS",target:"_blank",rel:"noopener noreferrer"}},[t._v("可参考属性"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200925165345366.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTUwOTU4Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),t._v(" "),a("a",{attrs:{href:"https://alexcld.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("效果"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200925165548731.png#pic_center",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);