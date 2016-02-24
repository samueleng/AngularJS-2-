/**
 * Created by sameng on 23/2/16.
 */

import {Injectable} from "angular2/core";

@Injectable()
export class DataService {

    private _data = ['Summer', 'Winter', 'Autumn', 'Spring'];

    getRandomString(){
        let ranNum = Math.floor(Math.random() * this._data.length);
        return this._data[ranNum];
    }

    insert(name: string){

        this._data.push(name);

    }

    getFullData(){
        return this._data;
    }

}