import { create } from "zustand";

interface Modal {
  isSearchOpen: boolean;
  isSignInOpen: boolean;
  openSignIn: () => void;
  closeSignIn: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  closeAll: () => void;
}

export const useModalStore = create<Modal>((set) => ({
  isSearchOpen: false,
  isSignInOpen: false,
  openSignIn: () => set({ isSearchOpen: false, isSignInOpen: true }),
  closeSignIn: () => set({ isSignInOpen: false }),
  openSearch: () => set({ isSearchOpen: true, isSignInOpen: false }),
  closeSearch: () => set({ isSearchOpen: false }),
  closeAll: () => set({ isSearchOpen: false, isSignInOpen: false }),
}));
