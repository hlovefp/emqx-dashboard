webpackJsonp([17],{RjBg:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("fZjL"),i=s.n(a),o=s("Dd8w"),n=s.n(o),l=s("zL8q"),r=s("NYxO"),c={name:"overview-view",components:{"el-select":l.Select,"el-option":l.Option,"el-table":l.Table,"el-table-column":l.TableColumn,"el-row":l.Row,"el-col":l.Col},data:function(){return{nodeName:"",brokers:{},nodes:[],stats:[],timer:0,metrics:{packets:[],messages:[],bytes:[]}}},methods:n()({},Object(r.b)(["CURRENT_NODE"]),{init:function(){var e=this;this.$httpGet("/nodes").then(function(t){e.nodeName=e.$store.state.nodeName||t.data[0].name,e.nodes=t.data,e.CURRENT_NODE(e.nodeName),e.refreshInterval()}).catch(function(t){e.$message.error(t||e.$t("error.networkError")),setTimeout(function(){e.init()},2e4)})},refreshInterval:function(){this.loadData(),clearInterval(this.timer),this.timer=setInterval(this.loadData,1e4)},loadData:function(){var e=this;this.CURRENT_NODE(this.nodeName),this.$httpGet("/nodes").then(function(t){e.nodes=t.data.sort(function(t,s){return t.name===e.nodeName?-1:t.uptime>s.uptime?-1:1})}),this.$httpGet("/stats").then(function(t){e.stats=t.data}),this.$httpGet("/brokers/"+this.nodeName).then(function(t){e.brokers=t.data}),this.$httpGet("/nodes/"+this.nodeName+"/metrics").then(function(t){e.metrics={packets:[],messages:[],bytes:[]};var s=n()({},t.data),a={packets:["received","sent","connect","connack","auth","disconnect/sent","disconnect/received","pingreq","pingresp","publish/received","publish/sent","puback/received","puback/sent","puback/missed","pubcomp/received","pubcomp/sent","pubcomp/missed","pubrec/received","pubrec/sent","pubrec/missed","pubrel/received","pubrel/sent","pubrel/missed","subscribe","suback","unsubscribe","unsuback"],messages:["received","sent","dropped","retained","qos0/received","qos0/sent","qos1/received","qos1/sent","qos2/received","qos2/expired","qos2/sent","qos2/dropped"],bytes:["received","sent"]};i()(a).forEach(function(i){a[i].forEach(function(a){var o=i+"/"+a;delete s[o],e.metrics[i].push({key:a,value:t.data[o]})})}),i()(s).forEach(function(t){var a=t.split("/")[0];e.metrics[a]&&e.metrics[a].push({key:t.split("/").slice(1).join("/"),value:s[t]})})})}}),created:function(){this.init()},beforeRouteLeave:function(e,t,s){clearInterval(this.timer),s()},beforeDestroy:function(){clearInterval(this.timer)}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"overview-view"},[s("div",{staticClass:"page-title"},[e._v("\n    "+e._s(e.$t("leftbar.overview"))+"\n    "),s("el-select",{staticClass:"select-radius",attrs:{placeholder:e.$t("select.placeholder")},on:{change:e.loadData},model:{value:e.nodeName,callback:function(t){e.nodeName=t},expression:"nodeName"}},e._l(e.nodes,function(e){return s("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1),e._v(" "),s("div",{staticClass:"card-box",staticStyle:{"margin-top":"54px"}},[s("div",{staticClass:"card-title"},[e._v(e._s(e.$t("overview.broker")))]),e._v(" "),s("el-row",{staticClass:"broker-card",attrs:{gutter:10}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"card-item"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-wendang"})]),e._v(" "),s("div",{staticClass:"desc"},[s("h3",[e._v(e._s(e.$t("overview.systemName")))]),e._v(" "),s("p",[e._v(e._s(e.brokers.sysdescr))])])])]),e._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"card-item"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-banben",staticStyle:{"font-weight":"600"}})]),e._v(" "),s("div",{staticClass:"desc"},[s("h3",[e._v(e._s(e.$t("overview.version")))]),e._v(" "),s("p",[e._v(e._s(e.brokers.version))])])])]),e._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"card-item"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-shalou"})]),e._v(" "),s("div",{staticClass:"desc"},[s("h3",[e._v(e._s(e.$t("overview.uptime")))]),e._v(" "),s("p",[e._v(e._s(e.brokers.uptime))])])])]),e._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"card-item"},[s("div",{staticClass:"icon",staticStyle:{"line-height":"46px"}},[s("i",{staticClass:"iconfont icon-zhongbiao",staticStyle:{"font-size":"36px","margin-left":"2px"}})]),e._v(" "),s("div",{staticClass:"desc"},[s("h3",[e._v(e._s(e.$t("overview.systemTime")))]),e._v(" "),s("p",[e._v(e._s(e.brokers.datetime))])])])])],1)],1),e._v(" "),s("div",{staticClass:"card-box"},[s("div",{staticClass:"card-title"},[e._v(e._s(e.$t("overview.nodes"))+"("+e._s(e.nodes.length)+")")]),e._v(" "),s("el-table",{attrs:{data:e.nodes,border:""}},[s("el-table-column",{attrs:{prop:"name","min-width":"200",label:e.$t("overview.name")}}),e._v(" "),s("el-table-column",{attrs:{prop:"otp_release","min-width":"200",label:e.$t("overview.erlangOTPRelease")}}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("overview.erlangProcesses")}},[s("el-table-column",{attrs:{"min-width":"150",prop:"process",label:"(used/avaliable)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.process_used+" / "+t.row.process_available)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{label:e.$t("overview.cpuInfo")}},[s("el-table-column",{attrs:{"min-width":"180",label:" (1load/5load/15load)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.load1+" / "+t.row.load5+" / "+t.row.load15)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{"min-width":"200",label:e.$t("overview.memoryInfo")}},[s("el-table-column",{attrs:{"min-width":"180",label:" (used/total)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.memory_used+" / "+t.row.memory_total)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{prop:"max_fds","min-width":"120",label:e.$t("overview.maxFds")}}),e._v(" "),s("el-table-column",{attrs:{"min-width":"120",label:e.$t("overview.status")},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{class:["Running"===t.row.node_status?"running":"stopped","status"]},[e._v("\n            "+e._s(t.row.node_status)+"\n          ")])]}}])})],1)],1),e._v(" "),s("div",{staticClass:"card-box"},[s("div",{staticClass:"card-title"},[e._v(e._s(e.$t("overview.stats"))+"("+e._s(e.stats.length)+")")]),e._v(" "),s("el-table",{attrs:{data:e.stats,border:""}},[s("el-table-column",{attrs:{prop:"node","min-width":"150",label:e.$t("overview.name")}}),e._v(" "),s("el-table-column",{attrs:{prop:"connections/count","min-width":"150",label:e.$t("overview.connectionsCount")}}),e._v(" "),s("el-table-column",{attrs:{prop:"connections/max","min-width":"150",label:e.$t("overview.connectionsMax")}}),e._v(" "),s("el-table-column",{attrs:{prop:"topics/count","min-width":"150",label:e.$t("overview.topicsCount")}}),e._v(" "),s("el-table-column",{attrs:{prop:"topics/max","min-width":"150",label:e.$t("overview.topicsMax")}}),e._v(" "),s("el-table-column",{attrs:{prop:"retained/count","min-width":"150",label:e.$t("overview.retainedCount")}}),e._v(" "),s("el-table-column",{attrs:{prop:"retained/max","min-width":"150",label:e.$t("overview.retainedMax")}}),e._v(" "),s("el-table-column",{attrs:{prop:"sessions/count","min-width":"150",label:e.$t("overview.sessionsCount")}}),e._v(" "),s("el-table-column",{attrs:{prop:"sessions/max","min-width":"150",label:e.$t("overview.sessionsMax")}}),e._v(" "),s("el-table-column",{attrs:{prop:"subscriptions/count","min-width":"160",label:e.$t("overview.subscriptionsCount")}}),e._v(" "),s("el-table-column",{attrs:{prop:"subscriptions/max","min-width":"160",label:e.$t("overview.subscriptionsMax")}}),e._v(" "),s("el-table-column",{attrs:{prop:"subscriptions/shared/count","min-width":"160",label:e.$t("overview.subscriptionsSharedCount")}}),e._v(" "),s("el-table-column",{attrs:{prop:"subscriptions/shared/max","min-width":"160",label:e.$t("overview.subscriptionsSharedMax")}})],1)],1),e._v(" "),s("div",{staticClass:"card-box"},[s("div",{staticClass:"card-title"},[e._v(e._s(e.$t("overview.metrics")))]),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-table",{attrs:{data:e.metrics.packets}},[s("el-table-column",{attrs:{"min-width":"200",prop:"key",label:e.$t("overview.packetsData")}}),e._v(" "),s("el-table-column",{attrs:{prop:"value",label:""}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8}},[s("el-table",{attrs:{data:e.metrics.messages}},[s("el-table-column",{attrs:{"min-width":"200",prop:"key",label:e.$t("overview.messagesData")}}),e._v(" "),s("el-table-column",{attrs:{prop:"value",label:""}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8}},[s("el-table",{attrs:{data:e.metrics.bytes}},[s("el-table-column",{attrs:{"min-width":"160",prop:"key",label:e.$t("overview.bytesData")}}),e._v(" "),s("el-table-column",{attrs:{prop:"value",label:""}})],1)],1)],1)],1)])},staticRenderFns:[]};var d=s("VU/8")(c,v,!1,function(e){s("Zbq4")},null,null);t.default=d.exports},Zbq4:function(e,t){}});