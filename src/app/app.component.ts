import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppConfig } from './app-config';
declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tripedeo-home-page';
  cookieMessage = 'Wir verwenden Cookies auf unserer Website, um Ihnen das relevanteste Erlebnis zu bieten, indem wir uns an Ihre Präferenzen und wiederholten Besuche erinnern. Indem Sie auf “Akzeptieren” klicken, erklären Sie sich mit der Verwendung von ALLEN Cookies einverstanden';
  cookieDismiss = 'Akzeptieren';
  cookieLinkText = 'Cookie-Einstellung';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appConfig: AppConfig) {
  }

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
    this.initializeGoogleAnalytics();
    this.initializeToken();
  }

  initializeGoogleAnalytics() {
    this.addGAScript();
    this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects
      })
    })
  }

  /** Add Google Analytics Script Dynamically */
  addGAScript() {
    let gtagScript: HTMLScriptElement = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + this.appConfig.getConfig().GA_TRACKING_ID;
    document.head.prepend(gtagScript);
    gtag('config', this.appConfig.getConfig().GA_TRACKING_ID, { send_page_view: false });
  }

  initializeToken() {
    this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd)
    ).subscribe((event: ActivationEnd) => {
      const token = event.snapshot.queryParams['token'];
      if (token) {
        localStorage.setItem('token', token);
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: {
            'token': null,
          },
          queryParamsHandling: 'merge'
        });
      }
    })
  }
}
