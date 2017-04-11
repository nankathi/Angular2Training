import {Component,Input} from '@angular/core';

@Component({
    selector:'form-input',
    templateUrl:'src/modules/common/components/form/formInput.html'
})
export class FormInput{
        @Input() label:any;
        @Input() value:any;
}