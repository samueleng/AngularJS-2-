System.register(['angular2/core', "./services/logging.service", "./services/calculator.service", "./services/data.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logging_service_1, calculator_service_1, data_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
                    this.result = '';
                    this.data = '';
                    this.fullData = [];
                }
                Component1Component.prototype.onlog = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.onAdd(+num1, +num2);
                };
                Component1Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.onMultiply(+num1, +num2);
                };
                Component1Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomString();
                };
                Component1Component.prototype.insertData = function (name) {
                    this._dataService.insert(name);
                };
                Component1Component.prototype.onGetFullData = function () {
                    this.fullData = this._dataService.getFullData();
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n         <div>\n            <h1>Logging Service</h1>\n                <input type=\"text\" #message>\n                <button (click)=\"onlog(message.value)\">Send</button>\n         </div>\n         <br><br>\n         <div>\n            <h1>Calculator Service</h1>\n            <p>Add or multiply these two numbers</p>\n            <input type=\"text\" #num1>\n            <input type=\"text\" #num2>\n            <button (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n            <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n            <br>\n            <p>Result : {{result}}</p>\n         </div>\n\n         <div>\n            <h1>Data Services</h1>\n             <p>Get some data</p>\n             <button (click)=\"onGetData()\">Get data</button>\n             <p>This is your random data: {{data}} </p>\n\n             <h1>Insert some data</h1>\n             <input text=\"text\" #newData>\n             <button (click)=\"insertData(newData.value)\">Insert</button>\n\n             <h1>Show current array</h1>\n             <button (click)=\"onGetFullData()\">Get Full Array</button>\n             <p>This is your current array: {{fullData}}</p>\n         </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component1Component);
                return Component1Component;
            })();
            exports_1("Component1Component", Component1Component);
        }
    }
});
//# sourceMappingURL=component1.component.js.map