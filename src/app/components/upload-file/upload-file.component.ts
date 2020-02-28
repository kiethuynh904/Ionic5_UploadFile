import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})

export class UploadFileComponent implements OnInit {
  private inputFiled: any = null;
  private inputID: any    = '';
  private IDprefix: any   = 'inputFile';

  constructor() { }

  @Input() fileExtension: string; // string : ".csv, .doc"
  @Input() maxSizeUpload: string | number; // Kilobyte

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChange = new EventEmitter<any>();

  ngOnInit() {
    this.inputID = this.IDprefix + this.randomID();
    console.log(this.inputID);
  }
  randomID() {
    return Math.random().toString(12).substring(2, 6) + Math.random().toString(12).substring(2, 6);
  }
  chooseFile() {
    const field = document.getElementById(this.inputID);
    field.click();
  }
  resetData() {
    this.inputFiled = null;
  }
}
