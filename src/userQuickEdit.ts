import { Component,Input,Output,EventEmitter } from '@angular/core';
@Component({
    selector:'user-quick-edit',
    templateUrl:'src/UserQuickEdit.html'
})
export class UserQuickEdit {
   //@Input + Change = Output
  //@Input() user:any;
  @Input() firstName:any;
  //@Output() onChanged:EventEmitter<string> = new EventEmitter<string>();
  @Output() firstNameChange:EventEmitter<string> = new EventEmitter<string>();

//   public onNameChanged(newValue:string){
//     this.onChanged.emit(this.firstName);
//   }

public onNameChanged(newValue:string){
    this.firstNameChange.emit(this.firstName);
  }
}