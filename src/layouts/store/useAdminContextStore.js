import { create } from 'zustand';

const useAdminContextStore = create((set) => ({
  adminContext: '',
  changeAdminContext: (context) => set({ adminContext: context }),
  clearAdminContext: () => set({ adminContext: '' }),
}));
export default useAdminContextStore;
