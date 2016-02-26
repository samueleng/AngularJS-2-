import {Component} from 'angular2/core';
import {DataDrivenForm} from "./data-driven-form.component";


@Component({
    selector: 'my-app',
    template: `
        <my-data-form></my-data-form>
    `,
    directives: [DataDrivenForm]
})
export class AppComponent {

}
