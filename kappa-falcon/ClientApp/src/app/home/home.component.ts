import { Component } from '@angular/core';

declare function parseReplay(file: any): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  files: any = null;
 
  constructor() {}

  onFilechange(event: any) {
    console.log(event.target.files);
    this.files = event.target.files;
  }

  upload(): void {
    parseReplay(this.files[0]);
  }
}
