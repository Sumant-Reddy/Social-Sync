import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  bio: string;
  followers: IUser['_id'][];
  following: IUser['_id'][];
  isOnline: boolean;
  lastSeen: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IPost extends Document {
  user: IUser['_id'];
  content: string;
  media: Array<{
    type: string;
    url: string;
  }>;
  likes: IUser['_id'][];
  comments: Array<{
    user: IUser['_id'];
    content: string;
    createdAt: Date;
  }>;
  tags: string[];
  location: string;
  isPrivate: boolean;
}

export interface IMessage extends Document {
  sender: IUser['_id'];
  content: string;
  media?: {
    type: string;
    url: string;
  };
  readBy: IUser['_id'][];
}

export interface IChat extends Document {
  participants: IUser['_id'][];
  messages: IMessage[];
  isGroupChat: boolean;
  groupName?: string;
  groupAdmin?: IUser['_id'];
  lastMessage?: IMessage['_id'];
  unreadCount: Map<string, number>;
}

export interface ICloudinaryResponse {
  public_id: string;
  secure_url: string;
  resource_type: string;
}

export interface IRedisClient {
  get(key: string): Promise<string | null>;
  setEx(key: string, duration: number, value: string): Promise<void>;
  del(key: string): Promise<void>;
  connect(): Promise<void>;
  duplicate(): IRedisClient;
}

export interface ISocketData {
  roomId: string;
  signal?: any;
  from?: string;
  to?: string;
} 