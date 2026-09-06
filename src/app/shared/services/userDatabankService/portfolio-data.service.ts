import { Injectable } from '@angular/core';

export interface SkillDefinition {
  title: string;
  icon: string;
}

export interface ShowcaseItem {
  title: string;
  previewImg: string;
  langKey: string;
  repoUrl: string;
  liveUrl: string;
}

export interface IdentityDetails {
  fullName: string;
  mail: string;
  location: string;
  street: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface Recommendation {
  authorName: string;
  translationRoleKey: string;
  translationTextKey: string;
}

/**
 * Central service to manage and provide static portfolio data 
 * such as project showcases, skill sets, and user profile details.
*/
@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  public contactFormState = {
    senderName: '',
    senderEmail: '',
    textMessage: '',
    acceptedTerms: false,
  };

  public featuredWork: ShowcaseItem[] = [];
  public ownerProfile!: IdentityDetails;
  public clientQuotes: Recommendation[] = [];
  public expertise: SkillDefinition[] = [];

  constructor() {
    // Initialize all data sets on service startup
    this.buildShowcase();
    this.setupIdentity();
    this.prepareTestimonials();
    this.loadSkillSet();
  }

  private buildShowcase(): void {
    this.featuredWork = [
      {
        title: 'El Pollo Loco',
        previewImg: '/assets/img/projects-photos/elPolloLoco.png',
        langKey: 'PORTFOLIO.PROJECTS.EL_POLLO_LOCO.DESCRIPTION',
        repoUrl: 'https://github.com/ghorbani-saeed/el-polo-loco',
        liveUrl: 'https://ghorbani-saeed.github.io/el-polo-loco/',
      },
      {
        title: 'Pokedex',
        previewImg: '/assets/img/projects-photos/pokedex.jpeg',
        langKey: 'PORTFOLIO.PROJECTS.POKEDEX.DESCRIPTION',
        repoUrl: 'https://github.com/ghorbani-saeed/Fotogram',
        liveUrl: 'https://ghorbani-saeed.github.io/Pokedex/',
      },
    ];
  }

  private setupIdentity(): void {
    this.ownerProfile = {
      fullName: 'Saeed Ghorbani',
      street: 'Gerd-Jansen-Platz 5',
      location: '47546 Kalkar, Germany',
      mail: 'ghorbani.saeed@web.de',
      githubUrl: 'https://github.com/ghorbani-saeed',
      linkedinUrl: 'https://www.linkedin.com/in/saeed-ghorbani-016501374/',
    };
  }

  private prepareTestimonials(): void {
    this.clientQuotes = [
      {
        authorName: 'Miško Hevery (: Erfinder von AngularJS ',
        translationRoleKey: 'REFERENCES.LIST.USER_1.ROLE',
        translationTextKey: 'REFERENCES.LIST.USER_1.TEXT',
      },
      {
        authorName: 'Prof. R.bashiri Materials Data Scientist ',
        translationRoleKey: 'REFERENCES.LIST.USER_2.ROLE',
        translationTextKey: 'REFERENCES.LIST.USER_2.TEXT',
      },
      {
        authorName: 'Pierre Omidyar (: Gründer von eBay',
        translationRoleKey: 'REFERENCES.LIST.USER_3.ROLE',
        translationTextKey: 'REFERENCES.LIST.USER_3.TEXT',
      },
    ];
  }

  private loadSkillSet(): void {
    this.expertise = [
      { title: 'Angular', icon: '/assets/img/icons/04-skills/angular.svg' },
      { title: 'TypeScript', icon: '/assets/img/icons/04-skills/ts.svg' },
      { title: 'JavaScript', icon: '/assets/img/icons/04-skills/js.svg' },
      { title: 'HTML', icon: '/assets/img/icons/04-skills/html.svg' },
      { title: 'CSS', icon: '/assets/img/icons/04-skills/css.svg' },
      { title: 'REST-API', icon: '/assets/img/icons/04-skills/api.svg' },
      { title: 'Supabase', icon: '/assets/img/icons/04-skills/supabase.svg' },
      { title: 'Firebase', icon: '/assets/img/icons/04-skills/firebase.svg' },
      { title: 'Git', icon: '/assets/img/icons/04-skills/git.svg' },
    ];
  }
}
