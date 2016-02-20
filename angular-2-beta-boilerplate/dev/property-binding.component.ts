import {Component, Input, EventEmitter} from 'angular2/core';  

 

@Component({ 
 	selector: 'my-property-binding', 
 	template: ` 
 		<h2>This is the child component</h2> 
 		<p>Hey {{name}} and i am {{age}}!</p>  
 		<h4>My hobbies are: </h4>
 		<input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
 	`, 
 	inputs: ['name: myName'],
 	outputs: ['hobbiesChanged']
})
export class PropertyBindingComponent { 
	name = ''; 
	@Input('myAge') age = '20'; 
	hobbiesChanged = new EventEmitter<string>(); 

	onHobbiesChanged(hobbies: string){ 
		this.hobbiesChanged.emit(hobbies);
	}
}