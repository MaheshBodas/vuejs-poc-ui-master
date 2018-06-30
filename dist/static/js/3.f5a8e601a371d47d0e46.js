webpackJsonp([3],{"00cs":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("mvHQ"),r=i.n(s),l=i("woOf"),n=i.n(l),a=i("BO1k"),o=i.n(a),d=i("Dd8w"),p=i.n(d);window.options=[{text:"currency",value:"currency"},{text:"date",value:"date"},{text:"float",value:"float"},{text:"integer",value:"integer"},{text:"text",value:"text"}];var c={name:"risk-field-type-list",props:{preSelect:String,selectedType:Object},data:function(){return{options:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e;for(this.selectedType.risk_type_field_enum="text",e=0;e<window.options.length;e++)this.options.push({text:window.options[e].text,value:window.options[e].value})},selectChanged:function(e){}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-select",{attrs:{size:"mini",clearable:"",placeholder:"Select"},on:{change:e.selectChanged},model:{value:e.selectedType.risk_type_field_enum,callback:function(t){e.$set(e.selectedType,"risk_type_field_enum",t)},expression:"selectedType.risk_type_field_enum"}},e._l(e.options,function(e){return i("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})}))},staticRenderFns:[]};var y=i("VU/8")(c,u,!1,function(e){i("udaQ")},"data-v-537d42a8",null).exports,f=i("YYkB"),_=i("wxAW"),k=i.n(_),m=i("Zrlr"),h=i.n(m),v=function(){function e(t,i){h()(this,e),this.risk_type_name=t,this.risk_type_description=i,this.risktype_risktypefields=[]}return k()(e,[{key:"resetRiskTypeData",value:function(){this.risk_type_name="",this.risk_type_description="",this.risktype_risktypefields=[]}},{key:"addRiskTypeField",value:function(e,t,i){var s=new function e(t,i,s){h()(this,e),this.risk_type_field_name=t,this.risk_type_field_enum=i,this.risk_type_field_description=s}(e,t,i);this.risktype_risktypefields.push(s)}}]),e}(),g=function e(){h()(this,e)};g.CarouselHelpText=[{id:1,text:"Admin User can define Risk types."},{id:2,text:"Specify Risk Type name and description."},{id:3,text:"Click Add Risk Type Field button to define Risk type fields."},{id:4,text:"Post Risk type after adding / editing Risk type fields."}];var x=i("NYxO"),F={name:"create-risk-type-ctrl",computed:p()({},Object(x.b)(["apiresult","apiexception","name","roles"]),{isAdminUser:function(){var e=!1;return console.log("this.roles"),console.log(this.roles),"admin"===this.roles&&(e=!0),console.log("isAdminUser"),console.log(e),e}}),components:{RiskFieldTypeList:y,RotatingDisplay:f.a},data:function(){return{tableKey:0,listLoading:!0,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},risktypefield_rules:{risk_type_field_enum:[{required:!0,message:"Risk Field Type is required",trigger:"change"}],risk_type_field_name:[{required:!0,message:"Risk Field Type name is required",trigger:"blur"}]},risktype_rules:{risk_type_name:[{required:!0,message:"Risk Type name is required",trigger:"blur"}]},tempReset:{risk_name:"",risk_description:"",riskfields:[]},temp:{risk_type_name:"Automobile2",risk_type_description:"Automobile created via UI",risktype_risktypefields:[{risk_type_field_name:"model",risk_type_field_enum:"text",risk_type_field_description:"Model of automobile"}]},risktypefields:[],risktypepostdata:null,carouselhelptext:[],newRiskTypeField:{id:void 0,risk_type_field_name:"",risk_type_field_enum:"text",risk_type_field_description:""},selectedType:{risk_type_field_enum:"text"},is_editing:!1}},created:function(){this.populateHelpText(),this.fetchData()},filters:{pluralize:function(e){return 1===e?"item":"items"}},methods:{fetchData:function(){this.risktypepostdata=new v,this.listLoading=!1},populateHelpText:function(){var e;for(e=0;e<g.CarouselHelpText.length;e++)this.carouselhelptext.push(g.CarouselHelpText[e])},setLowerCase:function(){this.newRiskTypeField.risk_type_field_name=this.newRiskTypeField.risk_type_field_name.toLowerCase()},isDuplicateRiskTypeField:function(){var e=!0,t=this.newRiskTypeField.risk_type_field_name;return-1===this.risktypefields.findIndex(function(e){return e.risk_type_field_name===t})&&(e=!1),e},addRiskTypeField:function(){var e=!1,t=this.isDuplicateRiskTypeField();return this.newRiskTypeField.id=(new Date).getTime(),!1===t&&(this.risktypefields.push(this.newRiskTypeField),e=!0),e},editRiskTypeField:function(){var e=!0,t=!1,i=void 0;try{for(var s,r=o()(this.risktypefields);!(e=(s=r.next()).done);e=!0){var l=s.value;if(l.id===this.newRiskTypeField.id){var n=this.risktypefields.indexOf(l);this.risktypefields.splice(n,1,this.newRiskTypeField);break}}}catch(e){t=!0,i=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw i}}},selectChangedAdd:function(e){this.newRiskTypeField.risk_type_field_enum=e},resetRiskFieldType:function(){this.newRiskTypeField={id:void 0,risk_type_field_name:"",risk_type_field_enum:"text",risk_type_field_description:""}},handleCreate:function(){var e=this;this.resetRiskFieldType(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.risktypefieldForm.clearValidate()})},createRiskTypeFieldData:function(){var e=this;this.$refs.risktypefieldForm.validate(function(t){t&&(e.addRiskTypeField()?(e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Risk Type Field added to collection",type:"success",duration:2e3})):e.$notify({title:"Error",message:"Duplicate Risk Type Field",type:"error",duration:2e3}))})},handleUpdate:function(e){var t=this;this.newRiskTypeField=n()({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.risktypefieldForm.clearValidate()})},updateRiskTypeFieldData:function(){var e=this;this.$refs.risktypefieldForm.validate(function(t){t&&(e.editRiskTypeField(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Risk Type Field updated in collection",type:"success",duration:2e3}))})},handleDelete:function(e){var t=this.risktypefields.indexOf(e);this.risktypefields.splice(t,1),this.$notify({title:"Success",message:"Successfully deleted",type:"success",duration:2e3})},resetRiskTypeFormData:function(){this.risktypefields=[],this.risktypepostdata.resetRiskTypeData()},processRiskTypeFields:function(){var e=!0,t=!1,i=void 0;try{for(var s,r=o()(this.risktypefields);!(e=(s=r.next()).done);e=!0){var l=s.value;this.risktypepostdata.addRiskTypeField(l.risk_type_field_name,l.risk_type_field_enum,l.risk_type_field_description)}}catch(e){t=!0,i=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw i}}},createRiskTypeData:function(){var e=this;this.$refs.risktypeForm.validate(function(t){if(t){if(0===e.risktypefields.length)return void e.$notify({title:"Failure",message:"You must add Risk Type Field(s)",type:"error",duration:2e3});e.processRiskTypeFields(),console.log("Posting data to server");var i=r()(e.risktypepostdata);console.log(i),e.$store.dispatch("createRiskType",e.risktypepostdata).then(function(){!0===e.apiresult&&(e.$notify({title:"Success",message:"RiskType Created successfully",type:"success",duration:2e3}),e.resetRiskTypeFormData())}).catch(function(){e.$notify({title:"Error",message:e.apiexception,type:"error",duration:2e3})})}})}},directives:{"risktypefield-focus":function(e,t){t.value&&e.focus()}}},T={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("el-container",{staticStyle:{height:"500px",width:"100%",border:"1px soclid #eee"}},[e.isAdminUser?i("div",{staticStyle:{height:"500px",width:"100%",border:"1px soclid #eee"}},[i("el-header",{staticStyle:{height:"90px",border:"1px solid #eee"}},[i("rotating-display",{attrs:{helpTextArray:e.carouselhelptext}})],1),e._v(" "),i("el-main",{staticStyle:{height:"350px",border:"1px solid #eee"}},[i("el-form",{ref:"risktypeForm",staticStyle:{width:"100%",align:"left","margin-left":"5px"},attrs:{rules:e.risktype_rules,model:e.risktypepostdata,"label-position":"left","label-width":"130px"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"Type Name",size:"mini",prop:"risk_type_name"}},[i("el-input",{model:{value:e.risktypepostdata.risk_type_name,callback:function(t){e.$set(e.risktypepostdata,"risk_type_name",t)},expression:"risktypepostdata.risk_type_name"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"Type Description",size:"mini"}},[i("el-input",{model:{value:e.risktypepostdata.risk_type_description,callback:function(t){e.$set(e.risktypepostdata,"risk_type_description",t)},expression:"risktypepostdata.risk_type_description"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{gutter:5}},[i("el-col",{attrs:{span:8}},[i("div",{staticStyle:{padding:"5px"}},[i("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("Add Type Field")])],1)])],1)],1),e._v(" "),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:16}},[e.risktypefields.length>0?i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.risktypefields,"element-loading-text":"Give me some more time",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{"min-width":"150px",label:"Field Name"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{on:{click:function(i){e.handleUpdate(t.row)}}},[e._v(e._s(t.row.risk_type_field_name))])]}}])}),e._v(" "),i("el-table-column",{attrs:{"min-width":"150px",label:"Field Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"link-type",on:{click:function(i){e.handleUpdate(t.row)}}},[e._v(e._s(t.row.risk_type_field_description))])]}}])}),e._v(" "),i("el-table-column",{attrs:{"min-width":"150px",label:"Field Enum"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"link-type",on:{click:function(i){e.handleUpdate(t.row)}}},[e._v(e._s(t.row.risk_type_field_enum))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"Action",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){e.handleUpdate(t.row)}}},[e._v("Edit")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){e.handleDelete(t.row)}}},[e._v("Delete\n                ")])]}}])})],1):e._e(),e._v(" "),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"risktypefieldForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.risktypefield_rules,model:e.newRiskTypeField,"label-position":"left","label-width":"120px"}},[i("el-form-item",{attrs:{label:"Name",size:"mini",prop:"risk_type_field_name"}},["create"==e.dialogStatus?i("el-input",{on:{blur:e.setLowerCase},model:{value:e.newRiskTypeField.risk_type_field_name,callback:function(t){e.$set(e.newRiskTypeField,"risk_type_field_name",t)},expression:"newRiskTypeField.risk_type_field_name"}}):i("el-input",{attrs:{disabled:!0},model:{value:e.newRiskTypeField.risk_type_field_name,callback:function(t){e.$set(e.newRiskTypeField,"risk_type_field_name",t)},expression:"newRiskTypeField.risk_type_field_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"Type",size:"mini",prop:"risk_type_field_enum"}},[i("risk-field-type-list",{attrs:{selectedType:e.newRiskTypeField}})],1),e._v(" "),i("el-form-item",{attrs:{label:"Description",size:"mini"}},[i("el-input",{model:{value:e.newRiskTypeField.risk_type_field_description,callback:function(t){e.$set(e.newRiskTypeField,"risk_type_field_description",t)},expression:"newRiskTypeField.risk_type_field_description"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("Cancel")]),e._v(" "),"create"==e.dialogStatus?i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.createRiskTypeFieldData}},[e._v("Confirm")]):i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.updateRiskTypeFieldData}},[e._v("Confirm")])],1)],1)],1)],1)],1),e._v(" "),i("el-footer",{staticStyle:{"text-align":"right","font-size":"12px"}},[i("div",{staticStyle:{padding:"10px"}},[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.createRiskTypeData}},[e._v("Submit")])],1)])],1):i("div",{staticClass:"dashboard-text",staticStyle:{height:"500px",width:"100%",border:"1px soclid #eee"}},[e._v("      \n      You do not have permission to access this page. Please contact Site Admin.\n  ")])])],1)},staticRenderFns:[]};var b={components:{CreateRiskTypeCtrl:i("VU/8")(F,T,!1,function(e){i("k0Fh")},"data-v-a577da7e",null).exports}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app-container"}},[t("br"),this._v(" "),t("create-risk-type-ctrl")],1)},staticRenderFns:[]},R=i("VU/8")(b,w,!1,null,null,null);t.default=R.exports},"5uwq":function(e,t,i){(t=e.exports=i("FZ+f")(!1)).push([e.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.0/theme-chalk/index.css);",""]),t.push([e.i,"\r\n",""])},BO1k:function(e,t,i){e.exports={default:i("fxRn"),__esModule:!0}},fxRn:function(e,t,i){i("+tPU"),i("zQR9"),e.exports=i("g8Ux")},g8Ux:function(e,t,i){var s=i("77Pl"),r=i("3fs2");e.exports=i("FeBl").getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return s(t.call(e))}},hF1y:function(e,t,i){(t=e.exports=i("FZ+f")(!1)).push([e.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.0/theme-chalk/index.css);",""]),t.push([e.i,"\r\n",""])},k0Fh:function(e,t,i){var s=i("5uwq");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("4643f52e",s,!0)},udaQ:function(e,t,i){var s=i("hF1y");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("450fac70",s,!0)},wxAW:function(e,t,i){"use strict";t.__esModule=!0;var s,r=i("C4MV"),l=(s=r)&&s.__esModule?s:{default:s};t.default=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),(0,l.default)(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}()}});