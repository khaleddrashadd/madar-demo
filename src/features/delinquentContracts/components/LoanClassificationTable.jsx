import { Card, CardContent } from '@/components/card';
import Pagination from '@/components/Pagination';
import { Badge } from '@/components/ui/badge';
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
      beneficiaryName: 'محمد علي',
      contractNumber: '123456',
      productType: 'تمويل عقاري',
      riskLevel: 'منخفض',
      riskColor: 'low',
    },
    {
      beneficiaryName: 'أحمد حسن',
      contractNumber: '123457',
      productType: 'تمويل شخصي',
      riskLevel: 'متوسط',
      riskColor: 'medium',
    },
    {
      beneficiaryName: 'سارة محمد',
      contractNumber: '123458',
      productType: 'تمويل سيارات',
      riskLevel: 'مرتفع',
      riskColor: 'high',
    },
    {
      beneficiaryName: 'علي عبدالله',
      contractNumber: '123459',
      productType: 'تمويل تجاري',
      riskLevel: 'منخفض',
      riskColor: 'low',
    },
    {
      beneficiaryName: 'فاطمة الزهراء',
      contractNumber: '123460',
      productType: 'تمويل دراسي',
      riskLevel: 'متوسط',
      riskColor: 'medium',
    },
  ],
};

const riskColor = {
  high: 'bg-[#F8E9E9] text-[#C40C0C] border border-[#B92026]',
  medium: 'bg-[#FFEEE1] text-[#DE8944] border border-[#FA6400]',
  low: 'bg-[#E5F4F2] text-[#03B936] border border-[#00A98F]',
};

const LoanClassificationTable = () => {
  return (
    <Card className="py-6 px-3">
      <CardContent className="border-0">
        <div className="w-full px-4">
          <div className="rounded-xl">
            <div>
              <Table dir="rtl" className="mt-4 border-spacing-y-3">
                {/*  */}
                <TableHeader className="text-sm">
                  <TableRow className="bg-primary-50">
                    <TableHead className="text-center  font-semibold">
                      اسم المستفيد
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      رقم العقد
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      نوع المنتج
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      درجة المخاطرة
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.items?.map((item) => (
                    <TableRow key={item?.contractNumber}>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.beneficiaryName}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.contractNumber}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.productType}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        <Badge
                          className={`text-sm font-semibold ${
                            riskColor[item?.riskColor]
                          }`}
                        >
                          {item?.riskLevel}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <Pagination
            currentPage={1}
            pageSize={10}
            totalItems={50}
            totalPages={5}
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default LoanClassificationTable;
