export const initialCardsData = [
  {
    activeCount: {
      title: 'عدد العقود النشطة',
      content: null,
      icon: 'document_checked',
      hasTooltip: true,
      tooltipId: 'activeCount',
      tooltipText: 'عدد العقود النشطة في المحفظة ',
    },
  },
  {
    closedCount: {
      title: 'عدد العقود المقفلة',
      content: null,
      icon: 'notebook',
      hasTooltip: true,
      tooltipId: 'closedCount',
      tooltipText: 'عدد العقود المغلقة في المحفظة حالياً',
    },
  },

  {
    originalOutstandingPrincipal: {
      title: 'قيمة اصل المحفظة',
      content: null,
      icon: 'wallet',
      hasCurrency: true,
      hasTooltip: true,
      tooltipId: 'originalOutstandingPrincipal',
      tooltipText:
        'قيمة اصل المحفظة بدايةً من المحفظة و ليس بدايةً من شراء المحفظة او إسناد المحفظة إلى NFSC',
    },
  },

  {
    currentOutstandingPrincipal: {
      title: 'قيمة الأصل المتبقي',
      content: null,
      icon: 'coins',
      hasCurrency: true,
      hasTooltip: true,
      tooltipId: 'currentOutstandingPrincipal',
      tooltipText:
        'مجموع الأصل المتبقي، غير متضمن الفائدة و متضمن المبلغ المدفوع جزئياً',
    },
  },

  {
    fullyPaid: {
      title: 'المبالغ المسددة',
      content: null,
      icon: 'badge_checked',
      hasCurrency: true,
      hasTooltip: true,
      tooltipId: 'fullyPaid',
      tooltipText:
        'المبالغ المسددة بدايةً من العقد و ليس بدايةً من إسناد المحفظة او شراء المحفظة من المالك',
    },
  },

  {
    notPaid: {
      title: 'المبالغ المتأخرة',
      content: null,
      icon: 'alarm',
      hasCurrency: true,
      hasTooltip: true,
      tooltipId: 'notPaid',
      tooltipText:
        'المبالغ المتأخرة بدايةً من العقد و ليس بدايةً من إسناد المحفظة او شراء المحفظة من المالك',
    },
  },

  {
    fullyPaidCount: {
      title: 'الأقساط المدفوعة',
      content: null,
      icon: 'document',
      hasTooltip: true,
      tooltipId: 'fullyPaidCount',
      tooltipText:
        'عدد الأقساط المدفوعة بدايةً من العقد و ليس بدايةً من إسناد المحفظة او شراء المحفظة من المالك',
    },
  },

  {
    advanceAmount: {
      title: 'المبلغ المدفوع مقدماً',
      content: null,
      icon: 'zap',
      hasCurrency: true,
      hasTooltip: true,
      tooltipId: 'advanceAmount',
      tooltipText: 'إجمالي المبالغ التي تم دفعها بشكل مسبق',
    },
  },

  {
    partiallyPaid: {
      title: 'المبلغ المدفوع جزئياً',
      content: null,
      icon: 'multi_tool',
      hasCurrency: true,
      hasTooltip: true,
      tooltipId: 'partiallyPaid',
      tooltipText: 'إجمالي المبالغ التي تم دفعها بشكل جزئي',
    },
  },

  {
    activeTickets: {
      title: 'التذاكر النشطة',
      content: null,
      icon: 'badge',
      hasTooltip: true,
      tooltipId: 'activeTickets',
      tooltipText:
        ' عدد التذاكر النشطة التي تم تسجيلها في نظام إدارة علاقات العملاء CRM',
    },
  },

  {
    upcomingCalls: {
      title: 'مكالمات صادرة',
      content: null,
      icon: 'sent_call',
      hasTooltip: true,
      tooltipId: 'upcomingCalls',
      tooltipText:
        ' عدد المكالمات الصادرة التي تم تسجيلها في نظام إدارة علاقات العملاء CRM  ',
    },
  },
  {
    incomingCalls: {
      title: 'مكالمات واردة',
      content: null,
      icon: 'received_call',
      hasTooltip: true,
      tooltipId: 'incomingCalls',
      tooltipText:
        ' عدد المكالمات الواردة التي تم تسجيلها في نظام إدارة علاقات العملاء CRM  ',
    },
  },
];
