export interface UserInterface {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface HeaderPropsInterface {
  user?: UserInterface | null;
}