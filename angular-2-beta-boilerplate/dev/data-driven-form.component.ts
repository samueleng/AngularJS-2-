/**
 * Created by sameng on 26/2/16.
 */
import {Component} from 'angular2/core';
import {ControlGroup} from "angular2/common";
import {OnInit} from "angular2/core";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";
import {Control} from "angular2/common";

@Component({
    selector: 'my-data-form',
    template: `
        <h2>Sign up form</h2>
         <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div>
                <label>Mail</label>
                <input type="text" [ngFormControl]="myForm.controls['email']" #mail="ngForm">
                <span *ngIf="!mail.valid">Not valid</span>
            </div>
            <div>
                <label>Password</label>
                <input type="text" [ngFormControl]="myForm.controls['password']" #pw="ngForm">
                <span *ngIf="!pw.valid">Not valid</span>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="text" [ngFormControl]="myForm.controls['confirmPassword']" #confirmPw="ngForm">
                <span *ngIf="!confirmPw.valid || (pw.value != confirmPw.value)">Not valid</span>
            </div>
            <button type="submit">Submit</button>
        </form>
        <h2>You submitted:</h2>
        <div>Mail: {{user.email}}</div>
        <div>Password: {{user.password}}</div>
    `
})
export class DataDrivenForm implements OnInit{
    myForm: ControlGroup;
    user = {email: '', password: ''};

    constructor(private _formBuilder: FormBuilder){}

    ngOnInit(): any{
        this.myForm = this._formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.compose([
                Validators.required, hasNumbers
            ])],
            'confirmPassword': ['', Validators.required]
        });
    }

    onSubmit(){
        console.log(this.myForm.value);
        this.user = this.myForm.value;
    }

}

function hasNumbers(control: Control): {[s: string]: boolean}{
    if(!control.value.match("\\d+")){
        return {noNumbers: true}
    }
}