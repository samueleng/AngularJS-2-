System.register(['angular2/core', "./shopping-list.service", "angular2/common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_list_service_1, common_1, common_2;
    var ShoppingListNewItemComponent;
    function greaterZero(control) {
        if (control.value <= 0) {
            return { notEnough: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent(_shoppingListService, _formBuilder) {
                    this._shoppingListService = _shoppingListService;
                    this._formBuilder = _formBuilder;
                    this.item = { name: '', amount: 0 };
                }
                ShoppingListNewItemComponent.prototype.onSubmit = function () {
                    this._shoppingListService.insertItem({ name: this.item.name, amount: this.item.amount });
                };
                ShoppingListNewItemComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'itemName': ['', common_2.Validators.required],
                        'itemAmount': ['', common_2.Validators.compose([
                                common_2.Validators.required,
                                greaterZero
                            ])],
                    });
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"input\">\n                <label for=\"item-name\">Name</label>\n                <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\" [ngFormControl]=\"myForm.controls['itemName']\">\n            </div>\n            <div class=\"input\">\n                <label for=\"item-amt\">Amount</label>\n                <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\" [ngFormControl]=\"myForm.controls['itemAmount']\">\n            </div>\n            <button type=\"submit\" [disabled]=\"!myForm.valid\">Add Item</button>\n        </form>\n    ",
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUErQ0EscUJBQXFCLE9BQWdCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7O1lBMUJEO2dCQUlJLHNDQUFvQixvQkFBeUMsRUFBVSxZQUF5QjtvQkFBNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIaEcsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBR3NFLENBQUM7Z0JBRXBHLCtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUMzRixDQUFDO2dCQUdELCtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt3QkFDbEMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQ2xDLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsV0FBVzs2QkFDZCxDQUFDLENBQUM7cUJBQ04sQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbkNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLG9wQkFZVDtxQkFDSixDQUFDOztnREFBQTtnQkFxQkYsbUNBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHVFQW9CQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tIFwiLi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LW5ldy1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydpdGVtTmFtZSddXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLWFtdFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtdFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2l0ZW1BbW91bnQnXVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPkFkZCBJdGVtPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtID0ge25hbWU6ICcnLCBhbW91bnQ6IDB9O1xuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSwgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbSh7bmFtZTogdGhpcy5pdGVtLm5hbWUsIGFtb3VudDogdGhpcy5pdGVtLmFtb3VudH0pO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICdpdGVtTmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAnaXRlbUFtb3VudCc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIGdyZWF0ZXJaZXJvXG4gICAgICAgICAgICBdKV0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ3JlYXRlclplcm8oY29udHJvbDogQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIGlmIChjb250cm9sLnZhbHVlIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIHtub3RFbm91Z2g6IHRydWV9O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
