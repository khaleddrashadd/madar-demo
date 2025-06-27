import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import ProtectRoutes from './components/ProtectRoutes';
import NotFound from './pages/NotFound';
import UnauthorizedPage from './pages/Unauthorized';
import UploadContracts from './pages/UploadContracts';
import UploadedContractInstallmentDetails from './pages/UploadedContractInstallmentDetails';
import AddContracts from './pages/AddContracts';
import ContractDetails from './pages/ContractDetails';
import ActiveContracts from './pages/ActiveContracts';
import ClosedContracts from './pages/ClosedContracts';
import DelinquentContracts from './pages/DelinquentContracts';
import DelinquentContractDetails from './pages/DelinquentContractDetails';
// import TaxInvoices from './pages/invoices-approval/TaxInvoices';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 0 seconds
      retry: 0, // Disable retries for failed queries
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<ProtectRoutes />}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="upload-contracts" element={<UploadContracts />} />
            <Route path="add-contracts">
              <Route index element={<AddContracts />} />
              <Route path=":contractId" element={<ContractDetails />} />
              <Route
                path=":contractId/installment/:transactionId"
                element={<UploadedContractInstallmentDetails />}
              />
            </Route>
            <Route path="/active-contracts" element={<ActiveContracts />} />
            <Route path="/closed-contracts" element={<ClosedContracts />} />
            <Route path="/collections">
              <Route
                path="delinquent-contracts"
                element={<DelinquentContracts />}
              />
              <Route
                path="delinquent-contracts/:id"
                element={<DelinquentContractDetails />}
              />
            </Route>

            {/*  */}
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer
        position="top-right"
        autoClose={50000000}
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
