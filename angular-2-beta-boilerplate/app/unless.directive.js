System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                function UnlessDirective(_templateRef, _viewContainerRef) {
                    this._templateRef = _templateRef;
                    this._viewContainerRef = _viewContainerRef;
                }
                Object.defineProperty(UnlessDirective.prototype, "myUnless", {
                    set: function (condition) {
                        if (!condition) {
                            this._viewContainerRef.createEmbeddedView(this._templateRef);
                        }
                        else {
                            this._viewContainerRef.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                UnlessDirective = __decorate([
                    core_1.Directive({
                        selector: "[myUnless]",
                        inputs: ['myUnless']
                    }), 
                    __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            })();
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubGVzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiVW5sZXNzRGlyZWN0aXZlIiwiVW5sZXNzRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiVW5sZXNzRGlyZWN0aXZlLm15VW5sZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFLRUEseUJBQW9CQSxZQUF5QkEsRUFBVUEsaUJBQW1DQTtvQkFBdEVDLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFhQTtvQkFBVUEsc0JBQWlCQSxHQUFqQkEsaUJBQWlCQSxDQUFrQkE7Z0JBQUVBLENBQUNBO2dCQUU3RkQsc0JBQUlBLHFDQUFRQTt5QkFBWkEsVUFBYUEsU0FBa0JBO3dCQUM5QkUsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7NEJBQ2RBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTt3QkFDOURBLENBQUNBO3dCQUNEQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDTEEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTt3QkFDaENBLENBQUNBO29CQUNGQSxDQUFDQTs7O21CQUFBRjtnQkFkSEE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEsWUFBWUE7d0JBQ3RCQSxNQUFNQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQTtxQkFDckJBLENBQUNBOztvQ0FZREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCw2Q0FlQyxDQUFBIiwiZmlsZSI6InVubGVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnOyBcbiBcbkBEaXJlY3RpdmUoeyBcblx0IHNlbGVjdG9yOiBcIltteVVubGVzc11cIiwgXG5cdCBpbnB1dHM6IFsnbXlVbmxlc3MnXVxufSkgXG5leHBvcnQgY2xhc3MgVW5sZXNzRGlyZWN0aXZlIHsgXG4gXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWYsIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpe30gXG5cbiBcdHNldCBteVVubGVzcyhjb25kaXRpb246IGJvb2xlYW4peyBcbiBcdFx0aWYoIWNvbmRpdGlvbil7IFxuXHRcdFx0XHR0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZVJlZik7IFxuIFx0XHR9IFxuIFx0XHRlbHNlIHsgXG5cdFx0XHRcdHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiBcdFx0fVxuIFx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
