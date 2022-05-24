import { Component, OnInit } from '@angular/core';
// declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  themeButton:any;
  lightTheme: any;
  iconTheme:any;
  selectedTheme:any;
  selectedIcon:any;
  activeLink:any;
  constructor() { }

  ngOnInit() {
    /*=============== LIGHT DARK THEME ===============*/ 
    this.themeButton = document.getElementById('theme-button')
    this.lightTheme = 'light-theme'
    this.iconTheme = 'bx-sun'

    // Previously selected topic (if user selected)
    this.selectedTheme = localStorage.getItem('selected-theme')
    this.selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the light-theme class
    this.getCurrentTheme();
    this.getCurrentIcon();
    // const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
    // const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

    // We validate if the user previously chose a topic
    if (this.selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
      document.body.classList[this.selectedTheme === 'dark' ? 'add' : 'remove'](this.lightTheme)
      this.themeButton.classList[this.selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](this.iconTheme)
    }

    $('.active-link-home').addClass('active-link')

  }

  getCurrentTheme() {
    return document.body.classList.contains(this.lightTheme) ? 'dark' : 'light';
  }

  getCurrentIcon() {
    return this.themeButton.classList.contains(this.iconTheme) ? 'bx bx-moon' : 'bx bx-sun'
  }

  changeTheme() {
    // Add or remove the light / icon theme
    document.body.classList.toggle(this.lightTheme)
    this.themeButton.classList.toggle(this.iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', this.getCurrentTheme())
    localStorage.setItem('selected-icon', this.getCurrentIcon())
  }

  setActiveLink(item:string) {
    this.activeLink = document.querySelectorAll('.nav_menu_bar_link');
    this.activeLink.forEach((link: { classList: { remove: (arg0: string) => any; }; }) => link.classList.remove('active-link'));
    // $('.active-link-about').removeClass('active-link');
    $(`.active-link-${item}`).addClass('active-link');
  }  

}
