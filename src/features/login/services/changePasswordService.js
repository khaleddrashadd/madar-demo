import axios from '@/lib/axios';
export const changePasswordService = async (data) => {
  return await axios.post('/api/Identity/reset-password', {
    userName: data.username,
    newPassword: data.password,
    confirmPassword: data.confirmPassword,
  });
};
