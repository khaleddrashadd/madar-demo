export const CONTRACTS_STATUS = {
  PendingActivation: {
    variant: 'wait',
    className: '',
  },
  PendingVerification: {
    variant: 'destructive',
    className: '',
  },
  ErrorOccurred: {
    variant: 'destructive',
    className: "'text-danger-100 border-0'",
  },
  Active: '',
};

export const BUCKET_STATUS = {
  Current: {
    className:
      'border-[#00A98F] bg-[#00A98F]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#00A98F] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2',
  },
  GracePeriod: {
    className:
      'border-[#C0C0C0] bg-[#C0C0C0]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#C0C0C0] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2',
  },
  Bucket1: {
    className:
      'border-[#F4E13D] bg-[#F4E13D]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#F4E13D] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2',
  },
  Bucket2: {
    className:
      'border-[#FFCB59] bg-[#FFCB59]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#FFCB59] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2',
  },
  Bucket3: {
    className:
      'border-[#FFAE4C] bg-[#FFAE4C]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#FFAE4C] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2',
  },
  Bucket4: {
    className:
      'border-[#F08747] bg-[#F08747]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#F08747] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2',
  },
  Bucket5: {
    className:
      'border-[#F66143] bg-[#F66143]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#F66143] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2',
  },
  Bucket6: {
    className:
      'border-[#F03C3C] bg-[#F03C3C]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#F03C3C] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2',
  },
  WriteOff: {
    className:
      'border-[#DA0000] bg-[#DA0000]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#DA0000] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2',
  },
  Closed: {
    className:
      'border-[#626262] bg-[#626262]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#626262] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2',
  },
};
