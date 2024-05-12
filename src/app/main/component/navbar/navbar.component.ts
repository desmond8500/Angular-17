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
import { MenuService } from '../../../services/menu.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menus: MenuItem[] | undefined;
  loginStatus = computed(() => {
    if (this._auth.login()) {
      this.menus = this._menu.menus
      return true;
    } else {
      this.menus = this._menu.guestMenus;
      return false;
    }
  });

  constructor(
    private router: Router,
    private _auth: AuthService,
    private _menu: MenuService,
    private fb: FormBuilder,
  ) {}

  // Login
  loginModal: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  showLoginModal() {
    this.loginModal = true;
  }

  login(){
    console.log(this.loginForm.value)
  }

  // Register
  registerModal: boolean = false;

  showRegisterModal() {
    this.registerModal = true;
  }
}

// TODO: loginForm
// TODO: RegisterForm
// TODO: Forgotten password Form
