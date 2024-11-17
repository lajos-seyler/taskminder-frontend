import { create } from "zustand";

import AuthState from "../interfaces/AuthState";

const useAuthStore = create<AuthState>((set) => ({
  token: "",
  setToken: (accessToken: string) =>
    set({
      token: accessToken,
    }),
  logout: async () => set({ token: "" }),
}));

export default useAuthStore;
