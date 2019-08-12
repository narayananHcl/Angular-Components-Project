import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector:'accordian-panel',
    templateUrl:'./accordian.component.html'
})

export class AccordianPanelComponent implements OnInit{
    hidePanel:boolean = true;
    @Input() heading:string;
    @Input() open:boolean;
    state:{isOpen:boolean} = {isOpen:this.open};

    ngOnInit(){
        this.state.isOpen = this.open;
    }
    toggleOpen(event){
        event.preventDefault();
        this.state.isOpen = !this.state.isOpen;    
    }
}