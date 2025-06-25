import axios from '@/lib/axios';
export const loginService = async (data) => {
  return await axios.post('/api/Identity/login', {
    userName: data.username,
    password: data.password,
  });
};
