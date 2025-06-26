import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, SaudiRiyal } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Card, CardContent } from '@/components/card';
import Pagination from '@/components/Pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { numberSeparator } from '@/utils/numberSeparator';

const CONTRACTS_STATUS = {
  Current: {
    className:
      'border-[#00A98F] bg-[#00A98F]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#00A98F] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 justify-center min-w-[110px]',
  },
  GracePeriod: {
    className:
      'border-[#C0C0C0] bg-[#C0C0C0]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#C0C0C0] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 justify-center min-w-[110px]',
  },
  Bucket1: {
    className:
      'border-[#F4E13D] bg-[#F4E13D]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#F4E13D] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 justify-center min-w-[110px]',
  },
  Bucket2: {
    className:
      'border-[#FFCB59] bg-[#FFCB59]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#FFCB59] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 justify-center min-w-[110px]',
  },
  Bucket3: {
    className:
      'border-[#FFAE4C] bg-[#FFAE4C]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#FFAE4C] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 justify-center min-w-[110px]',
  },
  Bucket4: {
    className:
      'border-[#F08747] bg-[#F08747]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#F08747] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 justify-center min-w-[110px]',
  },
  Bucket5: {
    className:
      'border-[#F66143] bg-[#F66143]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#F66143] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 justify-center min-w-[110px]',
  },
  Bucket6: {
    className:
      'border-[#F03C3C] bg-[#F03C3C]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#F03C3C] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 justify-center min-w-[110px]',
  },
  WriteOff: {
    className:
      'border-[#DA0000] bg-[#DA0000]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#DA0000] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 justify-center min-w-[110px]',
  },
  Closed: {
    className:
      'border-[#626262] bg-[#626262]/10 relative before:absolute before:top-1/2 rtl:before:right-1 ltr:before:left-1 before:w-2 before:h-2 before:bg-[#626262] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 justify-center min-w-[110px]',
  },
};

const mockData = {
  items: [
    {
      referenceNumber: '927805',
      contractNumber: '987676112',
      beneficiaryName:
        '\u0634\u0627\u062F\u064A \u062C\u0645\u0627\u0644 \u0627\u0644\u0625\u0645\u0627\u0645',
      nationalId: '1023456789',
      maturityDate: '2026-10-14T19:26:52',
      outstandingPrincipal: 63081.12,
      contractStatus: 'Current',
      contractId: 2,
      phone: '0501234567',
      lastPayment: 5000,
      overdueDays: 5,
      contractStatusId: 1,
    },
    {
      referenceNumber: '927805',
      contractNumber: '987676113',
      beneficiaryName:
        '\u0633\u0627\u0631\u0629 \u0623\u062D\u0645\u062F \u0627\u0644\u0634\u0645\u0631\u064A',
      nationalId: '1023456744',
      maturityDate: '2027-09-09T19:26:52',
      outstandingPrincipal: 64517.05,
      contractStatus: 'GracePeriod',
      contractId: 3,
      phone: '0509876543',
      overdueDays: 3,
      lastPayment: 3000,
      contractStatusId: 2,
    },
    {
      referenceNumber: '927805',
      contractNumber: '987676114',
      beneficiaryName:
        '\u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0645\u062D\u0645\u062F \u0627\u0644\u0642\u062D\u0637\u0627\u0646\u064A',
      nationalId: '1023456732',
      maturityDate: '2028-02-06T19:26:52',
      outstandingPrincipal: 79736.64,
      contractStatus: 'Bucket1',
      contractId: 4,
      phone: '0509876543',
      overdueDays: 31,
      lastPayment: 10000,
      contractStatusId: 2,
    },
    {
      referenceNumber: '927805',
      contractNumber: '987676115',
      beneficiaryName:
        '\u0646\u0648\u0631\u0629 \u0639\u0644\u064A \u0627\u0644\u0639\u0646\u0632\u064A',
      nationalId: '1023456784',
      maturityDate: '2027-05-12T19:26:52',
      outstandingPrincipal: 77788.3,
      contractStatus: 'Bucket2',
      contractId: 5,
      phone: '0509876543',
      overdueDays: 1,
      lastPayment: 2000,
      contractStatusId: 2,
    },
    {
      referenceNumber: '298337',
      contractNumber: '987676116',
      beneficiaryName:
        '\u0641\u064A\u0635\u0644 \u0633\u0639\u064A\u062F \u0627\u0644\u0632\u0647\u0631\u0627\u0646\u064A',
      nationalId: '1023456735',
      maturityDate: '2027-01-12T19:26:52',
      outstandingPrincipal: 79557.18,
      contractStatus: 'Bucket3',
      contractId: 6,
      phone: '0509876543',
      overdueDays: '--',
      lastPayment: 1500,
      contractStatusId: 2,
    },
    {
      referenceNumber: '137650',
      contractNumber: '987676117',
      beneficiaryName:
        '\u0645\u0646\u064A\u0631\u0629 \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u0623\u0646\u0635\u0627\u0631\u064A',
      nationalId: '1023456810',
      maturityDate: '2028-06-05T19:26:52',
      outstandingPrincipal: 136274.76,
      contractStatus: 'Bucket4',
      contractId: 7,
      phone: '0509876543',
      overdueDays: '--',
      lastPayment: 8000,
      contractStatusId: 3,
    },
    {
      referenceNumber: '927805',
      contractNumber: '987676118',
      beneficiaryName:
        '\u0633\u0644\u0645\u0627\u0646 \u0646\u0627\u0635\u0631 \u0627\u0644\u062F\u0648\u0633\u0631\u064A',
      nationalId: '1023456855',
      maturityDate: '2027-08-10T19:26:52',
      outstandingPrincipal: 80807.74,
      contractStatus: 'Bucket5',
      contractId: 8,
      phone: '0509876543',
      overdueDays: 5,
      lastPayment: 6000,
      contractStatusId: 3,
    },
    {
      referenceNumber: '927805',
      contractNumber: '987676119',
      beneficiaryName:
        '\u062C\u0648\u0627\u0647\u0631 \u0639\u0628\u062F\u0627\u0644\u0639\u0632\u064A\u0632 \u0627\u0644\u0634\u0645\u0631\u0627\u0646\u064A',
      nationalId: '1023456890',
      maturityDate: '2026-08-15T19:26:52',
      outstandingPrincipal: 31982.72,
      contractStatus: 'Bucket6',
      contractId: 9,
      phone: '0509876543',
      overdueDays: '--',
      lastPayment: 2500,
      contractStatusId: 3,
    },
    {
      referenceNumber: '128852',
      contractNumber: 'CN00010',
      beneficiaryName:
        '\u062A\u0631\u0643\u064A \u0641\u0647\u062F \u0627\u0644\u062D\u0631\u0628\u064A',
      nationalId: '1023456854',
      maturityDate: '2027-06-11T19:26:52',
      outstandingPrincipal: 119248.32,
      contractStatus: 'WriteOff',
      contractId: 10,
      phone: '0509876543',
      overdueDays: 3,
      lastPayment: 7000,
      contractStatusId: 3,
    },
    {
      referenceNumber: '927805',
      contractNumber: 'CN00011',
      beneficiaryName:
        '\u0634\u0627\u062F\u064A \u062C\u0645\u0627\u0644 \u0627\u0644\u0625\u0645\u0627\u0645',
      nationalId: '1023456789',
      maturityDate: '2028-02-06T19:26:52',
      outstandingPrincipal: 78397.44,
      contractStatus: 'Closed',
      contractId: 11,
      phone: '0509876543',
      overdueDays: 10,
      lastPayment: 4000,
      contractStatusId: 3,
    },
  ],
};

