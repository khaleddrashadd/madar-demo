import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 0 seconds
      retry: 0, // Disable retries for failed queries
    },
  },
});
export { queryClient };
