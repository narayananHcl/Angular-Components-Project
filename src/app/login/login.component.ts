import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit{
loginForm:any
constructor(private formBuilder:FormBuilder, private dialog:MatDialog){

}
    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            username:['',Validators.required],
            password:['',Validators.required]
        })
    }

    OnSubmit(){
        this.openDialog();
    }
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '250px'
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');          
        });
      }
    
}
