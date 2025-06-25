import { authorize } from '@/utils/authorize';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children, requiredPermission }) => {
  const role = localStorage.getItem('legalOwner');
  const hasAccess = authorize(
    role,
    requiredPermission[0],
    requiredPermission[1]
  );
  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
