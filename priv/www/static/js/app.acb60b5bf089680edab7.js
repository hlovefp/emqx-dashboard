webpackJsonp([14],{0:function(e,t,n){n("j1ja"),e.exports=n("NHnr")},"7TWk":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("fZjL"),o=n.n(s),r=n("7+uW"),i=n("9JMe"),a=n("TXmL"),c=n("zL8q"),u=n.n(c),p=n("urW8"),d=n.n(p),l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var m,g,f=n("VU/8")({name:"App"},l,!1,function(e){n("rBGa")},null,null).exports,h=n("/ocq"),b=n("bOdI"),S=n.n(b),w=n("mvHQ"),C=n.n(w),I=n("NYxO");function v(e){try{return JSON.parse(e)}catch(e){return null}}r.default.use(I.a);var A={loading:!1,user:v(sessionStorage.getItem("user"))||v(localStorage.getItem("user"))||{},nodeName:""},N=(m={},S()(m,"USER_LOGIN",function(e,t){var n=e.commit;if(t.isLogOut)return sessionStorage.removeItem("user"),localStorage.removeItem("user"),void n("USER_LOGIN",t);t.remember?localStorage.setItem("user",C()(t.user)):sessionStorage.setItem("user",C()(t.user)),n("USER_LOGIN",t)}),S()(m,"CURRENT_NODE",function(e,t){(0,e.commit)("CURRENT_NODE",t)}),S()(m,"LOADING",function(e){(0,e.commit)("LOADING",arguments.length>1&&void 0!==arguments[1]&&arguments[1])}),m),T=(g={},S()(g,"USER_LOGIN",function(e,t){t.isLogOut?r.default.set(e,"user",{}):r.default.set(e,"user",t.user)}),S()(g,"CURRENT_NODE",function(e,t){r.default.set(e,"nodeName",t)}),S()(g,"LOADING",function(e,t){e.loading=t}),g),y=new I.a.Store({strict:!1,state:A,actions:N,mutations:T});r.default.use(h.a);var k=[{path:"/login",component:function(){return n.e(9).then(n.bind(null,"lmfZ"))},meta:{requiresAuth:!1}},{path:"/",component:function(){return n.e(3).then(n.bind(null,"lO7g"))},children:[{path:"",component:function(){return n.e(6).then(n.bind(null,"RjBg"))}},{path:"/connections",component:function(){return n.e(0).then(n.bind(null,"zXyA"))}},{path:"/sessions",component:function(){return n.e(0).then(n.bind(null,"zXyA"))}},{path:"/topics",component:function(){return n.e(0).then(n.bind(null,"zXyA"))}},{path:"/subscriptions",component:function(){return n.e(0).then(n.bind(null,"zXyA"))}},{path:"/plugins",component:function(){return n.e(2).then(n.bind(null,"GIGO"))}},{path:"/plugins/:nodeName/:pluginName",component:function(){return n.e(4).then(n.bind(null,"f35c"))}},{path:"/listeners",component:function(){return n.e(5).then(n.bind(null,"uuOo"))}},{path:"/websocket",component:function(){return n.e(1).then(n.bind(null,"EzHP"))}},{path:"/http_api",component:function(){return n.e(10).then(n.bind(null,"qB/b"))}},{path:"/applications",component:function(){return n.e(8).then(n.bind(null,"Tk0c"))}},{path:"/users",component:function(){return n.e(11).then(n.bind(null,"QSR2"))}},{path:"/settings",component:function(){return n.e(12).then(n.bind(null,"VKKr"))}}]},{path:"*",meta:{requiresAuth:!1},component:function(){return n.e(7).then(n.bind(null,"wkqA"))}}],P=new h.a({routes:k});P.beforeEach(function(e,t,n){var s=e.meta.requiresAuth;void 0===s||s?y.state.user.password?(document.body.scrollTop=0,document.documentElement.scrollTop=0,n()):n({path:"/login",query:{redirect:e.fullPath}}):n()});var D=P,O=(n("7TWk"),n("Dd8w")),M=n.n(O),x=n("wUZ8"),R=n.n(x),E=M()({},R.a,{select:{cluster:"All Nodes",placeholder:"Select Node"},error:{networkError:"Network Error",initializationError:"Initialization Error"},success:{createSuccess:"Create Success"},oper:{confirmDelete:"Confirm Delete ?",confirmStop:"Confirm Stop?",cancel:"Cancel",confirm:"Confirm",delete:"Delete",oper:"Oper",edit:"Edit",save:"Save",create:"Create",view:"View",editSuccess:"Edit success",startSuccess:"Start Success",stopSuccess:"Stop Success",deleteSuccess:"Delete Success",from:"From",stop:"Stop",start:"Start",notice:"Notice"},leftbar:{monitoring:"MONITORING",overview:"Overview",connections:"Connections",sessions:"Sessions",topics:"Topics",subscriptions:"Subscriptions",management:"MANAGEMENT",plugins:"Plugins",listeners:"Listeners",instances:"Instances",tools:"TOOLS",websocket:"Websocket",api:"HTTP API",applications:"Applications",admin:"ADMIN",users:"Users",settings:"Settings"},overview:{broker:"Broker",erlangOTPRelease:"Erlang/OTP Release",systemName:"System Name",version:"Version",uptime:"Uptime",systemTime:"System Time",nodes:"Nodes",name:"Name",erlangProcesses:"Erlang Processes",cpuInfo:"CPU Info",memoryInfo:"Memory Info",maxFds:"MaxFds",status:"Status",stats:"Stats",topicsCount:"Topics/Count",topicsMax:"Topics/Max",connectionsCount:"Connections/Count",connectionsMax:"Connections/Max",retainedCount:"Retained/Count",retainedMax:"Retained/Max",sessionsCount:"Sessions/Count",sessionsMax:"Sessions/Max",subscribersCount:"Subscribers/Count",subscribersMax:"subscribers/Max",subscriptionsCount:"Subscription/Count",subscriptionsMax:"Subscription/Max",subscriptionsSharedCount:"Subscriptions Shared/Count",subscriptionsSharedMax:"Subscriptions Shared/Max",metrics:"Metrics",packetsData:"The packets data",messagesData:"The messages data",bytesData:"The bytes data"},connections:{node:"Node",clientId:"ClientId",username:"Username",ipAddr:"IPAddr",port:"Port",cleanStart:"CleanStart",protoVer:"ProtoVer",keepalive:"Keepalive(s)",connectedAt:"ConnectedAt",back:"Back"},sessions:{clientId:"ClientId",cleanStart:"CleanStart",subscriptionsCount:"Subscriptions/Count",expiryInterval:"Expiry Interval",maxInflight:"MaxInflight",inflightLen:"Inflight Len",mqueueLen:"MqueueLen",mqueueDropped:"MqueueDropped",awaitingRelLen:"AwaitingRelLen",deliverMsg:"DeliverMsg",enqueueMsg:"EnqueueMsg",createdAt:"CreatedAt"},topics:{topic:"Topic",node:"Node"},subscriptions:{clientId:"ClientId",topic:"Topic",qoS:"QoS"},plugins:{name:"Name",version:"Version",description:"Description",status:"Status",stopped:"Stopped",running:"Running",oper:"Oper",start:"Start",stop:"Stop",config:"Config",back:"Back",advancedConfig:"Advanced Config",add:"Add",configSuccess:"Config success",configFailure:"Config failure",notice:"Are you sure you want to submit changes and apply them ?",giveUpNotice:"Are you sure you want to give up the change and exit?",noticeTitle:"Notice",cacheNotice:"You have given up this change",emptyConfigOption:"No Default Configuration"},instances:{instances:"Instances",back:"Back",info:"Basic Info",name:"instance name",descr:"description",service:"service",configInfo:"Config Options",initConfig:"Init config or ",remarkConfig:"description is required",createInstance:"Create Instance",selectServiceType:"Instance Type",all:"All",running:"Running",stopped:"Stopped",auth:"Auth",backend:"Backend",hook:"hook",bridge:"Bridge",other:"Other",select:"Select",selected:"Selected",nextStep:"Next",authDesc:"Provide login authentication and publish subscribe ACL service.",backendDesc:"Provide message persistence to database services.",bridgeDesc:"Bridging a message flow into a message middleware data source.",hookDesc:"A service that uses the trigger callback mechanism to respond to the operation.",otherDesc:"The system runs information and other services."},listeners:{protocol:"Protocol",listenOn:"Listen On",maxConnections:"Max Connections",currentConnections:"Current Connections"},websocket:{connect:"Connect",host:"Host",port:"Port",clientID:"Client ID",username:"Username",password:"Password",keepAlive:"Keep Alive",cleanSession:"Clean Session",disconnect:"Disconnect",currentState:"Current State",subscribe:"Subscribe",topic:"Topic",qoS:"QoS",date:"Date",oper:"Oper",messages:"Messages",retained:"Retained",send:"send",messagesAlreadySent:"Messages already sent",messagesReceived:"Messages received",time:"Time",connectError:"Message send error",connectFailure:"Connect failed on",connectLeave:"The client does not connect to the broker",subscribeSuccess:"Subscribe success",subscribeFailure:"Subscribe failure",unsubscribeFailure:"Unsubscribe Failure",messageSendOut:"Message send out",connected:"CONNECTED",connecting:"CONNECTING",disconnected:"DISCONNECTED",notSupport:"Your browser doesn't support WebSocket"},httpApi:{introduction:"Introduction",desc:"Apart from this help page, all URIs will serve only resources of type application/json, and will require HTTP basic authentication. The default user is admin / public.\n<br/>The emqx_dashboard plugin provides a web management console. The Dashboard helps monitor broker's running status, statistics and metrics of MQTT packets.",reference:"Reference",method:"Method",path:"Path",description:"Description",back:"Back",linkAddress:"Request address",data:"Response data"},app:{appId:"AppID",secret:"AppSecret",newApp:"New App",viewApp:"View App",editApp:"Edit App",create:"Create",errors:"Option Required",name:"AppName",desc:"Remark",expired:"Expired date",status:"Status",enable:"Allowed",disable:"Denied",enableText:"Access allowed",disableText:"Access barred",expiredText:"Never expired",guide:"Application for authentication of EMQ X Management API (REST API)",docs:"Documentation"},users:{newUser:"New User",editUser:"Edit User",username:"Username",remark:"Remark",password:"Password",confirmPassword:"Confirm Password",oldPassword:"Old Password",newPassword:"New Password",confirmNewPassword:"Confirm New Password",changePassword:"Change Password",dontChangePassword:"Don't Change Password",confirm:"Confirm",confirmDelete:"Confirm Delete ?",usernameRequired:"Username required",remarkRequired:"Remark required",usernameIllegal:"Username length: 3~32",passwordRequired:"Password required",newPasswordRequired:"new password required",passwordInconsistent:"Password is inconsistent",authenticate:"You have changed your password. Please re authenticate",createUser:"Create user success",passwordIllegal:"Password length: 3~255"},alert:{required:"required",success:" success",failure:" failure",connect:"Connect"},login:{title:"LOG IN",username:"Username",password:"Password",remember:"Remember",loginButton:"Log In",error:"Username Or Password Error",usernameRequired:"Username Required",passwordRequired:"Password Required"},settings:{themes:"Themes",language:"Language",apply:"Apply",success:"Apply success"},config:{importConfig:"Import",selectConfigFile:"Select a config file",configFileMustBeJson:"Config file must be JSON",createBy:"Create by",create:"",createUser:"owner",nodeName:"node name",host:"host",descr:"description",createAt:"createAt",more:"more",reSelect:"Select another",not_a_valid_config_file:"Not a valid config file",payload_error:"Config option is empty",import_file_error:"Import failure",exportConfig:"Export",ex:"Export",atLeastThree:"At least three words",importSuccess:"Import success",notice:"Use backup configuration files to configure initialization modification. <br/> Notice: configuration files may contain important data, such as database address and authentication information. Please keep good configuration files and use backup function reasonably."}}),q=n("Vi3T"),L=n.n(q),U={en:E,zh:M()({},L.a,{select:{cluster:"全部节点",placeholder:"请选择"},error:{networkError:"网络错误",initializationError:"初始化错误"},success:{createSuccess:"Create Success"},oper:{confirmDelete:"确认删除该项?",confirmStop:"确认停止?",confirm:"确认",cancel:"取消",delete:"删除",oper:"操作",edit:"编辑",save:"保存",create:"创建",view:"查看",editSuccess:"编辑成功",startSuccess:"启动成功",stopSuccess:"停止成功",deleteSuccess:"删除成功",from:"从",stop:"停止",start:"启动",notice:"注意"},leftbar:{monitoring:"监控",overview:"控制台",connections:"连接",sessions:"会话",topics:"主题",subscriptions:"订阅",management:"管理",plugins:"插件",listeners:"监听器",instances:"服务",tools:"工具",websocket:"Websocket",api:"HTTP接口",applications:"应用",admin:"系统",users:"用户",settings:"设置"},overview:{broker:"系统信息",systemName:"名称",version:"版本",uptime:"运行时间",systemTime:"系统时间",nodes:"节点信息",name:"节点名称",erlangOTPRelease:"Erlang/OTP 版本",erlangProcesses:"Erlang进程",cpuInfo:"CPU",memoryInfo:"内存",maxFds:"最大文件句柄数",status:"状态",stats:"运行统计",topicsCount:"主题数",topicsMax:"主题峰值",connectionsCount:"连接数",connectionsMax:"连接峰值",retainedCount:"保留消息数",retainedMax:"最大保留消息数",sessionsCount:"会话数",sessionsMax:"会话峰值",subscribersCount:"订阅数",subscribersMax:"订阅峰值",subscriptionsCount:"订阅数",subscriptionsMax:"订阅峰值",subscriptionsSharedCount:"共享订阅数",subscriptionsSharedMax:"共享订阅峰值",metrics:"度量指标",packetsData:"MQTT报文",messagesData:"消息(数)",bytesData:"流量收发统计(字节)"},connections:{node:"节点",clientId:"客户端ID",username:"用户名",ipAddr:"IP地址",port:"端口",cleanStart:"清除会话",protoVer:"协议版本",keepalive:"心跳(秒)",connectedAt:"连接时间",back:"返回"},sessions:{clientId:"客户端ID",cleanStart:"清除会话",subscriptionsCount:"订阅数",expiryInterval:"ExpiryInterval",maxInflight:"最大拥塞",inflightLen:"当前拥塞",mqueueLen:"当前缓存消息",mqueueDropped:"丢弃消息",awaitingRelLen:"等待释放",deliverMsg:"投递消息",enqueueMsg:"入队消息",createdAt:"创建时间"},topics:{topic:"主题",node:"节点"},subscriptions:{clientId:"客户端ID",topic:"主题",qoS:"服务质量"},plugins:{name:"插件名称",version:"版本",description:"描述",status:"状态",stopped:"已停止",running:"运行中",start:"启动",stop:"停止",config:"配置",back:"返回",advancedConfig:"高级配置",add:"新增",configSuccess:"配置成功",configFailure:"配置失败",notice:"你确定提交这些配置吗？重启插件后生效",giveUpNotice:"你确定放弃应用已更改的配置吗？",noticeTitle:"注意",cacheNotice:"已放弃操作",emptyConfigOption:"默认配置项为空"},instances:{instances:"服务",back:"返回",info:"基本信息",name:"实例名称",descr:"备注信息",service:"所属服务",configInfo:"配置信息",initConfig:"初始化配置或",remarkConfig:"请输入备注信息",createInstance:"新建服务",selectServiceType:"选择实例类型",all:"全部",running:"运行中",stopped:"已停止",auth:"认证",backend:"持久化",hook:"回调钩子",bridge:"数据桥接",other:"其他",select:"选择",selected:"已选择",nextStep:"下一步",authDesc:"提供登录认证与发布订阅 ACL 服务。",backendDesc:"提供消息持久化到数据库服务。",bridgeDesc:"提供将消息流桥接为消息中间件数据源服务。",hookDesc:"使用触发回调机制响应操作的服务。",otherDesc:"系统运行信息等其他服务。"},listeners:{protocol:"协议",listenOn:"监听地址",maxConnections:"最大连接数",currentConnections:"当前连接数"},websocket:{connect:"连接",host:"主机地址",port:"端口",clientID:"客户端ID",username:"用户名",password:"密码",keepAlive:"心跳(秒)",cleanSession:"清除会话",disconnect:"断开连接",currentState:"当前状态",subscribe:"订阅",topic:"主题",qoS:"服务质量",date:"订阅时间",oper:"操作",messages:"消息",retained:"保留",send:"发送",messagesAlreadySent:"发布消息列表",messagesReceived:"订阅消息列表",time:"时间",connectError:"消息发送错误",connectFailure:"连接失败",connectLeave:"尚未连接到服务器",subscribeSuccess:"订阅成功",subscribeFailure:"订阅失败",messageSendOut:"消息已发出",connected:"已连接",connecting:"正在连接",disconnected:"未连接",notSupport:"你的浏览器暂不支持WebSocket"},httpApi:{introduction:"说明",desc:"除了帮助页面，所有URI返回application/json格式的的资源，每个请求都需要HTTP基本认证。默认用户是admin / public。<br/>emqx_dashboard插件提供了一个Web管理控制台, 用于监控服务器的运行状态，数据统计和MQTT包计数监控。",reference:"参考",method:"请求方法",path:"路径",description:"描述",back:"返回",linkAddress:"请求地址",data:"响应数据"},app:{appId:"AppID",secret:"App密钥",newApp:"新建APP",viewApp:"查看App",editApp:" 编辑App",errors:"该项为必填项",name:"App名称",desc:"备注",expired:"到期日期",status:"状态",enable:"允许访问",disable:"拒绝访问",enableText:"允许访问",disableText:"拒绝访问",expiredText:"永不过期",guide:"应用用于 EMQ X 管理监控 API (REST API) 连接认证，详见",docs:"文档"},users:{newUser:"新建用户",editUser:"编辑用户",username:"用户名",remark:"备注",password:"密码",confirmPassword:"确认密码",oldPassword:"旧密码",newPassword:"新密码",confirmNewPassword:"确认新密码",changePassword:"修改密码",dontChangePassword:"不修改密码",usernameRequired:"请填写用户名",remarkRequired:"请填写备注",usernameIllegal:"用户名长度: 3~32",passwordRequired:"请填写密码",newPasswordRequired:"请填写新密码",passwordInconsistent:"密码不一致",authenticate:"你已成功修改已登录用户密码，请重新登录",createUser:"新建用户成功",passwordIllegal:"密码长度: 3~255"},alert:{required:"字段是必填项",success:"成功",failure:"失败",connect:"连接"},login:{title:"登 录",username:"用户名",password:"密码",remember:"记住",loginButton:"登 录",error:"用户名或密码错误",usernameRequired:"请填写用户名",passwordRequired:"请填写密码"},settings:{themes:"样式主题",language:"系统语言",apply:"应 用",success:"修改成功"},config:{importConfig:"导入配置",selectConfigFile:"选择配置文件",configFileMustBeJson:"请确保备份文件为正常 JSON 格式",createBy:"由",create:"创建",createUser:"创建用户",nodeName:"节点名称",host:"主机地址",descr:"备注信息",createAt:"创建时间",more:"更多信息",reSelect:"重新选择",not_a_valid_config_file:"不是合法的配置文件",payload_error:"无效的内容",import_file_error:"导入文件出错",exportConfig:"导出配置",ex:"导出",atLeastThree:"至少3个字符",importSuccess:"导入成功",notice:"使用备份的配置文件进行配置初始化/修改。<br/>注意: 配置文件可能包含有重要数据如数据库地址与认证信息，请妥善保管配置文件并合理使用备份功能。"}})},_=n("//Fk"),G=n.n(_),F=n("woOf"),B=n.n(F),H=n("mtWM"),z=n.n(H),V=n("Y81h"),j=n.n(V);n("UVIz");j.a.configure({showSpinner:!1}),B()(z.a.defaults,{headers:{"Content-Type":"application/json","Cache-Control":"no-cache"},baseURL:"/api/v3",timeout:1e4});var Q=0;z.a.interceptors.request.use(function(e){return y.state.user.username?e.auth={username:y.state.user.username,password:y.state.user.password}:D.push({path:"/login",query:{to:D.fullPath}}),j.a.start(),Q=setTimeout(function(){y.dispatch("LOADING",!0)},100),e},function(e){console.warn("Request Error: ",e),y.dispatch("LOADING",!1)}),z.a.interceptors.response.use(function(e){return j.a.done(),clearTimeout(Q),Q=0,y.dispatch("LOADING",!1),e},function(e){j.a.done(),clearTimeout(Q),y.dispatch("LOADING",!1);var t=e.response&&e.response.status;return e.response&&e.response.data.message&&(e.message=e.response.data.message),401===t?(y.dispatch("USER_LOGIN",{isLogOut:!0}),D.push({path:"/login",query:{to:D.fullPath}})):404===t&&(e.message="URL Not Found"),401!==t&&c.Message.error(e.message),G.a.reject(e.message)});var W=z.a,J=n("VOAv"),$=n("CqLJ"),X=n.n($),Y={dateFormat:function(e){return e?10===e.toString().length?X()(1e3*e,"yyyy-mm-dd HH:MM:ss"):X()(e,"yyyy-mm-dd HH:MM:ss"):""}};r.default.config.productionTip=!1,r.default.use(a.a),r.default.use(u.a),r.default.prototype.$ELEMENT={size:"medium"},r.default.use(function(e){e.prototype.$httpGet=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t._=Date.now(),W.get(e,{params:t})},e.prototype.$httpPost=W.post,e.prototype.$httpPut=W.put,e.prototype.$httpDelete=W.delete,e.prototype.$axios=W,e.prototype.$env=window.EMQ_DASHBOARD_CONFIG||{}}),o()(Y).forEach(function(e){r.default.filter(e,Y[e])});var K=new a.a({locale:window.localStorage.language||window.EMQ_DASHBOARD_CONFIG.lang||"en",messages:U});d.a.i18n(function(e,t){return K.t(e,t)}),Object(J.a)(),Object(i.sync)(y,D),new r.default({el:"#app",router:D,store:y,i18n:K,components:{App:f},template:"<App/>"})},UVIz:function(e,t){},VOAv:function(e,t,n){"use strict";function s(e){e=["dark-themes","light-themes"].includes(e)?e:"dark-themes",document.querySelector("html").setAttribute("class",e)}function o(){s(localStorage.getItem("themes")||"dark-themes")}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s})},rBGa:function(e,t){}},[0]);