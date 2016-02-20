System.register(['angular2/core', './test.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "Sam";
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: " \n\t\tHi, I'm <span [style.color] = \"inputElement.value === 'yes' ? 'red' : ''\">  \n\t\t{{name}} </span> and this is my very first Angular 2 component!   \n\n\t\t<span [class.is-awesome]=\"inputElement.value === 'yes'\"> \n\t\t\tIt's so awesome! \n\t\t</span>\n\t\t<br> \n\t\t<br> \n\t\tIs it awesome? \n\t\t<input type=\"text\" #inputElement (keyup)=\"0\"> \n\t\t<br><br> \n\t\t<button [disabled]=\"inputElement.value !== 'yes'\" > \n\t\t \tOnly enabled if 'yes' was entered \n\t\t</button> \n\t\t<test></test>\n\t",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            })();
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiTXlDb21wb25lbnRDb21wb25lbnQiLCJNeUNvbXBvbmVudENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIk15Q29tcG9uZW50Q29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7Z0JBK0JBQyxDQUFDQTtnQkFKQUQsdUNBQVFBLEdBQVJBO29CQUNDRSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDbkJBLENBQUNBO2dCQTdCRkY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsY0FBY0E7d0JBQ3hCQSxRQUFRQSxFQUFFQSx3Z0JBZ0JUQTt3QkFDREEsU0FBU0EsRUFBRUEsQ0FBQ0EseUJBQXlCQSxDQUFDQTt3QkFDdENBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFhQSxDQUFDQTtxQkFDM0JBLENBQUNBOzt5Q0FVREE7Z0JBQURBLDJCQUFDQTtZQUFEQSxDQS9CQSxBQStCQ0EsSUFBQTtZQS9CRCx1REErQkMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7ICBcbmltcG9ydCB7VGVzdENvbXBvbmVudH0gZnJvbSAnLi90ZXN0LmNvbXBvbmVudCc7IFxuICBcbkBDb21wb25lbnQoeyBcblx0c2VsZWN0b3I6ICdteS1jb21wb25lbnQnLCBcblx0dGVtcGxhdGU6IGAgXG5cdFx0SGksIEknbSA8c3BhbiBbc3R5bGUuY29sb3JdID0gXCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnID8gJ3JlZCcgOiAnJ1wiPiAgXG5cdFx0e3tuYW1lfX0gPC9zcGFuPiBhbmQgdGhpcyBpcyBteSB2ZXJ5IGZpcnN0IEFuZ3VsYXIgMiBjb21wb25lbnQhICAgXG5cblx0XHQ8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnXCI+IFxuXHRcdFx0SXQncyBzbyBhd2Vzb21lISBcblx0XHQ8L3NwYW4+XG5cdFx0PGJyPiBcblx0XHQ8YnI+IFxuXHRcdElzIGl0IGF3ZXNvbWU/IFxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj4gXG5cdFx0PGJyPjxicj4gXG5cdFx0PGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlICE9PSAneWVzJ1wiID4gXG5cdFx0IFx0T25seSBlbmFibGVkIGlmICd5ZXMnIHdhcyBlbnRlcmVkIFxuXHRcdDwvYnV0dG9uPiBcblx0XHQ8dGVzdD48L3Rlc3Q+XG5cdGAsICAgXG5cdHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddLCBcblx0ZGlyZWN0aXZlczogW1Rlc3RDb21wb25lbnRdXG59KSBcblxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0eyBcbiBcdCBcdCAgXG5cdG5hbWU6IHN0cmluZztcblxuXHRuZ09uSW5pdCgpOmFueSB7IFxuXHRcdHRoaXMubmFtZSA9IFwiU2FtXCI7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
