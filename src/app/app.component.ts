import { Component, Renderer2 } from '@angular/core';
import { SlingshotService } from './slingshot.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ContactUsDialogComponent } from './contact-us-dialog-component/contact-us-dialog-component.component';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { EnrollmentAgreementComponent } from './enrollmentagreement/enrollmentagreement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  activeCourses: any;
  expiredCourses: any;
  courseDetails: Subscription;
  enrollmentAgreementContent: any;


  constructor(private slingshotService: SlingshotService, private dialog: MatDialog, private domSanitizer: DomSanitizer, ) {
    this.courseDetails = this.slingshotService.getCourseDetails().subscribe((data: any[]) => {
      this.activeCourses = data['ActiveCourses']
      this.expiredCourses = data['ExpiredCourses']
      console.log(this.activeCourses, this.expiredCourses);
    })

    this.slingshotService.getEnrollmentAgreement().subscribe((data: string) => {
      this.enrollmentAgreementContent = data;
     // this.enrollmentAgreementContent = this.domSanitizer.bypassSecurityTrustHtml(data);
      console.log(this.enrollmentAgreementContent);
    })
  }

  launchCourse(url) {
    console.log(url);
    window.location.href = url
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(ContactUsDialogComponent, dialogConfig);
  }

  openEnrollmentAgreementDialog() {
    this.dialog.open(EnrollmentAgreementComponent, {
      data: this.enrollmentAgreementContent
    });
  }
}
