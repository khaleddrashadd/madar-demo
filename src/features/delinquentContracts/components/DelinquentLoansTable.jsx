import { Card, CardContent, CardHeader } from '@/components/card';
import Pagination from '@/components/Pagination';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useNavigate } from '@tanstack/react-router';
import { Eye, SaudiRiyal } from 'lucide-react';

const data = {
  items: [
    {
      id: 1,
      beneficiaryName: 'أحمد محمد علي',
      mobileNumber: '0512345678',
      portfolioName: 'BHF',
      productType: 'تمويل عقاري',
      installmentAmount: '850',
      bucket: 'Bucket 5',
      paymentStatus: 'متعثر',
      communicationDate: '2025-05-02',
      communicationStatus: 'اتصال',
      notes: 'وعد بالسداد يوم 22 مايو',
    },
    {
      id: 2,
      beneficiaryName: 'عبد الله محمود علي',
      mobileNumber: '0512345678',
      portfolioName: 'DGF',
      productType: 'تمويل عقاري',
      installmentAmount: '1200',
      bucket: 'Bucket 6',
      paymentStatus: 'متعثر',
      communicationDate: '2025-03-02',
      communicationStatus: 'رسالة',
      notes: 'وعد بالسداد يوم 22 مايو',
    },
    {
      id: 3,
      beneficiaryName: 'فاطمة الزهراء حسن',
      mobileNumber: '0512345678',
      portfolioName: 'SNB',
      productType: 'تمويل عقاري',
      installmentAmount: '1500',
      bucket: 'write off',
      paymentStatus: 'متأخر',
      communicationDate: '2024-07-20',
      communicationStatus: 'اتصال',
      notes: 'وعد بالسداد يوم 22 مايو',
    },
    {
      id: 4,
      beneficiaryName: 'يوسف عادل الحارث',
      mobileNumber: '0512345678',
      portfolioName: 'SNB',
      productType: 'تمويل عقاري',
      installmentAmount: '750',
      bucket: 'Bucket 5',
      paymentStatus: 'متأخر',
      communicationDate: '2025-08-02',
      communicationStatus: 'ايميل',
      notes: 'وعد بالسداد يوم 22 مايو',
    },
    {
      id: 5,
      beneficiaryName: 'سارة جمال عبد الله',
      mobileNumber: '0512345678',
      portfolioName: 'SNB',
      productType: 'تمويل عقاري',
      installmentAmount: '950',
      bucket: 'Bucket 5',
      paymentStatus: 'متعثر',
      communicationDate: '2024-07-20',
      communicationStatus: 'رسالة',
      notes: 'وعد بالسداد يوم 22 مايو',
    },
    {
      id: 6,
      beneficiaryName: 'مريم صلاح الدين',
      mobileNumber: '0512345678',
      portfolioName: 'DGF',
      productType: 'تمويل عقاري',
      installmentAmount: '1100',
      bucket: 'write off',
      paymentStatus: 'متأخر',
      communicationDate: '2025-03-02',
      communicationStatus: 'ايميل',
      notes: 'طلب الإنتظار ليوم 5 مايو',
    },
    {
      id: 7,
      beneficiaryName: 'علي خليل جاسم',
      mobileNumber: '0512345678',
      portfolioName: 'BHF',
      productType: 'تمويل عقاري',
      installmentAmount: '1300',
      bucket: 'Bucket 6',
      paymentStatus: 'متعثر',
      communicationDate: '2024-07-20',
      communicationStatus: 'رسالة',
      notes: 'وعد بالسداد يوم 22 مايو',
    },
    {
      id: 8,
      beneficiaryName: 'نورة فيصل سعادي',
      mobileNumber: '0512345678',
      portfolioName: 'DGF',
      productType: 'تمويل عقاري',
      installmentAmount: '1000',
      bucket: 'Bucket 6',
      paymentStatus: 'متأخر',
      communicationDate: '2025-05-02',
      communicationStatus: 'ايميل',
      notes: 'وعد بالسداد يوم 22 مايو',
    },
    {
      id: 9,
      beneficiaryName: 'إبراهيم سعيد يوسف',
      mobileNumber: '0512345678',
      portfolioName: 'DGF',
      productType: 'تمويل عقاري',
      installmentAmount: '800',
      bucket: 'Bucket 5',
      paymentStatus: 'متعثر',
      communicationDate: '2024-07-20',
      communicationStatus: 'اتصال',
      notes: 'وعد بالسداد يوم 22 مايو',
    },
  ],
};

const DelinquentLoansTable = () => {
  const navigate = useNavigate();
  return (
    <Card className="py-6 px-3">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            <h6 className="text-xl font-semibold">القروض المتعثرة</h6>
          </div>
          <div className="rounded-md min-w-64 flex items-center h-fit border border-ivory-200 text-sm text-[#1D2939] bg-white relative before:absolute before:h-full before:w-1/2 before:bg-[#F2F4F7] before:top-0 before:rtl:right-0 before:ltr:left-0 before:rounded-md before:z-10">
            <span className="z-20 w-1/2 p-4 text-nowrap font-semibold cursor-pointer rtl:border-l ltr:border-r text-center">
              جميع المتعثرين
            </span>
            <span className="z-20 w-1/2 p-4 text-nowrap font-semibold cursor-pointer text-center">
              اجراءت طارئة
            </span>
          </div>
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
                      اسم المستفيد
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      رقم الجوال
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      اسم المحفظة
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      نوع المنتج
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      مبلغ القسط
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      فئة التأخر
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      حالة السداد
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      حالة التواصل
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      ملاحظات
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      الإجراءات
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.items?.map((item) => (
                    <TableRow key={item?.id}>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.beneficiaryName}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.mobileNumber}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.portfolioName}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.productType}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        <div className="flex items-center justify-center gap-[6px]">
                          <span> {item?.installmentAmount}</span>
                          <SaudiRiyal className="w-4 h-4" />
                        </div>
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.bucket}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.paymentStatus}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        <div className="flex items-center gap-2 text-sm justify-center">
                          <span> {item?.communicationDate}</span>
                          <Badge
                            variant="destructive"
                            className="border-none text-danger-300"
                          >
                            <span>{item?.communicationStatus}</span>
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.notes}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        <Button
                          variant="ghost"
                          className="p-0 h-fit"
                          onClick={() =>
                            navigate({
                              to: `/collections/delinquent-contracts/${item.id}`,
                            })
                          }
                        >
                          <Badge
                            variant="wait"
                            className="border-none h-8 w-8 flex items-center justify-center rounded-md"
                          >
                            <Eye className="w-4 h-4 text-extended-500" />
                          </Badge>
                        </Button>
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
export default DelinquentLoansTable;
