const CustomBarTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow-lg" dir="rtl">
        <p className="text-sm" style={{ color: payload[0].payload.color }}>
          قيمة الأصل الحالي:{' '}
          {payload[0].payload.outstandingPrincipal?.toLocaleString()}
        </p>
        <p className="text-sm" style={{ color: payload[0].payload.color }}>
          عدد العقود : {payload[0].payload.count?.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};
export default CustomBarTooltip;
