import {Component} from '@angular/core';

@Component({
  selector: 'm-navbar',
  template: require('./navbar.html')
})
export class NavbarComponent {
  click() {
    alert('Hello');
  }
}
