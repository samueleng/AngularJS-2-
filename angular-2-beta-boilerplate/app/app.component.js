System.register(['angular2/core', './property-binding.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = '';
                    this.hobbies = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: " \n    \t<section class=\"parent\"> \n    \t\n    \t\t<h2> This is the parent component </h2>   \n    \t\t<h4>Please enter your name</h4> \n    \t\t<input type=\"text\" [(ngModel)]=\"name\">  \n    \t\t<h4>Please enter your age</h4> \n    \t\t<input type=\"text\" [(ngModel)]=\"age\"> \n    \t\t<br><br> \n\n    \t\t\t<section class=\"child\"> \n    \t\t\t\t<my-property-binding [myName]=\"name\" [myAge]=\"age\" \n    \t\t\t\t(hobbiesChanged)=\"hobbies = $event\"> \n    \t\t\t\t</my-property-binding> \n    \t\t\t</section>   \n\n    \t\t<p>My hobbies are: {{hobbies}} </p> \n\n    \t</section>\n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7b0JBeUJDQyxTQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDVkEsWUFBT0EsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQ2RBLENBQUNBO2dCQTNCREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxRQUFRQSxFQUFFQSw0bEJBbUJUQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EscURBQXdCQSxDQUFDQTtxQkFDekNBLENBQUNBOztpQ0FJREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQTNCQSxBQTJCQ0EsSUFBQTtZQTNCRCx1Q0EyQkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnOyBcbmltcG9ydCB7UHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL3Byb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsIC8vIHdlIGNhbiB1c2UgPG15LWFwcD48L215LWFwcD4gdGFnXG4gICAgdGVtcGxhdGU6IGAgXG4gICAgXHQ8c2VjdGlvbiBjbGFzcz1cInBhcmVudFwiPiBcbiAgICBcdFxuICAgIFx0XHQ8aDI+IFRoaXMgaXMgdGhlIHBhcmVudCBjb21wb25lbnQgPC9oMj4gICBcbiAgICBcdFx0PGg0PlBsZWFzZSBlbnRlciB5b3VyIG5hbWU8L2g0PiBcbiAgICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJuYW1lXCI+ICBcbiAgICBcdFx0PGg0PlBsZWFzZSBlbnRlciB5b3VyIGFnZTwvaDQ+IFxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImFnZVwiPiBcbiAgICBcdFx0PGJyPjxicj4gXG5cbiAgICBcdFx0XHQ8c2VjdGlvbiBjbGFzcz1cImNoaWxkXCI+IFxuICAgIFx0XHRcdFx0PG15LXByb3BlcnR5LWJpbmRpbmcgW215TmFtZV09XCJuYW1lXCIgW215QWdlXT1cImFnZVwiIFxuICAgIFx0XHRcdFx0KGhvYmJpZXNDaGFuZ2VkKT1cImhvYmJpZXMgPSAkZXZlbnRcIj4gXG4gICAgXHRcdFx0XHQ8L215LXByb3BlcnR5LWJpbmRpbmc+IFxuICAgIFx0XHRcdDwvc2VjdGlvbj4gICBcblxuICAgIFx0XHQ8cD5NeSBob2JiaWVzIGFyZToge3tob2JiaWVzfX0gPC9wPiBcblxuICAgIFx0PC9zZWN0aW9uPlxuICAgIGAsIFxuICAgIGRpcmVjdGl2ZXM6IFtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnRdICBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0bmFtZSA9ICcnOyBcblx0aG9iYmllcyA9ICcnO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
