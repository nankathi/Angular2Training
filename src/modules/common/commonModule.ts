import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Page} from './components/page';
import { FormInput} from './components/form/formInput';
import { HorizontalForm} from './components/form/horizontalForm';
import { FormButtonPrimary} from './components/form/formButtonPrimary';

@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[Page,FormInput,HorizontalForm,FormButtonPrimary],
    exports:[Page,FormInput,HorizontalForm,FormButtonPrimary]
})
export class AppCommonModule{

}