/*! NutUI v1.2.7 Tue May 22 2018 14:50:35 GMT+0800 (中国标准时间) */
webpackJsonpnutui([78],{1050:function(t,e,n){var r=n(1145);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(3)("a63086ec",r,!0,{})},1145:function(t,e,n){(t.exports=n(2)()).push([t.i,".nut-luckycard{margin:20px auto}",""])},1241:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-demoheader",{attrs:{name:t.$route.name}}),t._v(" "),n("p",[t._v("默认用法")]),t._v(" "),n("nut-luckycard",{attrs:{content:"1000万"}}),t._v(" "),n("p",[t._v("刮开层和背景层都支持自定义颜色，奖品信息支持HTML")]),t._v(" "),n("nut-luckycard",{attrs:{coverColor:"#F9CC9D",backgroundColor:"#C3D08B",content:"<em>1000<em><strong>元</strong>"}}),t._v(" "),n("p",[t._v("刮开层支持图片")]),t._v(" "),n("nut-luckycard",{attrs:{content:"1000万",coverImg:t.coverImage}}),t._v(" "),n("p",[t._v("刮开面积超过设定比值（ratio）触发事件，可调用clearCover方法清除刮开层")]),t._v(" "),n("nut-luckycard",{attrs:{content:"再来一瓶",ratio:.3},on:{open:t.cardOpen}})],1)},staticRenderFns:[]}},811:function(t,e,n){var r=n(1)(n(904),n(1241),function(t){n(1050)},null,null);t.exports=r.exports},904:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{coverImage:"../asset/img/luckycard-demo.png"}},methods:{cardOpen:function(t){t.clearCover()}}}}});