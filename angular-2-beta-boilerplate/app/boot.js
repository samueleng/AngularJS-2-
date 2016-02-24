System.register(['angular2/platform/browser', "./app.component", "./services/calculator.service", "./services/logging.service", "./services/data.service"], function(exports_1) {
    var browser_1, app_component_1, calculator_service_1, logging_service_1, data_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [calculator_service_1.CalculatorService, logging_service_1.LoggingService, data_service_1.DataService]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQSxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsRUFBRSxnQ0FBYyxFQUFFLDBCQUFXLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2FsY3VsYXRvclNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcblxuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbQ2FsY3VsYXRvclNlcnZpY2UsIExvZ2dpbmdTZXJ2aWNlLCBEYXRhU2VydmljZV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
