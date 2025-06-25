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
import TableActions from './TableActions';
import TablePortfolio from './TablePortfolios';
import StatusFilter from '../filters/StatusFilter';

import { useDispatch, useSelector } from 'react-redux';
import { getPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { setPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import StatusBadge from '@/components/partials/badge/StatusBadge';
import NestedTableRowAccordion from './NestedTableRowAccordion';

dayjs.locale('ar');

const TableDoubleAccordion = ({
  classNames,
  data,
  isLogDialogOpen,
  setIsLogDialogOpen,
}) => {
  const dispatch = useDispatch();

  //FILTER STATE
  const [statusFilter, setStatusFilter] = useState('all');

  // Handle filter change
  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
    // If needed, you can dispatch an action to filter the data
    // dispatch(filterByStatus(value));
  };

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

  // MOCK DATA
  const mockData = {
    items: [
      { id: 1, portfolioName: 'Portfolio 1', creationDate: '2022-01-01' },
      { id: 2, portfolioName: 'Portfolio 2', creationDate: '2022-02-01' },
      { id: 3, portfolioName: 'Portfolio 3', creationDate: '2022-03-01' },
      { id: 4, portfolioName: 'Portfolio 4', creationDate: '2022-04-01' },
      { id: 5, portfolioName: 'Portfolio 5', creationDate: '2022-05-01' },
    ],
  };

  return (
    <Card className={cn(`w-full shadow-custom ${classNames}`)}>
      <div className={`rounded-lg p-2 pb-0 `}>
        <Table
          dir="rtl"
          className="border-separate border-spacing-y-3 p-1 pb-0"
        >
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
                فترة التحصيل
              </TableHead>
              <TableHead className="text-center  font-semibold">
                <StatusFilter title="الحالة" />
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
                        <ChevronLeft className="!h-6 !w-6" />
                      </Button>
                    </TableCell>
                    <TableCell className="text-center border-y border-ivory-50">
                      {formatDate(item.issuedAt)}
                    </TableCell>
                    <TableCell className="text-center border-y border-ivory-50">
                      {formatDate(item.fromCollection, 'MMMM')}
                    </TableCell>

                    <TableCell className="text-center border-y border-ivory-50">
                      من {formatDate(item.fromCollection, 'DD/MM/YYYY')} - إلى{' '}
                      {formatDate(item.toCollection, 'DD/MM/YYYY')}
                    </TableCell>
                    <TableCell className="text-center border-y border-l rounded-l-md border-ivory-50">
                      <StatusBadge statusCode="Draft" />
                    </TableCell>
                    {/* // Stop event propagation here */}

                    <TableCell
                      className="text-center border-y border-l rounded-l-md border-ivory-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TableActions
                        item={item}
                        isLogDialogOpen={isLogDialogOpen}
                        setIsLogDialogOpen={setIsLogDialogOpen}
                      />
                    </TableCell>
                  </TableRow>
                  {openRowId === item.id && (
                    <NestedTableRowAccordion data={mockData} />
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
  );
};

export default TableDoubleAccordion;
