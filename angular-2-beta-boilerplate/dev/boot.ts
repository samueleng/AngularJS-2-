///<reference path="../node_modules/angular2/platform/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {CalculatorService} from "./services/calculator.service";
import {LoggingService} from "./services/logging.service";
import {DataService} from "./services/data.service";


bootstrap(AppComponent, [CalculatorService, LoggingService, DataService]);
