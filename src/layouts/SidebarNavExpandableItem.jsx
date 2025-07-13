import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useRouter } from '@tanstack/react-router';

const SidebarNavExpandableItem = ({
  isSidebarOpen,
  routes,
  title,
  beta,
  icon,
  baseRoute,
}) => {
  const [isListExpanded, setIsListExpanded] = useState(false);
  const handleExpandList = () => {
    if (routes.length) {
      setIsListExpanded(!isListExpanded);
    }
  };
  const { state } = useRouter();
  return (
    <li
      tabIndex={1}
      className={`rounded-2xl duration-300 relative ${
        !isSidebarOpen ? 'justify-center group' : ''
      } ${isListExpanded && isSidebarOpen ? 'bg-primary-600 p-2' : ''}`}
    >
      <div
        onClick={handleExpandList}
        className={`flex group-focus:bg-secondary-400 group-focus:text-white items-center px-2 py-2 cursor-pointer duration-300 rounded-2xl  ${
          !isSidebarOpen ? 'w-max' : ''
        } ${state.location.pathname.includes(baseRoute) ? 'bg-secondary-400' : ''}`}
      >
        <div className="flex gap-3 items-center w-full h-full rounded-2xl">
          {icon}
          {isSidebarOpen && (
            <span className="text-sm font-semibold select-none">{title}</span>
          )}
          {beta && isSidebarOpen && (
            <span className="text-xs font-semibold text-[#D7B40B] rounded-full px-1 bg-[#FFF8D4] rtl:-mr-2 ltr:-ml-2">
              قريبا
            </span>
          )}
        </div>
        {isSidebarOpen && (
          <ChevronDownIcon
            className={`text-white ${isListExpanded ? '-scale-y-100' : ''}`}
          />
        )}
      </div>
      {(isListExpanded || !isSidebarOpen) && (
        <div
          className={`flex-col w-max ${
            !isSidebarOpen
              ? 'hidden group-focus:flex active:flex absolute rtl:right-full ltr:left-full bg-primary-600 rounded-2xl top-0 before:absolute before:border-[10px] rtl:before:border-l-primary-600 ltr:before:border-l-transparent ltr:before:border-r-primary-600 rtl:before:border-r-transparent before:border-r-transparent before:border-t-transparent before:border-b-transparent rtl:before:left-[calc(100%-3px)] ltr:before:right-[calc(100%-3px)] before:top-4 before:rounded-lg'
              : 'flex'
          } ${routes.length ? 'p-2' : ''}`}
        >
          {routes.map((route) =>
            !route.beta ? (
              <Link
                key={route?.to}
                to={route?.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-secondary-200 px-6 py-[10px] duration-300 text-xs select-none'
                    : cn(
                        'px-6 py-[10px] duration-300 hover:text-secondary-200 text-xs select-none',
                        route?.className,
                      )
                }
              >
                {route?.title}
              </Link>
            ) : (
              <div
                key={route?.to}
                className="flex items-center gap-1 px-6 py-[10px] duration-300 text-xs select-none"
              >
                <span className="">{route?.title}</span>
                <span className="text-xs font-semibold text-[#D7B40B] rounded-full px-1 bg-[#FFF8D4]">
                  قريبا
                </span>
              </div>
            ),
          )}
        </div>
      )}
    </li>
  );
};

export default SidebarNavExpandableItem;
