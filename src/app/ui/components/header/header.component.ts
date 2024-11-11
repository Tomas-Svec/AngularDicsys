import { Component } from '@angular/core';
import { GlobalText } from '../../../data/text';
import { UrlNavigateService } from '../../../data/services/url-navigate.service';
import { Globalurl } from '../../../data/url';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    public globalText: GlobalText,
    public urlNavigateService: UrlNavigateService,
    public globalUrl: Globalurl
  ) {}

  
  navigateHome() {
    this.urlNavigateService.navigateToUrl(this.globalUrl.home);
    console.log(this.navigateHome);
    
  }

  
  
}
