import { Button } from '@/components/ui/button';
import UploadedContractsTable from './UploadedContractsTable';
import { Badge } from '@/components/ui/badge';
import { DownloadIcon, Eye, ListTodo, X } from 'lucide-react';
import { useState } from 'react';
import DefaultDialog from '@/components/partials/dialogs/DeafultDialog';
import Pagination from '@/components/Pagination';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { useNavigate } from 'react-router';

const IncorrectUploadedContractsTable = ({
  data,
  onChangePageNumber,
  onChangePageSize,
  isLoading,
  handleExportContracts,
  isFileLoading,
  filterData,
  pagination,
}) => {
  const [reasonModalOpen, setReasonModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Card className="mt-6 h-fit bg-white">
      <CardHeader className="px-4 py-4 bg-white">
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <div className=" flex items-center gap-4">
            <h2 className="text-lg font-semibold">العقود الغير صالحة</h2>
            <Button
              disabled={isFileLoading}
              onClick={() =>
                handleExportContracts({
                  ...filterData,
                  ...pagination,
                })
              }
              variant="outline"
              className="border-primary-500 hover:bg-primary-50/50 text-primary-500 px-3"
            >
              <DownloadIcon />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full px-4">
          <div className="rounded-xl border">
            <UploadedContractsTable
              data={data}
              isLoading={isLoading}
              renderActions={(contractNumber) => (
                <div className="flex items-center gap-3 justify-center">
                  <Button
                    variant="outline"
                    className="h-fit border-primary-500 text-primary-500 hover:bg-primary-50/50"
                    onClick={() => setReasonModalOpen(true)}
                  >
                    <ListTodo className="w-4 h-4" />
                    تفقد السبب
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 h-fit"
                    onClick={() =>
                      navigate(`/services/uploaded-contracts/${contractNumber}`)
                    }
                  >
                    <Badge
                      variant="wait"
                      className="border-none h-8 w-8 flex items-center justify-center rounded-md"
                    >
                      <Eye className="w-4 h-4 text-extended-500" />
                    </Badge>
                  </Button>
                </div>
              )}
            />
          </div>
          <Pagination
            currentPage={data?.pageNumber}
            pageSize={data?.pageSize}
            totalPages={data?.totalPages}
            totalItems={data?.totalCount}
            onPageChange={onChangePageNumber}
            onPageSizeChange={onChangePageSize}
          />
        </div>
        <DefaultDialog
          title="سبب الخطأ"
          open={reasonModalOpen}
          onOpenChange={setReasonModalOpen}
        >
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <X className="text-red-500 h-4 w-4" />
              <span className="text-ivory-950">خطأ في الخدمة</span>
            </li>
            <li className="flex items-center gap-2">
              <X className="text-red-500 h-4 w-4" />
              <span className="text-ivory-950">
                جدول السداد لا يتوافق مع خدمات العقد
              </span>
            </li>
            <li className="flex items-center gap-2">
              <X className="text-red-500 h-4 w-4" />
              <span className="text-ivory-950">خطأ في عمليات السداد</span>
            </li>
          </ul>
        </DefaultDialog>
      </CardContent>
    </Card>
  );
};
export default IncorrectUploadedContractsTable;
