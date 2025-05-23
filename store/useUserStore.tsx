// store/userStore.ts
import { create } from 'zustand'

type UserState = {
  user_id: string
  user_name: string
  user_email: string
  user_phone: string
  jwt: string;
  setUserId: (id: string) => void
  setJwt: (jwt: string) => void;
  setUserName: (name: string) => void
  setUserEmail: (email: string) => void
  setUserPhone: (phone: string) => void
}

export const useUserStore = create<UserState>((set) => ({
  user_name: '',
  user_email: '',
  user_phone: '',
  jwt: "",
  user_id: '',
  setUserId: (id) => set({ user_id: id }),
  setUserName: (name) => set({ user_name: name }),
  setUserEmail: (email) => set({ user_email: email }),
  setUserPhone: (phone) => set({ user_phone: phone }),
  setJwt: (jwt) => set({ jwt }),
}))