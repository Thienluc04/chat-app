import { AuthParams } from '@/types/auth.type';
import { StoreApi, UseBoundStore, create } from 'zustand';

interface AuthStore {
  params: AuthParams;
  setParams: (params: AuthParams) => void;
}

export const useAuthStore: UseBoundStore<StoreApi<AuthStore>> = create(
  (set) => ({
    params: {
      currentUser: {},
    },
    setParams: (params: AuthParams) => {
      set(() => ({ params }));
    },
  })
);
