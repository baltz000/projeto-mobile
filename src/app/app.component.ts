import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    const auth = getAuth(app);
    console.log('Firebase inicializado com sucesso', app.name);
  }
}
