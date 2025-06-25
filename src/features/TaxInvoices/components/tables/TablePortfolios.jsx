import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Plus, Minus } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Card } from '@/components/ui/card';
import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import TableReports from './TableReports';

import { useDispatch, useSelector } from 'react-redux';
import { getPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { setPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';

const TablePortfolios = ({ classNames, data, tableClassName }) => {
  // Mock data for the table
  const MOCK_DATA = {
    id: 'req-123456',
    statusCode: 'Approved',
    invoice: {
      id: 'inv-123',
      name: 'فاتورة شهر يناير 2025',
      legalOwnerConfirmationDate: '2025-01-15',
    },
    reports: [
      {
        id: 'rep-1',
        reportType: 'Executive',
        name: 'Executive Report',
      },
      {
        id: 'rep-2',
        reportType: 'Detailed',
        name: 'Detailed Report',
      },
      {
        id: 'rep-3',
        reportType: 'Payment',
        name: 'Payment Report',
      },
    ],
  };

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
    <Card className={cn(`w-full shadow-custom ${classNames}`)}>
      <div className={`rounded-lg `}>
        <Table dir="rtl" className={cn('p-0', tableClassName)}>
          <TableHeader className="text-sm p-0"></TableHeader>
          <TableBody>
            {data?.items?.length > 0 ? (
              data.items.map((item) => (
                <React.Fragment key={item.id}>
                  <TableRow
                    className="bg-primary-260 cursor-pointer hover:bg-primary-270 transition-colors"
                    onClick={() => toggleRow(item.id)}
                  >
                    <TableCell className="font-semibold w-11 px-5 border-[#D8ECF8] border-b border-t rtl:border-r ltr:border-l">
                      {openRowId === item.id ? (
                        <Minus className="h-5 w-5 text-secondary-400 " />
                      ) : (
                        <Plus className="h-5 w-5 text-secondary-400 " />
                      )}
                    </TableCell>
                    <TableCell className="text-start font-bold pr-10 border-[#D8ECF8] border-b border-t">
                      المحفظة{' '}
                    </TableCell>
                    <TableCell className="text-end font-semibold pl-10 border-[#D8ECF8] border-b border-t rtl:border-l ltr:border-r">
                      تاريخ الموافقة{' '}
                    </TableCell>
                  </TableRow>
                  {openRowId === item.id && (
                    <TableRow>
                      <TableCell
                        className="text-center border-y p-0 shadow-custom-md border-ivory-50"
                        colSpan={7}
                      >
                        <div className="bg-secondary/20 rounded-lg">
                          <TableReports data={MOCK_DATA} />
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
  );
};

export default TablePortfolios;
