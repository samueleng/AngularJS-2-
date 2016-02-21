import {Component} from 'angular2/core';  
import {UnlessDirective} from './unless.directive';

@Component({
	selector: 'my-structural-directives',
	template: `   
		<section class="directive"> 
			<h2>*ngIf</h2> 
			<div> 
				Enter a number greater than 10 
				<br> 
				<input type="text" #number (keyup)="0"> 
			</div> 
			<div *ngIf="number.value > 10"> 
				Number is greater than 10 
			</div>
		</section> 
		<section class="directive"> 
			<h2>*ngFor</h2> 
			<div> 
				<ul> 
					<li *ngFor="#item of list, #i = index"> {{i}}:{{item}}</li> 
				</ul> 
			</div> 
		</section> 

		<section class = "directive"> 
			<h2>[ngSwitch]</h2> 
			<div> 
				Enter red, blue or green 
				<br> 
				<input type="text" #color (keyup)="0"> 
			</div> 
			<div [ngSwitch]="color.value"> 
				<template [ngSwitchWhen]="'red'"><span style="color: red">color is red</span></template>  
				<template [ngSwitchWhen]="'blue'"><span style="color: blue">color is blue</span></template> 
				<template [ngSwitchWhen]="'green'"><span style="color: green">color is green</span></template>  
				<template ngSwitchDefault><span style="color: red">color is red</span></template> 
			</div>
		</section> 
		<section class="directive"> 
			<h2>Custom Directive: *myUnless</h2> 
			<div> 
				Enter true or false 
				<br> 
				<input type="text" #condition (keyup)="0"> 
			</div> 
			<div *myUnless="condition.value != 'false'"> 
				Only shown if 'false' was entered 
			</div>
	`
	, 
	directives: [UnlessDirective]
}) 
export class StructuralDirectives { 
	list = ['Apple', 'Milk', 'Bread'];
}