(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jkDv:function(t,e,n){"use strict";n.r(e),n.d(e,"AdminModule",function(){return k});var r=n("ofXK"),b=n("3Pt+"),o=n("tyNb"),c=n("fXoL"),i=n("hO0c");function a(t,e){if(1&t&&(c.Kb(0,"div",11),c.ec(1),c.Jb()),2&t){const t=c.Tb();c.xb(1),c.gc(" ",t.errorMessage,"\n")}}let d=(()=>{class t{constructor(t,e){this.router=t,this.auth=e}authenticate(t){t.valid?this.auth.authenticate(this.username,this.password).subscribe(t=>{t&&this.router.navigateByUrl("/admin/main"),this.errorMessage="Authentication Failed"}):this.errorMessage="Form Data Invalid"}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(o.b),c.Hb(i.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["ng-component"]],decls:20,vars:3,consts:[[1,"bg-info","p-2","text-center","text-white"],["class","bg-danger mt-2 p-2 text-center text-white",4,"ngIf"],[1,"p-2"],["novalidate","",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["name","username","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","password","name","password","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center"],["routerLink","/",1,"btn","btn-secondary","m-1"],["type","submit",1,"btn","btn-primary","m-1"],[1,"bg-danger","mt-2","p-2","text-center","text-white"]],template:function(t,e){if(1&t){const t=c.Lb();c.Kb(0,"div",0),c.Kb(1,"h3"),c.ec(2,"SportsStore Admin"),c.Jb(),c.Jb(),c.dc(3,a,2,1,"div",1),c.Kb(4,"div",2),c.Kb(5,"form",3,4),c.Rb("ngSubmit",function(){c.ac(t);const n=c.Zb(6);return e.authenticate(n)}),c.Kb(7,"div",5),c.Kb(8,"label"),c.ec(9,"Name"),c.Jb(),c.Kb(10,"input",6),c.Rb("ngModelChange",function(t){return e.username=t}),c.Jb(),c.Jb(),c.Kb(11,"div",5),c.Kb(12,"label"),c.ec(13,"Password"),c.Jb(),c.Kb(14,"input",7),c.Rb("ngModelChange",function(t){return e.password=t}),c.Jb(),c.Jb(),c.Kb(15,"div",8),c.Kb(16,"button",9),c.ec(17,"Go back"),c.Jb(),c.Kb(18,"button",10),c.ec(19,"Log In"),c.Jb(),c.Jb(),c.Jb(),c.Jb()}2&t&&(c.xb(3),c.Wb("ngIf",null!=e.errorMessage),c.xb(7),c.Wb("ngModel",e.username),c.xb(4),c.Wb("ngModel",e.password))},directives:[r.j,b.k,b.e,b.f,b.b,b.i,b.d,b.g,o.c],encapsulation:2}),t})(),s=(()=>{class t{constructor(t,e){this.auth=t,this.router=e}logout(){this.auth.clear(),this.router.navigateByUrl("/")}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(i.a),c.Hb(o.b))},t.\u0275cmp=c.Bb({type:t,selectors:[["ng-component"]],decls:15,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col","bg-dark","text-white"],[1,"navbar-brand"],[1,"row","mt-2"],[1,"col-3"],["routerLink","/admin/main/products","routerLinkActive","active",1,"btn","btn-outline-info","btn-block"],["routerLink","/admin/main/orders","routerLinkActive","active",1,"btn","btn-outline-info","btn-block"],[1,"btn","btn-outline-danger","btn-block",3,"click"],[1,"col-9"]],template:function(t,e){1&t&&(c.Kb(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"div",2),c.Kb(3,"a",3),c.ec(4,"SPORTS STORE"),c.Jb(),c.Jb(),c.Jb(),c.Kb(5,"div",4),c.Kb(6,"div",5),c.Kb(7,"button",6),c.ec(8," Products "),c.Jb(),c.Kb(9,"button",7),c.ec(10," Orders "),c.Jb(),c.Kb(11,"button",8),c.Rb("click",function(){return e.logout()}),c.ec(12," Logout "),c.Jb(),c.Jb(),c.Kb(13,"div",9),c.Ib(14,"router-outlet"),c.Jb(),c.Jb(),c.Jb())},directives:[o.c,o.d,o.f],encapsulation:2}),t})(),u=(()=>{class t{constructor(t,e){this.router=t,this.auth=e}canActivate(t,e){return!!this.auth.authenticated||(this.router.navigateByUrl("/admin/auth"),!1)}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(o.b),c.Ob(i.a))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac}),t})();var p=n("jU2X");const l=function(t){return["/admin/main/products/edit",t]};function g(t,e){if(1&t){const t=c.Lb();c.Kb(0,"tr"),c.Kb(1,"td"),c.ec(2),c.Jb(),c.Kb(3,"td"),c.ec(4),c.Jb(),c.Kb(5,"td"),c.ec(6),c.Jb(),c.Kb(7,"td"),c.ec(8),c.Ub(9,"currency"),c.Jb(),c.Kb(10,"td"),c.Kb(11,"button",3),c.ec(12," Edit "),c.Jb(),c.Kb(13,"button",4),c.Rb("click",function(){c.ac(t);const n=e.$implicit;return c.Tb().deleteProduct(n.id)}),c.ec(14," Delete "),c.Jb(),c.Jb(),c.Jb()}if(2&t){const t=e.$implicit;c.xb(2),c.fc(t.id),c.xb(2),c.fc(t.name),c.xb(2),c.fc(t.category),c.xb(2),c.fc(c.Vb(9,5,t.price,"USD","symbol","2.2-2")),c.xb(3),c.Wb("routerLink",c.Xb(10,l,t.id))}}let m=(()=>{class t{constructor(t){this.repository=t}getProducts(){return this.repository.getProducts()}deleteProduct(t){this.repository.deleteProduct(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(p.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["ng-component"]],decls:16,vars:1,consts:[[1,"table","table-sm","table-striped"],[4,"ngFor","ngForOf"],["routerLink","/admin/main/products/create",1,"btn","btn-primary"],[1,"btn","btn-sm","btn-warning","m-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(t,e){1&t&&(c.Kb(0,"table",0),c.Kb(1,"thead"),c.Kb(2,"tr"),c.Kb(3,"th"),c.ec(4,"ID"),c.Jb(),c.Kb(5,"th"),c.ec(6,"Name"),c.Jb(),c.Kb(7,"th"),c.ec(8,"Category"),c.Jb(),c.Kb(9,"th"),c.ec(10,"Price"),c.Jb(),c.Ib(11,"th"),c.Jb(),c.Jb(),c.Kb(12,"tbody"),c.dc(13,g,15,12,"tr",1),c.Jb(),c.Jb(),c.Kb(14,"button",2),c.ec(15," Create New Product\n"),c.Jb()),2&t&&(c.xb(13),c.Wb("ngForOf",e.getProducts()))},directives:[r.i,o.c],pipes:[r.c],encapsulation:2}),t})();var h=n("4Sfc");let f=(()=>{class t{constructor(t,e,n){this.repository=t,this.router=e,this.editing=!1,this.product=new h.a,this.editing="edit"==n.snapshot.params.mode,this.editing&&Object.assign(this.product,t.getProduct(n.snapshot.params.id))}save(t){this.repository.saveProduct(this.product),this.router.navigateByUrl("/admin/main/products")}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(p.a),c.Hb(o.b),c.Hb(o.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["ng-component"]],decls:26,vars:12,consts:[[1,"bg-primary","p-2","text-white"],["novalidate","",3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["name","name",1,"form-control",3,"ngModel","ngModelChange"],["name","category",1,"form-control",3,"ngModel","ngModelChange"],["name","description",1,"form-control",3,"ngModel","ngModelChange"],["name","price",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","m-1"],["type","reset","routerLink","/admin/main/products",1,"btn","btn-secondary"]],template:function(t,e){if(1&t){const t=c.Lb();c.Kb(0,"div",0),c.Kb(1,"h5"),c.ec(2),c.Jb(),c.Jb(),c.Kb(3,"form",1,2),c.Rb("ngSubmit",function(){c.ac(t);const n=c.Zb(4);return e.save(n)}),c.Kb(5,"div",3),c.Kb(6,"label"),c.ec(7,"Name"),c.Jb(),c.Kb(8,"input",4),c.Rb("ngModelChange",function(t){return e.product.name=t}),c.Jb(),c.Jb(),c.Kb(9,"div",3),c.Kb(10,"label"),c.ec(11,"Category"),c.Jb(),c.Kb(12,"input",5),c.Rb("ngModelChange",function(t){return e.product.category=t}),c.Jb(),c.Jb(),c.Kb(13,"div",3),c.Kb(14,"label"),c.ec(15,"Description"),c.Jb(),c.Kb(16,"textarea",6),c.Rb("ngModelChange",function(t){return e.product.description=t}),c.ec(17,"        "),c.Jb(),c.Jb(),c.Kb(18,"div",3),c.Kb(19,"label"),c.ec(20,"Price"),c.Jb(),c.Kb(21,"input",7),c.Rb("ngModelChange",function(t){return e.product.price=t}),c.Jb(),c.Jb(),c.Kb(22,"button",8),c.ec(23),c.Jb(),c.Kb(24,"button",9),c.ec(25," Cancel "),c.Jb(),c.Jb()}2&t&&(c.zb("bg-warning",e.editing)("text-dark",e.editing),c.xb(2),c.gc("",e.editing?"Edit":"Create"," Product"),c.xb(6),c.Wb("ngModel",e.product.name),c.xb(4),c.Wb("ngModel",e.product.category),c.xb(4),c.Wb("ngModel",e.product.description),c.xb(5),c.Wb("ngModel",e.product.price),c.xb(1),c.zb("btn-warning",e.editing),c.xb(1),c.gc(" ",e.editing?"Save":"Create"," "))},directives:[b.k,b.e,b.f,b.b,b.d,b.g,o.c],encapsulation:2}),t})();var J=n("hf/X");function K(t,e){1&t&&(c.Kb(0,"tr"),c.Kb(1,"td",7),c.ec(2,"There are no orders"),c.Jb(),c.Jb())}function v(t,e){if(1&t&&(c.Kb(0,"tr"),c.Ib(1,"td",4),c.Kb(2,"td"),c.ec(3),c.Jb(),c.Kb(4,"td"),c.ec(5),c.Jb(),c.Jb()),2&t){const t=e.$implicit;c.xb(3),c.fc(t.product.name),c.xb(2),c.fc(t.quantity)}}function y(t,e){if(1&t){const t=c.Lb();c.Kb(0,"tr"),c.Kb(1,"td"),c.ec(2),c.Jb(),c.Kb(3,"td"),c.ec(4),c.Jb(),c.Kb(5,"th"),c.ec(6,"Product"),c.Jb(),c.Kb(7,"th"),c.ec(8,"Quantity"),c.Jb(),c.Kb(9,"td"),c.Kb(10,"button",8),c.Rb("click",function(){c.ac(t);const n=e.$implicit;return c.Tb().markShipped(n)}),c.ec(11," Ship "),c.Jb(),c.Kb(12,"button",9),c.Rb("click",function(){c.ac(t);const n=e.$implicit;return c.Tb().delete(n.id)}),c.ec(13," Delete "),c.Jb(),c.Jb(),c.Jb(),c.dc(14,v,6,2,"tr",10)}if(2&t){const t=e.$implicit;c.xb(2),c.fc(t.name),c.xb(2),c.fc(t.zip),c.xb(10),c.Wb("ngForOf",t.cart.lines)}}let x=o.e.forChild([{path:"auth",component:d},{path:"main",component:s,canActivate:[u],children:[{path:"products/:mode/:id",component:f},{path:"products/:mode",component:f},{path:"products",component:m},{path:"orders",component:(()=>{class t{constructor(t){this.repository=t,this.includeShipped=!1}getOrders(){return this.repository.getOrders().filter(t=>this.includeShipped||!t.shipped)}markShipped(t){t.shipped=!0,this.repository.updateOrder(t)}delete(t){this.repository.deleteOrder(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(J.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["ng-component"]],decls:17,vars:3,consts:[[1,"form-check"],[1,"form-check-label"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"table","table-sm"],["colspan","2"],[4,"ngIf"],["ngFor","",3,"ngForOf"],["colspan","5"],[1,"btn","btn-warning","m-1",3,"click"],[1,"btn","btn-danger",3,"click"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(c.Kb(0,"div",0),c.Kb(1,"label",1),c.Kb(2,"input",2),c.Rb("ngModelChange",function(t){return e.includeShipped=t}),c.Jb(),c.ec(3," Display Shipped Orders "),c.Jb(),c.Jb(),c.Kb(4,"table",3),c.Kb(5,"thead"),c.Kb(6,"tr"),c.Kb(7,"th"),c.ec(8,"Name"),c.Jb(),c.Kb(9,"th"),c.ec(10,"Zip"),c.Jb(),c.Kb(11,"th",4),c.ec(12,"Cart"),c.Jb(),c.Ib(13,"th"),c.Jb(),c.Jb(),c.Kb(14,"tbody"),c.dc(15,K,3,0,"tr",5),c.dc(16,y,15,3,"ng-template",6),c.Jb(),c.Jb()),2&t&&(c.xb(2),c.Wb("ngModel",e.includeShipped),c.xb(13),c.Wb("ngIf",0==e.getOrders().length),c.xb(1),c.Wb("ngForOf",e.getOrders()))},directives:[b.a,b.d,b.g,r.j,r.i],encapsulation:2}),t})()},{path:"**",redirectTo:"products"}]},{path:"**",redirectTo:"auth"}]),k=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},providers:[u],imports:[[r.b,b.c,x]]}),t})()}}]);