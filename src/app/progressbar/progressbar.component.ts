import { Component, OnInit } from "@angular/core";


@Component({
    selector:"progress-bar-cmp",
    templateUrl:"./progressbar.component.html",
})

export class ProgressBarComponent implements OnInit{
    progressVal = 10;
    ngOnInit(){
        setTimeout(()=> {
        this.setProgressBar(); 
    },300);       
    }

    setProgressBar(){       
            this.progressVal = this.progressVal + 30;
            if(this.progressVal > 100 ){
                this.progressVal = 0;
            }      
    }
}