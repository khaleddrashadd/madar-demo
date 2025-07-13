import { authorize } from '@/utils/authorize';
import { Settings, UserRound } from 'lucide-react';
import useAdminContextStore from './store/useAdminContextStore';

const HeaderAdminMenu = ({ isHeaderMenuVisible, onToggleMenu }) => {
  const { adminContext, changeAdminContext } = useAdminContextStore();
  const role = localStorage.getItem('legalOwner');
  const onChangeAdminContext = (ctx) => {
    changeAdminContext(ctx);
    onToggleMenu(false);
  };
  return (
    <div
      className={`duration-150 absolute top-[calc(100%+0.25rem)] p-1 rounded-md bg-white text-sm text-ivory-950 w-full min-w-max shadow-sm font-semibold ${
        isHeaderMenuVisible
          ? 'block animate-fade-in'
          : 'hidden animate-fade-out'
      }`}
    >
      <ul>
        {authorize(role, 'change', ['context']) && (
          <div className="flex flex-col gap-y-2 pb-2 border-b border-ivory-300">
            <li
              className={`hover:bg-secondary-100 rounded-md ${
                adminContext === 'REDF' ? 'bg-secondary-100' : ''
              }`}
            >
              <button
                className="w-full text-start px-4 py-1"
                onClick={() => onChangeAdminContext('REDF')}
              >
                عرض كـ REDF
              </button>
            </li>
            <li
              className={`hover:bg-secondary-100 rounded-md ${
                adminContext === 'SRC' ? 'bg-secondary-100' : ''
              }`}
            >
              <button
                className="w-full text-start px-4 py-1"
                onClick={() => onChangeAdminContext('SRC')}
              >
                عرض كـ SRC
              </button>
            </li>
          </div>
        )}
        <div className="flex flex-col gap-y-2 pt-2">
          <li className="hover:bg-secondary-100 rounded-md">
            <button className="flex items-center gap-[0.375rem] w-full px-4 py-1">
              <div>
                <UserRound className="w-5 h-5" />
              </div>
              <span>الملف الشخصي</span>
            </button>
          </li>
          <li className="hover:bg-secondary-100 rounded-md">
            <button className="flex items-center gap-[0.375rem] w-full px-4 py-1">
              <div>
                <Settings className="w-5 h-5" />
              </div>
              <span>الإعدادات</span>
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default HeaderAdminMenu;
