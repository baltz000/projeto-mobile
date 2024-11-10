import { TestBed } from '@angular/core/testing';
import { AuthService } from './authentication.service';

TestBed.configureTestingModule({});
const authServiceInstance = TestBed.inject(AuthService);

if (authServiceInstance) {
  console.log("AuthService foi criado com sucesso.");
} else {
  console.error("Falha ao criar AuthService.");
}

export { AuthService };
