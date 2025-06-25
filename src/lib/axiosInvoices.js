import { clearSuperAdminContext } from '@/layouts/store/prevailageSlice';
import { store } from '@/store/store';
import axios from 'axios';

const baseURL = import.meta.env.VITE_INVOICES_BASE_API_URL;
let originalPath = null;

export const axiosInvoices = axios.create({
  baseURL,
});

let navigateRef;
let queryClientRef; // Add this for query client reference

// Function to set navigate reference
export const setNavigateRef = (navigate) => {
  navigateRef = navigate;
};

export const setQueryClientRef = (queryClient) => {
  queryClientRef = queryClient;
};

// Request interceptor
axiosInvoices.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (!config.headers.Lng) {
      config.headers.Lng = 'ar';
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// Response interceptor
axiosInvoices.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (err?.response?.status === 401) {
      originalPath = originalPath ? originalPath : window.location.pathname;
      // Clear React Query cache
      if (queryClientRef) {
        queryClientRef.clear(); // Clear all queries
      }

      localStorage.clear();
      store.dispatch(clearSuperAdminContext());
      navigateRef('/login', {
        replace: true,
        state: { from: originalPath },
      });
    }
    return Promise.reject(err);
  }
);

export default axiosInvoices;
