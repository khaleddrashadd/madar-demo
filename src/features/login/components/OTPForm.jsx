import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { STEPS } from '@/constants/steps';
import { ArrowRight } from 'lucide-react';
import OTPCounter from './OTPCounter';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import useLoginStore from '../store/useLoginStore';
import otpSchema from '../schema/otpSchema';
import { otpService } from '../services/otpService';
import TermsModal from './TermsModal';
import { useState } from 'react';
import OTP from './OTP';
import { consentTermsService } from '../services/consentTermsService';
import { FALLBACK_ERR_MSG } from '@/constants/fallbacks';
import { ADMINS } from '@/constants/globalConstants';
// import { changeSuperAdminContext } from '@/layouts/store/useAdminContextStore';
import { useNavigate, useRouter, useSearch } from '@tanstack/react-router';

const OTPForm = ({ setStep }) => {
  const { closeModal, hasConsent, isFirstLogin, username, phoneNumber } =
    useLoginStore();

  const [hasSentOtp, setHasSentOtp] = useState(false);
  const navigate = useNavigate();
  const router = useRouter();
  console.log('Available routes:', router.routeTree.children); // Check console for route IDs
  const search = useSearch({ from: '/(auth)/login' }) || '/';

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpSchema),
  });

  const onCheckOtp = async (data) => {
    localStorage.setItem('token', 'abc');
    navigate({ to: '/' });
  };

  const {
    isPending,
    error: reqErr,
    mutate,
  } = useMutation({
    mutationFn: onCheckOtp,
    // onSuccess({ data }) {
    //setIsFirstLogin(data.data.initailLogin);
    //setHasConsent(data.data.consentTerms);
    //   if (data.data.initailLogin) {
    //     setStep(STEPS.CHANGE_PASSWORD);
    //     return;
    //   }
    //   if (data.data.consentTerms) {
    //     localStorage.setItem('token', data.data.token);
    //     localStorage.setItem(
    //       'legalOwner',
    //       data.data?.roles?.[0]?.replace('Admin-', '')
    //     );

    //     dispatch(
    //       changeSuperAdminContext(
    //         ADMINS[data.data?.roles?.[0]?.replace('Admin-', '')]
    //       )
    //     );
    //     return navigate(from, {
    //       replace: true,
    //     });
    //   }
    //   setHasSentOtp(true);
    // },
  });

  const onSubmit = (data) => mutate(data);

  const onConfirm = async () => await consentTermsService(username);

  const { mutate: handleConfirmModal } = useMutation({
    mutationFn: onConfirm,
    onSuccess({ data }) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem(
        'legalOwner',
        data.data?.roles?.[0]?.replace('Admin-', ''),
      );

      // dispatch(
      //   changeSuperAdminContext(
      //     ADMINS[data.data?.roles?.[0]?.replace('Admin-', '')],
      //   ),
      // );
      closeModal();

      navigate({ to: '/', replace: true });
    },
  });

  const errorMsg = reqErr?.response?.data?.message || FALLBACK_ERR_MSG;

  return (
    <div className="flex items-center justify-center flex-col px-3">
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2 mb-4">
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => setStep(STEPS.LOGIN)}
          >
            <ArrowRight />
          </Button>
          <h2 className="font-semibold text-ivory-950 text-xl">
            تأكيد عملية تسجيل الدخول
          </h2>
        </div>
        <div className="mb-6">
          <span className="block text-ivory-950">
            الرجاء إدخال رمز التحققق المكون من 6 أرقام المرسل إلى
          </span>
          <span className="block text-secondary-400 underline">
            {`\u202A ${phoneNumber}`}
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 items-start mb-8">
            <Label className="text-sm text-ivory-900">رمز التحقق</Label>
            <Controller
              name="otp"
              control={control}
              defaultValue=""
              render={({ field }) => <OTP field={field} errors={errors} />}
            />
            {reqErr && (
              <span className="text-danger-200 text-sm">{errorMsg}</span>
            )}
            {errors.otp && (
              <span className="text-xs text-danger-200">
                {errors.otp.message}
              </span>
            )}
            <OTPCounter />
          </div>

          <Button className="w-full h-auto py-4" disabled={isPending}>
            تأكيد
          </Button>
        </form>
      </div>
      <TermsModal
        open={!hasConsent && !isFirstLogin && hasSentOtp}
        onConfirm={handleConfirmModal}
      />
    </div>
  );
};

export default OTPForm;
