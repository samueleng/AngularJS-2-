/**
 * Created by sameng on 23/2/16.
 */
System.register(["angular2/core"], function(exports_1) {
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
    var CalculatorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CalculatorService = (function () {
                function CalculatorService() {
                }
                CalculatorService.prototype.onAdd = function (num1, num2) {
                    return num1 + num2;
                };
                CalculatorService.prototype.onMultiply = function (num1, num2) {
                    return num1 * num2;
                };
                CalculatorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CalculatorService);
                return CalculatorService;
            })();
            exports_1("CalculatorService", CalculatorService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yU2VydmljZSIsIkNhbGN1bGF0b3JTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclNlcnZpY2Uub25BZGQiLCJDYWxjdWxhdG9yU2VydmljZS5vbk11bHRpcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlIO2dCQUFBQTtnQkFZQUMsQ0FBQ0E7Z0JBUkdELGlDQUFLQSxHQUFMQSxVQUFNQSxJQUFZQSxFQUFFQSxJQUFZQTtvQkFDNUJFLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO2dCQUN2QkEsQ0FBQ0E7Z0JBRURGLHNDQUFVQSxHQUFWQSxVQUFXQSxJQUFZQSxFQUFFQSxJQUFZQTtvQkFDakNHLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO2dCQUN2QkEsQ0FBQ0E7Z0JBVkxIO29CQUFDQSxpQkFBVUEsRUFBRUE7O3NDQVlaQTtnQkFBREEsd0JBQUNBO1lBQURBLENBWkEsQUFZQ0EsSUFBQTtZQVpELGlEQVlDLENBQUEiLCJmaWxlIjoic2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHNhbWVuZyBvbiAyMy8yLzE2LlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JTZXJ2aWNlIHtcblxuXG4gICAgb25BZGQobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpe1xuICAgICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgfVxuXG4gICAgb25NdWx0aXBseShudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcil7XG4gICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
