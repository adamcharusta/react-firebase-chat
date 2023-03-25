export interface IMessage {
  id: string;
  message: string;
  photoURL: string | null;
  displayName: string | null;
  uid: string | null;
  createdAt: string;
  isCurrentUserMessage: boolean;
}

export interface IMessageSendDto {
  message: string;
  photoURL: string | null;
  displayName: string | null;
  uid: string | null;
  createdAt: string;
}
