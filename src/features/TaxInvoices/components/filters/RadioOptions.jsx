import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const RadioOptions = ({
  options = [],
  selectedValue,
  setSelectedValue,
  name,
  direction = 'ltr',
  className = '',
  optionClassName = '',
  labelClassName = '',
}) => {
  return (
    <RadioGroup
      value={selectedValue}
      onValueChange={setSelectedValue}
      dir={direction}
      name={name}
      className={className}
    >
      {options.map((option) => (
        <div key={option.value} className={optionClassName}>
          <RadioGroupItem
            value={option.value}
            id={option.value}
            disabled={option.disabled}
            className={
              option.value === selectedValue
                ? 'fill-secondary-300 border-secondary-400 h-6 w-6'
                : 'h-6 w-6'
            }
          />
          <Label htmlFor={option.value} className={labelClassName}>
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioOptions;
