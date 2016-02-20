import {Component} from 'angular2/core'; 
import {PropertyBindingComponent} from './property-binding.component';


@Component({
    selector: 'my-app', // we can use <my-app></my-app> tag
    template: ` 
    	<section class="parent"> 
    	
    		<h2> This is the parent component </h2>   
    		<h4>Please enter your name</h4> 
    		<input type="text" [(ngModel)]="name">  
    		<h4>Please enter your age</h4> 
    		<input type="text" [(ngModel)]="age"> 
    		<br><br> 

    			<section class="child"> 
    				<my-property-binding [myName]="name" [myAge]="age" 
    				(hobbiesChanged)="hobbies = $event"> 
    				</my-property-binding> 
    			</section>   

    		<p>My hobbies are: {{hobbies}} </p> 

    	</section>
    `, 
    directives: [PropertyBindingComponent]  
})
export class AppComponent {
	name = ''; 
	hobbies = '';
}