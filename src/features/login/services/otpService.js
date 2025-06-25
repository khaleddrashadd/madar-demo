import axios from '@/lib/axios';
export const otpService = async (data) => {
  return await axios.post('/api/Identity/check-otp', {
    userName: data.username,
    otp: data.otp,
  });
};
export const resendOtpService = async (username) => {
  return await axios.get(`/api/Identity/Resend-OTP/?userName=${username}`);
};
