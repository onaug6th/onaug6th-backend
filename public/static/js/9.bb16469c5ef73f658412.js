webpackJsonp([9],{QZg2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("LGSi"),n=i("2oyB"),o=i("SlfL"),s=i("jOTz"),l={name:"articleTypeManage",components:{superOperate:a.a,superTable:n.a,superModal:o.a},data:function(){return{tableConfig:{},operateConfig:{},modalConfig:{}}},mounted:function(){this.setTableConfig(),this.setOperateConfig(),this.setModalConfig(),this.getArticleTypeList()},computed:{},methods:{setTableConfig:function(){var t=this;this.$createElement;this.tableConfig={checkbox:!0,clickToSelect:!0,colOption:[{field:"id",label:"文章分类ID"},{field:"name",label:"文章分类名称"},{field:"operate",label:"操作",jsxRender:function(e,i){return e("div",null,[e("button",{class:"btn btn-primary",on:{click:function(){t.openModal(i.row,"edit")}}},["编辑"])])}}],data:[]}},setOperateConfig:function(){this.operateConfig={list:[{type:"button",text:"新增分类",events:{onClick:{fn:this.openModal,params:["add"]}}},{type:"dropdown",text:"删除操作",list:[{text:"删除分类",events:{onClick:{fn:this.deleteType,params:[this.tableConfig]}}}]}]}},setModalConfig:function(){this.modalConfig={title:"添加分类",backdrop:"static",form:{config:[{labelText:"分类名称",field:"name",type:"text"}],data:{name:""}},footer:{textalign:"center",btnList:[{id:"add",show:!0,type:"primary",text:"新增",events:{onClick:{fn:this.commonHandle,params:["add"]}}},{id:"edit",show:!0,type:"primary",text:"修改",events:{onClick:{fn:this.commonHandle,params:["edit"]}}}]},show:!1}},openModal:function(t,e){var i=this.modalConfig,a=i.footer;if("edit"==e)for(var n in t)i.form.data[n]=t[n];else for(var o in i.form.data)i.form.data[o]="";a.btnList.forEach(function(t,i){t.id==e?t.show=!0:t.show=!1}),i.show=!0},commonHandle:function(t,e){var i=this,a=t.form.data,n="post",o="articleType";"edit"==e&&(n="put",o+="/"+a.id),i.$http[n](o,a).then(function(e){i.$swal(e.detailMsg,"","success"),t.show=!1,i.getArticleTypeList()})},getArticleTypeList:function(){var t=this;Object(s.a)().then(function(e){t.tableConfig.data=e.data.rows})},deleteType:function(t){var e=this,i=this.$refs.superTable.checkedData.map(function(t,e){return t.id});this.$http.delete("articleType",{data:{arr:i}}).then(function(t){e.$swal("删除文章分类成功","","success"),e.getArticleTypeList()})}}},r=i("XyMi");var c=function(t){i("x3w8")},d=Object(r.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",{staticClass:"alert top-alert"},[t._v("管理你的文章分类，蠢货"),i("br"),t._v(" "),i("font",{attrs:{size:"1"}},[t._v("货蠢，类分章文的你理管")])],1),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12"},[i("div",{staticClass:"portlet"},[t._m(0),t._v(" "),i("div",[i("superOperate",{attrs:{config:t.operateConfig}}),t._v(" "),i("superTable",{ref:"superTable",attrs:{config:t.tableConfig}})],1)])])]),t._v(" "),i("superModal",{attrs:{config:t.modalConfig}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"portlet-title"},[e("div",{staticClass:"caption",staticStyle:{color:"#32c5d2"}},[e("i",{staticClass:"glyphicon glyphicon-user"}),this._v(" "),e("span",[this._v(" 文章类型管理 ")])])])}],!1,c,"data-v-3727ae10",null);e.default=d.exports},x3w8:function(t,e){}});
//# sourceMappingURL=9.bb16469c5ef73f658412.js.map