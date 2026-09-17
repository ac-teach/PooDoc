import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header.component';
import { RightDockComponent } from './layout/right-dock.component';
import { SidebarComponent } from './layout/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, RightDockComponent],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}