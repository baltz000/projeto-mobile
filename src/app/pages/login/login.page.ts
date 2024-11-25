import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string ='';
  password: string='';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password);
  }
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
}
