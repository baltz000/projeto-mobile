import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  //aqui
import { Router } from '@angular/router';  //aqui

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['success']);
    } catch (error) {
      this.router.navigate(['failure']);
    }
  }

  logout() {
    this.afAuth.signOut();
  }
}
