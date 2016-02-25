System.register(['angular2/core', "./services/logging.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logging_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService) {
                    this._loggingService = _loggingService;
                    this.result = '';
                }
                Component1Component.prototype.onlog = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n         <div>\n            <h1>Logging Service</h1>\n                <input type=\"text\" #message>\n                <button (click)=\"onlog(message.value)\">Send</button>\n         </div>\n         <br><br>\n         <div>\n            <h1>Calculator Service</h1>\n            <p>Add or multiply these two numbers</p>\n            <input type=\"text\" #num1>\n            <input type=\"text\" #num2>\n            <button (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n            <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n            <br>\n            <p>Result : {{result}}</p>\n         </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof logging_service_1.LoggingService !== 'undefined' && logging_service_1.LoggingService) === 'function' && _a) || Object])
                ], Component1Component);
                return Component1Component;
                var _a;
            })();
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkNvbXBvbmVudDFDb21wb25lbnQiLCJDb21wb25lbnQxQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQ29tcG9uZW50MUNvbXBvbmVudC5vbmxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBeUJJQSw2QkFBb0JBLGVBQStCQTtvQkFBL0JDLG9CQUFlQSxHQUFmQSxlQUFlQSxDQUFnQkE7b0JBRm5EQSxXQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFFeUNBLENBQUNBO2dCQUV0REQsbUNBQUtBLEdBQUxBLFVBQU1BLE9BQWVBO29CQUNqQkUsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RDQSxDQUFDQTtnQkE3QkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO3dCQUN2QkEsUUFBUUEsRUFBRUEsd29CQWlCVEE7cUJBRUpBLENBQUNBOzt3Q0FTREE7Z0JBQURBLDBCQUFDQTs7WUFBREEsQ0E5QkEsQUE4QkNBLElBQUE7WUE5QkQscURBOEJDLENBQUEiLCJmaWxlIjoic2VydmljZXMvY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgc2FtZW5nIG9uIDIzLzIvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Mb2dnaW5nIFNlcnZpY2U8L2gxPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtZXNzYWdlPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9ubG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5DYWxjdWxhdG9yIFNlcnZpY2U8L2gxPlxuICAgICAgICAgICAgPHA+QWRkIG9yIG11bHRpcGx5IHRoZXNlIHR3byBudW1iZXJzPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTE+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQWRkKG51bTEudmFsdWUsIG51bTIudmFsdWUpXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbk11bHRpcGx5KG51bTEudmFsdWUsIG51bTIudmFsdWUpXCI+TXVsdGlwbHk8L2J1dHRvbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxwPlJlc3VsdCA6IHt7cmVzdWx0fX08L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICBgLFxuXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDFDb21wb25lbnQge1xuICAgIHJlc3VsdCA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlKXt9XG5cbiAgICBvbmxvZyhtZXNzYWdlOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9sb2dnaW5nU2VydmljZS5sb2cobWVzc2FnZSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
