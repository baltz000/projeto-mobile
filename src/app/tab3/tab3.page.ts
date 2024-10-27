import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {



  friends = [
    { name: 'Ana Silva', status: 'Online', avatar: 'assets/imgs/user1.jpg' },
    { name: 'João Souza', status: 'Offline', avatar: 'assets/imgs/user2.jpg' },
    { name: 'Marcos Oliveira', status: 'Online', avatar: 'assets/imgs/user3.jpg' },
  ];

  constructor() {}

  // Função para visualizar o perfil do amigo
  viewProfile(friend: any) {
    console.log('Visualizando perfil de', friend.name);
    // Aqui você pode redirecionar para a página de perfil
  }

  // Função para remover um amigo
  removeFriend(friend: any) {
    this.friends = this.friends.filter(f => f !== friend);
    console.log(friend.name, 'removido da lista de amigos.');
  }
}
