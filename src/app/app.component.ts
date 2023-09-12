import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  htmlCode: string = '';
  plainText: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  convertHtmlToText() {
    this.plainText = this.sanitizer.bypassSecurityTrustHtml(this.htmlCode);
  }
}

//domsanitizier güvenli bir şekilde html css ve url gibi çeşitli kaynakları işlemek için kullanılır
//safehtml potansiyel tehlikelere karşı html içeriğini korumaktadır 
//bypassSecurityTrustHtml, Angular adlı JavaScript çerçevesinin bir güvenlik özelliğidir. Bu fonksiyon, Angular'ın yerleşik güvenlik mekanizmalarını atlayarak güvensiz kaynaklardan (örneğin, kullanıcı tarafından oluşturulan içerik veya harici kaynaklardan gelen veriler) gelen HTML içeriğini işlerken uygulamanızı potansiyel güvenlik açıklarından (örneğin, cross-site scripting - XSS saldırıları gibi) korumak için kullanılır.
//bypassSecurityTrustHtml bir değeri güvenilir html içeriği olarak işaretler
//bypassSecurityTrustHtml url değerini güvenilir içerik olarak işaretler
//bypassSecurityTrustHtml css değerini güvenilir içerik olarak işaretler
//cross-site scripting-xss saldırılarından korunmak için de kullanılır
