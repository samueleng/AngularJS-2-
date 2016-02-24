/**
 * Created by sameng on 23/2/16.
 */

import {Injectable} from "angular2/core";

@Injectable()
export class LoggingService {

    private _lastMessage: string;

    log(message: string){
        console.log("This is your current message: "  + message + "|| " + "This is your last message: " + this._lastMessage);
        this._lastMessage = message;
    }

}