import { cn } from '@/lib/utils';

const DefaultTextarea = ({
  title,
  error,
  onChange,
  value,
  register,
  name,
  required = false,
  placeholder = 'اكتب هنا...',
  maxLength = 1500,
  dir = 'rtl',
}) => {
  // If register is provided, use it, otherwise use onChange
  const isUsingHookForm = !!register;
  const className = cn(
    'w-full min-h-[120px] p-3 border rounded-md resize-none text-right outline-none',
    !!error && 'border-red-500'
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 items-center">
        <label className="text-sm font-medium">
          {title}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
      </div>

      <div className="relative">
        {isUsingHookForm ? (
          <textarea
            dir={dir}
            {...register(name)}
            placeholder={placeholder}
            className={className}
            maxLength={maxLength}
          />
        ) : (
          <textarea
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            maxLength={maxLength}
          />
        )}

        {/* Character counter */}
        <div className="absolute bottom-2 left-2 text-xs text-gray-400">
          {value ? value.length : 0}/{maxLength}
        </div>
      </div>

      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </div>
  );
};

export default DefaultTextarea;
