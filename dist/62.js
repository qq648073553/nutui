/*! NutUI v1.2.7 Tue May 22 2018 14:50:35 GMT+0800 (中国标准时间) */
webpackJsonpnutui([62],{1093:function(s,i,e){(s.exports=e(2)()).push([s.i,"#mySwiperDemo .nut-swiper-silde{color:#fff;font-size:24px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;background-color:gray}#mySwiperDemo .nut-swiper-silde:nth-child(2n){background-color:red}#mySwiperDemo .nut-swiper-silde:nth-child(odd){background-color:green}#mySwiperDemo #nutSwiperMore .nut-swiper-silde>div{height:70%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}#mySwiperDemo #nutSwiperLazyLoad .nut-swiper-silde>div,#mySwiperDemo #nutSwiperMore .nut-swiper-silde>div{background-color:#fff;width:30%;margin:0 1.6%;color:#333}#mySwiperDemo #nutSwiperLazyLoad .nut-swiper-silde>div img{max-width:100%}#mySwiperDemo #nutSwiperLazyLoad .nut-swiper-silde>div p{font-size:12px;line-height:18px;height:36px;overflow:hidden}#mySwiperDemo #nutSwiperFree .nut-swiper-silde{width:100px;font-size:12px;background-color:#ccc;margin-right:10px}#mySwiperDemo #fullScreen{height:600px}#mySwiperDemo #fullScreen .nut-swiper-silde{height:100%;width:100%}",""])},1188:function(s,i){s.exports={render:function(){var s=this,i=s.$createElement,e=s._self._c||i;return e("div",{attrs:{id:"mySwiperDemo"}},[e("nut-demoheader",{attrs:{name:s.$route.name}}),s._v(" "),e("p",[s._v("横向无缝切换")]),s._v(" "),e("nut-swiper",{ref:"demo1",attrs:{"pagination-visible":!0,direction:"horizontal"},on:{slideChangeEnd:s.slideChangeEnd}},s._l(s.dataItem,function(i){return e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page"+s._s(i.name))])])})),s._v(" "),e("p",[s._v("横向切换")]),s._v(" "),e("nut-swiper",{attrs:{"pagination-visible":!0,performanceMode:!0,direction:"horizontal"}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 1")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 2")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 3")])])]),s._v(" "),e("p",[s._v("横向循环切换")]),s._v(" "),e("nut-swiper",{attrs:{"pagination-visible":!0,loop:!0,direction:"horizontal"},on:{slideChangeEnd:s.slideChangeEnd,slideChangeStart:s.slideChangeStart}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 1")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 2")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 3")])])]),s._v(" "),e("p",[s._v("竖向循环切换")]),s._v(" "),e("nut-swiper",{attrs:{"pagination-visible":!1,autoPlay:5e3,direction:"vertical"}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 1")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 2")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 3")])])]),s._v(" "),e("p",[s._v("竖向切换")]),s._v(" "),e("nut-swiper",{attrs:{id:"fullScreen","pagination-visible":!1,performanceMode:!0,direction:"vertical"},on:{slideChangeEnd:s.slideChangeEnd,slideChangeStart:s.slideChangeStart}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 1"+s._s(this.move))])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 2"+s._s(this.move))])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 3"+s._s(this.move))])])]),s._v(" "),e("p",[s._v("多层切换")]),s._v(" "),e("nut-swiper",{attrs:{"pagination-visible":!0,direction:"horizontal",id:"nutSwiperMore"}},[e("div",{staticClass:"nut-swiper-silde"},[e("div",[s._v("page 1")]),s._v(" "),e("div",[s._v("page 2")]),s._v(" "),e("div",[s._v("page 3")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("div",[s._v("page 4")]),s._v(" "),e("div",[s._v("page 5")]),s._v(" "),e("div",[s._v("page 6")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("div",[s._v("page 7")]),s._v(" "),e("div",[s._v("page 8")]),s._v(" "),e("div",[s._v("page 9")])])]),s._v(" "),e("p",[s._v("lazyLoad切换")]),s._v(" "),e("nut-swiper",{attrs:{"pagination-visible":!1,direction:"horizontal",id:"nutSwiperLazyLoad",lazyLoad:!0,lazyLoadingUrl:"//static.360buyimg.com/exploit/mplus/2.1.81/css/i/loading.gif",lazyLoaderrorUrl:""}},[e("div",{staticClass:"nut-swiper-silde"},[e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t2029/269/1342378600/94347/c088416b/56581d53Ne97b6442.jpg"}}),s._v(" "),e("p",[s._v("牙膏牙膏吃牙膏")])]),s._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t5944/284/7637282290/291307/34ae9129/597ed721N4d9a0e73.jpg"}}),s._v(" "),e("p",[s._v("纯正白砂糖，味甜")])]),s._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t9604/129/1427755970/357543/ba77f0be/59e071fcN4a3e077d.jpg"}}),s._v(" "),e("p",[s._v("妙洁 保鲜袋背心型食品袋中号200只装 可提携易打结")])])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t3826/185/3277282028/320781/8fbf1015/587c2fcaNc3741a59.jpg"}}),s._v(" "),e("p",[s._v("全棉灭菌免换洗")])]),s._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t6028/28/1573357626/422743/9b98f679/5934c6c9N03afe631.jpg"}}),s._v(" "),e("p",[s._v("锁定厨房油污0")])]),s._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t4792/130/2443359129/122816/5f47cbd2/58ff20ecN49be8a01.jpg"}}),s._v(" "),e("p",[s._v("训练宝宝咀嚼力")])])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t13924/18/765396019/118800/71bda7ea/5a13878fN35292d9b.jpg"}}),s._v(" "),e("p",[s._v("得力(deli)S01黑色0.5mm经典办公按动中性笔水性笔子弹头签字笔 12支/盒")])]),s._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t4231/114/1373063995/311341/1feeaaad/58c1000cN5c448e8d.jpg"}}),s._v(" "),e("p",[s._v("台湾蛋黄味糙米卷")])]),s._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t2005/197/1846980340/247407/fcdbd278/56e0ceffN1d106bdb.jpg"}}),s._v(" "),e("p",[s._v("柔韧耐用，保鲜安全")])])])]),s._v(" "),e("p",[s._v("freeMode 不自动贴合")]),s._v(" "),e("nut-swiper",{attrs:{direction:"horizontal",freeMode:!0,id:"nutSwiperFree"}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 1")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 2")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 3")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 4")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 5")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 6")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 1")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 2")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 3")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 4")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 5")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 6")])])]),s._v(" "),e("p",[s._v("类似日历、地址，滚动范围超过一个silde 应该停留在当前手指停的地方，而不是只滚动一屏")]),s._v(" "),e("nut-swiper",{attrs:{direction:"horizontal",id:"nutSwiperFree",type:"multiple"}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 1")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 2")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 3")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 4")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 5")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 6")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 1")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 2")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 3")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 4")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 5")])]),s._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[s._v("page 6")])])])],1)},staticRenderFns:[]}},827:function(s,i,e){var a=e(1)(e(920),e(1188),function(s){e(998)},null,null);s.exports=a.exports},920:function(s,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{dataItem:null,move:1}},methods:{slideChangeStart:function(s,i,e){console.log(e)},slideChangeEnd:function(s,i){console.log(s)}},mounted:function(){var s=this;setTimeout(function(){s.dataItem=[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}],s.$refs.demo1.updateSlidesBindEvent(2)},300)}}},998:function(s,i,e){var a=e(1093);"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);e(3)("4b27f768",a,!0,{})}});