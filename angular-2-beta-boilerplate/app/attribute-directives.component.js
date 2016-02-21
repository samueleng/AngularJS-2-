System.register(['angular2/core', './highlight.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, highlight_directive_1;
    var AttributeDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectives = (function () {
                function AttributeDirectives() {
                }
                AttributeDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-attribute-directives',
                        template: "  \n\t\t<div [myHighlight]=\"'red'\"> \n\t\t\tHighlight me\n\t\t</div>\t  \n\t\t<br><br>\n\t\t<div [myHighlight]> \n\t\t\tAnother Highlight\n\t\t</div>\t\n\t",
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectives);
                return AttributeDirectives;
            })();
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJBdHRyaWJ1dGVEaXJlY3RpdmVzIiwiQXR0cmlidXRlRGlyZWN0aXZlcy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQWdCQUMsQ0FBQ0E7Z0JBaEJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSx5QkFBeUJBO3dCQUNuQ0EsUUFBUUEsRUFBRUEsK0pBUVRBO3dCQUVEQSxVQUFVQSxFQUFFQSxDQUFDQSx3Q0FBa0JBLENBQUNBO3FCQUNoQ0EsQ0FBQ0E7O3dDQUdEQTtnQkFBREEsMEJBQUNBO1lBQURBLENBaEJBLEFBZ0JDQSxJQUFBO1lBaEJELHFEQWdCQyxDQUFBIiwiZmlsZSI6ImF0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJzsgIFxuaW1wb3J0IHtIaWdobGlnaHREaXJlY3RpdmV9IGZyb20gJy4vaGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoeyBcblx0c2VsZWN0b3I6ICdteS1hdHRyaWJ1dGUtZGlyZWN0aXZlcycsIFxuXHR0ZW1wbGF0ZTogYCAgXG5cdFx0PGRpdiBbbXlIaWdobGlnaHRdPVwiJ3JlZCdcIj4gXG5cdFx0XHRIaWdobGlnaHQgbWVcblx0XHQ8L2Rpdj5cdCAgXG5cdFx0PGJyPjxicj5cblx0XHQ8ZGl2IFtteUhpZ2hsaWdodF0+IFxuXHRcdFx0QW5vdGhlciBIaWdobGlnaHRcblx0XHQ8L2Rpdj5cdFxuXHRgICBcblx0LCBcblx0ZGlyZWN0aXZlczogW0hpZ2hsaWdodERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlcyB7IFxuIFx0XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
