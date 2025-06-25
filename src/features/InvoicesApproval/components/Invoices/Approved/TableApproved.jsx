import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import { cn, formatDate } from '@/lib/utils';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import NestedTable from '../NestedTable';
import TableActions from './TableActions';

import { getPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { setPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { useDispatch, useSelector } from 'react-redux';
import LogDialog from '../LogDialog';
// import getTaxInvoicesFile from '@/features/InvoicesApproval/services/taxinvoicesService';

dayjs.locale('ar');

const TableApproved = ({
  classNames,
  data,
  legalOwner,
  isLogDialogOpen,
  isChatSidebarOpen,
  setIsLogDialogOpen,
  setIsChatSidebarOpen,
  setReqId,
  reqId,
}) => {
  const dispatch = useDispatch();
  const pagination = useSelector(getPagination);
  //accordion state
  const [openRowId, setOpenRowId] = useState(null);

  const toggleRow = (id) => {
    setOpenRowId(openRowId === id ? null : id);
  };

  const handlePageChange = (pageNumber) => {
    setOpenRowId(null);
    return dispatch(setPagination({ ...pagination, pageNumber }));
  };

  const handlePageSize = (pageSize) => {
    return dispatch(setPagination({ pageNumber: 1, pageSize }));
  };

  // const handleShowTaxInvoice = async (itemId) => {
  //   try {
  //     setIsTaxInvoiceLoading({ itemId, loading: true });
  //     const res = await getTaxInvoicesFile(itemId);
  //     const blob = res.data;
  //     const file = new Blob([blob], { type: 'application/pdf' });
  //     const blobUrl = window.URL.createObjectURL(file);
  //     window.open(blobUrl, '_blank');
  //   } catch (error) {
  //     console.error(error);
  //     toast.error('حدث خطأ أثناء تحميل الفاتورة الضريبية.', {
  //       theme: 'colored',
  //     });
  //   } finally {
  //     setIsTaxInvoiceLoading({ itemId: null, loading: false });
  //   }
  // };

  return (
    <>
      <Card className={cn(`w-full shadow-custom ${classNames}`)}>
        <div className={`rounded-lg p-2 pb-0 `}>
          <Table dir="rtl" className="border-separate border-spacing-y-3 p-4">
            <TableHeader className="text-sm">
              <TableRow className="bg-primary-50">
                <TableHead className="text-center  font-semibold"></TableHead>
                <TableHead className="text-center  font-semibold">
                  تاريخ الانشاء
                </TableHead>
                <TableHead className="text-center  font-semibold">
                  شهر التحصيل
                </TableHead>
                <TableHead className="text-center  font-semibold">
                  المحفظة
                </TableHead>
                <TableHead className="text-center  font-semibold">
                  فترة التحصيل
                </TableHead>
                <TableHead className="text-center  font-semibold">
                  الحالة
                </TableHead>
                <TableHead className="text-center  font-semibold">
                  الإجراءات
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.items?.length > 0 ? (
                data.items.map((item) => (
                  <React.Fragment key={item.id}>
                    <TableRow
                      className="shadow-custom-md cursor-pointer"
                      onClick={() => toggleRow(item.id)}
                    >
                      <TableCell className="text-center border-y border-r rounded-r-md border-ivory-50 p-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 p-0 transition-transform duration-200 text-secondary-400 hover:bg-transparent hover:text-secondary-600"
                          style={{
                            transform:
                              openRowId === item.id
                                ? 'rotate(90deg)'
                                : 'rotate(0deg)',
                          }}
                        >
                          <ChevronLeft className="!h-5 !w-5" />
                        </Button>
                      </TableCell>
                      <TableCell className="text-center border-y border-ivory-50">
                        {formatDate(item.issuedAt, 'DD/MM/YYYY')}
                      </TableCell>
                      <TableCell className="text-center border-y border-ivory-50">
                        {formatDate(item.fromCollection, 'MMMM')}
                      </TableCell>
                      <TableCell className="text-center border-y border-ivory-50">
                        {item.portfolioName || '--'}
                      </TableCell>
                      <TableCell className="text-center border-y border-ivory-50">
                        من {formatDate(item.fromCollection, 'DD/MM/YYYY')} - إلى{' '}
                        {formatDate(item.toCollection, 'DD/MM/YYYY')}
                      </TableCell>
                      <TableCell className="text-center border-y border-l rounded-l-md border-ivory-50">
                        <Badge className="bg-secondary-350 text-ivory-950 border border-secondary-700 px-4 py-1 rounded-full font-medium hover:bg-secondary-350">
                          تمت الموافقة
                        </Badge>
                      </TableCell>
                      {/* // Stop event propagation at table actions to not open the accordion table*/}
                      <TableCell
                        className="text-center border-y border-l rounded-l-md border-ivory-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TableActions
                          item={item}
                          setIsChatSidebarOpen={setIsChatSidebarOpen}
                          setIsLogDialogOpen={setIsLogDialogOpen}
                          isLogDialogOpen={isLogDialogOpen}
                          isChatSidebarOpen={isChatSidebarOpen}
                          setReqId={setReqId}
                        />{' '}
                      </TableCell>
                    </TableRow>
                    {openRowId === item.id && (
                      <TableRow>
                        <TableCell
                          className="text-center border-y p-0 shadow-custom-md border-ivory-50"
                          colSpan={7}
                        >
                          <div className="bg-secondary/20 rounded-lg">
                            <NestedTable data={item} legalOwner={legalOwner} />
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
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
            </TableBody>
          </Table>
        </div>

        {data.totalPages > 1 && (
          <Pagination
            currentPage={pagination.pageNumber}
            pageSize={pagination.pageSize}
            totalPages={data.totalPages}
            totalItems={data.totalCount}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSize}
          />
        )}
      </Card>
      <LogDialog
        isLogDialogOpen={isLogDialogOpen}
        setIsLogDialogOpen={setIsLogDialogOpen}
        data={data.items?.find((item) => item.id === reqId)}
      />
    </>
  );
};

export default TableApproved;
