import { Link } from 'react-router';
import { Eye, Loader2 } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import EmptyState from '@/components/EmptyState';
import { useApprovalHandler } from '../../hooks/useInvoiceApprovalHandler';
import { formatDate } from '@/lib/utils';

dayjs.locale('ar');

const NestedTable = ({ legalOwner, data }) => {
  const {
    getInvoiceFile,
    getReportFile,
    isInvoicePending,
    isReportPending,
    getTaxInvoiceFile,
    isTaxInvoicePending,
  } = useApprovalHandler();

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow className="border-l-1 border-[#2d2a2a]">
            <TableHead className="font-semibold text-center  text-ivory-950 bg-[#F9FBFC] border-l border-b border-solid ">
              اسم التقرير
            </TableHead>
            {(data.statusCode === 'Approved' ||
              data.statusCode === 'Certified') && (
              <TableHead className="font-semibold text-center  text-ivory-950 bg-[#F9FBFC] border-l border-b border-solid ">
                تاريخ الموافقة
              </TableHead>
            )}
            <TableHead className="font-semibold  text-center text-ivory-950 bg-[#F9FBFC] border-r border-b border-solid ">
              الإجراءات
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-t border-solid ">
            <TableCell className="w-1/2  py-2 text-center border-l border-solid">
              {data.invoice.name}
            </TableCell>
            {(data.statusCode === 'Approved' ||
              data.statusCode === 'Certified') && (
              <TableCell className="py-2 text-center border-l border-solid">
                {formatDate(
                  data.invoice.legalOwnerConfirmationDate,
                  'DD/MM/YYYY'
                )}
              </TableCell>
            )}
            <TableCell className="py-2 border-r border-solid">
              <div className="flex justify-center gap-3">
                <Button
                  onClick={() =>
                    getInvoiceFile({
                      reqId: data.id,
                      invoiceId: data.invoice.id,
                    })
                  }
                  variant="outline"
                  size="sm"
                  disabled={isInvoicePending}
                  className="border border-[#DE8944] text-[#DE8944] hover:bg-[#DE8944] hover:text-[#FDFBF7] px-4 py-1 rounded-md font-medium"
                >
                  {isInvoicePending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  <span className="hidden md:inline">تفاصيل</span>{' '}
                </Button>
              </div>
            </TableCell>
          </TableRow>

          {data?.reports?.length > 0 ? (
            data.reports.map((item, index) => (
              <TableRow key={index} className="border-t border-solid ">
                {/* {item.reportType === 'Executive' && (
                  <TableCell className="py-2 text-center border-l border-solid">
                    Executive Report
                  </TableCell>
                )}

                {item.reportType === 'Detailed' && (
                  <TableCell className="py-2 text-center border-l border-solid">
                    Detailed Report
                  </TableCell>
                )}

                {item.reportType === 'Payment' && (
                  <TableCell className="py-2 text-center border-l border-solid">
                    Payment Report
                  </TableCell>
                )} */}
                <TableCell className="py-2 text-center border-l border-solid">
                  {item.reportTypeName}
                </TableCell>
                {(data.statusCode === 'Approved' ||
                  data.statusCode === 'Certified') && (
                  <TableCell className="py-2 text-center border-l border-solid">
                    {formatDate(
                      data.invoice.legalOwnerConfirmationDate,
                      'DD/MM/YYYY'
                    )}
                  </TableCell>
                )}
                <TableCell className="py-2 border-r border-solid">
                  <div className="flex justify-center gap-3">
                    {item.reportType === 'Executive' ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          getReportFile({
                            reqId: data.id,
                            reportId: item.id,
                          })
                        }
                        disabled={isReportPending}
                        className="border border-[#DE8944] text-[#DE8944] hover:bg-[#DE8944] hover:text-[#FDFBF7] px-4 py-1 rounded-md font-medium"
                      >
                        <div className="flex items-center gap-2">
                          {isReportPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="hidden md:inline">تفاصيل</span>{' '}
                        </div>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border border-[#DE8944] text-[#DE8944] hover:bg-[#DE8944] hover:text-[#FDFBF7] px-4 py-1 rounded-md font-medium"
                      >
                        <Link
                          to={`/invoices-approval/${legalOwner.toLowerCase()}/${
                            data.id
                          }/detailed-invoice/${item.id}`}
                          className="flex items-center gap-2"
                        >
                          <Eye className="h-4 w-4" />
                          <span className="hidden md:inline">تفاصيل</span>{' '}
                        </Link>
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={12} className="text-center py-10">
                <EmptyState>
                  لم نحصل على نتائج، برجاء المحاولة مرة أخرى.
                </EmptyState>
              </TableCell>
            </TableRow>
          )}
          <TableRow className="border-t border-solid ">
            <TableCell className="w-1/2  py-2 text-center border-l border-solid">
              {data.taxInvoice.name}
            </TableCell>
            {(data.statusCode === 'Approved' ||
              data.statusCode === 'Certified') && (
              <TableCell className="py-2 text-center border-l border-solid">
                {formatDate(
                  data.taxInvoice.legalOwnerConfirmationDate,
                  'DD/MM/YYYY'
                )}
              </TableCell>
            )}
            <TableCell className="py-2 border-r border-solid">
              <div className="flex justify-center gap-3">
                <Button
                  onClick={() =>
                    getTaxInvoiceFile({
                      reqId: data.taxInvoice.id,
                    })
                  }
                  variant="outline"
                  size="sm"
                  disabled={isTaxInvoicePending}
                  className="border border-[#DE8944] text-[#DE8944] hover:bg-[#DE8944] hover:text-[#FDFBF7] px-4 py-1 rounded-md font-medium"
                >
                  {isTaxInvoicePending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  <span className="hidden md:inline">تفاصيل</span>{' '}
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default NestedTable;
