import { Card, CardContent, CardHeader } from '@/components/card';
import TooltipInfo from '@/components/TooltipInfo';
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const modifiedData = [
  { name: 'current', count: 20, color: '#00A98F' }, // Green for 0-30 days
  { name: 'Grace Period', count: 20, color: '#C0C0C0' }, // Orange for 31-60 days
  { name: 'Bucket 1', count: 40, color: '#F4E13D' }, // Red for 61-90 days
  { name: 'Write Off', count: 10, color: '#626262' }, // Purple for 91-120 days
];

const LoanOverDueChart = () => {
  return (
    <Card className="py-6 px-3">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4 ">
          <h6 className="text-xl font-semibold">
            القروض حسب فئات التاخر في السداد
          </h6>
          <TooltipInfo id="17#" place="top-start" delay={300}>
            القروض حسب فئات التاخر في السداد
          </TooltipInfo>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <div className="h-64" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modifiedData} margin={{ right: 30 }}>
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  interval={0}
                  height={60}
                  tickLine={false}
                />
                <YAxis
                  tickLine={false}
                  domain={[0, 100]}
                  tick={{ fontSize: 12 }}
                />

                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {modifiedData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default LoanOverDueChart;
