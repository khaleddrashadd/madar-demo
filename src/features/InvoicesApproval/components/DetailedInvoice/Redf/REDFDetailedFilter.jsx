import { Input } from '@/components/ui/input';

// eslint-disable-next-line no-unused-vars
const REDFDetailedFilter = ({ filterState, onFilterChange, tabValue }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 border-b border-gray-200 shadow-custom rounded-lg bg-white">
    <div className="space-y-2">
      <label className="block text-ivory-950 text-sm font-semibold">
        رقم الهوية
      </label>
      <Input
        value={filterState.NID || ''}
        placeholder="أدخل رقم الهوية"
        className="text-right border-gray-300"
        onChange={(event) => onFilterChange('NID', event.target.value)}
      />
    </div>
    {/* {tabValue !== 'MonthlyInstallment' && (
      <div className="space-y-2">
        <label className="block text-ivory-950 text-sm font-semibold">
          رقم الحساب
        </label>
        <Input
          value={filterState.AccountNumber || ''}
          placeholder="أدخل رقم الحساب"
          className="text-right border-gray-300"
          onChange={(event) =>
            onFilterChange('AccountNumber', event.target.value)
          }
        />
      </div>
    )} */}
  </div>
);
export default REDFDetailedFilter;
