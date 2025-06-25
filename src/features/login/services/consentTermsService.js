import axios from '@/lib/axios';
export const consentTermsService = async (username) => {
  return await axios.get(`/api/Identity/Accept-ConsentTerms?userName=${username}`);
};
