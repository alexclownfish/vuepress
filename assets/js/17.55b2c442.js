(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{545:function(e,n,a){"use strict";a.r(n);var s=a(8),r=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"安装docker18-06-1-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker18-06-1-ce"}},[e._v("#")]),e._v(" 安装docker18.06.1-ce")]),e._v(" "),a("h3",{attrs:{id:"_1-添加docker-ce-yum源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加docker-ce-yum源"}},[e._v("#")]),e._v(" 1.添加docker-ce yum源")]),e._v(" "),a("p",[e._v("安装扩展yum功能，以便使用yum-config-manager添加docker软件源信息")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install -y yum-utils\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),a("h3",{attrs:{id:"_2-查看当前可以安装docker-ce版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看当前可以安装docker-ce版本"}},[e._v("#")]),e._v(" 2.查看当前可以安装docker-ce版本")]),e._v(" "),a("p",[e._v("安装指定版本的格式 ,注意3:xxx 请移除3:    我这里使用docker-ce-18.06.1.ce-3.el7")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum list docker-ce --showduplicates | sort -r\nyum -y install docker-ce-[VERSION]   \nyum install -y docker-ce-18.06.1.ce-3.el7 \n")])])]),a("h3",{attrs:{id:"_3-启动测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动测试"}},[e._v("#")]),e._v(" 3.启动测试")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("systemctl start docker && systemctl enable docker\ndocker info\n\nContainers: 15\n Running: 12\n Paused: 0\n Stopped: 3\nImages: 26\nServer Version: 18.06.1-ce\nStorage Driver: overlay2\n Backing Filesystem: xfs\n Supports d_type: true\n Native Overlay Diff: true\nLogging Driver: json-file\nCgroup Driver: systemd\nPlugins:\n Volume: local\n Network: bridge host macvlan null overlay\n Log: awslogs fluentd gcplogs gelf journald json-file logentries splunk syslog\nSwarm: inactive\nRuntimes: runc\nDefault Runtime: runc\nInit Binary: docker-init\ncontainerd version: 468a545b9edcd5932818eb9de8e72413e616e86e\nrunc version: 69663f0bd4b60df09991c08812a60108003fa340\ninit version: fec3683\nSecurity Options:\n seccomp\n  Profile: default\nKernel Version: 3.10.0-693.el7.x86_64\nOperating System: CentOS Linux 7 (Core)\nOSType: linux\nArchitecture: x86_64\nCPUs: 2\nTotal Memory: 7.585GiB\nName: k8s-node3\nID: 5BLO:XOV2:EFX3:5SXB:M2JF:L6D7:TWGR:UQ6E:A56P:MXAZ:TTQR:R2DG\nDocker Root Dir: /var/lib/docker\nDebug Mode (client): false\nDebug Mode (server): false\nRegistry: https://index.docker.io/v1/\nLabels:\nExperimental: false\nInsecure Registries:\n 127.0.0.0/8\nLive Restore Enabled: false\n\nWARNING: bridge-nf-call-iptables is disabled\nWARNING: bridge-nf-call-ip6tables is disabled\n")])])]),a("h2",{attrs:{id:"安装docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-compose"}},[e._v("#")]),e._v(" 安装docker-compose")]),e._v(" "),a("h3",{attrs:{id:"_1-下载docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载docker-compose"}},[e._v("#")]),e._v(" 1.下载docker-compose")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose\n")])])]),a("h3",{attrs:{id:"_2-赋予docker-compose全局可执行权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-赋予docker-compose全局可执行权"}},[e._v("#")]),e._v(" 2.赋予docker-compose全局可执行权")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("chmod +x /usr/local/bin/docker-compose && ln -s /usr/local/bin/docker-compose /usr/bin/\ndocker-compose --version\n\ndocker-compose version 1.18.0, build 8dd22a9\n")])])]),a("h2",{attrs:{id:"docker-compose-java项目目录规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-java项目目录规划"}},[e._v("#")]),e._v(" docker-compose java项目目录规划")]),e._v(" "),a("h3",{attrs:{id:"_1-环境描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境描述"}},[e._v("#")]),e._v(" 1.环境描述")]),e._v(" "),a("ul",[a("li",[e._v("docker：18.06.1-ce")]),e._v(" "),a("li",[e._v("docker-comepose：1.18.0")]),e._v(" "),a("li",[e._v("vue 2 && npm 14.17.3")]),e._v(" "),a("li",[e._v("java1.8")])]),e._v(" "),a("h3",{attrs:{id:"_2-文件目录解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-文件目录解释"}},[e._v("#")]),e._v(" 2.文件目录解释")]),e._v(" "),a("ul",[a("li",[e._v("config目录：config目录内放项目运行所需要挂载进容器的配置文件及数据文件")]),e._v(" "),a("li",[e._v("import-base-image目录：docker save所保留下的tar归档基础镜像文件，例：java:8、mysql:8、nginx:1.21.3等，还有docker load镜像的脚本")]),e._v(" "),a("li",[e._v("java目录：每个java项目在java目录内单独一个目录，目录内放置jar包、Dockerfile、build.sh（打包镜像所用脚本）")]),e._v(" "),a("li",[e._v("docker-compose.yml ： 我所理解的docker-compose.yml跟k8s内的资源清单一样，就是docker-compose编排配置文件")]),e._v(" "),a("li",[e._v("build_java_image.sh：进入到所有java项目目录内，把jar包打入docker镜像内")])]),e._v(" "),a("h3",{attrs:{id:"_3-目录层级展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-目录层级展示"}},[e._v("#")]),e._v(" 3.目录层级展示")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/63449830/149712209-71e562da-2aba-465a-836b-e6910d7d8030.png",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"https://user-images.githubusercontent.com/63449830/149712340-11cb5f19-0f67-46f5-b0b2-45ff1bb0745c.png",alt:"image"}})]),e._v(" "),a("h2",{attrs:{id:"docker-compose常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose常用命令"}},[e._v("#")]),e._v(" docker-compose常用命令")]),e._v(" "),a("ul",[a("li",[e._v("docker-compose ps ：查看运行容器")]),e._v(" "),a("li",[e._v("docker-compose up -d ：后台启动容器 && 资源清单有变化镜像有更新可以更新")]),e._v(" "),a("li",[e._v("docker-compose down -v : 关闭，下线")])]),e._v(" "),a("h2",{attrs:{id:"docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[e._v("#")]),e._v(" docker-compose.yml")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('version: \'3\'\n\nnetworks:\n   data_security:\n      ipam:\n         config:\n         - subnet: 172.62.0.0/16            #自定义固定容器ip 实现容器间通讯，增强docker-compose项目可移植性\n\nservices:\n  mysql:\n    image: mysql:8.0.20\n    container_name: mysql\n    ports:\n      - 30306:3306\n    command:\n      --default-authentication-plugin=mysql_native_password\n      --character-set-server=utf8mb4\n      --collation-server=utf8mb4_general_ci\n      --explicit_defaults_for_timestamp=true\n      --lower_case_table_names=1\n    environment:\n      - TZ=Asia/Shanghai\n      - LANG=en_US.UTF-8\n      - MYSQL_ROOT_PASSWORD=xxxxxx\n    privileged: true\n    restart: always\n    volumes:\n      - ./config/mysql/conf/my.cnf:/etc/mysql/my.cnf\n      - ./config/mysql/logs:/var/log/mysql\n      - ./config/mysql/data:/var/lib/mysql\n      - ./config/mysql/init:/docker-entrypoint-initdb.d/\n      #- ./config/mysql/sql:/opt/sql              #初始化sql第一次启动mysql并导入数据可以将注释去掉，导完之后注释掉。\n    networks:\n      data_security:\n        ipv4_address: 172.62.0.5\n\n  gateway-service:\n    image: gateway-service:1.0    \n    container_name: gateway-service\n    expose:\n      - 8999\n    privileged: true\n    restart: always\n    environment:\n      - TZ=Asia/Shanghai\n      - LANG=en_US.UTF-8\n    networks:\n      data_security:\n        ipv4_address: 172.62.0.6\n\n  group-module:\n    image: group-module:1.0\n    container_name: group-module\n    expose:\n      - 8890\n    privileged: true\n    restart: always\n    volumes:\n      - ./java/xxl-job/:/opt/\n    environment:\n      - TZ=Asia/Shanghai\n      - LANG=en_US.UTF-8\n    networks:\n      data_security:\n        ipv4_address: 172.62.0.7\n\n  core4ct-module-system:\n    image: core4ct-module-system:1.0\n    container_name: core4ct-module-system\n    expose:\n      - 8080\n      - 30201\n    privileged: true\n    restart: always\n    environment:\n      - TZ=Asia/Shanghai\n      - LANG=en_US.UTF-8\n    networks:\n      data_security:\n        ipv4_address: 172.62.0.8\n\n  core4ct-gateway:\n    image: core4ct-gateway:1.0\n    container_name: core4ct-gateway\n    expose:\n      - 9000\n    privileged: true\n    restart: always\n    environment:\n      - TZ=Asia/Shanghai\n      - LANG=en_US.UTF-8\n    networks:\n      data_security:\n        ipv4_address: 172.62.0.9\n\n  #province-module:\n  #  image: province-module:1.0\n  #  container_name: province-module\n  #  expose:\n  #    - 8888\n  #  privileged: true\n  #  restart: always\n  #  environment:\n  #    - TZ=Asia/Shanghai\n  #    - LANG=en_US.UTF-8\n  #  networks:\n  #    data_security:\n  #      ipv4_address: 172.62.0.10\n\n  redis:\n    image: redis:latest\n    container_name: redis\n    hostname: redis\n    restart: always\n    ports:\n      - 6379:6379\n    volumes:\n      - ./config/redis/conf/redis.conf:/etc/redis/redis.conf   #挂载redis.conf不然后续重启redis密码会失效\n      - ./config/redis/data:/data\n    environment:\n      - TZ=Asia/Shanghai\n      - LANG=en_US.UTF-8\n    command: ["redis-server","/etc/redis/redis.conf"]          #指定配置文件启动redis\n    networks:\n      data_security:\n        ipv4_address: 172.62.0.13\n\n  xxl-job-admin:\n    image: xxl-job-admin:1.0\n    container_name: xxl-job-admin\n    ports:\n      - 30998:8998\n      #- 30988:9988\n    restart: always\n    environment:\n      - TZ=Asia/Shanghai\n      - LANG=en_US.UTF-8\n    networks:\n      data_security:\n        ipv4_address: 172.62.0.11\n\n  nginx:\n    image: nginx:1.21.3\n    container_name: nginx-group\n    ports:\n      - 30028:80\n    restart: always\n    volumes:\n      - ./config/nginx/:/etc/nginx/\n      - ./config/html/dist/:/usr/share/nginx/html/\n    environment:\n      - TZ=Asia/Shanghai\n      - LANG=en_US.UTF-8\n    networks:\n      data_security:\n        ipv4_address: 172.62.0.12\n\n#  nginx-province:\n#    image: province-frontend:1.20.1\n#    container_name: nginx-province\n#    ports:\n#      - 30029:443\n#    restart: always\n#    volumes:\n#      - ./config/nginx-province/:/etc/nginx/\n#      - ./config/html-province/dist/:/usr/share/nginx/html/\n#    environment:\n#      - TZ=Asia/Shanghai\n#      - LANG=en_US.UTF-8\n#    networks:\n#      data_security:\n#        ipv4_address: 172.62.0.22\n#\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);