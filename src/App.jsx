import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from '@tanstack/react-router';
import { queryClient } from './lib/tanstack/query';
import { router } from './lib/tanstack/router';

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
