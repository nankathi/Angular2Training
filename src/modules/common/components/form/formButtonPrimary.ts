import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'form-button-primary',
    template:`
                <button class="btn {{cls}}" (click)="onClicked.emit()" >{{label}}</button>  
                `
})
export class FormButtonPrimary{
    public cls = "btn-primary";
        @Input() label:any;
        @Output() onClicked:EventEmitter<any> = new EventEmitter();
}