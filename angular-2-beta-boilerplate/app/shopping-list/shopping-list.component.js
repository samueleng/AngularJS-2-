System.register(['angular2/core', "./shopping-list-new-item.component", "./shopping-list-item.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemoved = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <section>\n           <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">\n                        {{listItem.name}}:{{listItem.amount}}\n                    </li>\n                </ul>\n            </div>\n        </section>\n        <section *ngIf=\"selectedItem != null\">\n           <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemoved($event)\"></shopping-list-item>\n        </section>\n    ",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            })();
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU2hvcHBpbmdMaXN0Q29tcG9uZW50IiwiU2hvcHBpbmdMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiU2hvcHBpbmdMaXN0Q29tcG9uZW50Lm9uSXRlbUFkZGVkIiwiU2hvcHBpbmdMaXN0Q29tcG9uZW50Lm9uU2VsZWN0IiwiU2hvcHBpbmdMaXN0Q29tcG9uZW50Lm9uUmVtb3ZlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUFBO29CQXVCSUMsY0FBU0EsR0FBR0EsSUFBSUEsS0FBS0EsRUFBWUEsQ0FBQ0E7Z0JBZXRDQSxDQUFDQTtnQkFaR0QsMkNBQVdBLEdBQVhBLFVBQVlBLElBQWNBO29CQUN0QkUsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hFQSxDQUFDQTtnQkFFREYsd0NBQVFBLEdBQVJBLFVBQVNBLElBQWNBO29CQUNuQkcsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFFREgseUNBQVNBLEdBQVRBLFVBQVVBLElBQWNBO29CQUNwQkksSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZEQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDN0JBLENBQUNBO2dCQXJDTEo7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZUFBZUE7d0JBQ3pCQSxRQUFRQSxFQUFFQSxrcUJBaUJUQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsK0RBQTRCQSxFQUFFQSx3REFBeUJBLENBQUNBO3FCQUN4RUEsQ0FBQ0E7OzBDQWlCREE7Z0JBQURBLDRCQUFDQTtZQUFEQSxDQXRDQSxBQXNDQ0EsSUFBQTtZQXRDRCx5REFzQ0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHNhbWVuZyBvbiAyMS8yLzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tIFwiLi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QtaXRlbS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgPHNob3BwaW5nLWxpc3QtbmV3LWl0ZW0gKGl0ZW1BZGRlZCk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LW5ldy1pdGVtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgzPk15IExpc3Q8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjbGlzdEl0ZW0gb2YgbGlzdEl0ZW1zXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGxpc3RJdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tsaXN0SXRlbS5uYW1lfX06e3tsaXN0SXRlbS5hbW91bnR9fVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiAqbmdJZj1cInNlbGVjdGVkSXRlbSAhPSBudWxsXCI+XG4gICAgICAgICAgIDxzaG9wcGluZy1saXN0LWl0ZW0gW2l0ZW1dPVwic2VsZWN0ZWRJdGVtXCIgKHJlbW92ZWQpPVwib25SZW1vdmVkKCRldmVudClcIj48L3Nob3BwaW5nLWxpc3QtaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnQsIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudHtcbiAgICBsaXN0SXRlbXMgPSBuZXcgQXJyYXk8TGlzdEl0ZW0+KCk7XG4gICAgc2VsZWN0ZWRJdGVtOiBMaXN0SXRlbTtcblxuICAgIG9uSXRlbUFkZGVkKGl0ZW06IExpc3RJdGVtKXtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMucHVzaCh7bmFtZTogaXRlbS5uYW1lLCBhbW91bnQ6IGl0ZW0uYW1vdW50fSk7XG4gICAgfVxuXG4gICAgb25TZWxlY3QoaXRlbTogTGlzdEl0ZW0pe1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgb25SZW1vdmVkKGl0ZW06IExpc3RJdGVtKXtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMuc3BsaWNlKHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
