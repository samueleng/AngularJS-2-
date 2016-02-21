import {Component} from 'angular2/core';  
import {AttributeDirectives} from './attribute-directives.component'; 
import {StructuralDirectives} from './structural-directives.component';


@Component({
    selector: 'my-app', // we can use <my-app></my-app> tag
    template: ` 
    	<my-attribute-directives></my-attribute-directives> 
    	<br> 
    	<h1>StructuralDirectives</h1> 
    	<my-structural-directives></my-structural-directives>
    `, 
    directives: [AttributeDirectives, StructuralDirectives]
})
export class AppComponent {
}