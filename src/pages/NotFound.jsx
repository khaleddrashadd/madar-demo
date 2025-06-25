import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-4">
        الصفحة التي تبحث عنها غير موجودة
      </p>
      <p className="text-gray-500 mb-8 text-sm">
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر
      </p>
      <NavLink to="/">
        <Button>العودة إلى الصفحة الرئيسية</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;
