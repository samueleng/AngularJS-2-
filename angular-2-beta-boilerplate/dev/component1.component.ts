/**
 * Created by sameng on 23/2/16.
 */
import {Component} from 'angular2/core';
import {LoggingService} from "./services/logging.service";
import {CalculatorService} from "./services/calculator.service";
import {DataService} from "./services/data.service";

@Component({
    selector: 'component-1',
    template: `
         <div>
            <h1>Logging Service</h1>
                <input type="text" #message>
                <button (click)="onlog(message.value)">Send</button>
         </div>
         <br><br>
         <div>
            <h1>Calculator Service</h1>
            <p>Add or multiply these two numbers</p>
            <input type="text" #num1>
            <input type="text" #num2>
            <button (click)="onAdd(num1.value, num2.value)">Add</button>
            <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
            <br>
            <p>Result : {{result}}</p>
         </div>

         <div>
            <h1>Data Services</h1>
             <p>Get some data</p>
             <button (click)="onGetData()">Get data</button>
             <p>This is your random data: {{data}} </p>

             <h1>Insert some data</h1>
             <input text="text" #newData>
             <button (click)="insertData(newData.value)">Insert</button>

             <h1>Show current array</h1>
             <button (click)="onGetFullData()">Get Full Array</button>
             <p>This is your current array: {{fullData}}</p>
         </div>
    `,

})
export class Component1Component {
    result = '';
    data = '';
    fullData = [];

    constructor(private _loggingService: LoggingService, private _calculatorService: CalculatorService,
                private _dataService: DataService){}

    onlog(message: string){
        this._loggingService.log(message);
    }

    onAdd(num1: string, num2: string){

        this.result = '' + this._calculatorService.onAdd(+num1, +num2);

    }


    onMultiply(num1: string, num2: string){

        this.result = '' + this._calculatorService.onMultiply(+num1, +num2);

    }

    onGetData(){

        this.data = this._dataService.getRandomString();

    }

    insertData(name: string){

        this._dataService.insert(name);
        
    }

    onGetFullData(){

        this.fullData = this._dataService.getFullData();

    }

}