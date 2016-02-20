import {Component} from 'angular2/core';
import {PuzzleComponent} from "./puzzle/puzzle.component"; 

@Component({
    selector: 'my-app', // we can use <my-app></my-app> tag
    template: ` 
    	<my-puzzle></my-puzzle>
    `,  
    directives: [PuzzleComponent]
})
export class AppComponent {

}