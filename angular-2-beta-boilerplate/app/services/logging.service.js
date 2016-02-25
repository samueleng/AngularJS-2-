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
    var LoggingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggingService = (function () {
                function LoggingService() {
                }
                LoggingService.prototype.log = function (message) {
                    console.log("This is your current message: " + message + "|| " + "This is your last message: " + this._lastMessage);
                    this._lastMessage = message;
                };
                LoggingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoggingService);
                return LoggingService;
            })();
            exports_1("LoggingService", LoggingService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6WyJMb2dnaW5nU2VydmljZSIsIkxvZ2dpbmdTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiTG9nZ2luZ1NlcnZpY2UubG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlIO2dCQUFBQTtnQkFVQUMsQ0FBQ0E7Z0JBTEdELDRCQUFHQSxHQUFIQSxVQUFJQSxPQUFlQTtvQkFDZkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZ0NBQWdDQSxHQUFJQSxPQUFPQSxHQUFHQSxLQUFLQSxHQUFHQSw2QkFBNkJBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO29CQUNySEEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsT0FBT0EsQ0FBQ0E7Z0JBQ2hDQSxDQUFDQTtnQkFSTEY7b0JBQUNBLGlCQUFVQSxFQUFFQTs7bUNBVVpBO2dCQUFEQSxxQkFBQ0E7WUFBREEsQ0FWQSxBQVVDQSxJQUFBO1lBVkQsMkNBVUMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgc2FtZW5nIG9uIDIzLzIvMTYuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2luZ1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfbGFzdE1lc3NhZ2U6IHN0cmluZztcblxuICAgIGxvZyhtZXNzYWdlOiBzdHJpbmcpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgeW91ciBjdXJyZW50IG1lc3NhZ2U6IFwiICArIG1lc3NhZ2UgKyBcInx8IFwiICsgXCJUaGlzIGlzIHlvdXIgbGFzdCBtZXNzYWdlOiBcIiArIHRoaXMuX2xhc3RNZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fbGFzdE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
