import { create } from "zustand";

import AuthState from "../interfaces/AuthState";
import User from "../interfaces/User";

const useAuthStore = create<AuthState>((set) => ({
  token: "",
  user: undefined,
  setToken: (accessToken: string) =>
    set({
      token: accessToken,
    }),
  setUser: (user: User) =>
    set({
      user,
    }),
  logout: async () => set({ token: "", user: undefined }),
}));

export default useAuthStore;
