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
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this._defaultColor = 'green';
                }
                // ngOnInit():any { 
                // 	this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this.highlightColor  
                // 		|| this._defaultColor);
                // } 
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.highlight(this.highlightColor || this._defaultColor);
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.highlight(null);
                };
                HighlightDirective.prototype.highlight = function (color) {
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        inputs: ['highlightColor: myHighlight'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            })();
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiSGlnaGxpZ2h0RGlyZWN0aXZlIiwiSGlnaGxpZ2h0RGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiSGlnaGxpZ2h0RGlyZWN0aXZlLm9uTW91c2VFbnRlciIsIkhpZ2hsaWdodERpcmVjdGl2ZS5vbk1vdXNlTGVhdmUiLCJIaWdobGlnaHREaXJlY3RpdmUuaGlnaGxpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFZQ0EsNEJBQW9CQSxNQUFrQkEsRUFBVUEsU0FBbUJBO29CQUEvQ0MsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBWUE7b0JBQVVBLGNBQVNBLEdBQVRBLFNBQVNBLENBQVVBO29CQUgzREEsa0JBQWFBLEdBQUVBLE9BQU9BLENBQUNBO2dCQUd1Q0EsQ0FBQ0E7Z0JBRXZFRCxvQkFBb0JBO2dCQUNwQkEsdUdBQXVHQTtnQkFDdkdBLDRCQUE0QkE7Z0JBQzVCQSxLQUFLQTtnQkFFTEEseUNBQVlBLEdBQVpBO29CQUNDRSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxJQUFJQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtnQkFDM0RBLENBQUNBO2dCQUVERix5Q0FBWUEsR0FBWkE7b0JBQ0NHLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBRU9ILHNDQUFTQSxHQUFqQkEsVUFBa0JBLEtBQWFBO29CQUM5QkksSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsRUFDdkRBLGtCQUFrQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkE5QkZKO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLGVBQWVBO3dCQUN6QkEsTUFBTUEsRUFBRUEsQ0FBQ0EsNkJBQTZCQSxDQUFDQTt3QkFDdkNBLElBQUlBLEVBQUVBOzRCQUNMQSxjQUFjQSxFQUFFQSxnQkFBZ0JBOzRCQUNoQ0EsY0FBY0EsRUFBRUEsZ0JBQWdCQTt5QkFDaENBO3FCQUNEQSxDQUFDQTs7dUNBd0JEQTtnQkFBREEseUJBQUNBO1lBQURBLENBL0JBLEFBK0JDQSxJQUFBO1lBL0JELG1EQStCQyxDQUFBIiwiZmlsZSI6ImhpZ2hsaWdodC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7ICBcbiAgXG5ARGlyZWN0aXZlKHsgXG5cdHNlbGVjdG9yOiAnW215SGlnaGxpZ2h0XScsIFxuXHRpbnB1dHM6IFsnaGlnaGxpZ2h0Q29sb3I6IG15SGlnaGxpZ2h0J10sIFxuXHRob3N0OiB7IFxuXHRcdCcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCknLCBcblx0XHQnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xuXHR9XG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodERpcmVjdGl2ZXsgXG5cdHByaXZhdGUgX2RlZmF1bHRDb2xvcjogJ2dyZWVuJzsgXG5cdGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcikge30gXG5cblx0Ly8gbmdPbkluaXQoKTphbnkgeyBcblx0Ly8gXHR0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLmhpZ2hsaWdodENvbG9yICBcblx0Ly8gXHRcdHx8IHRoaXMuX2RlZmF1bHRDb2xvcik7XG5cdC8vIH0gXG5cblx0b25Nb3VzZUVudGVyKCl7IFxuXHRcdHRoaXMuaGlnaGxpZ2h0KHRoaXMuaGlnaGxpZ2h0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcblx0fSBcblxuXHRvbk1vdXNlTGVhdmUoKXsgXG5cdFx0dGhpcy5oaWdobGlnaHQobnVsbCk7XG5cdH0gXG5cblx0cHJpdmF0ZSBoaWdobGlnaHQoY29sb3I6IHN0cmluZyl7IFxuXHRcdHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0J2JhY2tncm91bmQtY29sb3InLCBjb2xvcik7XG5cdH1cbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
