import { Card, CardContent, CardHeader } from '@/components/card';
import TooltipInfo from '@/components/TooltipInfo';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const ForcastChart = ({ data }) => {
  const transitionIndex = data.findIndex((d) => d.type === 'forecast');
  const maxValue = Math.max(...data.map((d) => d.value));
  const upperLimit = maxValue + 100;
  const tickValues = [];
  for (let i = 0; i <= upperLimit; i += 200) {
    tickValues.push(i);
  }

  return (
    <Card className="py-6 px-3">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4 ">
          <h6 className="text-xl font-semibold">forecast for upcoming</h6>
          <TooltipInfo id="51#" place="top-start" delay={300}>
            forecast for upcoming
          </TooltipInfo>
        </div>
      </CardHeader>
      <CardContent>
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
                  domain={[0, upperLimit]}
                  ticks={tickValues}
                />

                {/* Single line with gradient colors */}
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#colorGradient)"
                  strokeWidth={3}
                  dot={null}
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
                    <stop
                      offset={`${(transitionIndex / data.length) * 100}%`}
                      stopColor="#10b981"
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

export default ForcastChart;
