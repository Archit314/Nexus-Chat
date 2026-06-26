import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from './message.service';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  private activeUsers: Map<number, string> = new Map();

  constructor(private readonly messageService: MessageService) {}

  async handleConnection(socket: Socket) {
    const userId = socket.handshake.query.userId;
    if (userId) this.activeUsers.set(Number(userId), socket.id);
  }

  async handleDisconnect(socket: Socket) {
    for (const [userId, socketId] of this.activeUsers) {
      if (socketId === socket.id) {
        this.activeUsers.delete(userId);
        break;
      }
    }
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(socket: Socket, payload: { receiverId: number; content: string }) {
    const senderId = [...this.activeUsers.entries()].find(
      ([, socketId]) => socketId === socket.id,
    )?.[0];
    if (!senderId) return;

    const message = await this.messageService.sendMessage(senderId, payload.receiverId, payload.content);

    const receiverSocketId = this.activeUsers.get(payload.receiverId);
    if (receiverSocketId) {
      this.server.to(receiverSocketId).emit('newMessage', message);
    }

    socket.emit('newMessage', message);
  }
}