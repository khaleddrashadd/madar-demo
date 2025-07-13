// import { clearSuperAdminContext } from '@/layouts/store/useAdminContextStore';
import { router } from '@/lib/tanstack/router';
import useAdminContextStore from '@/layouts/store/useAdminContextStore';
import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_API_URL;
let originalPath = null;

export const axiosPrivate = axios.create({
  baseURL,
});

let queryClientRef; // Add query client reference

// Function to set navigate refere
export const setQueryClientRef = (queryClient) => {
  queryClientRef = queryClient;
};

// Request interceptor
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

// Response interceptor
axiosPrivate.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (err?.response?.status === 401) {
      originalPath = originalPath ? originalPath : window.location.pathname;
      if (queryClientRef) {
        queryClientRef.clear(); // Clear all queries
      }

      localStorage.clear();
      useAdminContextStore.getState().clearAdminContext();
      router.navigate({
        to: '/login',
        replace: true,
        search: { from: originalPath },
      });
    }
    return Promise.reject(err);
  },
);

export default axiosPrivate;
