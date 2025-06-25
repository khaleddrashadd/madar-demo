import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import CustomLabel from './CustomLabel';
import CustomPieTooltip from './CustomPieTooltip';

const COLORS = {
  1: '#6FD195',
  2: '#DA0000',
  3: '#FFAE4C',
};

const PaymentStatusChart = ({ data }) => {
  const transformedData = [
    {
      id: 1,
      value: data?.fullyPaidRatio,
      count: data?.fullyPaidCount,
      name: 'سداد كلي',
    },
    {
      id: 2,
      value: data?.notPaidRatio,
      count: data?.notPaidCount,
      name: 'لم تسدد',
    },
    {
      id: 3,
      value: data?.partiallyPaidRatio,
      count: data?.partiallyPaidCount,
      name: 'سداد جزئي',
    },
  ];
  const modifiedData = transformedData?.map((item, idx) => {
    return {
      ...item,
      color: COLORS[idx + 1],
    };
  });
  return (
    <div className="w-full">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={modifiedData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={130}
              labelLine={false}
              label={<CustomLabel />}
              dataKey="value"
            >
              {modifiedData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  style={{
                    transformOrigin: 'center',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Pie>
            <Tooltip
              content={
                <CustomPieTooltip countLabel="عدد الأقساط" isPercentage />
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* legends */}
      <div className="flex justify-center gap-4 mb-2">
        {modifiedData?.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div
              className="w-3 h-3 rounded-full mr-2 transition-opacity duration-300"
              style={{
                backgroundColor: entry.color,
              }}
            />
            <span className="text-sm transition-opacity duration-300">
              {entry.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentStatusChart;
