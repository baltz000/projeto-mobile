import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/authentication.service'; // Ajuste o caminho do serviço de autenticação

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) {}

  // Remova o erro lançado ou implemente caso precise de algo no início
  ngOnInit(): void {
    // Inicialização, se necessário
  }

  async register() 
  {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.showToast('Por favor, preencha todos os campos.');
      return;
    }
  
    if (this.password !== this.confirmPassword) {
      this.showToast('As senhas não coincidem.');
      return;
    }
  
    try {
      await this.authService.register(this.email, this.password);
      this.showToast('Usuário registrado com sucesso!');
      // Redireciona para a página de tabs
      this.router.navigate(['/tabs']);
    } catch (error) {
      this.showToast(error instanceof Error ? error.message : 'Erro desconhecido durante o registro.');
    }
  }
  

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
    {
      console.log('Dados do Formulário:', {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });}
  }}
