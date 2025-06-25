import CustomTooltip from '@/components/CustomTooltip';
import { formatNumber } from '@/utils/formatNumber';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
const CollectionPerformanceChart = ({ data }) => {
  const displayData = data || [];

  const isSinglePair = displayData.length === 1;

  return (
    <div className="w-full p-3">
      <div className="h-64" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={displayData}
            margin={{ top: 25, bottom: 5, left: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="dateLabel"
              tick={{ fontSize: 8, angle: -30, textAnchor: 'end' }}
              interval={0}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              domain={[0, 40]}
              tickLine={false}
              tickFormatter={formatNumber}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: '#00619d', opacity: 0.1 }}
            />
            <Legend
              verticalAlign="bottom"
              height={40}
              wrapperStyle={{ fontSize: '12px', bottom: -5 }}
            />
            <Bar
              dataKey="totalInstallmentAmount"
              // dataKey="expectedCollection"
              name="الأداء المتوقع"
              fill="#D1803F"
              style={{ opacity: 0.8 }}
              radius={[4, 4, 0, 0]}
              barSize={isSinglePair ? 80 : 15}
            />
            <Bar
              dataKey="exactCollection"
              name="الأداء الفعلي"
              fill="#6FD195"
              style={{ opacity: 0.8 }}
              radius={[4, 4, 0, 0]}
              barSize={isSinglePair ? 80 : 15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CollectionPerformanceChart;
