"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[5832],{5832:(q,v,r)=>{r.r(v),r.d(v,{CrudModule:()=>V});var a=r(6814),_=r(95),C=r(2129),Z=r(5219),t=r(4769),d=r(981),f=r(9552),c=r(3722),p=r(707),g=r(4480),h=r(4104),m=r(6340),x=r(6022),b=r(3714),y=r(6218),M=r(3965),A=r(1865),S=r(5167),U=r(1312);function w(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",18)(1,"button",19),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.openNew())}),t.qZA(),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteSelectedProducts())}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("disabled",!e.selectedProducts||!e.selectedProducts.length)}}function N(o,s){if(1&o){const e=t.EpF();t._UZ(0,"p-fileUpload",21),t.TgZ(1,"button",22),t.NdJ("click",function(){t.CHM(e),t.oxw();const n=t.MAs(8);return t.KtG(n.exportCSV())}),t.qZA()}2&o&&t.Q6J("maxFileSize",1e6)}function J(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",23)(1,"h5",24),t._uU(2,"Manage Products"),t.qZA(),t.TgZ(3,"span",25),t._UZ(4,"i",26),t.TgZ(5,"input",27),t.NdJ("input",function(n){t.CHM(e);const l=t.oxw(),u=t.MAs(8);return t.KtG(l.onGlobalFilter(u,n))}),t.qZA()()()}}function P(o,s){1&o&&(t.TgZ(0,"tr")(1,"th",28),t._UZ(2,"p-tableHeaderCheckbox"),t.qZA(),t.TgZ(3,"th",29),t._uU(4,"Code "),t._UZ(5,"p-sortIcon",30),t.qZA(),t.TgZ(6,"th",31),t._uU(7,"Name "),t._UZ(8,"p-sortIcon",32),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Image"),t.qZA(),t.TgZ(11,"th",33),t._uU(12,"Price "),t._UZ(13,"p-sortIcon",34),t.qZA(),t.TgZ(14,"th",35),t._uU(15,"Category "),t._UZ(16,"p-sortIcon",36),t.qZA(),t.TgZ(17,"th",37),t._uU(18,"Reviews "),t._UZ(19,"p-sortIcon",38),t.qZA(),t.TgZ(20,"th",39),t._uU(21,"Status "),t._UZ(22,"p-sortIcon",40),t.qZA(),t._UZ(23,"th"),t.qZA())}function D(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"p-tableCheckbox",41),t.qZA(),t.TgZ(3,"td",42)(4,"span",43),t._uU(5,"Code"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"td",42)(8,"span",43),t._uU(9,"Name"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"td",42)(12,"span",43),t._uU(13,"Image"),t.qZA(),t._UZ(14,"img",44),t.qZA(),t.TgZ(15,"td",45)(16,"span",43),t._uU(17,"Price"),t.qZA(),t._uU(18),t.ALo(19,"currency"),t.qZA(),t.TgZ(20,"td",42)(21,"span",43),t._uU(22,"Category"),t.qZA(),t._uU(23),t.qZA(),t.TgZ(24,"td",42)(25,"span",43),t._uU(26,"Reviews"),t.qZA(),t._UZ(27,"p-rating",46),t.qZA(),t.TgZ(28,"td",42)(29,"span",43),t._uU(30,"Status"),t.qZA(),t.TgZ(31,"span"),t._uU(32),t.qZA()(),t.TgZ(33,"td")(34,"div",47)(35,"button",48),t.NdJ("click",function(){const l=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.editProduct(l))}),t.qZA(),t.TgZ(36,"button",49),t.NdJ("click",function(){const l=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.deleteProduct(l))}),t.qZA()()()()}if(2&o){const e=s.$implicit;t.xp6(2),t.Q6J("value",e),t.xp6(4),t.hij(" ",e.code||e.id," "),t.xp6(4),t.hij(" ",e.name," "),t.xp6(4),t.Q6J("src","assets/demo/images/product/"+e.image,t.LSH)("alt",e.name),t.xp6(4),t.hij(" ",t.xi3(19,13,e.price,"USD")," "),t.xp6(5),t.hij(" ",e.category," "),t.xp6(4),t.Q6J("ngModel",e.rating)("readonly",!0)("cancel",!1),t.xp6(4),t.Tol("product-badge status-"+(e.inventoryStatus?e.inventoryStatus.toLowerCase():"")),t.xp6(1),t.Oqu(e.inventoryStatus)}}function I(o,s){if(1&o&&t._UZ(0,"img",77),2&o){const e=t.oxw(2);t.Q6J("src","assets/demo/images/product/"+e.product.image,t.LSH)("alt",e.product.image)}}function H(o,s){1&o&&(t.TgZ(0,"small",78),t._uU(1,"Name is required."),t.qZA())}function B(o,s){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.Tol("product-badge status-"+e.product.inventoryStatus.toString().toLowerCase()),t.xp6(1),t.Oqu(e.product.inventoryStatus)}}function k(o,s){if(1&o&&t.YNc(0,B,2,3,"span",79),2&o){const e=t.oxw(2);t.Q6J("ngIf",e.product&&e.product.inventoryStatus)}}function E(o,s){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Tol("product-badge status-"+e.value),t.xp6(1),t.Oqu(e.label)}}const F=function(o){return{"ng-invalid ng-dirty":o}};function R(o,s){if(1&o){const e=t.EpF();t.YNc(0,I,1,2,"img",50),t.TgZ(1,"div",51)(2,"label",52),t._uU(3,"Name"),t.qZA(),t.TgZ(4,"input",53),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.product.name=n)}),t.qZA(),t.YNc(5,H,2,0,"small",54),t.qZA(),t.TgZ(6,"div",51)(7,"label",55),t._uU(8,"Description"),t.qZA(),t.TgZ(9,"textarea",56),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.product.description=n)}),t.qZA()(),t.TgZ(10,"div",51)(11,"label",57),t._uU(12,"Inventory Status"),t.qZA(),t.TgZ(13,"p-dropdown",58),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.product.inventoryStatus=n)}),t.YNc(14,k,1,1,"ng-template",59),t.YNc(15,E,2,3,"ng-template",60),t.qZA()(),t.TgZ(16,"div",51)(17,"label",61),t._uU(18,"Category"),t.qZA(),t.TgZ(19,"div",62)(20,"div",63)(21,"p-radioButton",64),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.product.category=n)}),t.qZA(),t.TgZ(22,"label",65),t._uU(23,"Accessories"),t.qZA()(),t.TgZ(24,"div",63)(25,"p-radioButton",66),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.product.category=n)}),t.qZA(),t.TgZ(26,"label",67),t._uU(27,"Clothing"),t.qZA()(),t.TgZ(28,"div",63)(29,"p-radioButton",68),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.product.category=n)}),t.qZA(),t.TgZ(30,"label",69),t._uU(31,"Electronics"),t.qZA()(),t.TgZ(32,"div",63)(33,"p-radioButton",70),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.product.category=n)}),t.qZA(),t.TgZ(34,"label",71),t._uU(35,"Fitness"),t.qZA()()()(),t.TgZ(36,"div",62)(37,"div",72)(38,"label",73),t._uU(39,"Price"),t.qZA(),t.TgZ(40,"p-inputNumber",74),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.product.price=n)}),t.qZA()(),t.TgZ(41,"div",72)(42,"label",75),t._uU(43,"Quantity"),t.qZA(),t.TgZ(44,"p-inputNumber",76),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.product.quantity=n)}),t.qZA()()()}if(2&o){const e=t.oxw();t.Q6J("ngIf",e.product.image),t.xp6(4),t.Q6J("ngModel",e.product.name)("ngClass",t.VKq(13,F,e.submitted&&!e.product.name)),t.xp6(1),t.Q6J("ngIf",e.submitted&&!e.product.name),t.xp6(4),t.Q6J("ngModel",e.product.description),t.xp6(4),t.Q6J("ngModel",e.product.inventoryStatus)("options",e.statuses),t.xp6(8),t.Q6J("ngModel",e.product.category),t.xp6(4),t.Q6J("ngModel",e.product.category),t.xp6(4),t.Q6J("ngModel",e.product.category),t.xp6(4),t.Q6J("ngModel",e.product.category),t.xp6(7),t.Q6J("ngModel",e.product.price),t.xp6(4),t.Q6J("ngModel",e.product.quantity)}}function K(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",80),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.hideDialog())}),t.qZA(),t.TgZ(1,"button",81),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.saveProduct())}),t.qZA()}}function z(o,s){if(1&o&&(t.TgZ(0,"span"),t._uU(1,"Are you sure you want to delete "),t.TgZ(2,"b"),t._uU(3),t.qZA(),t._uU(4,"?"),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.product.name)}}function O(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",82),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteProductDialog=!1)}),t.qZA(),t.TgZ(1,"button",83),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.confirmDelete())}),t.qZA()}}function G(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",82),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteProductsDialog=!1)}),t.qZA(),t.TgZ(1,"button",83),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.confirmDeleteSelected())}),t.qZA()}}const Q=function(){return["name","country.name","representative.name","status"]},Y=function(){return[10,20,30]},T=function(){return{width:"450px"}};let j=(()=>{class o{constructor(e,i){this.productService=e,this.messageService=i,this.productDialog=!1,this.deleteProductDialog=!1,this.deleteProductsDialog=!1,this.products=[],this.product={},this.selectedProducts=[],this.submitted=!1,this.cols=[],this.statuses=[],this.rowsPerPageOptions=[5,10,20]}ngOnInit(){this.productService.getProducts().then(e=>this.products=e),this.cols=[{field:"product",header:"Product"},{field:"price",header:"Price"},{field:"category",header:"Category"},{field:"rating",header:"Reviews"},{field:"inventoryStatus",header:"Status"}],this.statuses=[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}openNew(){this.product={},this.submitted=!1,this.productDialog=!0}deleteSelectedProducts(){this.deleteProductsDialog=!0}editProduct(e){this.product={...e},this.productDialog=!0}deleteProduct(e){this.deleteProductDialog=!0,this.product={...e}}confirmDeleteSelected(){this.deleteProductsDialog=!1,this.products=this.products.filter(e=>!this.selectedProducts.includes(e)),this.messageService.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3}),this.selectedProducts=[]}confirmDelete(){this.deleteProductDialog=!1,this.products=this.products.filter(e=>e.id!==this.product.id),this.messageService.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3}),this.product={}}hideDialog(){this.productDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0,this.product.name?.trim()&&(this.product.id?(this.product.inventoryStatus=this.product.inventoryStatus.value?this.product.inventoryStatus.value:this.product.inventoryStatus,this.products[this.findIndexById(this.product.id)]=this.product,this.messageService.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.code=this.createId(),this.product.image="product-placeholder.svg",this.product.inventoryStatus=this.product.inventoryStatus?this.product.inventoryStatus.value:"INSTOCK",this.products.push(this.product),this.messageService.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.products=[...this.products],this.productDialog=!1,this.product={})}findIndexById(e){let i=-1;for(let n=0;n<this.products.length;n++)if(this.products[n].id===e){i=n;break}return i}createId(){let e="";for(let n=0;n<5;n++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return e}onGlobalFilter(e,i){e.filterGlobal(i.target.value,"contains")}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(d.M),t.Y36(Z.ez))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],features:[t._Bn([Z.ez])],decls:26,vars:27,consts:[[1,"grid"],[1,"col-12"],[1,"card","px-6","py-6"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","selectionMode","multiple","dataKey","id",3,"value","columns","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","selection","rowHover","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Product Details",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["header","Confirm",3,"visible","modal","visibleChange"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],[1,"my-2"],["pButton","","pRipple","","label","New","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Delete","icon","pi pi-trash",1,"p-button-danger",3,"disabled","click"],["mode","basic","accept","image/*","label","Import","chooseLabel","Import",1,"mr-2","inline-block",3,"maxFileSize"],["pButton","","pRipple","","label","Export","icon","pi pi-upload",1,"p-button-help",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",1,"w-full","sm:w-auto",3,"input"],[2,"width","3rem"],["pSortableColumn","code"],["field","code"],["pSortableColumn","name"],["field","name"],["pSortableColumn","price"],["field","price"],["pSortableColumn","category"],["field","category"],["pSortableColumn","rating"],["field","rating"],["pSortableColumn","inventoryStatus"],["field","inventoryStatus"],[3,"value"],[2,"width","14%","min-width","10rem"],[1,"p-column-title"],["width","100",1,"shadow-4",3,"src","alt"],[2,"width","14%","min-width","8rem"],[3,"ngModel","readonly","cancel"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],["width","150","class","mt-0 mx-auto mb-5 block shadow-2",3,"src","alt",4,"ngIf"],[1,"field"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngClass","ngModelChange"],["class","ng-dirty ng-invalid",4,"ngIf"],["for","description"],["id","description","pInputTextarea","","required","","rows","3","cols","20",3,"ngModel","ngModelChange"],["for","status"],["inputId","inventoryStatus","optionValue","label","placeholder","Select",3,"ngModel","options","ngModelChange"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"mb-3"],[1,"formgrid","grid"],[1,"field-radiobutton","col-6"],["id","category1","name","category","value","Accessories",3,"ngModel","ngModelChange"],["for","category1"],["id","category2","name","category","value","Clothing",3,"ngModel","ngModelChange"],["for","category2"],["id","category3","name","category","value","Electronics",3,"ngModel","ngModelChange"],["for","category3"],["id","category4","name","category","value","Fitness",3,"ngModel","ngModelChange"],["for","category4"],[1,"field","col"],["for","price"],["id","price","mode","currency","currency","USD","locale","en-US",3,"ngModel","ngModelChange"],["for","quantity"],["id","quantity",3,"ngModel","ngModelChange"],["width","150",1,"mt-0","mx-auto","mb-5","block","shadow-2",3,"src","alt"],[1,"ng-dirty","ng-invalid"],[3,"class",4,"ngIf"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-times","label","No",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Yes",1,"p-button-text",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"p-toast"),t.TgZ(4,"p-toolbar",3),t.YNc(5,w,3,1,"ng-template",4),t.YNc(6,N,2,1,"ng-template",5),t.qZA(),t.TgZ(7,"p-table",6,7),t.NdJ("selectionChange",function(u){return n.selectedProducts=u}),t.YNc(9,J,6,0,"ng-template",8),t.YNc(10,P,24,0,"ng-template",9),t.YNc(11,D,37,16,"ng-template",10),t.qZA()(),t.TgZ(12,"p-dialog",11),t.NdJ("visibleChange",function(u){return n.productDialog=u}),t.YNc(13,R,45,15,"ng-template",12),t.YNc(14,K,2,0,"ng-template",13),t.qZA(),t.TgZ(15,"p-dialog",14),t.NdJ("visibleChange",function(u){return n.deleteProductDialog=u}),t.TgZ(16,"div",15),t._UZ(17,"i",16),t.YNc(18,z,5,1,"span",17),t.qZA(),t.YNc(19,O,2,0,"ng-template",13),t.qZA(),t.TgZ(20,"p-dialog",14),t.NdJ("visibleChange",function(u){return n.deleteProductsDialog=u}),t.TgZ(21,"div",15),t._UZ(22,"i",16),t.TgZ(23,"span"),t._uU(24,"Are you sure you want to delete selected products?"),t.qZA()(),t.YNc(25,G,2,0,"ng-template",13),t.qZA()()()),2&i&&(t.xp6(7),t.Q6J("value",n.products)("columns",n.cols)("rows",10)("globalFilterFields",t.DdM(22,Q))("paginator",!0)("rowsPerPageOptions",t.DdM(23,Y))("showCurrentPageReport",!0)("selection",n.selectedProducts)("rowHover",!0),t.xp6(5),t.Akn(t.DdM(24,T)),t.Q6J("visible",n.productDialog)("modal",!0),t.xp6(3),t.Akn(t.DdM(25,T)),t.Q6J("visible",n.deleteProductDialog)("modal",!0),t.xp6(3),t.Q6J("ngIf",n.product),t.xp6(2),t.Akn(t.DdM(26,T)),t.Q6J("visible",n.deleteProductsDialog)("modal",!0))},dependencies:[a.mk,a.O5,f.iA,Z.jx,f.lQ,f.fz,f.UA,f.Mo,c.p,p.Hq,_.Fj,_.JJ,_.Q7,_.On,g.H,h.FN,m.o,x.iG,b.o,y.g,M.Lt,A.EU,S.Rn,U.V,a.H9],encapsulation:2})}return o})(),L=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[C.Bz.forChild([{path:"",component:j}]),C.Bz]})}return o})(),V=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[a.ez,L,f.U$,c.O,_.u5,p.hJ,g.T,h.EV,m.V,x.Xt,b.j,y.A,M.kW,A.cc,S.L$,U.S]})}return o})()},6218:(q,v,r)=>{r.d(v,{A:()=>t,g:()=>Z});var a=r(4769),_=r(6814),C=r(95);let Z=(()=>{class d{el;ngModel;control;cd;autoResize;onResize=new a.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(c,p,g,h){this.el=c,this.ngModel=p,this.control=g,this.cd=h}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(c){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(c){this.autoResize&&this.resize(c)}onBlur(c){this.autoResize&&this.resize(c)}resize(c){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(c||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(p){return new(p||d)(a.Y36(a.SBq),a.Y36(C.On,8),a.Y36(C.a5,8),a.Y36(a.sBO))};static \u0275dir=a.lG2({type:d,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(p,g){1&p&&a.NdJ("input",function(m){return g.onInput(m)})("focus",function(m){return g.onFocus(m)})("blur",function(m){return g.onBlur(m)}),2&p&&a.ekj("p-filled",g.filled)("p-inputtextarea-resizable",g.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return d})(),t=(()=>{class d{static \u0275fac=function(p){return new(p||d)};static \u0275mod=a.oAB({type:d});static \u0275inj=a.cJS({imports:[_.ez]})}return d})()}}]);