// src/store/auth.ts
import { create } from "zustand"

type AuthStore = {
  email: string
  password: string
  setEmail: (val: string) => void
  setPassword: (val: string) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  email: "",
  password: "",
  setEmail: (val) => set({ email: val }),
  setPassword: (val) => set({ password: val }),
}))
