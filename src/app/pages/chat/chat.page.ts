import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot.service';
//import { ChatbotService } from '';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  messages: { user: string, text: string }[] = []; // Armazena as mensagens
  newMessage: string = '';

  constructor(private chatbotService: ChatbotService) {}

  // Função para enviar uma mensagem
  sendMessage() {
    if (this.newMessage.trim().length === 0) {
      return; // Não enviar se a mensagem estiver vazia
    }

    // Adiciona a mensagem do usuário no chat
    this.messages.push({ user: 'Você', text: this.newMessage });

    // Enviar a mensagem para o chatbot e receber a resposta
    this.chatbotService.sendMessage(this.newMessage).subscribe(
      (response: { resposta: any; }): void => {
        const botResponse = response.resposta;
        // Adiciona a resposta do bot no chat
        this.messages.push({ user: 'Bot', text: botResponse });
      },
      (error: any) => {
        console.error('Erro ao enviar mensagem ao chatbot:', error);
      }
    );

    // Limpa o campo de entrada
    this.newMessage = '';
  }
}
