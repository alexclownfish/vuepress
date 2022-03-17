(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{556:function(e,t,s){"use strict";s.r(t);var a=s(8),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"kubersphere安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubersphere安装"}},[e._v("#")]),e._v(" KUBERSPHERE安装")]),e._v(" "),s("h2",{attrs:{id:"注"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注"}},[e._v("#")]),e._v(" 注：")]),e._v(" "),s("p",[e._v("在k8s搭建完成的基础上安装最小化kubesphere")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("环境：centos7x3\nk8s-master\t192.168.10.101\t2核5G\nk8s-node1\t192.168.10.102\t2核2G\nk8s-node2\t192.168.10.103\t2核2G\n")])])]),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/PD1CCkKZgtZD7pAZEqF-rw",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubeadmin安装kubernetes移步阿良大佬的教程"),s("OutboundLink")],1),e._v("\n基于kubeadmin搭建，master内存尽量给到7-8个G（我这里环境不允许，期间出现过多次蓝屏）")]),e._v(" "),s("p",[e._v("由于部分包被墙，搭建过程中可能会有许多包拉不下来，建议爬个梯子过去，或者本地翻过去之后给虚拟机做转发")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("在yum源存在的情况下\nyum -y install openvpn\n后台运行\nopenvpn --daemon --config *.openvpn\n")])])]),s("p",[e._v("出现什么什么successfully什么什么completely就ok了")]),e._v(" "),s("h3",{attrs:{id:"一、安装helm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、安装helm"}},[e._v("#")]),e._v(" 一、安装helm")]),e._v(" "),s("p",[e._v("1.地址 https://helm.sh/docs/intro/install/")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('wget https://get.helm.sh/helm-v3.3.4-linux-amd64.tar.gz\n \ntart -zxvf helm-v3.3.4-linux-amd64.tar.gz\n \nmv linux-amd64/helm /usr/local/bin/helm\n \nhelm version\nversion.BuildInfo{Version:"v3.3.4", GitCommit:"a61ce5633af99708171414353ed49547cf05013d", GitTreeState:"clean", GoVersion:"go1.14.9"}\n')])])]),s("p",[e._v("2.命令补全")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vim ~/.bashrc\n\nsource <(helm completion bash)\n\nsource ~/.bashrc\n")])])]),s("p",[e._v("3.添加常用仓库")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ helm repo add stable https://kubernetes-charts.storage.googleapis.com/\n$ helm repo add bitnami https://charts.bitnami.com/bitnami\n$ helm repo add incubator https://kubernetes-charts-incubator.storage.googleapis.com/\n$ helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\n$ helm repo update # Make sure we get the latest list of charts\n$ helm repo add ali-stable    https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts  #阿里云\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("helm repo list\n\nNAME            URL                                                       \ningress-nginx   https://kubernetes.github.io/ingress-nginx                \nstable          https://kubernetes-charts.storage.googleapis.com/         \nbitnami         https://charts.bitnami.com/bitnami                        \nincubator       https://kubernetes-charts-incubator.storage.googleapis.com/\n")])])]),s("p",[e._v("4.配置权限")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("权限\nkubectl apply -f helm-rbac.yaml\n\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: tiller\n  namespace: kube-system\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: tiller\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n  - kind: ServiceAccount\n    name: tiller\n    namespace: kube-system\n")])])]),s("h3",{attrs:{id:"二、安装openebs创建storageclass持久化存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、安装openebs创建storageclass持久化存储"}},[e._v("#")]),e._v(" 二、安装openebs创建storageclass持久化存储")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/benjamin77/p/9944268.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("可移步大佬用nfs做持久化存储案例来了解持久化存储"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('kubectl get node -o wide\n去除污点\nkubectl describe node master | grep Taint\n去除master的污点\nkubectl taint nodes master node-role.kubernetes.io/master:NoSchedule-\n\n安装OpenEBS\nA:若集群已安装了 Helm，可通过 Helm 命令来安装 OpenEBS：\nkubectl create ns openebs\nhelm install --namespace openebs --name openebs stable/openebs --version 1.5.0\nB:除此之外 还可以通过 kubectl 命令安装：\nkubectl apply -f https://openebs.github.io/charts/openebs-operator-1.5.0.yaml\n\n验证\nkubectl get sc\n如下将 openebs-hostpath设置为 默认的 StorageClass\nkubectl patch storageclass openebs-hostpath -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n\n验证\nkubectl get sc\n')])])]),s("h3",{attrs:{id:"三、最小化安装kubesphere"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、最小化安装kubesphere"}},[e._v("#")]),e._v(" 三、最小化安装kubesphere")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://kubesphere.io/docs/quick-start/minimal-kubesphere-on-k8s/",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考官网"),s("OutboundLink")],1),e._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210520140416518.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTUwOTU4Mg==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),e._v("\n1.执行以下命令：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.1.0/kubesphere-installer.yaml\n   \nkubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.1.0/cluster-configuration.yaml\n")])])]),s("p",[e._v("2.检查安装日志：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f\n")])])]),s("p",[e._v("3.使用kubectl get pod --all-namespaces，看看是否所有的豆荚，在KubeSphere相关的命名空间运行正常。如果是，请30880通过以下命令检查控制台的端口（默认情况下）：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl get svc/ks-console -n kubesphere-system\n")])])]),s("p",[e._v("4.查看kubusphere组件")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("kubectl get pod -n kubesphere-monitoring-system\n")])])]),s("p",[e._v("5.登录kubesphere控制台")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Console: http://192.168.10.103:30880\nAccount: admin\nPassword: P@88w0rd\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021052014123986.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTUwOTU4Mg==,size_16,color_FFFFFF,t_70",alt:"请添加图片描述"}}),e._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210520141239698.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTUwOTU4Mg==,size_16,color_FFFFFF,t_70",alt:"请添加图片描述"}}),e._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210520141239688.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTUwOTU4Mg==,size_16,color_FFFFFF,t_70",alt:"请添加图片描述"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);