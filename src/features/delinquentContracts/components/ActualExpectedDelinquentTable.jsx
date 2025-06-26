import { Card, CardContent, CardHeader } from '@/components/card';
import TooltipInfo from '@/components/TooltipInfo';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const data = {
  items: [
    {
      contractNumber: '123456',
      month: 'يناير',
      acceptanceRatio: '85%',
      expectedDelinquencyRate: '5%',
    },
    {
      contractNumber: '123457',
      month: 'فبراير',
      acceptanceRatio: '80%',
      expectedDelinquencyRate: '6%',
    },
    {
      contractNumber: '123458',
      month: 'مارس',
      acceptanceRatio: '90%',
      expectedDelinquencyRate: '4%',
    },
    {
      contractNumber: '123459',
      month: 'أبريل',
      acceptanceRatio: '75%',
      expectedDelinquencyRate: '7%',
    },
    {
      contractNumber: '123460',
      month: 'مايو',
      acceptanceRatio: '88%',
      expectedDelinquencyRate: '3%',
    },
  ],
};

const ActualExpectedDelinquentTable = () => {
  return (
    <Card className="py-6 px-3">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            <h6 className="text-xl font-semibold">
              جدول التعثر المتوقع والفعلي
            </h6>
            <TooltipInfo id="12#" place="top-start" delay={300}>
              جدول التعثر المتوقع والفعلي
            </TooltipInfo>
          </div>
          <span className="text-sm text-primary-500 cursor-pointer hover:underline">
            الكل
          </span>
        </div>
      </CardHeader>
      <CardContent className="border-0">
        <div className="w-full px-4">
          <div className="rounded-xl">
            <div>
              <Table dir="rtl" className="mt-4 border-spacing-y-3">
                {/*  */}
                <TableHeader className="text-sm">
                  <TableRow className="bg-primary-50">
                    <TableHead className="text-center  font-semibold">
                      الشهر
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      نسبة القبول (%)
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      التعثر المتوقع (%)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.items?.map((item) => (
                    <TableRow key={item?.contractNumber}>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.month}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.acceptanceRatio}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.expectedDelinquencyRate}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default ActualExpectedDelinquentTable;
