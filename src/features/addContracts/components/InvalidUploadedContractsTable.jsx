import { Button } from '@/components/ui/button';
import UploadedContractsTable from './UploadedContractsTable';
import { Badge } from '@/components/ui/badge';
import { DownloadIcon, Eye, ListTodo } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import Pagination from '@/components/Pagination';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

const ManualUploadedContractsTable = ({
  data,
  onChangePageNumber,
  onChangePageSize,
  isLoading,
  handleExportContracts,
  isFileLoading,
  filterData,
  pagination,
}) => {
  const navigate = useNavigate();
  const [selectedContracts, setSelectedContracts] = useState([]);

  return (
    <Card className="mt-6 h-fit bg-white">
      <CardHeader className="px-4 py-4 bg-white">
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
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
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full px-4">
          <div className="rounded-xl border">
            <UploadedContractsTable
              selectedContracts={selectedContracts}
              setSelectedContracts={setSelectedContracts}
              data={data}
              isLoading={isLoading}
              renderActions={(contractNumber) => (
                <div className="flex items-center gap-3 justify-center">
                  <Button
                    variant="outline"
                    className="border-primary-500 hover:bg-primary-50/10 text-primary-500"
                  >
                    <ListTodo className="w-4 h-4 text-primary-500" />
                    تفقد السبب
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 h-fit"
                    onClick={() =>
                      navigate({ to: `/add-contracts/${contractNumber}` })
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
      </CardContent>
    </Card>
  );
};
export default ManualUploadedContractsTable;
