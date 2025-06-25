import {
  Check,
  ChevronDown,
  Clock,
  // Eye,
  Loader2,
  MessageSquare,
  PencilLine,
} from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import { cn } from '@/lib/utils';
import NestedTable from './NestedTable';

// import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';

import { getPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { setPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { useDispatch, useSelector } from 'react-redux';
// import getTaxInvoicesFile from '../../services/taxinvoicesService';
// import { toast } from 'react-toastify';
import StatusBadge from '@/components/partials/badge/StatusBadge';

dayjs.locale('ar');

const formatDate = (date, format = 'DD/MM/YYYY') => {
  return date ? dayjs(date).format(format) : '--';
};

const MobileTableCard = ({
  classNames,
  data,
  legalOwner,
  isApprovedTab,
  setIsLogDialogOpen,
  setIsConfirmDialogOpen,
  setIsCommentSidebarOpen,
  setIsChatSidebarOpen,
  isRequestApprovalPending,
  setReqId,
}) => {
  const dispatch = useDispatch();
  const pagination = useSelector(getPagination);

  const [openRowId, setOpenRowId] = useState(null);
  const toggleRow = (id) => {
    setOpenRowId(openRowId === id ? null : id);
  };

  const handlePageChange = (pageNumber) => {
    return dispatch(setPagination({ ...pagination, pageNumber }));
  };

  const handlePageSize = (pageSize) => {
    return dispatch(setPagination({ pageNumber: 1, pageSize }));
  };
  // const handleShowTaxInvoice = async (itemId) => {
  //   try {
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
  //   }
  // };

  return (
    <>
      <div className={`${classNames}`}>
        {data?.items?.length > 0 ? (
          data.items.map((item) => (
            <div
              className="mb-4 rounded-lg bg-white p-4 shadow-custom-md"
              key={item.id}
            >
              <div className="mb-3 flex flex-col gap-4">
                <div className="flex justify-between">
                  <span className="text-right text-sm text-ivory-900">
                    تاريخ الانشاء
                  </span>
                  <span className="text-ivory-950">
                    {formatDate(item.issuedAt, 'DD/MM/YYYY')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-right text-sm text-ivory-900">
                    شهر التحصيل
                  </span>
                  <span className="text-ivory-950">
                    {formatDate(item.fromCollection, 'MMMM')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-right text-sm text-ivory-900">
                    المحفظة
                  </span>
                  <span className="text-ivory-950">
                    {item.portfolioName || '--'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-right text-sm text-ivory-900">
                    فترة التحصيل
                  </span>
                  <div className="flex flex-col items-end">
                    <div>
                      <span className="font-semibold">من</span>{' '}
                      {formatDate(item.fromCollection)}{' '}
                    </div>
                    <div>
                      <span className="font-semibold">-</span>{' '}
                      <span className="font-semibold">إلى</span>{' '}
                      {formatDate(item.toCollection)}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-right text-sm text-ivory-900">
                    الحالة
                  </span>
                  <StatusBadge statusCode={item.statusCode} />
                </div>
                {/* {isApprovedTab && (
                  <div className="flex justify-between items-center">
                    <span className="text-right text-sm text-ivory-900">
                      الفاتورة الضريبية
                    </span>
                    {item.isTaxInvoiceFile ? (
                      <Button
                        variant="outline"
                        className="border-extended-500 text-xs h-auto hover:bg-white text-extended-500 hover:text-extended-500  p-[7px] gap-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowTaxInvoice(item.id);
                        }}
                      >
                        <Eye />
                      </Button>
                    ) : (
                      <span className="text-sm text-ivory-700">
                        غير متاحة حتى الآن.
                      </span>
                    )}
                  </div>
                )} */}

                <div className="flex gap-2 justify-center">
                  <Button
                    variant="ghost"
                    className="w-full flex items-center justify-center text-secondary-600 bg-secondary-100"
                    onClick={() => toggleRow(item.id)}
                  >
                    المزيد
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        openRowId === item.id ? 'rotate-180' : ''
                      )}
                    />
                  </Button>
                  {/* HANDLE Comment Sidebar */}

                  {item?.hasChat ? (
                    <Button
                      variant="secondary"
                      size="sm"
                      className={`items-center gap-2 p-2 relative ${
                        item?.hasMessageToRead ? 'border-extended-500' : ''
                      }`}
                      onClick={() => {
                        setIsChatSidebarOpen(true);
                        setReqId(item.id);
                      }}
                    >
                      {item?.hasMessageToRead && (
                        <span className="absolute -top-1 -left-1 h-2 w-2 bg-red-500 rounded-full" />
                      )}
                      <MessageSquare
                        className={`h-4 w-4 ${
                          item?.hasMessageToRead ? 'text-extended-500' : ''
                        }`}
                      />
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="items-center gap-2 p-2"
                      onClick={() => {
                        setIsCommentSidebarOpen(true);
                        setReqId(item.id);
                      }}
                    >
                      <PencilLine className="h-4 w-4" />
                    </Button>
                  )}

                  {/* HANDLE LOG */}
                  <Button
                    variant="secondary"
                    size="sm"
                    className="items-center gap-2 p-2"
                    onClick={() => {
                      setIsLogDialogOpen(true);
                      setReqId(item.id);
                    }}
                  >
                    <Clock className="h-4 w-4" />
                  </Button>
                  {/* HANDLE APPROVAL */}
                  {!isApprovedTab && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-ivory-50 hover:text-ivory-50 bg-secondary-400 hover:bg-secondary-400/90 flex items-center gap-1 p-3"
                      onClick={() => {
                        setIsConfirmDialogOpen(true);
                        setReqId(item.id);
                      }}
                      // disabled={isTheSameRequest && isRequestApprovalPending}
                    >
                      {isRequestApprovalPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Check className="h-4 w-4" />
                      )}
                      <span className="hidden md:inline">موافقة</span>{' '}
                    </Button>
                  )}
                </div>
              </div>

              {openRowId === item.id && (
                <NestedTable data={item} legalOwner={legalOwner} />
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <EmptyState>لم نحصل على نتائج، برجاء المحاولة مرة أخرى.</EmptyState>
          </div>
        )}

        {data.totalPages > 0 && (
          <Pagination
            currentPage={pagination.pageNumber}
            pageSize={pagination.pageSize}
            totalPages={data.totalPages}
            totalItems={data.totalCount}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSize}
          />
        )}
      </div>
    </>
  );
};

export default MobileTableCard;
