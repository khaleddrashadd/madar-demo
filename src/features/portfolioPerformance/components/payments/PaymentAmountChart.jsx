import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CustomTooltip from '@/components/CustomTooltip';
import { formatNumber } from '@/utils/formatNumber';
const COLORS = {
  unpaid: '#DA0000',
  partialPaid: '#FFAE4C',
  paid: '#6FD195',
};

const legends = [
  { id: 1, color: COLORS.paid, name: 'سداد كلي' },
  { id: 2, color: COLORS.unpaid, name: 'لم تسدد' },
  { id: 3, color: COLORS.partialPaid, name: 'سداد جزئي' },
];
const PaymentAmountChart = ({ data }) => {
  const displayData = data || [];

  const isSinglePair = displayData.length === 1;

  return (
    <div>
      <div className="h-64" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={displayData} margin={{ right: 30, bottom: 30 }}>
            <XAxis
              dataKey="dataLabel"
              tick={{ fontSize: 10, angle: -45, textAnchor: 'end' }}
              interval={0}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickFormatter={formatNumber}
              tickLine={false}
            />
            <Tooltip
              content={
                <CustomTooltip sortedByFn={(data) => data.push(data.shift())} />
              }
              cursor={{ fill: '#00619d', opacity: 0.1 }}
            />
            <Bar
              dataKey="notPaidData.viewValue"
              stackId="a"
              fill={COLORS.unpaid}
              name="لم يسدد"
              opacity={0.8}
              barSize={isSinglePair ? 80 : 15}
            />
            <Bar
              dataKey="fullyPaidData.viewValue"
              stackId="a"
              fill={COLORS.paid}
              name="سداد كلي"
              barSize={isSinglePair ? 80 : 15}
            />
            <Bar
              dataKey="partiallyPaidData.viewValue"
              stackId="a"
              fill={COLORS.partialPaid}
              name="سداد جزئي"
              barSize={isSinglePair ? 80 : 15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* legends */}
      <div className="flex justify-center gap-4 mb-2">
        {legends?.map((entry, index) => (
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

export default PaymentAmountChart;
