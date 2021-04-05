import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }

    sendMessage( mensaje: string ) {

      const payload = {
        de: this.wsService.getUsuario().nombre,
        cuerpo: mensaje
      };

      this.wsService.emit('mensaje', payload );

    }

    getMessages() {
      return this.wsService.listen('mensaje-nuevo');
    }

    getMensajesPrivados(){
      return this.wsService.listen('mensaje-privado')
    }

    usuariosActivos(){
      return this.wsService.listen('usuarios-activos');
    }

    emitirUsuariosActivos(){
      this.wsService.emit('obtener-usuarios');
    }

}
