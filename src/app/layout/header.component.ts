import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HOME_PATH, TOP_NAV } from '../navigation';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly homePath = HOME_PATH;
  protected readonly topNav = TOP_NAV;
}