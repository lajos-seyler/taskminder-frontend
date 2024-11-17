export default interface AuthState {
  token: string;
  setToken: (accessToken: string) => void;
  logout: () => Promise<void>;
}
