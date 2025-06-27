import { Card, CardContent, CardHeader } from '@/components/card';
import TooltipInfo from '@/components/TooltipInfo';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    portfolioName: 'BHF',
    portfolioNumber: '1',
    loansCount: 32,
  },
  {
    portfolioName: 'MASAR',
    portfolioNumber: '2',
    loansCount: 79,
  },
  {
    portfolioName: 'REDF',
    portfolioNumber: '3',
    loansCount: 57,
  },
];

const TotalLoansPerPortfolioChart = ({
  selectedPortfolio,
  setSelectedPortfolio,
}) => {
  const isSinglePair = data?.length === 1;
  return (
    <Card className="py-6 px-3">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4 ">
          <h6 className="text-xl font-semibold">إجمالي عدد القروض / محفظة</h6>
          <TooltipInfo id="55#" place="top-start" delay={300}>
            إجمالي عدد القروض / محفظة
          </TooltipInfo>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <div className="h-64" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                margin={{ right: 30, bottom: 20 }}
              >
                <CartesianGrid horizontal={false} strokeDasharray="3,3" />
                <XAxis type="number" tickLine={false} orientation="top" />
                <YAxis
                  type="category"
                  dataKey="portfolioName"
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                />
                <Bar
                  dataKey="loansCount"
                  fill="#00609D"
                  onClick={(entry) =>
                    setSelectedPortfolio((prev) =>
                      prev === entry.portfolioNumber
                        ? ''
                        : entry.portfolioNumber
                    )
                  }
                  barSize={isSinglePair ? 60 : 40}
                >
                  {data?.map((entry) => (
                    <Cell
                      key={entry.portfolioNumber}
                      fill="#00609D"
                      opacity={
                        selectedPortfolio &&
                        selectedPortfolio !== entry.portfolioNumber
                          ? 0.3
                          : 0.8
                      }
                      cursor="pointer"
                    />
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
export default TotalLoansPerPortfolioChart;
