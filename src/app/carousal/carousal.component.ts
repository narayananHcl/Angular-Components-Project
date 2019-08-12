import { Component, OnInit } from "@angular/core";

declare var $:any;
@Component({
    selector:"ang-carousal",
    templateUrl:"./carousal.component.html",
})

export class CarousalComponent implements OnInit{

    ngOnInit(){
        $('.carousel').carousel({
            interval:500
        })
    }
}