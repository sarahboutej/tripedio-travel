import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tripedeo-home-page';
  cookieMessage = 'Wir verwenden Cookies auf unserer Website, um Ihnen das relevanteste Erlebnis zu bieten, indem wir uns an Ihre Präferenzen und wiederholten Besuche erinnern. Indem Sie auf “Akzeptieren” klicken, erklären Sie sich mit der Verwendung von ALLEN Cookies einverstanden';
  cookieDismiss = 'Akzeptieren';
  cookieLinkText = 'Cookie-Einstellung';

  ngOnInit(): void {
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#3D626F"
        },
        button: {
          background: "#FA8D62",
          text: "white"
        }
      },
      theme: "classic",
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        link: this.cookieLinkText,
        href: "/datenschutz"
      }
    });
  }
}
