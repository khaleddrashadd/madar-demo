import AppHeading from '@/components/AppHeading';
import UploadContractsContent from '@/features/onboarding/components/UploadContractsContent';

const UploadContracts = () => {
  return (
    <div className="p-4">
      <AppHeading
        title="إسناد المحافظ"
        className="bg-white font-semibold p-6"
      />
      <UploadContractsContent />
    </div>
  );
};

export default UploadContracts;
