import CardSkeleton from './CardSkeleton';
import Card from '@/features/installments/components/Card';

const Statisitcs = ({ data }) => {
  const cardsData = [
    {
      title: 'الأقساط المفترض دفعها',
      amount:
        data.paymentStats?.data?.data?.targetedAmount?.toLocaleString() || '--',
      count: data.paymentStats?.data?.data?.targetedCount || '--',
      variant: 'primary-500',
      hasCurrency: true,
      hasTooltip: true,
      tooltipId: 'targetedAmount',
      tooltipContent:
        'الأقساط التي كان من المفترض دفعها خلال من بداية المحفظة أو الفترة الزمنية المحددة',
    },
    {
      title: 'الأقساط المدفوعة',
      amount:
        data.paymentStats?.data?.data?.fullyPaidAmount?.toLocaleString() ||
        '--',
      count: data.paymentStats?.data?.data?.fullyPaidCount || '--',
      variant: 'secondary-400',
      hasCurrency: true,
      hasTooltip: true,
      tooltipId: 'fullyPaidAmount',
      tooltipContent:
        'الأقساط التي تم سدادها بالكامل من بداية المحفظة أو الفترة الزمنية المحددة',
    },

    {
      title: 'المبالغ المدفوعة مقدمًا',
      amount:
        data.paymentStats?.data?.data?.advanceAmount?.toLocaleString() || '--',
      count: data.paymentStats?.data?.data?.advanceCount || '--',
      variant: 'extended-700',
      hasCurrency: true,
      hasTooltip: true,
      tooltipId: 'advanceAmount',
      tooltipContent:
        'المبالغ التي تم دفعها بشكل مسبق قبل موعد استحقاقها من بداية المحفظة أو الفترة الزمنية المحددة',
    },
    {
      title: 'الأقساط المتأخرة',
      amount:
        data.paymentStats?.data?.data?.dueInstallmentsAmount?.toLocaleString() ||
        '--',
      count: data.paymentStats?.data?.data?.dueInstallmentsCount || '--',
      variant: 'danger-200',
      hasCurrency: true,
      hasTooltip: true,
      tooltipId: 'dueInstallmentsAmount',
      tooltipContent:
        'الأقساط التي لم يتم سدادها في المواعيد المحددة من بداية المحفظة أو الفترة الزمنية المحددة',
      className: 'col-span-1',
    },
  ];

  return (
    <div className="grid grid-rows-[max-content,1fr] grid-cols-2  shadow-custom px-4 pt-3 border border-ivory-200 rounded-lg">
      <h3 className="text-semibold text-lg border-b border-b-solid border-[#D8D8D8] pb-3 col-start-1 col-span-full">
        إحصائيات الأقساط
      </h3>
      <div className="grid md:grid-cols-[repeat(2,1fr)] grid-cols-1 gap-4 col-start-1 col-span-full py-3">
        {data.paymentStatstLoading && data.paymentDataLoading ? (
          <CardSkeleton />
        ) : (
          cardsData.map((card, index) => <Card key={index} card={card} />)
        )}
      </div>
    </div>
  );
};

export default Statisitcs;
