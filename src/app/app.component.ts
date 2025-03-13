import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

import { SiafNavbarComponent } from './core/components/siaf-navbar/siaf-navbar.component';
import { SiafDrawerComponent } from './core/components/siaf-drawer/siaf-drawer.component';
import { MenuItems } from './core/models/menu.interface';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiafNavbarComponent, SiafDrawerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mfe-ui-lib';
  menus = new MenuItems();

  /**
   *
   */
  constructor() {
    console.log(this.menus.getMenuitem())

  }
  ngOnInit(): void {
    initFlowbite();
  }


}
