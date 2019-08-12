import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule, MatMenuModule, MatListModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progressbar/progressbar.component';
import { AccordianPanelComponent } from './accordian/accordian.component';
import { CarousalComponent } from './carousal/carousal.component';
import { SliderComponent } from './slider/slider.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { TableDataComponent } from './table-data/table-data.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { MenuComponent } from './menu/menu.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent,LoginComponent, AccordianPanelComponent, ProgressBarComponent,
     CarousalComponent, SliderComponent, DialogComponent, TableDataComponent, NavTabComponent, MenuComponent, SwitchComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule,
    MatProgressBarModule, MatSliderModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,
    MatInputModule, MatButtonModule, MatDialogModule, MatTableModule, MatGridListModule, MatTabsModule,
    MatListModule, MatMenuModule, MatToolbarModule,  MatIconModule, MatSlideToggleModule
  ],
  providers: [{provide: MatDialogRef, useValue: {}}],
  entryComponents: [ DialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
