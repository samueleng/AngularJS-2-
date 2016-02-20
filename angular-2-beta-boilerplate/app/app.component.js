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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = 'Sam';
                    this.values = '';
                }
                AppComponent.prototype.onTest = function () {
                    return 1 === 1;
                };
                AppComponent.prototype.onKeyUp = function (value) {
                    this.values += value + ' | ';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: " \t\n\t    {{onTest()}} \n\t    <input type=\"text\" [value]=\"name\" [ngClass]=\"{red: true}\" \n\t    (keyup)=\"onKeyUp(inputElement.value)\" #inputElement>  \n\n\t    <p>{{values}}</p> \n\t    <br><br> \n\t    <input type=\"text\" [(ngModel)]=\"name\"> \n\t    <p>Your Name: {{name}}</p>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm9uVGVzdCIsIkFwcENvbXBvbmVudC5vbktleVVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7b0JBY0NDLFNBQUlBLEdBQUdBLEtBQUtBLENBQUNBO29CQUNiQSxXQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFTYkEsQ0FBQ0E7Z0JBUEFELDZCQUFNQSxHQUFOQTtvQkFDQ0UsTUFBTUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hCQSxDQUFDQTtnQkFFREYsOEJBQU9BLEdBQVBBLFVBQVFBLEtBQWFBO29CQUNwQkcsSUFBSUEsQ0FBQ0EsTUFBTUEsSUFBSUEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQzlCQSxDQUFDQTtnQkF2QkZIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBRUEsMFNBU1RBO3FCQUNKQSxDQUFDQTs7aUNBWURBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0F4QkEsQUF3QkNBLElBQUE7WUF4QkQsdUNBd0JDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsIC8vIHdlIGNhbiB1c2UgPG15LWFwcD48L215LWFwcD4gdGFnXG4gICAgdGVtcGxhdGU6IGAgXHRcblx0ICAgIHt7b25UZXN0KCl9fSBcblx0ICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJuYW1lXCIgW25nQ2xhc3NdPVwie3JlZDogdHJ1ZX1cIiBcblx0ICAgIChrZXl1cCk9XCJvbktleVVwKGlucHV0RWxlbWVudC52YWx1ZSlcIiAjaW5wdXRFbGVtZW50PiAgXG5cblx0ICAgIDxwPnt7dmFsdWVzfX08L3A+IFxuXHQgICAgPGJyPjxicj4gXG5cdCAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIj4gXG5cdCAgICA8cD5Zb3VyIE5hbWU6IHt7bmFtZX19PC9wPlxuICAgIGAsICBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0bmFtZSA9ICdTYW0nOyBcblx0dmFsdWVzID0gJyc7IFxuXG5cdG9uVGVzdCgpeyBcblx0XHRyZXR1cm4gMSA9PT0gMTtcblx0fSBcblxuXHRvbktleVVwKHZhbHVlOiBzdHJpbmcpeyBcblx0XHR0aGlzLnZhbHVlcyArPSB2YWx1ZSArICcgfCAnO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
