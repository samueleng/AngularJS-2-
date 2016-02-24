/**
 * Created by sameng on 23/2/16.
 */

import {Injectable} from "angular2/core";

@Injectable()
export class CalculatorService {


    onAdd(num1: number, num2: number){
        return num1 + num2;
    }

    onMultiply(num1: number, num2: number){
        return num1 * num2;
    }

}