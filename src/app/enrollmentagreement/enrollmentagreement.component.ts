import { Component, OnInit, Renderer2, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-enrollmentagreement',
  templateUrl: './enrollmentagreement.component.html',
  styleUrls: ['./enrollmentagreement.component.scss']
})
export class EnrollmentAgreementComponent implements OnInit {
  htmlContent: any ;
  @ViewChild('htmlContent', { static: true }) simple;

  constructor(public dialogRef: MatDialogRef<EnrollmentAgreementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private renderer: Renderer2) { }

  ngOnInit() {
    this.htmlContent = this.data.AgreementBody;
    if (this.htmlContent) {
      this.setRadioButtonsForhtmlContent(this.htmlContent);
    }
  }
  ngAfterViewInit(){
     this.htmlContent = this.htmlContent.replace("{0}", `<input type="radio" name="I Agree" value="male" key='1'> I Agree</input><br>
    <input type="radio" name="I do not Agree" value="female" key='0'> I do not Agree</input><br>`);
    this.simple.nativeElement.innerHTML = this.htmlContent;
  }
  setRadioButtonsForhtmlContent(data){
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = data;
    const paraElement = tempDiv.querySelectorAll("p");
    if(paraElement){
    paraElement.forEach(function(el) {
    if (el.innerText == "your preparation."){
    const inputElement = document.createElement('input');
    const enrollmentAgreement = data.innerText;
    inputElement.className = '.radioButton'
    inputElement.setAttribute(
      'type',
      'radio'
    );
    inputElement.innerText ='hello';
    inputElement.appendChild(el);
    document.appendChild(inputElement);  
    // this.renderer.appendChild(el, inputElement);
    }
  });
}
 
    //console.log(data.AgreementBody);

  }
  // setHyperLinkForVideoInteraction(videoInteractionTag) {
  //   const anchorElement = this.renderer.createElement('a');
  //   const videoAsHtmlElement = videoInteractionTag.innerText;
  //   anchorElement.innerText = videoAsHtmlElement;
  //   videoInteractionTag.innerHTML = '';
  //   videoInteractionTag.appendChild(anchorElement);
  //   this.openVideoDialogOnHyperLinkClick(videoInteractionTag);
  // }

  // openVideoDialogOnHyperLinkClick(videoInteractionTag) {
  //   this.renderer.listen(videoInteractionTag, 'click', event => {
  //     this.dialog.open(VideoInteractionDialogComponent, {
  //       data: videoInteractionTag
  //     });
  //   });
  // }

  closeDialog() {
    this.dialogRef.close();
  }

}
