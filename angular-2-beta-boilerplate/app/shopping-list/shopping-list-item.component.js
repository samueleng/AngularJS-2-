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
    var ShoppingListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListItemComponent = (function () {
                function ShoppingListItemComponent() {
                    this.item = { name: '', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListItemComponent.prototype.onDelete = function () {
                    this.removed.emit(this.item);
                };
                ShoppingListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n         <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n        </div>\n        <div class=\"input\">\n            <label for=\"item-amt\">Amount</label>\n            <input type=\"text\" id=\"item-amount\" [(ngModel)]=\"item.amount\">\n        </div>\n        <button class=\"danger\" (click)=\"onDelete()\">Delete Item</button>\n    ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListItemComponent);
                return ShoppingListItemComponent;
            })();
            exports_1("ShoppingListItemComponent", ShoppingListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50IiwiU2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnQub25EZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtvQkFpQklDLFNBQUlBLEdBQUdBLEVBQUNBLElBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUNBLENBQUNBO29CQUM3QkEsWUFBT0EsR0FBR0EsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO2dCQU1qQ0EsQ0FBQ0E7Z0JBSkdELDRDQUFRQSxHQUFSQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxDQUFDQTtnQkF0QkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLG9CQUFvQkE7d0JBQzlCQSxRQUFRQSxFQUFFQSw0YkFVVEE7d0JBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLE1BQU1BLENBQUNBO3dCQUNoQkEsT0FBT0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7cUJBQ3ZCQSxDQUFDQTs7OENBU0RBO2dCQUFEQSxnQ0FBQ0E7WUFBREEsQ0F4QkEsQUF3QkNBLElBQUE7WUF4QkQsaUVBd0JDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHNhbWVuZyBvbiAyMi8yLzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCxFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QtaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbXRcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtb3VudFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkYW5nZXJcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZSBJdGVtPC9idXR0b24+XG4gICAgYCxcbiAgICBpbnB1dHM6IFsnaXRlbSddLFxuICAgIG91dHB1dHM6IFsncmVtb3ZlZCddXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnR7XG4gICAgaXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcbiAgICByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgb25EZWxldGUoKXtcbiAgICAgICAgdGhpcy5yZW1vdmVkLmVtaXQodGhpcy5pdGVtKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
