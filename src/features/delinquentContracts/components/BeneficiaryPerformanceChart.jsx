import { Card, CardContent } from '@/components/card';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
const data = [
  { month: 'Jan', value: 280, type: 'historical' },
  { month: 'Feb', value: 750, type: 'historical' },
  { month: 'Mar', value: 220, type: 'historical' },
  { month: 'Apr', value: 780, type: 'historical' },
  { month: 'May', value: 360, type: 'historical' },
  { month: 'Jun', value: 840, type: 'historical' },
  { month: 'Jul', value: 380, type: 'historical' },
  { month: 'Aug', value: 690, type: 'historical' },
  { month: 'Sep', value: 820, type: 'historical' },
  { month: 'Oct', value: 750, type: 'historical' },
  { month: 'Nov', value: 900, type: 'historical' },
  { month: 'Dec', value: 940, type: 'historical' },
  // { month: 'Jan+1', value: 870, type: 'forecast' },
  // { month: 'Feb+1', value: 920, type: 'forecast' },
  // { month: 'Mar+1', value: 950, type: 'forecast' },
  // { month: 'Apr+1', value: 980, type: 'forecast' },
  // { month: 'May+1', value: 1000, type: 'forecast' },
  // { month: 'Jun+1', value: 1020, type: 'forecast' },
  // { month: 'Jul+1', value: 1000, type: 'forecast' },
];
const transitionIndex = data.findIndex((d) => d.type === 'forecast');

const BeneficiaryPerformanceChart = () => {
  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <div>
          <div className="h-64" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  domain={['dataMin', 'dataMax']}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  domain={[0, 1000]}
                  ticks={[0, 200, 400, 600, 800, 1000]}
                />
                <Tooltip content={<CustomTooltip />} />

                {/* Single line with gradient colors */}
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#colorGradient)"
                  strokeWidth={3}
                  dot={null}
                  activeDot={{ r: 4, fill: '#2563eb' }}
                />

                {/* Define gradient */}
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop
                      offset={`${(transitionIndex / data.length) * 100}%`}
                      stopColor="#2563eb"
                    />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CustomTooltip = ({ active, payload, label, dir = 'rtl' }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg">
        <div className="flex flex-col items-center gap-2" dir={dir}>
          <div className="font-semibold text-gray-700 text-sm">{label}</div>
          {payload.map((entry, index) => (
            <div className="flex items-center gap-2" key={index}>
              <span
                className="text-sm text-primary-500 font-extrabold"
                style={{ color: entry.color }}
              >
                {entry.value?.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
export default BeneficiaryPerformanceChart;
