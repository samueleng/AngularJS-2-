import {Component} from 'angular2/core';


@Component({
    selector: 'my-app', // we can use <my-app></my-app> tag
    template: ` 	
	    {{onTest()}} 
	    <input type="text" [value]="name" [ngClass]="{red: true}" 
	    (keyup)="onKeyUp(inputElement.value)" #inputElement>  

	    <p>{{values}}</p> 
	    <br><br> 
	    <input type="text" [(ngModel)]="name"> 
	    <p>Your Name: {{name}}</p>
    `,  
})
export class AppComponent {
	name = 'Sam'; 
	values = ''; 

	onTest(){ 
		return 1 === 1;
	} 

	onKeyUp(value: string){ 
		this.values += value + ' | ';
	}
}