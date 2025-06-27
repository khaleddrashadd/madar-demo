import { Card } from '@/components/card';
import Pagination from '@/components/Pagination';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Eye } from 'lucide-react';

const data = {
  items: [
    {
      id: 1,
      complaintId: 'SA12334',
      complaintDate: '2025-05-02',
      complaintStatus: 'ايميل',
      complaintDescription:
        'تم تقديم الشكوى عبر الرقم المجاني منذ يومين في الهيئة التمويلية وقد تم الرد عليها من قبل',
    },
    {
      id: 2,
      complaintId: 'SA12300',
      complaintDate: '2025-05-02',
      complaintStatus: 'رسالة',
      complaintDescription:
        'تأكيد عن عدم صحة من الهيئة التمويلية من بالإضافة إلى تصحيح معلومات الهيئة التمويلية والحصول على',
    },
    {
      id: 3,
      complaintId: 'SA12454',
      complaintDate: '2025-05-02',
      complaintStatus: 'ايميل',
      complaintDescription:
        'تأثير اعتماداً على إجراء تصحيحية لمحتوياته المدافع عنها منذ بداية المشكله في التعامل مع العميل',
    },
    {
      id: 4,
      complaintId: 'SA12567',
      complaintDate: '2025-05-02',
      complaintStatus: 'ايميل',
      complaintDescription:
        'تبين الاستخدامات الأولية في كل النماذج من العقود الهيئة التمويلية وقد تقاضي الدعم لجهة شباط',
    },
    // {
    //   id: 5,
    //   complaintId: 'SA12478',
    //   complaintDate: '2025-05-02',
    //   complaintStatus: 'ايميل',
    //   complaintDescription:
    //     'تبين شكاية مالية العمل من خلال عمل بدائل الإجراء المجتمع وضمانات الهيئة التمويلية والحصول على',
    // },
    // {
    //   id: 6,
    //   complaintId: 'SA12780',
    //   complaintDate: '2025-05-02',
    //   complaintStatus: 'رسالة',
    //   complaintDescription:
    //     'تحليلات التفاصيل المقبوضة بدائل التمويل في التقارير مصنوعة صحيح البنود المطلوبة التجارية المحدودة',
    // },
    // {
    //   id: 7,
    //   complaintId: 'SA12780',
    //   complaintDate: '2025-05-02',
    //   complaintStatus: 'رسالة',
    //   complaintDescription:
    //     'تحليلات التفاصيل المقبوضة بدائل التمويل في التقارير مصنوعة صحيح البنود المطلوبة التجارية المحدودة',
    // },
  ],
};

function ComplaintsTable() {
  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <div className="rounded-xl">
          <div>
            <Table dir="rtl" className="mt-4 border-spacing-y-3">
              {/*  */}
              <TableHeader className="text-sm">
                <TableRow className="bg-primary-50 bg-transparent">
                  <TableHead className="text-center font-semibold">
                    رقم الشكوى
                  </TableHead>
                  <TableHead className="text-center font-semibold text-nowrap">
                    حالة التواصل
                  </TableHead>
                  <TableHead className="text-center font-semibold">
                    ملاحظات
                  </TableHead>
                  <TableHead className="text-center font-semibold">
                    الإجراءات
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.items?.map((item) => (
                  <TableRow key={item?.id}>
                    <TableCell className="text-center border-b border-ivory-200">
                      {item?.complaintId}
                    </TableCell>
                    <TableCell className="text-center border-b border-ivory-200">
                      <div className="flex flex-col gap-2 items-center">
                        <span className="text-nowrap text-sm text-gray-600 text-right max-w-md">
                          {item?.complaintDate}
                        </span>
                        <Badge
                          variant="destructive"
                          className="border-none w-fit text-danger-200"
                        >
                          <span>{item?.complaintStatus}</span>
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-center border-b border-ivory-200">
                      {item?.complaintDescription}
                    </TableCell>
                    <TableCell className="text-center border-b border-ivory-200">
                      <Button variant="ghost" className="p-0 h-fit">
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
          className="p-0"
          currentPage={1}
          pageSize={5}
          totalItems={15}
          totalPages={3}
        />
      </CardContent>
    </Card>
  );
}
export default ComplaintsTable;
