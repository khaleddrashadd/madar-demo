import Badge from '@/components/partials/badge/CustomBadge';

export default function StatusBadge({ statusCode }) {
  // Define status configurations
  const statusConfig = {
    UnderProgressWithLegalOwner: {
      variant: 'warning',
      title: 'قيد الأنتظار',
    },
    Approved: {
      variant: 'success',
      title: 'تمت الموافقة',
    },
    Certified: {
      variant: 'success',
      title: 'تمت الموافقة',
    },
    Returned: {
      variant: 'danger',
      title: 'مرتجع',
    },
    Exported: {
      variant: 'success',
      title: 'تم الإصدار',
    },
    Draft: {
      variant: 'basic',
      title: 'مسودة',
    },
  };

  // Get config for the current status code or use a default
  const config = statusConfig[statusCode] || {
    variant: 'warning',
    title: 'غير معروف',
  };

  return <Badge variant={config.variant} title={config.title} />;
}
