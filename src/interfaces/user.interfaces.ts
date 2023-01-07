export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  imgUrl?: string;
}

export interface IUserResponse {
  name: string;
  email: string;
  imgUrl: string;
  createdAt: Date;
  activities: [];
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  imgUrl?: string;
}
