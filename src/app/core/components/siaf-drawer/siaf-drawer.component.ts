import { Component } from '@angular/core';

@Component({
  selector: 'siaf-drawer',
  standalone: true,
  imports: [],
  templateUrl: './siaf-drawer.component.html',
})
export class SiafDrawerComponent {
  isDrawerOpen = false;
  
  openDrawer() {
    this.isDrawerOpen = true;
  }
  
  closeDrawer() {
    this.isDrawerOpen = false;
  }
  
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
