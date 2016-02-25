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
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this._data = ['Summer', 'Winter', 'Autumn', 'Spring'];
                }
                DataService.prototype.getRandomString = function () {
                    var ranNum = Math.floor(Math.random() * this._data.length);
                    return this._data[ranNum];
                };
                DataService.prototype.insert = function (name) {
                    this._data.push(name);
                };
                DataService.prototype.getFullData = function () {
                    return this._data;
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            })();
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6WyJEYXRhU2VydmljZSIsIkRhdGFTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiRGF0YVNlcnZpY2UuZ2V0UmFuZG9tU3RyaW5nIiwiRGF0YVNlcnZpY2UuaW5zZXJ0IiwiRGF0YVNlcnZpY2UuZ2V0RnVsbERhdGEiXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUg7Z0JBQUFBO29CQUdZQyxVQUFLQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxRQUFRQSxFQUFFQSxRQUFRQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFpQjdEQSxDQUFDQTtnQkFmR0QscUNBQWVBLEdBQWZBO29CQUNJRSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtvQkFDM0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUM5QkEsQ0FBQ0E7Z0JBRURGLDRCQUFNQSxHQUFOQSxVQUFPQSxJQUFZQTtvQkFFZkcsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBRTFCQSxDQUFDQTtnQkFFREgsaUNBQVdBLEdBQVhBO29CQUNJSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtnQkFDdEJBLENBQUNBO2dCQWxCTEo7b0JBQUNBLGlCQUFVQSxFQUFFQTs7Z0NBb0JaQTtnQkFBREEsa0JBQUNBO1lBQURBLENBcEJBLEFBb0JDQSxJQUFBO1lBcEJELHFDQW9CQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2RhdGEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBzYW1lbmcgb24gMjMvMi8xNi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9kYXRhID0gWydTdW1tZXInLCAnV2ludGVyJywgJ0F1dHVtbicsICdTcHJpbmcnXTtcblxuICAgIGdldFJhbmRvbVN0cmluZygpe1xuICAgICAgICBsZXQgcmFuTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fZGF0YS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtyYW5OdW1dO1xuICAgIH1cblxuICAgIGluc2VydChuYW1lOiBzdHJpbmcpe1xuXG4gICAgICAgIHRoaXMuX2RhdGEucHVzaChuYW1lKTtcblxuICAgIH1cblxuICAgIGdldEZ1bGxEYXRhKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
