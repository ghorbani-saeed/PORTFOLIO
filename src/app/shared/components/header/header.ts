import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/userDatabankService/portfolio-data.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

type Lang = 'en' | 'de';
@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  userDBS = inject(PortfolioDataService);
  translate = inject(TranslateService);
  private readonly document: Document = inject(DOCUMENT);
  private readonly supportedLangs: Lang[] = ['en', 'de'];
  private readonly langStorageKey = 'lang';

  isMenuOpen = false;
  lang: Lang = 'en';

  constructor() {
    const storedLang = this.getStoredLang();
    this.setLang(storedLang ?? this.getBrowserLangOrDefault());
  }

  private getStoredLang(): Lang | null {
    const storedLang = localStorage.getItem(this.langStorageKey);
    return storedLang && this.supportedLangs.includes(storedLang as Lang)
      ? (storedLang as Lang)
      : null;
  }

  private getBrowserLangOrDefault(): Lang {
    const browserLang = this.translate.getBrowserLang();
    return browserLang && this.supportedLangs.includes(browserLang as Lang)
      ? (browserLang as Lang)
      : 'en';
  }

  setLang(l: Lang) {
    this.lang = l;
    this.translate.use(l);
    this.document.documentElement.lang = l;
    localStorage.setItem(this.langStorageKey, l);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
  
  @HostListener('document:keydown.escape')
  onEsc() {
    if (!this.isMenuOpen) return;
    this.closeMenu();
  }
}
