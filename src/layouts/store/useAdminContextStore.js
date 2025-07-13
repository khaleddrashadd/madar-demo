import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useAdminContextStore = create(
  persist(
    (set) => ({
      adminContext: '',
      changeAdminContext: (context) => set({ adminContext: context }),
      clearAdminContext: () => set({ adminContext: '' }),
    }),
    {
      name: 'admin-context',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAdminContextStore;
