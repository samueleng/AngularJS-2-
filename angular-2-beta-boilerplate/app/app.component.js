System.register(['angular2/core', './attribute-directives.component', './structural-directives.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, attribute_directives_component_1, structural_directives_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (attribute_directives_component_1_1) {
                attribute_directives_component_1 = attribute_directives_component_1_1;
            },
            function (structural_directives_component_1_1) {
                structural_directives_component_1 = structural_directives_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: " \n    \t<my-attribute-directives></my-attribute-directives> \n    \t<br> \n    \t<h1>StructuralDirectives</h1> \n    \t<my-structural-directives></my-structural-directives>\n    ",
                        directives: [attribute_directives_component_1.AttributeDirectives, structural_directives_component_1.StructuralDirectives]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQUE7Z0JBV0FDLENBQUNBO2dCQVhERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFFBQVFBLEVBQUVBLHFMQUtUQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0Esb0RBQW1CQSxFQUFFQSxzREFBb0JBLENBQUNBO3FCQUMxREEsQ0FBQ0E7O2lDQUVEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBWEEsQUFXQ0EsSUFBQTtZQVhELHVDQVdDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJzsgIFxuaW1wb3J0IHtBdHRyaWJ1dGVEaXJlY3RpdmVzfSBmcm9tICcuL2F0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudCc7IFxuaW1wb3J0IHtTdHJ1Y3R1cmFsRGlyZWN0aXZlc30gZnJvbSAnLi9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsIC8vIHdlIGNhbiB1c2UgPG15LWFwcD48L215LWFwcD4gdGFnXG4gICAgdGVtcGxhdGU6IGAgXG4gICAgXHQ8bXktYXR0cmlidXRlLWRpcmVjdGl2ZXM+PC9teS1hdHRyaWJ1dGUtZGlyZWN0aXZlcz4gXG4gICAgXHQ8YnI+IFxuICAgIFx0PGgxPlN0cnVjdHVyYWxEaXJlY3RpdmVzPC9oMT4gXG4gICAgXHQ8bXktc3RydWN0dXJhbC1kaXJlY3RpdmVzPjwvbXktc3RydWN0dXJhbC1kaXJlY3RpdmVzPlxuICAgIGAsIFxuICAgIGRpcmVjdGl2ZXM6IFtBdHRyaWJ1dGVEaXJlY3RpdmVzLCBTdHJ1Y3R1cmFsRGlyZWN0aXZlc11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
