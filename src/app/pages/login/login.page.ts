import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication.service.spec';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string ='';
  password: string='';

  constructor(private authService: AuthService) {}
  
  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password);
  }
}
