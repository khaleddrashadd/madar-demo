import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import NestedTable from '../NestedTable';
import TableActions from './TableActions';
import StatusBadge from '@/components/partials/badge/StatusBadge';

import { useDispatch, useSelector } from 'react-redux';
import { getPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { setPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';

dayjs.locale('ar');

const TablePending = ({
  classNames,
  data,
  legalOwner,
  setIsLogDialogOpen,
  setIsConfirmDialogOpen,
  setIsCommentSidebarOpen,
  setIsChatSidebarOpen,
  isLogDialogOpen,
  isConfirmDialogOpen,
  isCommentSidebarOpen,
  isChatSidebarOpen,
  isRequestApprovalPending,
  reqId,
  setReqId,
}) => {
  const dispatch = useDispatch();

  //ACCORDION STATE
  const [openRowId, setOpenRowId] = useState(null);

  const toggleRow = (id) => {
    setOpenRowId(openRowId === id ? null : id);
  };

  //PAGINATION
  const pagination = useSelector(getPagination);

  const handlePageChange = (pageNumber) => {
    setOpenRowId(null);
    return dispatch(setPagination({ ...pagination, pageNumber }));
  };

  const handlePageSize = (pageSize) => {
    return dispatch(setPagination({ pageNumber: 1, pageSize }));
  };

  return (
    <>
      <Card className={cn(`w-full shadow-custom ${classNames}`)}>
        <div className={`rounded-lg p-2 pb-0 `}>
          <Table dir="rtl" className="border-separate border-spacing-y-3 p-4">
            {/*  */}
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
            {/*  */}
            <TableBody>
              {/*  */}
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
                        <StatusBadge statusCode={item.statusCode} />
                      </TableCell>
                      {/* // Stop event propagation at table actions to not open the accordion table*/}
                      <TableCell
                        className="text-center border-y border-l rounded-l-md border-ivory-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TableActions
                          item={item}
                          isChatSidebarOpen={isChatSidebarOpen}
                          isCommentSidebarOpen={isCommentSidebarOpen}
                          isConfirmDialogOpen={isConfirmDialogOpen}
                          isLogDialogOpen={isLogDialogOpen}
                          setIsChatSidebarOpen={setIsChatSidebarOpen}
                          setIsCommentSidebarOpen={setIsCommentSidebarOpen}
                          setIsConfirmDialogOpen={setIsConfirmDialogOpen}
                          setIsLogDialogOpen={setIsLogDialogOpen}
                          legalOwner={legalOwner}
                          isRequestApprovalPending={isRequestApprovalPending}
                          setReqId={setReqId}
                          reqId={reqId}
                        />
                      </TableCell>
                    </TableRow>
                    {/*  ACCORDION TABLE */}
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
        {/* PAGINATION */}
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
    </>
  );
};

export default TablePending;
