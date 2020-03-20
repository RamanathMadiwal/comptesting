import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-contact-us-dialog-component',
  templateUrl: './contact-us-dialog-component.component.html',
  styleUrls: ['./contact-us-dialog-component.component.scss']
})
export class ContactUsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ContactUsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
  }
  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
