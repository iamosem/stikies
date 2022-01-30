import { Component, Injector, ChangeDetectionStrategy } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent extends AppComponentBase {
  currentYear: number;
  versionText: string;

  constructor(injector: Injector) {
    super(injector);

    this.currentYear = new Date().getFullYear();
    this.versionText = 'v.0.0.1 [2022013001]'
  }


  visitLinkedin(): void {
    window.open(`https://www.linkedin.com/company/motoryst`, '_blank');
  }

}
