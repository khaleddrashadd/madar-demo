import { create } from 'zustand';

const useLoginStore = create((set) => ({
  isModalOpen: false,
  username: '',
  isFirstLogin: false,
  hasConsent: false,
  phoneNumber: '',
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  setUsername: (username) => set({ username }),
  setIsFirstLogin: (isFirstLogin) => set({ isFirstLogin }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setHasConsent: (hasConsent) => set({ hasConsent }),
}));

export default useLoginStore;
