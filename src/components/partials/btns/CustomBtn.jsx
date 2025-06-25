import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';

const CustomBtn = ({
  title = '',
  variant = 'default',
  isLink = false,
  href,
  onClick,
  className,
  isLoading = false,
  loadingText = 'Loading...',
  disabled,
  icon,

  ...props
}) => {
  // Use navigation hook for programmatic navigation
  const navigate = useNavigate();

  // Handler for navigation when isLink is true
  const handleNavigation = (e) => {
    if (isLink && href) {
      e.preventDefault();
      navigate(href);
    }
    // Call the provided onClick handler if it exists
    if (onClick) onClick(e);
  };

  // Determine button style based on variant and merge with provided classes
  const buttonClasses = cn('flex items-center justify-center', className);

  // Button content
  const buttonContent = (
    <>
      {isLoading && title && icon && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      {isLoading && title && loadingText}

      {!isLoading && icon}
      {!isLoading && title}
    </>
  );

  // Otherwise render as regular Button
  return (
    <Button
      variant={variant}
      className={buttonClasses}
      onClick={handleNavigation}
      disabled={disabled || isLoading}
      {...props}
    >
      {buttonContent}
    </Button>
  );
};

export default CustomBtn;
