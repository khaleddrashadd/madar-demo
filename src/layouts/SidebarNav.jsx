/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import { NavLink } from 'react-router';
import ReportIcon from '../assets/icons/report.svg?react';
import LogoIcon from '../assets/icons/logo.svg';
import SidebarNavExpandableItem from './SidebarNavExpandableItem';
import { ArrowRightToLine, House, FileText, Grid2x2Plus } from 'lucide-react';
const SidebarNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleOpenSidebar = () => setIsSidebarOpen(true);

  return (
    <div
      className={`relative min-h-screen ${
        !isSidebarOpen ? 'w-20' : 'w-52'
      } col-start-1 col-span-1 row-start-1 row-span-2`}
    >
      <nav
        className={`bg-primary-500 text-white duration-300 px-2 fixed min-h-screen z-999 ${
          !isSidebarOpen ? 'w-20' : 'w-52'
        }`}
      >
        <div className="flex flex-col gap-10 py-4">
          <div className="text-center bg-white max-w-40 w-full mx-auto -translate-y-2">
            <img
              src={LogoIcon}
              alt="logo"
              className="max-w-40 w-full object-cover"
            />
          </div>
        </div>
        <ul className="flex flex-col gap-[10px] py-3 px-2">
          <li
            className={`flex items-center duration-300 hover:bg-secondary-400 hover:text-white rounded-2xl ${
              !isSidebarOpen ? 'justify-center w-max' : ''
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'bg-secondary-400 flex gap-3 items-center w-full h-full rounded-2xl px-2 py-2'
                  : 'flex gap-3 items-center w-full h-full rounded-2xl px-2 py-2'
              }
            >
              <House className="w-6 h-6 text-white" />
              {isSidebarOpen && (
                <span className="text-sm font-semibold">الرئيسية</span>
              )}
            </NavLink>
          </li>
          <li
            className={`flex items-center duration-300 hover:bg-secondary-400 hover:text-white rounded-2xl ${
              !isSidebarOpen ? 'justify-center w-max' : ''
            }`}
          >
            <NavLink
              to="/add-contracts"
              className={({ isActive }) =>
                isActive
                  ? 'bg-secondary-400 flex gap-3 items-center w-full h-full rounded-2xl px-2 py-2'
                  : 'flex gap-3 items-center w-full h-full rounded-2xl px-2 py-2'
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.1808 1H14.8192C15.3552 0.999982 15.8176 0.999966 16.1983 1.03158C16.6002 1.06495 16.9997 1.13867 17.3829 1.33776C17.9309 1.62239 18.3776 2.06915 18.6622 2.61708C18.8613 3.00035 18.9351 3.39982 18.9684 3.8017C19 4.18236 19 4.64477 19 5.18078V8C19 8.55229 18.5523 9 18 9C17.4477 9 17 8.55229 17 8V5.22C17 4.63373 16.9992 4.25517 16.9753 3.96722C16.9524 3.69125 16.9135 3.58924 16.8874 3.53903C16.7925 3.35638 16.6436 3.20746 16.461 3.11259C16.4108 3.08651 16.3088 3.04764 16.0328 3.02472C15.7448 3.00081 15.3663 3 14.78 3H7.22C6.63373 3 6.25517 3.00081 5.96722 3.02472C5.69125 3.04764 5.58924 3.08651 5.53903 3.11259C5.35638 3.20746 5.20746 3.35638 5.11259 3.53903C5.08651 3.58924 5.04764 3.69125 5.02472 3.96722C5.00081 4.25517 5 4.63373 5 5.22V16.78C5 17.3663 5.00081 17.7448 5.02472 18.0328C5.04764 18.3088 5.08651 18.4108 5.11259 18.461C5.20746 18.6436 5.35638 18.7925 5.53903 18.8874C5.58924 18.9135 5.69125 18.9524 5.96722 18.9753C6.25517 18.9992 6.63373 19 7.22 19H9C9.55229 19 10 19.4477 10 20C10 20.5523 9.55229 21 9 21H7.18083C6.64479 21 6.18238 21 5.8017 20.9684C5.39982 20.935 5.00034 20.8613 4.61708 20.6622C4.06915 20.3776 3.62239 19.9309 3.33776 19.3829C3.13867 18.9997 3.06495 18.6002 3.03158 18.1983C2.99997 17.8176 2.99998 17.3552 3 16.8192V5.1808C2.99998 4.64478 2.99997 4.18237 3.03158 3.8017C3.06495 3.39982 3.13867 3.00035 3.33776 2.61708C3.62239 2.06915 4.06915 1.62239 4.61708 1.33776C5.00035 1.13867 5.39982 1.06495 5.8017 1.03158C6.18237 0.999966 6.64478 0.999982 7.1808 1ZM7 6C7 5.44772 7.44772 5 8 5H14C14.5523 5 15 5.44772 15 6C15 6.55229 14.5523 7 14 7H8C7.44772 7 7 6.55229 7 6ZM7 10C7 9.44772 7.44772 9 8 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H8C7.44772 11 7 10.5523 7 10ZM17 13C16.4477 13 16 13.4477 16 14C16 14.5523 16.4477 15 17 15C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13ZM19.4951 15.6662C19.814 15.1896 20 14.6165 20 14C20 12.3431 18.6569 11 17 11C15.3431 11 14 12.3431 14 14C14 14.6165 14.186 15.1896 14.5049 15.6662C13.0088 16.5291 12 18.1437 12 19.9949C12 20.55 12.45 21 13.0051 21H20.9949C21.55 21 22 20.55 22 19.9949C22 18.1437 20.9912 16.5291 19.4951 15.6662ZM17 17C15.6937 17 14.5812 17.8357 14.1699 19H19.8302C19.4188 17.8357 18.3063 17 17 17ZM7 14C7 13.4477 7.44772 13 8 13H10C10.5523 13 11 13.4477 11 14C11 14.5523 10.5523 15 10 15H8C7.44772 15 7 14.5523 7 14Z"
                  fill="white"
                />
              </svg>

              {isSidebarOpen && (
                <span className="text-sm font-semibold">إضافة العقود</span>
              )}
            </NavLink>
          </li>
          <SidebarNavExpandableItem
            title="التقارير"
            icon={<ReportIcon className="fill-white w-6 h-6" />}
            isSidebarOpen={isSidebarOpen}
            routes={[
              { title: 'الأقساط', to: '/reports/installments' },
              { title: 'العقود', to: '/reports/contracts' },
              {
                title: 'التحصيل',
                to: '/reports/collections',
                beta: true,
              },
            ]}
            baseRoute="/reports"
            handleOpenSidebar={handleOpenSidebar}
          />

          <SidebarNavExpandableItem
            title="الخدمات"
            icon={<Grid2x2Plus className="text-white w-6 h-6" />}
            isSidebarOpen={isSidebarOpen}
            routes={[
              { title: 'إسناد المحافظ ', to: '/services/upload-contracts' },
              { title: 'العقود المرفوعة', to: '/services/uploaded-contracts' },
            ]}
            baseRoute="/services"
            handleOpenSidebar={handleOpenSidebar}
          />
        </ul>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={` bg-ivory-50 rounded-md text-secondary-400 sm:flex hidden items-center justify-center absolute top-[60px] w-8 h-8 rtl:left-0 ltr:right-0 rtl:-translate-x-1/2 ltr:translate-x-1/2 shadow-sm z-99 p-2 rotate-0 ${
            isSidebarOpen ? '' : '!rotate-180'
          }`}
        >
          {<ArrowRightToLine className="text-base" />}
        </button>
      </nav>
    </div>
  );
};

export default SidebarNav;
