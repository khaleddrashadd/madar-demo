import DataCard from '@/components/DataCard';

const TotalValuesItems = ({ data }) => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-6 gap-3 mb-3">
        <DataCard
          wrapperClass="col-span-6 sm:col-span-3 3xl:col-span-2"
          title={`${data?.totalOriginalOutstanding?.toLocaleString()}`}
          subtitle="قيمة المحافظ"
          hasTooltip
          tooltipId="totalOriginalOutstanding"
          tooltipText="هي قيمة المحفظة الكلية بداية من القسط رقم ١"
        />
        <DataCard
          wrapperClass="col-span-6 sm:col-span-3 3xl:col-span-2"
          title={`${data?.totalOriginalOutstandingPrincipal?.toLocaleString()}`}
          subtitle="قيمة الأصل"
          hasTooltip
          tooltipId="totalOriginalOutstandingPrincipal"
          tooltipText="هي قيمة أصل المحفظة منذ بداية إنشاءها"
        />
        <DataCard
          wrapperClass="col-span-6 sm:col-span-6 3xl:col-span-2"
          title={`${data?.totalProfit?.toLocaleString() || '-'}`}
          subtitle="قيمة الربح"
          hasTooltip
          tooltipId="totalProfit"
          tooltipText="هي قيمة ربح المحفظة بداية من القسط رقم ١"
        />
      </div>
      <div className="grid grid-cols-6 gap-3 mb-3">
        <DataCard
          wrapperClass="col-span-6 sm:col-span-3 xl:col-span-2"
          title={`${data?.totalCollection?.toLocaleString() || '-'}`}
          subtitle="التحصيل (كلي + جزئي)"
          variant="warn"
          hasTooltip
          tooltipId="totalCollection"
          tooltipText="هي قيمة ما تم تحصيله بداية من القسط رقم ١ متضمن العقود المغلقة"
        />
        <DataCard
          wrapperClass="col-span-6 sm:col-span-3 xl:col-span-2"
          title={`${data?.totalCollectionProfit?.toLocaleString() || '-'}`}
          subtitle="الربح من التحصيل"
          variant="warn"
          hasTooltip
          tooltipId="totalCollectionProfit"
          tooltipText="هي قيمة الربح من التحصيل الذي تم فى المحفظة بداية من قسط رقم ١"
        />
        <DataCard
          wrapperClass="col-span-6 sm:col-span-6 xl:col-span-2"
          title={`${data?.totalAdvanceCollection?.toLocaleString() || '-'}`}
          subtitle="الدفعة المقدمة"
          variant="warn"
          hasTooltip
          tooltipId="totalAdvanceCollection"
          tooltipText="هي المبالغ المدفوعة مقدمًا فى المحفظة بداية من قسط رقم ١"
        />
      </div>
    </div>
  );
};

export default TotalValuesItems;
