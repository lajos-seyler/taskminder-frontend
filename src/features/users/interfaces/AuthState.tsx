import User from "./User";

export default interface AuthState {
  token: string;
  user?: User;
  setToken: (accessToken: string) => void;
  setUser: (user: User) => void;
  logout: () => Promise<void>;
}
