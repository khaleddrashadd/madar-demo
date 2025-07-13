import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { queryClient } from './lib/tanstack/query';

export const router = createRouter({ routeTree });
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        pauseOnHover
        theme="light"
        rtl={true}
        toastClassName="mb-0 px-3 min-h-fit"
      />
    </QueryClientProvider>
  );
}

export default App;
