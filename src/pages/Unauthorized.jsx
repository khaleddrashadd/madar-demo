import { useNavigate } from '@tanstack/react-router';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">غير مصرح بالوصول</h1>
      <p className="mb-6">عذرًا، لا يمكنك الوصول إلى هذه الصفحة.</p>
      <button
        onClick={() => navigate({ to: '/' })}
        className="px-4 py-2 bg-primary-500 text-white rounded"
      >
        العودة إلى الصفحة الرئيسية
      </button>
    </div>
  );
};

export default UnauthorizedPage;