const ActiveContractsTable = ({ selectedContractType }) => {
  const navigate = useNavigate();

  const dataItems = mockData.items.filter((item) => {
    if (selectedContractType.length === 0) {
      return mockData; // If no contract type is selected, show all items
    }
    return selectedContractType.includes(item.contractStatusId);
  });
  const data = {
    items: dataItems,
  };

  return (
    <Card className="mt-6 h-fit bg-white shadow-none">
      <CardContent className="border-0">
        <div className="w-full px-4">
          <div className="rounded-xl">
            <div>
              <Table dir="rtl" className="mt-4 border-spacing-y-3">
                {/*  */}
                <TableHeader className="text-sm">
                  <TableRow className="bg-primary-50">
                    <TableHead className="text-center  font-semibold">
                      رقم العقد
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      اسم المستفيد
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      رقم الهوية
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      رقم الجوال
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      حالة العقد
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      الأيام المتأخرة
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      تاريخ آخر دفعة
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      مبلغ آخر دفعة
                    </TableHead>
                    <TableHead className="text-center  font-semibold">
                      الإجراءات
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.items?.map((item) => (
                    <TableRow key={item?.contractNumber}>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.contractNumber}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.beneficiaryName}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.nationalId}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        {item?.phone}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        <Badge
                          className={
                            CONTRACTS_STATUS[item?.contractStatus]?.className
                          }
                        >
                          {item?.contractStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        <div className="flex items-center justify-center gap-[6px]">
                          <span>{item?.overdueDays}</span>
                        </div>
                      </TableCell>

                      <TableCell className="text-center border-b border-ivory-200">
                        {formatDate(item?.maturityDate, 'DD/MM/YYYY')}
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        <div className="flex items-center gap-[6px] justify-center">
                          <span>{numberSeparator(item?.lastPayment)}</span>
                          <SaudiRiyal size={16} />
                        </div>
                      </TableCell>
                      <TableCell className="text-center border-b border-ivory-200">
                        <Button
                          variant="ghost"
                          className="p-0 h-fit"
                          onClick={() => navigate(`/add-contracts/${5}`)}
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
            totalPages={3}
            totalItems={25}
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default ActiveContractsTable;
