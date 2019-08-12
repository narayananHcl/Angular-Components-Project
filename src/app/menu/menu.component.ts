import { Component, OnInit, Input, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild('childMenu',{static:true}) public childMenu;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}
export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}