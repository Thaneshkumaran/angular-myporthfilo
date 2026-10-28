import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  tabslist: any = [
    { title: 'Home',   routerLink: "/dashboard" },
    { title: 'About',  routerLink: "/quotation" },
    { title: 'Skills',  routerLink: "/settings" },
    { title: 'experience',  routerLink: "/settings" },
    { title: 'Education',   routerLink: ""  },
    { title: 'Project',   routerLink: "/products" },
    { title: 'Internship',  routerLink: "/customers" },
    { title: 'Contact',  routerLink: "/aging-list" },
  ];
  what : string = "Hello World";

}
