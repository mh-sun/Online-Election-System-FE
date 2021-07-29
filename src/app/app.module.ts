import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { VoterComponent } from './components/voter/voter.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { VoterLoginComponent } from './components/voter-login/voter-login.component';
import { from } from 'rxjs';
import { LoginService } from './services/login.service';
import { AdminService } from './services/admin.service';
import { AdminManagementComponent } from './components/admin-management/admin-management.component';
import { VoterManagementComponent } from './components/voter-management/voter-management.component';
import { ElectionManagementComponent } from './components/election-management/election-management.component';
import { AdminItemsComponent } from './components/admin-items/admin-items.component';
import { VoterItemComponent } from './components/voter-item/voter-item.component';
import { ElectionItemComponent } from './components/election-item/election-item.component';
import { CandidateManagementComponent } from './components/candidate-management/candidate-management.component';
import { CandidateItemComponent } from './components/candidate-item/candidate-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    VoterComponent,
    AdminLoginComponent,
    VoterLoginComponent,
    AdminManagementComponent,
    VoterManagementComponent,
    ElectionManagementComponent,
    AdminItemsComponent,
    VoterItemComponent,
    ElectionItemComponent,
    CandidateManagementComponent,
    CandidateItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
