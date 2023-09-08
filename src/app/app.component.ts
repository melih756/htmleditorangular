import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'editor';

  htmlContent='';

editorConfig: AngularEditorConfig = {
  
  editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'yes',
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  }
}
