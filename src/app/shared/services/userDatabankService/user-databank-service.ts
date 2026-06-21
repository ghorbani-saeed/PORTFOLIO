import { Injectable } from '@angular/core';

export interface DeveloperProfile {
  fullName: string;
  mail: string;
  location: string;
  street: string;
  githubUrl: string;
  year: number;
}

export interface TechSkill {
  title: string;
  icon: string;
}

export interface ReviewItem {
  authorName: string;
  translationRoleKey: string;
  translationTextKey: string;
}

export interface ProjectDetail {
  title: string;
  previewImg: string;
  langKey: string;
  repoUrl: string;
  liveUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserDatabankService {
  public profileData!: DeveloperProfile;
  public techStack: TechSkill[] = [];
  public userReviews: ReviewItem[] = [];
  public showcaseProjects: ProjectDetail[] = [];
  
  public messageModel = {
    senderName: '',
    senderEmail: '',
    textMessage: '',
    acceptedTerms: false,
  };

  constructor() {
    this.initProfile();
    this.initTechStack();
    this.initReviews();
    this.initShowcaseProjects();
  }

  private initProfile(): void {
    this.profileData = {
      fullName: 'Saeed Ghorbani',
      street: 'Gerd-Jansen-Platz 5',
      location: '47546 Kalkar, Germany',
      mail: 'saeed.ghorbani@web.de',
      githubUrl: 'https://github.com/ghorbani-saeed',
      year: new Date().getFullYear(),
    };
  }

  private initTechStack(): void {
    this.techStack = [
      { title: 'JavaScript', icon: '/assets/img/icons/skills-icons/js.svg' },
      { title: 'TypeScript', icon: '/assets/img/icons/skills-icons/ts.svg' },
      { title: 'Angular', icon: '/assets/img/icons/skills-icons/angular.svg' },
      { title: 'HTML', icon: '/assets/img/icons/skills-icons/html.svg' },
      { title: 'CSS', icon: '/assets/img/icons/skills-icons/css.svg' },
      { title: 'Firebase', icon: '/assets/img/icons/skills-icons/firebase.svg' },
      { title: 'Git', icon: '/assets/img/icons/skills-icons/git.svg' },
      { title: 'REST-API', icon: '/assets/img/icons/skills-icons/api.svg' },
    ];
  }

  private initReviews(): void {
    this.userReviews = [
      {
        authorName: 'Miško Hevery (: Erfinder von AngularJS ',
        translationRoleKey: 'REFERENCES.LIST.USER_1.ROLE',
        translationTextKey: 'REFERENCES.LIST.USER_1.TEXT',
      },
      {
        authorName: 'Farbod Saraf (: Product Lead bei Miro ',
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

  private initShowcaseProjects(): void {
    this.showcaseProjects = [
      {
        title: 'El Pollo Loco',
        previewImg: '/assets/img/projects-photos/elPolloLoco.png',
        langKey: 'PORTFOLIO.PROJECTS.EL_POLLO_LOCO.DESCRIPTION',
        repoUrl: 'https://github.com/ghorbani-saeed/el-polo-loco',
        liveUrl: 'https://ghorbani-saeed.github.io/el-polo-loco/',
      },
      {
        title: 'Pokedex',
        previewImg: '/assets/img/projects-photos/pokedex.jpg',
        langKey: 'PORTFOLIO.PROJECTS.Pokedex.DESCRIPTION',
        repoUrl: 'https://github.com/ghorbani-saeed/Fotogram',
        liveUrl: 'https://ghorbani-saeed.github.io/Pokedex/',
      },
    ];
  }
}