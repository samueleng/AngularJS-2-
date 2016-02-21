System.register(['angular2/core', './unless.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, unless_directive_1;
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                    this.list = ['Apple', 'Milk', 'Bread'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "   \n\t\t<section class=\"directive\"> \n\t\t\t<h2>*ngIf</h2> \n\t\t\t<div> \n\t\t\t\tEnter a number greater than 10 \n\t\t\t\t<br> \n\t\t\t\t<input type=\"text\" #number (keyup)=\"0\"> \n\t\t\t</div> \n\t\t\t<div *ngIf=\"number.value > 10\"> \n\t\t\t\tNumber is greater than 10 \n\t\t\t</div>\n\t\t</section> \n\t\t<section class=\"directive\"> \n\t\t\t<h2>*ngFor</h2> \n\t\t\t<div> \n\t\t\t\t<ul> \n\t\t\t\t\t<li *ngFor=\"#item of list, #i = index\"> {{i}}:{{item}}</li> \n\t\t\t\t</ul> \n\t\t\t</div> \n\t\t</section> \n\n\t\t<section class = \"directive\"> \n\t\t\t<h2>[ngSwitch]</h2> \n\t\t\t<div> \n\t\t\t\tEnter red, blue or green \n\t\t\t\t<br> \n\t\t\t\t<input type=\"text\" #color (keyup)=\"0\"> \n\t\t\t</div> \n\t\t\t<div [ngSwitch]=\"color.value\"> \n\t\t\t\t<template [ngSwitchWhen]=\"'red'\"><span style=\"color: red\">color is red</span></template>  \n\t\t\t\t<template [ngSwitchWhen]=\"'blue'\"><span style=\"color: blue\">color is blue</span></template> \n\t\t\t\t<template [ngSwitchWhen]=\"'green'\"><span style=\"color: green\">color is green</span></template>  \n\t\t\t\t<template ngSwitchDefault><span style=\"color: red\">color is red</span></template> \n\t\t\t</div>\n\t\t</section> \n\t\t<section class=\"directive\"> \n\t\t\t<h2>Custom Directive: *myUnless</h2> \n\t\t\t<div> \n\t\t\t\tEnter true or false \n\t\t\t\t<br> \n\t\t\t\t<input type=\"text\" #condition (keyup)=\"0\"> \n\t\t\t</div> \n\t\t\t<div *myUnless=\"condition.value != 'false'\"> \n\t\t\t\tOnly shown if 'false' was entered \n\t\t\t</div>\n\t",
                        directives: [unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            })();
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU3RydWN0dXJhbERpcmVjdGl2ZXMiLCJTdHJ1Y3R1cmFsRGlyZWN0aXZlcy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO29CQW9EQ0MsU0FBSUEsR0FBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsTUFBTUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25DQSxDQUFDQTtnQkFyREREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLDBCQUEwQkE7d0JBQ3BDQSxRQUFRQSxFQUFFQSxrZ0RBNkNUQTt3QkFFREEsVUFBVUEsRUFBRUEsQ0FBQ0Esa0NBQWVBLENBQUNBO3FCQUM3QkEsQ0FBQ0E7O3lDQUdEQTtnQkFBREEsMkJBQUNBO1lBQURBLENBckRBLEFBcURDQSxJQUFBO1lBckRELHVEQXFEQyxDQUFBIiwiZmlsZSI6InN0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7ICBcbmltcG9ydCB7VW5sZXNzRGlyZWN0aXZlfSBmcm9tICcuL3VubGVzcy5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMnLFxuXHR0ZW1wbGF0ZTogYCAgIFxuXHRcdDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+IFxuXHRcdFx0PGgyPipuZ0lmPC9oMj4gXG5cdFx0XHQ8ZGl2PiBcblx0XHRcdFx0RW50ZXIgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDEwIFxuXHRcdFx0XHQ8YnI+IFxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtYmVyIChrZXl1cCk9XCIwXCI+IFxuXHRcdFx0PC9kaXY+IFxuXHRcdFx0PGRpdiAqbmdJZj1cIm51bWJlci52YWx1ZSA+IDEwXCI+IFxuXHRcdFx0XHROdW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEwIFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPiBcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPiBcblx0XHRcdDxoMj4qbmdGb3I8L2gyPiBcblx0XHRcdDxkaXY+IFxuXHRcdFx0XHQ8dWw+IFxuXHRcdFx0XHRcdDxsaSAqbmdGb3I9XCIjaXRlbSBvZiBsaXN0LCAjaSA9IGluZGV4XCI+IHt7aX19Ont7aXRlbX19PC9saT4gXG5cdFx0XHRcdDwvdWw+IFxuXHRcdFx0PC9kaXY+IFxuXHRcdDwvc2VjdGlvbj4gXG5cblx0XHQ8c2VjdGlvbiBjbGFzcyA9IFwiZGlyZWN0aXZlXCI+IFxuXHRcdFx0PGgyPltuZ1N3aXRjaF08L2gyPiBcblx0XHRcdDxkaXY+IFxuXHRcdFx0XHRFbnRlciByZWQsIGJsdWUgb3IgZ3JlZW4gXG5cdFx0XHRcdDxicj4gXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNjb2xvciAoa2V5dXApPVwiMFwiPiBcblx0XHRcdDwvZGl2PiBcblx0XHRcdDxkaXYgW25nU3dpdGNoXT1cImNvbG9yLnZhbHVlXCI+IFxuXHRcdFx0XHQ8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCIncmVkJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZFwiPmNvbG9yIGlzIHJlZDwvc3Bhbj48L3RlbXBsYXRlPiAgXG5cdFx0XHRcdDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidibHVlJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IGJsdWVcIj5jb2xvciBpcyBibHVlPC9zcGFuPjwvdGVtcGxhdGU+IFxuXHRcdFx0XHQ8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInZ3JlZW4nXCI+PHNwYW4gc3R5bGU9XCJjb2xvcjogZ3JlZW5cIj5jb2xvciBpcyBncmVlbjwvc3Bhbj48L3RlbXBsYXRlPiAgXG5cdFx0XHRcdDx0ZW1wbGF0ZSBuZ1N3aXRjaERlZmF1bHQ+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkXCI+Y29sb3IgaXMgcmVkPC9zcGFuPjwvdGVtcGxhdGU+IFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPiBcblx0XHQ8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPiBcblx0XHRcdDxoMj5DdXN0b20gRGlyZWN0aXZlOiAqbXlVbmxlc3M8L2gyPiBcblx0XHRcdDxkaXY+IFxuXHRcdFx0XHRFbnRlciB0cnVlIG9yIGZhbHNlIFxuXHRcdFx0XHQ8YnI+IFxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjY29uZGl0aW9uIChrZXl1cCk9XCIwXCI+IFxuXHRcdFx0PC9kaXY+IFxuXHRcdFx0PGRpdiAqbXlVbmxlc3M9XCJjb25kaXRpb24udmFsdWUgIT0gJ2ZhbHNlJ1wiPiBcblx0XHRcdFx0T25seSBzaG93biBpZiAnZmFsc2UnIHdhcyBlbnRlcmVkIFxuXHRcdFx0PC9kaXY+XG5cdGBcblx0LCBcblx0ZGlyZWN0aXZlczogW1VubGVzc0RpcmVjdGl2ZV1cbn0pIFxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyYWxEaXJlY3RpdmVzIHsgXG5cdGxpc3QgPSBbJ0FwcGxlJywgJ01pbGsnLCAnQnJlYWQnXTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
