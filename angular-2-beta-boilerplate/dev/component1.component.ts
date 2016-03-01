/**
 * Created by sameng on 28/2/16.
 */
import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {Comp1MainComponent} from './comp1-main.component';
import {Comp1SubComponent} from './comp1-sub.component';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    template: `
        <div>
            Source was: {{source}}
        </div>

        <div>
            Optional: {{optional}}
        </div>

        <div>
            <a [routerLink]="['Component1Main']">Go to Component 1 Main</a>
            <a [routerLink]="['Component1Sub']">Go to Component 1 Sub</a>
        </div>

        <router-outlet></router-outlet>
    `
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Component1Main', component: Comp1MainComponent, useAsDefault: true},
    {path: '/subroute', name: 'Component1Sub', component: Comp1SubComponent}
])
export class Component1Component implements OnInit{
    source: string;
    optional: string;

    constructor(private _routeParams: RouteParams){}

    ngOnInit(): any{
        this.source = this._routeParams.get('source');
        this.optional = this._routeParams.get('optional');
        console.log(this.source);
    }
}