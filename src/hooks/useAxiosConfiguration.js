import { setNavigateRef, setQueryClientRef } from '@/lib/axios';
import {
  setNavigateRef as setNavigateRefInvoice,
  setQueryClientRef as setQueryClientRefInvoice,
} from '@/lib/axiosInvoices';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
const useAxiosConfiguration = () => {
  const navigate = useNavigate();
  const querClient = useQueryClient();
  useEffect(() => {
    setNavigateRef(navigate);
    setNavigateRefInvoice(navigate);
    setQueryClientRef(querClient);
    setQueryClientRefInvoice(querClient);
  }, [navigate, querClient]);
};
export default useAxiosConfiguration;
