/**
 * Created by sameng on 28/2/16.
 */
/**
 * Created by sameng on 28/2/16.
 */
import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {CanDeactivate} from "angular2/router";
import {ComponentInstruction} from "angular2/router";

@Component({
    template: `
       <h2>This is Component 2</h2>
       <button (click)="onNavigate()">Take me to Component 1</button>
    `
})
export class Component2Component implements CanDeactivate{
    constructor(private _router: Router){}

    onNavigate(){
        this._router.navigate(['Component1',{source: 'Component2'}]);
    }

    routerCanDeactivate(nextInstruction: ComponentInstruction, previousInstruction: ComponentInstruction):any{
        return confirm("Confirm?");
    }
}