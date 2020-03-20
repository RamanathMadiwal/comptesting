import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatSidenavModule,MatToolbarModule,MatButtonModule,MatCardModule,MatDividerModule,MatExpansionModule,
  MatGridListModule,MatMenuModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EnrollmentAgreementComponent } from './enrollmentagreement/enrollmentagreement.component';
import { ContactUsDialogComponent } from './contact-us-dialog-component/contact-us-dialog-component.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EnrollmentAgreementComponent,
    ContactUsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule
  ],
  exports:[  MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ContactUsDialogComponent,EnrollmentAgreementComponent]
})
export class AppModule { }
