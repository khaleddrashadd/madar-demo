import { Outlet } from '@tanstack/react-router';

const ProtectRoutes = () => {
  // const location = useLocation();

  // const prevailage = useSelector(getAdminLegalOwner);
  // const token = localStorage.getItem('token');
  // const canAccess = !!prevailage && !!token;
  // if (!canAccess && location.pathname !== '/login') {
  //   return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  // }
  // if (canAccess && location.pathname === '/login') {
  //   const redirectTo = location.state?.from || '/';
  //   return <Navigate to={redirectTo} replace />;
  // }
  return <Outlet />;
};
export default ProtectRoutes;
