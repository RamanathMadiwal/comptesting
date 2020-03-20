import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlingshotService {

  // URL USURP QBANK: learn.pmbronline.com/qbank/{enrollment_id}
  // URL for Slingshot: {slingshot_url}/{enrollment_id}?token={token}
  private REST_API_SERVER = "https://kbr80.dev.kaptest.com/SlingshotAPI/api/user/courseList";
  private ENROLLMENT_AGREEMENT_ENDPOINT = 'https://kbr80.dev.kaptest.com/SlingshotAPI/api/user/GetEnrollmentAgreement';
  private ENROLLMENT_AGREEMENT_SHAREDINFO ='https://kbr80.dev.kaptest.com/SlingshotAPI/api/user/SaveShareInfo';



  constructor(private httpClient: HttpClient) {

  }

  navigateToUsurpQbank(enrollment_id) {
    // url ='learn.pmbronline.com/qbank/{enrollment_id}'
    window.location.href = 'http://www.cnn.com/';
  }
  navigateToSlingShotApp(slingshot_url, enrollment_id, token) {
    //url =' {slingshot_url}/{enrollment_id}?token={token}'
    window.location.href = 'http://www.cnn.com/';
  }

  getCourseDetails() {
    return this.httpClient.post(this.REST_API_SERVER, {});
  }

  getEnrollmentAgreement() {
    return this.httpClient.post(this.ENROLLMENT_AGREEMENT_ENDPOINT, {});
  }
 
  sendEnrollmentAgreementShareInfo(){
    return this.httpClient.post(this.ENROLLMENT_AGREEMENT_SHAREDINFO, {});
  }   
  }
