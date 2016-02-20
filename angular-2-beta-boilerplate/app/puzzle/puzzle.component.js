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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: " \n\t\t<section class=\"setup\">   \n\t\t\t<h2>Game Setup</h2>\n\t\t\tEnter your name please: \n\t\t\t<input type=\"text\" #name (keyup)=\"0\">\n\t\t</section>\t \n\n\n\t\t<section  \n\t\t[ngClass]=\"{ \n\t\t\tpuzzle: true, \n\t\t\tsolved: switch1.value == switch1Number && \n\t\t\t\t\tswitch2.value == switch2Number && \n\t\t\t\t\tswitch3.value == switch3Number && \n\t\t\t\t\tswitch4.value == switch4Number \n\t\t}\"  \n\n\t\t[ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\"  \n\t\t> \n\n\t\t\t<h2> \n\t\t\t\tThe Puzzle |\n\t\t\t\t{{ switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED' }}\n\t\t\t</h2> \n\t\t\t<p>Ok, welcome <span class=\"name\">{{name.value}}</span></p> \n\t\t\t<br> \n\t\t\tSwitch 1: \n\t\t\t<input type=\"text\" #switch1 (keyup)=\"0\" ><br> \n\t\t\tSwitch 2: \n\t\t\t<input type=\"text\" #switch2 (keyup)=\"0\"><br>  \n\t\t\tSwitch 3: \n\t\t\t<input type=\"text\" #switch3 (keyup)=\"0\"><br>  \n\t\t\tSwitch 4: \n\t\t\t<input type=\"text\" #switch4 (keyup)=\"0\"><br>  \n\n\t\t</section> \n\t\t<h2 [hidden]=\"switch1.value != switch1Number || \n\t\t\t\t\tswitch2.value != switch2Number ||\n\t\t\t\t\tswitch3.value != switch3Number || \n\t\t\t\t\tswitch4.value != switch4Number\"  \n\t\t> Congratulations {{name.value}}, you did it!</h2>\n\t",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            })();
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlB1enpsZUNvbXBvbmVudCIsIlB1enpsZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlB1enpsZUNvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO2dCQTREQUMsQ0FBQ0E7Z0JBVEFELGtDQUFRQSxHQUFSQTtvQkFDQ0UsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQy9DQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDL0NBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLENBQUNBO29CQUMvQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBRS9DQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtnQkFDN0ZBLENBQUNBO2dCQTFERkY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsV0FBV0E7d0JBQ3JCQSxRQUFRQSxFQUFFQSx3MkNBeUNUQTtxQkFDREEsQ0FBQ0E7O29DQWdCREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQTVEQSxBQTREQ0EsSUFBQTtZQTVERCw2Q0E0REMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnOyAgXG4gXG5AQ29tcG9uZW50KHsgXG5cdHNlbGVjdG9yOiAnbXktcHV6emxlJywgXG5cdHRlbXBsYXRlOiBgIFxuXHRcdDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj4gICBcblx0XHRcdDxoMj5HYW1lIFNldHVwPC9oMj5cblx0XHRcdEVudGVyIHlvdXIgbmFtZSBwbGVhc2U6IFxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cblx0XHQ8L3NlY3Rpb24+XHQgXG5cblxuXHRcdDxzZWN0aW9uICBcblx0XHRbbmdDbGFzc109XCJ7IFxuXHRcdFx0cHV6emxlOiB0cnVlLCBcblx0XHRcdHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIFxuXHRcdFx0XHRcdHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBcblx0XHRcdFx0XHRzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgXG5cdFx0XHRcdFx0c3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyIFxuXHRcdH1cIiAgXG5cblx0XHRbbmdTdHlsZV09XCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snfVwiICBcblx0XHQ+IFxuXG5cdFx0XHQ8aDI+IFxuXHRcdFx0XHRUaGUgUHV6emxlIHxcblx0XHRcdFx0e3sgc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyID8gJ1NPTFZFRCcgOiAnTk9UIFNPTFZFRCcgfX1cblx0XHRcdDwvaDI+IFxuXHRcdFx0PHA+T2ssIHdlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPiBcblx0XHRcdDxicj4gXG5cdFx0XHRTd2l0Y2ggMTogXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiID48YnI+IFxuXHRcdFx0U3dpdGNoIDI6IFxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIj48YnI+ICBcblx0XHRcdFN3aXRjaCAzOiBcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+PGJyPiAgXG5cdFx0XHRTd2l0Y2ggNDogXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxicj4gIFxuXG5cdFx0PC9zZWN0aW9uPiBcblx0XHQ8aDIgW2hpZGRlbl09XCJzd2l0Y2gxLnZhbHVlICE9IHN3aXRjaDFOdW1iZXIgfHwgXG5cdFx0XHRcdFx0c3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyTnVtYmVyIHx8XG5cdFx0XHRcdFx0c3dpdGNoMy52YWx1ZSAhPSBzd2l0Y2gzTnVtYmVyIHx8IFxuXHRcdFx0XHRcdHN3aXRjaDQudmFsdWUgIT0gc3dpdGNoNE51bWJlclwiICBcblx0XHQ+IENvbmdyYXR1bGF0aW9ucyB7e25hbWUudmFsdWV9fSwgeW91IGRpZCBpdCE8L2gyPlxuXHRgLCAgXG59KSBcbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyBcblx0c3dpdGNoMU51bWJlcjogbnVtYmVyOyBcblx0c3dpdGNoMk51bWJlcjogbnVtYmVyOyBcblx0c3dpdGNoM051bWJlcjogbnVtYmVyOyBcblx0c3dpdGNoNE51bWJlcjogbnVtYmVyOyAgICBcblxuXHRuZ09uSW5pdCgpOiBhbnl7IFxuXHRcdHRoaXMuc3dpdGNoMU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7ICBcblx0XHR0aGlzLnN3aXRjaDJOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpOyAgXG5cdFx0dGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTsgIFxuXHRcdHRoaXMuc3dpdGNoNE51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7ICAgXG5cblx0XHRjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDFOdW1iZXIsIHRoaXMuc3dpdGNoMk51bWJlciwgdGhpcy5zd2l0Y2gzTnVtYmVyLCB0aGlzLnN3aXRjaDROdW1iZXIpO1xuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
