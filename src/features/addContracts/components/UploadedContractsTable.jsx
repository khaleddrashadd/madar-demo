import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn, formatDate } from '@/lib/utils';
import { CONTRACTS_STATUS } from '../constants/contractsStatus';
import { numberSeparator } from '@/utils/numberSeparator';
import { SaudiRiyal } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

const UploadedContractsTable = ({
  renderActions,
  data,
  setSelectedContracts,
  selectedContracts,
}) => {
  return (
    <div>
      <Table dir="rtl" className="border-separate border-spacing-y-0 py-1 pb-0">
        {/*  */}
        <TableHeader className="text-sm">
          <TableRow className="bg-primary-50">
            <TableHead className="text-center  font-semibold !px-4">
              <Checkbox
                className="w-5 h-5"
                onCheckedChange={() => {
                  if (selectedContracts.length === data?.items?.length) {
                    setSelectedContracts([]);
                  } else {
                    setSelectedContracts(
                      data?.items?.map((item) => item.contractNumber)
                    );
                  }
                }}
                checked={selectedContracts.length === data?.items?.length}
              />
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              رقم المرجع
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              رقم العقد
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              اسم المستفيد
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              رقم الهوية
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              تاريخ الإستحقاق
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              مبلغ الإستحقاق
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              حالة العقد
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              مالك المحفظة
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              منشئ المحفظة
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              رقم المحفظة
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap">
              بواسطة
            </TableHead>
            <TableHead className="text-center  font-semibold text-nowrap sticky z-10 rtl:left-0 ltr:right-0 rtl:shadow-[0_0_10px_rgba(0,0,0,0.1)] ltr:shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-primary-50">
              الإجراءات
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.items?.map((item) => (
            <TableRow
              key={item?.contractNumber}
              className={
                selectedContracts.includes(item.contractNumber)
                  ? 'bg-[#EDFCFA]'
                  : ''
              }
            >
              <TableCell className="text-center border-b !px-4 border-ivory-200">
                <Checkbox
                  className="w-5 h-5"
                  onCheckedChange={() =>
                    setSelectedContracts((prev) => {
                      if (prev.includes(item.contractNumber)) {
                        return prev.filter(
                          (contract) => contract !== item.contractNumber
                        );
                      }
                      return [...prev, item.contractNumber];
                    })
                  }
                  checked={selectedContracts.includes(item.contractNumber)}
                />
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                {item?.referenceNumber || '--'}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                {item?.contractNumber}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                {item?.beneficiaryName}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                {item?.nationalId}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                {formatDate(item?.maturityDate, 'DD/MM/YYYY')}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                <div className="flex items-center justify-center gap-[6px]">
                  <span>{numberSeparator(item?.outstandingPrincipal)}</span>
                  <SaudiRiyal size={16} />
                </div>
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                <Badge
                  variant={CONTRACTS_STATUS[item?.contractStatusId]?.variant}
                  className={
                    CONTRACTS_STATUS[item?.contractStatusId]?.className
                  }
                >
                  {item?.contractStatus}
                </Badge>
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                {item?.legalOwner}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                {item?.originator}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                {item?.portfolioNumber}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200 text-nowrap">
                {item?.by}
              </TableCell>
              <TableCell
                className={cn(
                  'text-center border-b border-ivory-200 text-nowrap sticky z-10 rtl:left-0 ltr:right-0 rtl:shadow-[0_0_10px_rgba(0,0,0,0.1)] ltr:shadow-[0_0_10px_rgba(0,0,0,0.1)',
                  selectedContracts.includes(item.contractNumber)
                    ? 'bg-[#EDFCFA]'
                    : 'bg-white'
                )}
              >
                {renderActions
                  ? renderActions(item?.contractNumber, item?.contractStatusId)
                  : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default UploadedContractsTable;
