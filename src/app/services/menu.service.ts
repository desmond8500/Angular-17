import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    private router: Router,
  ) {}

  menus = [
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
  guestMenus = [
    {
      label: 'Accueil',
      icon: 'pi pi-home',
      command: () => {
        this.router.navigate(['/index']);
      },
    },
  ];
}
