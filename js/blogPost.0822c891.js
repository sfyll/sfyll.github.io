"use strict";(self["webpackChunksfyl_site"]=self["webpackChunksfyl_site"]||[]).push([[2],{90977:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"md:flex md:mt-24"},[e("section",{staticClass:"md:w-full mb-4"},[e("heading",{staticClass:"mb-2"},[t._v(" "+t._s(t.post.data.title)+" ")]),e("br"),t.post.data.published?e("span",{staticClass:"text-sm"},[t._v("(published "+t._s(t.convertIsoDate(t.post.data.published))+")")]):t._e()],1)]),e("div",{staticClass:"md:mt-8 text-left"},[e("div",{domProps:{innerHTML:t._s(t.post.data.body)}})])])},l=[],i=e(75313),n=e(78420),o={data(){return{post:{}}},methods:{convertIsoDate(t){return(0,i.Z)((0,n.Z)(t),"PP p")}},created(){this.$cms.post.retrieve(this.$route.params.post).then((t=>{this.post=t.data})).catch((t=>{console.log(t)}))}},d=o,r=e(43736),c=(0,r.Z)(d,a,l,!1,null,null,null),u=c.exports}}]);
//# sourceMappingURL=blogPost.0822c891.js.map