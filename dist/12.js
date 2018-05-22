/*! NutUI v1.2.7 Tue May 22 2018 14:50:35 GMT+0800 (中国标准时间) */
webpackJsonpnutui([12],{1068:function(t,e,n){var r=n(1163);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(3)("7b241d88",r,!0,{})},1163:function(t,e,n){(t.exports=n(2)()).push([t.i,"",""])},1259:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"倒计时组件。",showQrCode:!0}}),t._v(" "),n("h5",[t._v("示例")]),t._v(" "),n("nut-timer",{attrs:{timespacer:6e9},on:{"end-timer":t.endTimer}}),t._v(" "),n("nut-codebox",{attrs:{code:t.demo}}),t._v(" "),n("nut-codebox",{attrs:{code:"export default {\n    methods:{\n      endTimer() {\n        console.log('倒计时结束了！');\n      }\n    }\n}"}}),t._v(" "),n("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("可选值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("timespacer")]),t._v(" "),n("td",[t._v("需要倒计时的毫秒数")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v("--")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("end-timer")]),t._v(" "),n("td",[t._v("倒计时结束时触发")]),t._v(" "),n("td",[t._v("--")])])])])])}]}},878:function(t,e,n){var r=n(1)(n(974),n(1259),function(t){n(1068)},null,null);t.exports=r.exports},974:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo:'<nut-timer \n:timespacer="6000000000" \n@end-timer="endTimer"\n></nut-timer>'}},methods:{endTimer:function(){console.log("倒计时结束了！")}}}}});