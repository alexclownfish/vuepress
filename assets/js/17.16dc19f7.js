(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{555:function(t,e,s){"use strict";s.r(e);var r=s(8),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"docker-pull-docker-search出现-error-response-from-daemon-get-https-index-docker-io-v1-search-q-nginx-n-25-dial-tcp-lookup-index-docker-io-on-172-16-16-2-53-read-udp-172-16-16-23-44580-172-16-16-2-53-i-o-timeout此类报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-pull-docker-search出现-error-response-from-daemon-get-https-index-docker-io-v1-search-q-nginx-n-25-dial-tcp-lookup-index-docker-io-on-172-16-16-2-53-read-udp-172-16-16-23-44580-172-16-16-2-53-i-o-timeout此类报错"}},[t._v("#")]),t._v(" docker pull && docker search出现：Error response from daemon: Get https://index.docker.io/v1/search?q=nginx&n=25: dial tcp: lookup index.docker.io on 172.16.16.2:53: read udp 172.16.16.23:44580->172.16.16.2:53: i/o timeout此类报错")]),t._v(" "),s("p",[t._v("如图："),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201103172930131.png#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),s("h3",{attrs:{id:"解决方法一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法一"}},[t._v("#")]),t._v(" 解决方法一：")]),t._v(" "),s("p",[t._v("这个是因为dns域名没有解析的原因，编辑/etc/resolv.conf 文件，增加一行dns地址，例如：nameserver 8.8.4.4\n类似这种：\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201103173056479.png#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),s("h3",{attrs:{id:"解决方法二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法二"}},[t._v("#")]),t._v(" 解决方法二：")]),t._v(" "),s("p",[t._v("也可直接在hosts文件里添加解析，从 dig返回的ip随便选个加进hosts文件：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@docker "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# dig @"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("114.114")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".114")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".114")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201103173414634.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTUwOTU4Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201103173709440.png#pic_center",alt:"在这里插入图片描述"}}),t._v("\n然后在进行docker pull & docker search就可以了")])])}),[],!1,null,null,null);e.default=a.exports}}]);