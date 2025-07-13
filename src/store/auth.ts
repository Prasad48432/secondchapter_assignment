import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,

  login: async (email, password) => {
    const FAKE_USER = { email: "user@user.com", password: "user123" };
    const isValid = email === FAKE_USER.email && password === FAKE_USER.password;

    await new Promise((res) => setTimeout(res, 2000));

    if (isValid) {
      set({ isAuthenticated: true, user: { email } });
      return true;
    }
    return false;
  },

  logout: () => set({ isAuthenticated: false, user: null }),
}));
