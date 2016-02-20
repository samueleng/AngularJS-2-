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
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.name = '';
                    this.age = '20';
                    this.hobbiesChanged = new core_1.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    this.hobbiesChanged.emit(hobbies);
                };
                __decorate([
                    core_1.Input('myAge'), 
                    __metadata('design:type', Object)
                ], PropertyBindingComponent.prototype, "age", void 0);
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: " \n \t\t<h2>This is the child component</h2> \n \t\t<p>Hey {{name}} and i am {{age}}!</p>  \n \t\t<h4>My hobbies are: </h4>\n \t\t<input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies>\n \t",
                        inputs: ['name: myName'],
                        outputs: ['hobbiesChanged']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            })();
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlByb3BlcnR5QmluZGluZ0NvbXBvbmVudCIsIlByb3BlcnR5QmluZGluZ0NvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlByb3BlcnR5QmluZGluZ0NvbXBvbmVudC5vbkhvYmJpZXNDaGFuZ2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7b0JBWUNDLFNBQUlBLEdBQUdBLEVBQUVBLENBQUNBO29CQUNNQSxRQUFHQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDM0JBLG1CQUFjQSxHQUFHQSxJQUFJQSxtQkFBWUEsRUFBVUEsQ0FBQ0E7Z0JBSzdDQSxDQUFDQTtnQkFIQUQsbURBQWdCQSxHQUFoQkEsVUFBaUJBLE9BQWVBO29CQUMvQkUsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ25DQSxDQUFDQTtnQkFMREY7b0JBQUNBLFlBQUtBLENBQUNBLE9BQU9BLENBQUNBOzttQkFBQ0EseUNBQUdBLFVBQVFBO2dCQWI1QkE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEscUJBQXFCQTt3QkFDL0JBLFFBQVFBLEVBQUVBLG1OQUtUQTt3QkFDREEsTUFBTUEsRUFBRUEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7d0JBQ3hCQSxPQUFPQSxFQUFFQSxDQUFDQSxnQkFBZ0JBLENBQUNBO3FCQUM1QkEsQ0FBQ0E7OzZDQVNEQTtnQkFBREEsK0JBQUNBO1lBQURBLENBbkJBLEFBbUJDQSxJQUFBO1lBbkJELCtEQW1CQyxDQUFBIiwiZmlsZSI6InByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnOyAgXG5cbiBcblxuQENvbXBvbmVudCh7IFxuIFx0c2VsZWN0b3I6ICdteS1wcm9wZXJ0eS1iaW5kaW5nJywgXG4gXHR0ZW1wbGF0ZTogYCBcbiBcdFx0PGgyPlRoaXMgaXMgdGhlIGNoaWxkIGNvbXBvbmVudDwvaDI+IFxuIFx0XHQ8cD5IZXkge3tuYW1lfX0gYW5kIGkgYW0ge3thZ2V9fSE8L3A+ICBcbiBcdFx0PGg0Pk15IGhvYmJpZXMgYXJlOiA8L2g0PlxuIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAoa2V5dXApPVwib25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzLnZhbHVlKVwiICNob2JiaWVzPlxuIFx0YCwgXG4gXHRpbnB1dHM6IFsnbmFtZTogbXlOYW1lJ10sXG4gXHRvdXRwdXRzOiBbJ2hvYmJpZXNDaGFuZ2VkJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50IHsgXG5cdG5hbWUgPSAnJzsgXG5cdEBJbnB1dCgnbXlBZ2UnKSBhZ2UgPSAnMjAnOyBcblx0aG9iYmllc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTsgXG5cblx0b25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzOiBzdHJpbmcpeyBcblx0XHR0aGlzLmhvYmJpZXNDaGFuZ2VkLmVtaXQoaG9iYmllcyk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
