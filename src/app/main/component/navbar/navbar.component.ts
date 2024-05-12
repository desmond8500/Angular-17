import { Component, computed, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ButtonModule } from 'primeng/button';

import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    RouterModule,
    RouterLink,
    ButtonModule,
    DialogModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menus: MenuItem[] | undefined;
  login = computed(() => {
    if (this.auth.login()) {
      this.menus = [
        {
          label: 'Accueil',
          icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/index']);
          },
        },
        {
          label: 'Réglages',
          icon: 'pi pi-cog',
          command: () => {
            this.router.navigate(['/settings']);
          },
        },
        {
          label: 'Projects',
          icon: 'pi pi-search',
          items: [
            {
              label: 'Core',
              icon: 'pi pi-bolt',
              shortcut: '⌘+S',
            },
            {
              label: 'Blocks',
              icon: 'pi pi-server',
              shortcut: '⌘+B',
            },
            {
              label: 'UI Kit',
              icon: 'pi pi-pencil',
              shortcut: '⌘+U',
            },
            {
              separator: true,
            },
            {
              label: 'Templates',
              icon: 'pi pi-palette',
              items: [
                {
                  label: 'Apollo',
                  icon: 'pi pi-palette',
                  badge: '2',
                },
                {
                  label: 'Ultima',
                  icon: 'pi pi-palette',
                  badge: '3',
                },
              ],
            },
          ],
        },
        {
          label: 'Contact',
          icon: 'pi pi-envelope',
          badge: '3',
          url: 'https://angular.io/',
        },
      ];
      return true;
    } else {
      this.menus = [
        {
          label: 'Accueil',
          icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/index']);
          },
        },
      ];
      return false;
    }
  });

  constructor(private router: Router, private auth: AuthService) {}

  // Login
  loginModal: boolean = false;

  showLoginModal() {
    this.loginModal = true;
  }

  // Register
  registerModal: boolean = false;

  showRegisterModal() {
    this.registerModal = true;
  }
}
