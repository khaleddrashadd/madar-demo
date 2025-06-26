import { Card, CardContent, CardHeader } from '@/components/card';
import TooltipInfo from '@/components/TooltipInfo';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const COLORS = {
  paid: '#4CAF50', // Green for fully paid
  unpaid: '#E53935', // Red for not paid
};

const displayData = [
  {
    dataLabel: 'بريدة',
    notPaidData: { viewValue: 30, value: 30 }, //view value is for display purposes, value is the actual data
    fullyPaidData: { viewValue: 70, value: 70 },
  },
  {
    dataLabel: 'الخبر',
    notPaidData: { viewValue: 65, value: 65 },
    fullyPaidData: { viewValue: 35, value: 35 },
  },
  {
    dataLabel: 'الدمام',
    notPaidData: { viewValue: 25, value: 25 },
    fullyPaidData: { viewValue: 75, value: 75 },
  },
  {
    dataLabel: 'جدة',
    notPaidData: { viewValue: 50, value: 50 },
    fullyPaidData: { viewValue: 50, value: 50 },
  },
  {
    dataLabel: 'الرياض',
    notPaidData: { viewValue: 10, value: 10 },
    fullyPaidData: { viewValue: 90, value: 90 },
  },
];

const LoansExpectedRevenueChart = () => {
  return (
    <Card className="py-6 px-3">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4 ">
          <h6 className="text-xl font-semibold">
            {' '}
            القروض المتوقعة حسب المنطقة
          </h6>
          <TooltipInfo id="11#" place="top-start" delay={300}>
            القروض المتوقعة حسب المنطقة
          </TooltipInfo>
        </div>
      </CardHeader>
      <CardContent>
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
                  tickFormatter={(value) => `${value}%`}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <Bar
                  dataKey="fullyPaidData.viewValue"
                  stackId="a"
                  fill={COLORS.paid}
                  name="سداد كلي"
                  barSize={80}
                />
                <Bar
                  dataKey="notPaidData.viewValue"
                  stackId="a"
                  fill={COLORS.unpaid}
                  name="لم يسدد"
                  opacity={0.8}
                  barSize={80}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default LoansExpectedRevenueChart;
