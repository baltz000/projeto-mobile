import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Use compat if you're using compat package
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'; // Import firebase

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Método de cadastro
  async register(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(this.getErrorMessage(error));
    }
  }

  // Método para tratar erros
  private getErrorMessage(error: any): string {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'Este e-mail já está em uso.';
      case 'auth/invalid-email':
        return 'E-mail inválido.';
      case 'auth/weak-password':
        return 'A senha deve ter pelo menos 6 caracteres.';
      default:
        return 'Ocorreu um erro inesperado.';
    }
  }

   

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['success']);
    } catch (error) {
      console.error('Login error:', error);
      this.router.navigate(['failure']);
    }
  }

  async loginWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider(); // Create a new Google provider
      await this.afAuth.signInWithPopup(provider); // Sign in with a popup
      this.router.navigate(['success']);
    } catch (error) {
      console.error('Google login error:', error);
      this.router.navigate(['failure']);
    }
  }

  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['login']);
  }
  
}
