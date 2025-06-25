import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contracts from './pages/Contracts';
import Login from './pages/Login';
import Statistics from './pages/Statistics';
import RedfInvoices from './pages/invoices-approval/RedfInvoices';
import SrcInvoices from './pages/invoices-approval/SrcInvoices';
import Installments from './pages/Installments';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import ProtectRoutes from './components/ProtectRoutes';
import Collections from './pages/Collections';
import NotFound from './pages/NotFound';
import RedfDetailedInvoice from './pages/invoices-approval/RedfDetailedInvoice';
import SrcDetailedInvoice from './pages/invoices-approval/SrcDetailedInvoice';
import ProtectedRoute from './components/ProtectedRoute';
import UnauthorizedPage from './pages/Unauthorized';
import UploadContracts from './pages/services/UploadContracts';
import UploadedContracts from './pages/services/UploadedContracts';
import UploadedContractDetails from './pages/services/UploadedContractDetails';
import UploadedContractInstallmentDetails from './pages/services/UploadedContractInstallmentDetails';
import AddContracts from './pages/AddContracts';
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
            <Route path="add-contracts" element={<AddContracts />} />
            {/*  */}
            <Route path="/reports">
              <Route path="/reports/contracts" element={<Contracts />} />
              <Route path="/reports/statistics" element={<Statistics />} />
              <Route path="/reports/installments" element={<Installments />} />
              <Route path="/reports/collections" element={<Collections />} />
            </Route>

            {/*  */}
            <Route path="/services">
              <Route path="upload-contracts" element={<UploadContracts />} />
              <Route
                path="uploaded-contracts"
                element={<UploadedContracts />}
              />
              <Route
                path="uploaded-contracts/:id"
                element={<UploadedContractDetails />}
              ></Route>
              <Route
                path="uploaded-contracts/:id/installment/:installmentId"
                element={<UploadedContractInstallmentDetails />}
              />
            </Route>
            {/*  */}

            <Route
              path="/invoices-approval/*"
              element={
                <Routes>
                  <Route
                    path="redf"
                    element={
                      <ProtectedRoute
                        requiredPermission={['view', 'redf-page']}
                      >
                        <RedfInvoices />
                      </ProtectedRoute>
                    }
                  />
                  {/*  */}
                  <Route
                    path="redf/:requestId/detailed-invoice/:reportId"
                    element={
                      <ProtectedRoute
                        requiredPermission={['view', 'redf-page']}
                      >
                        <RedfDetailedInvoice />
                      </ProtectedRoute>
                    }
                  />
                  {/*  */}
                  <Route
                    path="src"
                    element={
                      <ProtectedRoute requiredPermission={['view', 'src-page']}>
                        <SrcInvoices />
                      </ProtectedRoute>
                    }
                  />
                  {/*  */}
                  <Route
                    path="src/:requestId/detailed-invoice/:reportId"
                    element={
                      <ProtectedRoute requiredPermission={['view', 'src-page']}>
                        <SrcDetailedInvoice />
                      </ProtectedRoute>
                    }
                  />
                  {/*  */}
                  {/* <Route path="tax-invoices" element={<TaxInvoices />} /> */}
                </Routes>
              }
            />
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
